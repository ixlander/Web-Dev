import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category!: Category;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnChanges() {
    if (this.category) {
      this.products = this.productService.getProductsByCategory(this.category.id);
    }
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
