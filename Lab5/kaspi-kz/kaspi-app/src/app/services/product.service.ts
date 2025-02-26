import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Телевизоры' },
    { id: 4, name: 'Наушники' }
  ];

  products: Product[] = [
    // Smartphones
    { 
        id: 1, 
        name: 'iPhone 15 Pro', 
        description: 'Новый флагман от Apple с процессором A17 Pro, тройной камерой 48 Мп и дисплеем Super Retina XDR.', 
        image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758095', 
        rating: 4.8, 
        categoryId: 1, 
        link: 'https://kaspi.kz/iphone15', 
        likes: 243,
        price:  '368 900₸'
      },
      { 
        id: 2, 
        name: 'Samsung Galaxy S24 Ultra', 
        description: 'Флагман от Samsung с процессором Snapdragon 8 Gen 3, 200 Мп камерой и 6.8" Dynamic AMOLED дисплеем.', 
        image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-539573273?$684_547_PNG$', 
        rating: 4.7, 
        categoryId: 1, 
        link: 'https://kaspi.kz/s24ultra', 
        likes: 189,
        price:  '368 900 ₸' 
      },
      { 
        id: 3, 
        name: 'Xiaomi 14 Pro', 
        description: 'Флагманский смартфон с процессором Snapdragon 8 Gen 3, камерой Leica и 6.7" AMOLED дисплеем.', 
        image: 'https://www.giztop.com/media/catalog/product/cache/97cc1143d2e20f2b0c8ea91aaa12053c/p/m/pms_1698307433.52595447_1.png', 
        rating: 4.5, 
        categoryId: 1, 
        link: 'https://kaspi.kz/xiaomi14pro', 
        likes: 156,
        price:  '368 900 ₸'  
      },
      { 
        id: 13, 
        name: 'Google Pixel 8 Pro', 
        description: 'Флагман от Google с уникальной камерой и новейшими AI-функциями.', 
        image: 'https://stratanetworks.com/wp-content/uploads/2023/12/Google-8-Pro-Porcelain.png', 
        rating: 4.6, 
        categoryId: 1, 
        link: 'https://kaspi.kz/pixel8pro', 
        likes: 120,
        price:  '368 900 ₸' 
      },
      { 
        id: 14, 
        name: 'OnePlus 12', 
        description: 'Флагман с OxygenOS, быстрой зарядкой и мощной камерой.', 
        image: 'https://d1sh47nr05d35z.cloudfront.net/catalog/product/o/n/oneplus_12_white_1r_1_2_1.jpg?width=265&height=265&store=default&image-type=image ', 
        rating: 4.7, 
        categoryId: 1, 
        link: 'https://kaspi.kz/oneplus12', 
        likes: 98,
        price:  '368 900 ₸'  
      },
      
      // Laptops
      { 
        id: 4, 
        name: 'MacBook Pro 16" M3', 
        description: 'Мощный ноутбук Apple с процессором M3 Pro/Max, 16GB RAM и 512GB SSD.', 
        image: 'https://static.tildacdn.pro/tild3765-6435-4635-b138-663033363436/noroot.jpg', 
        rating: 4.9, 
        categoryId: 2, 
        link: 'https://kaspi.kz/macbookpro', 
        likes: 201,
        price:  '368 900 ₸'  
      },
      { 
        id: 5, 
        name: 'ASUS ROG Zephyrus G14', 
        description: 'Игровой ноутбук с процессором AMD Ryzen 9, RTX 4080 и 14" QHD 165Hz дисплеем.', 
        image: 'https://dlcdnwebimgs.asus.com/gain/47215993-C79C-4761-9F1C-EBFA5D2E029B', 
        rating: 4.6, 
        categoryId: 2, 
        link: 'https://kaspi.kz/zephyrus', 
        likes: 178,
        price:  '368 900 ₸'  
      },
      { 
        id: 15, 
        name: 'Dell XPS 15', 
        description: 'Премиальный ультрабук с Intel Core i9, 32GB RAM и 1TB SSD.', 
        image: 'https://nout.kz/upload/resize_cache/webp/iblock/729/muda1ebrmm2rkfyxzj2vt429o3yg6ocm/fd2cbaa7b06ae946fb3ba4eb84612f8f_1000.webp', 
        rating: 4.8, 
        categoryId: 2, 
        link: 'https://kaspi.kz/dellxps15', 
        likes: 160,
        price:  '368 900 ₸'  
      },
      { 
        id: 16, 
        name: 'HP Spectre x360', 
        description: 'Трансформируемый ноутбук с OLED-экраном и стилусом.', 
        image: 'https://intaglaptops.com/cdn/shop/files/HP_Spectre_14_360.jpg?v=1732258046', 
        rating: 4.7, 
        categoryId: 2, 
        link: 'https://kaspi.kz/hpspectre', 
        likes: 140,
        price:  '368 900 ₸'  
      },

      { 
        id: 7, 
        name: 'Samsung Neo QLED QN90C', 
        description: '65" 4K HDR Smart TV с технологией квантовых точек, частотой 144Hz и великолепной яркостью.', 
        image: 'https://image-us.samsung.com/SamsungUS/home/easy-asset/tbsr-8871/g1/02_QN50QN90CAFXZA_003_L-Perspective_Titan-Black-1600x12.jpg?$product-details-jpg$', 
        rating: 4.8, 
        categoryId: 3, 
        link: 'https://kaspi.kz/samsungtv', 
        likes: 167,
        price:  '368 900 ₸'  
      },
      { 
        id: 8, 
        name: 'LG OLED C3', 
        description: '55" 4K OLED Smart TV с идеальным черным цветом, поддержкой Dolby Vision и Dolby Atmos.', 
        image: 'https://www.lg.com/content/dam/channel/wcms/hk_en/11years-update/c3/65-c3-a/TV-OLED-65-C3-A-Gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg', 
        rating: 4.9, 
        categoryId: 3, 
        link: 'https://kaspi.kz/lgtv', 
        likes: 193,
        price:  '368 900 ₸'  
      },
    { 
        id: 9, 
        name: 'Sony Bravia XR A80L', 
        description: '65" 4K OLED TV с технологией XR OLED Contrast Pro и Acoustic Surface Audio+.', 
        image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_A80L_Primary-Image-1?$S7Product$&fmt=png-alpha', 
        rating: 4.7, 
        categoryId: 3, 
        link: 'https://kaspi.kz/sonytv', 
        likes: 158,
        price:  '368 900 ₸'  
    },


    { 
        id: 10, 
        name: 'Apple AirPods Pro 2', 
        description: 'Беспроводные наушники с активным шумоподавлением, пространственным звуком и адаптивным эквалайзером.', 
        image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/148/144454839165277fd90429a_original.jpg', 
        rating: 4.8, 
        categoryId: 4, 
        link: 'https://kaspi.kz/airpodspro', 
        likes: 231,
        price:  '368 900 ₸'  
      },
      { 
        id: 11, 
        name: 'Sony WH-1000XM5', 
        description: 'Беспроводные наушники с лучшим в индустрии шумоподавлением и HD-процессором звука.', 
        image: 'https://sonycenter.kz/image/cache/catalog/products/new_img/audio/wh1000xm5/naushniki-sony-wh1000xm5-01-600x600.png', 
        rating: 4.9, 
        categoryId: 4, 
        link: 'https://kaspi.kz/sonywh', 
        likes: 204 ,
        price:  '368 900 ₸' 
      },
      { 
        id: 12, 
        name: 'Samsung Galaxy Buds 3 Pro', 
        description: 'TWS наушники с адаптивным шумоподавлением, 3D-звуком и водонепроницаемостью IPX7.', 
        image: 'https://m.media-amazon.com/images/I/61zW8yc4hTL.jpg', 
        rating: 4.6, 
        categoryId: 4, 
        link: 'https://kaspi.kz/galaxybuds', 
        likes: 176,
        price:  '368 900 ₸'  
    },

    {
        "id": 13,
        "name": "MSI Raider GE78 HX",
        "description": "Игровой ноутбук с процессором Intel Core i9-13980HX, RTX 4090 и 17\" Mini LED 240Hz дисплеем.",
        "image": "https://storage-asset.msi.com/global/picture/image/feature/nb/GE/Raider-GE78-HX-13V/kv-pd.png",
        "rating": 4.8,
        "categoryId": 2,
        "link": "https://kaspi.kz/msiraider",
        "likes": 182,
        price:  '368 900 ₸' 
      },
      {
        "id": 14,
        "name": "Hisense U8K Mini-LED",
        "description": "65\" 4K Mini-LED Smart TV с 144Hz частотой обновления, Dolby Vision и Game Mode Pro.",
        "image": "https://hisense.co.za/wp-content/uploads/2024/07/55-U8K-TV-2023.jpg",
        "rating": 4.7,
        "categoryId": 3,
        "link": "https://kaspi.kz/hisense",
        "likes": 145,
        price:  '368 900 ₸' 
      },
      {
        "id": 15,
        "name": "TCL C845 QLED",
        "description": "75\" 4K QLED TV с Mini-LED подсветкой, 240Hz и поддержкой IMAX Enhanced.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMv56n8xNlQRRg765UYyfPoAWyc2dt3q9tXA&s",
        "rating": 4.6,
        "categoryId": 3,
        "link": "https://kaspi.kz/tcltv",
        "likes": 132,
        price:  '368 900 ₸' 
      },
      {
        "id": 16,
        "name": "Bose QuietComfort Ultra",
        "description": "Наушники с лучшим в классе шумоподавлением и технологией Immersive Audio.",
        "image": "https://assets.bosecreative.com/transform/1f0656f9-6d98-4082-b253-ba3655338262/SF_QCUH_lunarblue_gallery_1_816x612_x2?quality=100",
        "rating": 4.9,
        "categoryId": 4,
        "link": "https://kaspi.kz/boseqc",
        "likes": 210,
        price:  '368 900 ₸' 
      },
      {
        "id": 17,
        "name": "Sennheiser Momentum 4",
        "description": "Беспроводные наушники с до 60 часов автономной работы и Hi-Res Audio.",
        "image": "https://m.media-amazon.com/images/I/71zsm84mJsL.jpg",
        "rating": 4.8,
        "categoryId": 4,
        "link": "https://kaspi.kz/sennheiser",
        "likes": 190,
        price:  '368 900 ₸' 
    }

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
  
  // Add these new methods for enhanced functionality
  searchProducts(query: string): Product[] {
    query = query.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    );
  }
  
  getTopRatedProducts(limit: number = 5): Product[] {
    return [...this.products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
  
  getMostLikedProducts(limit: number = 5): Product[] {
    return [...this.products]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, limit);
  }
}