import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div class="search-container">
    <div class="search-input-wrapper">
      <input 
        type="text" 
        [formControl]="searchControl"
        placeholder="Поиск товаров..." 
        class="search-input"
      >
      <button *ngIf="searchControl.value" 
              class="clear-button" 
              (click)="clearSearch()">✕</button>
      <button class="search-button" (click)="triggerSearch()">🔍</button>
    </div>
    
    <div *ngIf="isSearching" class="search-loading">
      <div class="spinner"></div>
      <span>Поиск...</span>
    </div>
    
    <div class="search-filters"> 
      <span class="filter-label">Популярные запросы:</span>
      <button 
        *ngFor="let filter of quickFilters" 
        class="filter-button"
        (click)="applyQuickFilter(filter)">
        {{ filter }}
      </button>
    </div>
  </div>
  `,
  styles: [`
    .search-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      margin-bottom: 10px;
    }
    
    .search-input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    
    .search-input {
      flex-grow: 1;
      padding: 12px 40px 12px 15px;
      border: 1px solid #ddd;
      border-radius: 8px 0 0 8px;
      font-size: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }
    
    .search-input:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
    }
    
    .clear-button {
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #7f8c8d;
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      padding: 0;
    }
    
    .clear-button:hover {
      background-color: #f0f0f0;
      color: #e74c3c;
    }
    
    .search-button {
      padding: 12px 20px;
      background-color: #444741;
      color: white;
      border: none;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      transition: background 0.3s ease;
      font-size: 16px;
    }
    
    .search-button:hover {
      background-color: #60696f;
    }
    
    .search-loading {
      display: flex;
      align-items: center;
      margin-top: 10px;
      color: #7f8c8d;
      font-size: 0.9rem;
    }
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-left-color: #3498db;
      border-radius: 50%;
      margin-right: 10px;
      animation: spin 1s linear infinite;
    }
    
    .search-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
      align-items: center;
    }
    
    .filter-label {
      font-size: 0.9rem;
      color: #7f8c8d;
    }
    
    .filter-button {
      background-color: #f8f9fa;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      padding: 5px 12px;
      font-size: 0.9rem;
      color: #2c3e50;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .filter-button:hover {
      background-color: #e9f7fe;
      border-color: #3498db;
      color: #3498db;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      .search-container {
        max-width: 100%;
      }
    }
  `]
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  isSearching = false;
  quickFilters = ['iPhone', 'Samsung', 'Наушники', 'Ноутбук'];
  
  @Output() searchResults = new EventEmitter<{products: Product[], query: string}>();
  
  private destroy$ = new Subject<void>();
  
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    // Set up reactive search using RxJS
    this.searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(300), // Wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // Ignore if next search term is same as previous
      filter(term => term !== null) // Filter out null values
    ).subscribe(searchTerm => {
      if (searchTerm) {
        this.performSearch(searchTerm);
      } else {
        // Clear results when search is empty
        this.searchResults.emit({products: [], query: ''});
      }
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  performSearch(query: string): void {
    this.isSearching = true;
    
    // Simulate network delay (remove in production)
    setTimeout(() => {
      const results = this.productService.searchProducts(query);
      this.searchResults.emit({products: results, query: query});
      this.isSearching = false;
    }, 500);
    
    // In a real app with API, you would use:
    /*
    this.productService.searchProductsFromApi(query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(results => {
      this.searchResults.emit({products: results, query: query});
      this.isSearching = false;
    });
    */
  }
  
  triggerSearch(): void {
    if (this.searchControl.value) {
      this.performSearch(this.searchControl.value);
    }
  }
  
  clearSearch(): void {
    this.searchControl.setValue('');
    this.searchResults.emit({products: [], query: ''});
  }
  
  applyQuickFilter(filter: string): void {
    this.searchControl.setValue(filter);
    this.performSearch(filter);
  }
}