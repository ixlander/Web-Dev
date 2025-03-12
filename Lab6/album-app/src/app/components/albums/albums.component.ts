import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums. Please try again later.';
        this.loading = false;
        console.error('Error loading albums:', err);
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation(); 
    
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
          alert('Album deleted successfully!');
        },
        error: (err) => {
          alert('Failed to delete album. Please try again.');
          console.error('Error deleting album:', err);
        }
      });
    }
  }
}