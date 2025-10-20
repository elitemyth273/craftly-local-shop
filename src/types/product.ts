export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  location: string;
  artisan: string;
}

export interface CartItem extends Product {
  quantity: number;
}
