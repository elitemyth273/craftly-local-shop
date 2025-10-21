import { Product } from '@/types/product';
import productBasket from '@/assets/product-basket.jpg';
import productPottery from '@/assets/product-pottery.jpg';
import productTextile from '@/assets/product-textile.jpg';
import productWooden from '@/assets/product-wooden.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Handwoven Jute Basket',
    description: 'Beautiful handwoven basket made from natural jute fibers. Perfect for storage and decoration.',
    price: 850,
    image: productBasket,
    location: 'Kancharapara',
    artisan: 'Radha Devi'
  },
  {
    id: 2,
    name: 'Terracotta Pottery Vase',
    description: 'Traditional terracotta vase with intricate hand-carved patterns. Made using age-old pottery techniques.',
    price: 1200,
    image: productPottery,
    location: 'Kalyani',
    artisan: 'Mohan Kumar'
  },
  {
    id: 3,
    name: 'Block Print Cotton Textile',
    description: 'Vibrant handwoven cotton textile featuring traditional block print designs with natural dyes.',
    price: 1500,
    image: productTextile,
    location: 'Patna',
    artisan: 'Anita Sharma'
  },
  {
    id: 4,
    name: 'Carved Wooden Decorative Panel',
    description: 'Exquisite hand-carved wooden panel featuring traditional Indian motifs. A perfect wall decoration piece.',
    price: 2500,
    image: productWooden,
    location: 'Badaun',
    artisan: 'Ravi Verma'
  }
];
