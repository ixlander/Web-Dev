import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { SearchComponent } from './search/search.component';
import { ProductItemComponent } from './product-item/product-item.component'; // Add this import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ProductListComponent, 
    SearchComponent,
    ProductItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi-app';
  categories: Category[];
  selectedCategory: Category | null = null;
  searchResults: Product[] = [];
  isSearchMode: boolean = false;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    // Automatically select the first category when the app loads
    if (this.categories.length > 0) {
      this.selectCategory(this.categories[0]);
    }
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.isSearchMode = false;
    this.searchResults = [];
  }

  handleSearchResults(event: {products: Product[], query: string}) {
    this.searchResults = event.products;
    this.isSearchMode = event.products.length > 0;
  }
}