import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  error = '';
  editedTitle = '';
  isSaving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadAlbum(+id);
      }
    });
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album details. Please try again later.';
        this.loading = false;
        console.error('Error loading album:', err);
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    
    this.isSaving = true;
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    
    this.albumsService.updateAlbum(this.album.id, updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.isSaving = false;
        alert('Album updated successfully!');
      },
      error: (err) => {
        this.isSaving = false;
        alert('Failed to update album. Please try again.');
        console.error('Error updating album:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}