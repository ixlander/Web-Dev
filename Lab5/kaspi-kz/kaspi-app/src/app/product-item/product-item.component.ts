import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() liked = new EventEmitter<Product>();
  @Output() removed = new EventEmitter<Product>();

  removeProduct() {
    this.removed.emit(this.product);
  }
  
  likeProduct() {
    this.product.likes++;
    this.liked.emit(this.product);
    
    // Create a visual feedback effect
    const likeButton = document.querySelector('.like-button') as HTMLElement;
    if (likeButton) {
      likeButton.classList.add('liked');
      setTimeout(() => {
        likeButton.classList.remove('liked');
      }, 500);
    }
  }

  shareProduct() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out this ${this.product.name}!`);
    
    // Support multiple sharing platforms
    const shareOptions = [
      { name: 'Telegram', url: `https://t.me/share/url?url=${url}&text=${text}` },
      { name: 'WhatsApp', url: `https://wa.me/?text=${text}%20${url}` },
      { name: 'Twitter', url: `https://twitter.com/intent/tweet?text=${text}&url=${url}` }
    ];
    
    // For simplicity, we'll just open Telegram for now
    window.open(shareOptions[0].url, '_blank');
  }
  
  // Add a product detail view capability
  viewProductDetails() {
    // This would typically navigate to a product detail page
    console.log('Viewing details for:', this.product.name);
    // Example: this.router.navigate(['/product', this.product.id]);
  }
}