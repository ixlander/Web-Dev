import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  images: string[];
  currentImage?: string;
  currentImageIndex?: number;
  name: string;
  description: string;
  rating: number;
  price: string;
  link: string;
  isDialogOpen?: boolean;  // Add this new property
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg'
      ],
      name: 'Apple iPhone 13 128Gb',
      description: 'Powerful A15 Bionic chip, advanced dual-camera system, and Super Retina XDR display.',
      rating: 5,
      price: '294 890 ₸',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/had/hfc/64382158766110.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h8d/64382161616926.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h4f/64382202445854.jpg'
      ],
      name: 'Samsung Galaxy A23 6 GB/128 GB',
      description: 'Feature-rich smartphone with quad camera setup and long-lasting battery life.',
      rating: 4,
      price: '87 890 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h2d/63868235120670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h47/63868238200862.jpg?format=gallery-medium'
      ],
      name: 'Apple Watch SE 40mm',
      description: 'Smart watch with fitness tracking, heart rate monitoring, and seamless iPhone integration.',
      rating: 5,
      price: '129 890 ₸',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hf2/64240971841566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h96/64240975970334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h25/64240979083294.jpg?format=gallery-medium'
      ],
      name: 'Samsung 43AU7002 43" Smart TV',
      description: '4K UHD Smart TV with Crystal Processor and HDR support.',
      rating: 5,
      price: '197 980 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-ue43au7100uxce-109-sm-chernyi-101461792/?srsltid=AfmBOoo8POr9bNK2d8X0FnNsmTURraOgR4ufO5rCUGW5rbfyIORkVUO_'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-medium'
      ],
      name: 'Apple MacBook Air 13 M1',
      description: 'Powerful laptop with M1 chip, 13.3" Retina display, and all-day battery life.',
      rating: 5,
      price: '414 990 ₸',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hfe/84963707256862.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium'
      ],
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Latest flagship with S Pen support, AI features, and professional camera system.',
      rating: 5,
      price: '649 890 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?srsltid=AfmBOoqCPQo8oymJBTf9zb6VRtDIFnAQgOvb_JkWnRLP-MCpALL_kV8S'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h90/63948654936094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium'
      ],
      name: 'Sony PlayStation 5',
      description: 'Next-gen gaming console with ultra-high speed SSD and ray tracing support.',
      rating: 5,
      price: '313 966 ₸',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/hb1/65114261323806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hbe/65114264207390.jpg?format=gallery-medium'
      ],
      name: 'Xiaomi Mi Band 7',
      description: 'Fitness tracker with AMOLED display and 14-day battery life.',
      rating: 4,
      price: '21 890 ₸',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      name: 'Apple AirPods Pro 2',
      description: 'True wireless earbuds with active noise cancellation and spatial audio.',
      rating: 5,
      price: '119 990 ₸',
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-charging-case-magsafe-belyi-113677582/'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/63915664244766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h10/63915667357726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h10/63915667357726.jpg?format=gallery-medium'
      ],
      name: 'ASUS TUF Gaming F15',
      description: 'Gaming laptop with RTX 3050, Intel Core i5, and 144Hz display.',
      rating: 5,
      price: '369 990 ₸',
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506li-hn012-90nr03t2-m01550-chernyi-100705458/?srsltid=AfmBOor0d4tZQu7d05s0iwr-5hU-20-lrILG0GUMkXHJWEinTf8qYKXB'
    }
  ];

  setMainImage(product: Product, image: string, index: number): void {
    product.currentImage = image;
    product.currentImageIndex = index;
  }

  previousImage(product: Product): void {
    const currentIndex = this.getCurrentImageIndex(product);
    const newIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    this.setMainImage(product, product.images[newIndex], newIndex);
  }

  nextImage(product: Product): void {
    const currentIndex = this.getCurrentImageIndex(product);
    const newIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
    this.setMainImage(product, product.images[newIndex], newIndex);
  }

  getCurrentImageIndex(product: Product): number {
    if (product.currentImageIndex !== undefined) {
      return product.currentImageIndex;
    }
    return product.currentImage 
      ? product.images.indexOf(product.currentImage)
      : 0;
  }

  openGallery(product: Product): void {
    console.log('Opening gallery for:', product.name);
  }

  share(link: string, platform: 'whatsapp' | 'telegram'): void {
    const message = encodeURIComponent(`Check out this product: ${link}`);
    const shareUrl = platform === 'telegram'
      ? `https://t.me/share/url?url=${link}&text=${message}`
      : `https://api.whatsapp.com/send?text=${message}`;
    window.open(shareUrl, '_blank');
  }
}