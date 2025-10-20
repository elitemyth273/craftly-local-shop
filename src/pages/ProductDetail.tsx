import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin className="h-4 w-4" />
              <span>{product.location}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">₹{product.price}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Artisan</h3>
            <p className="text-muted-foreground">{product.artisan}</p>
          </div>

          <div className="flex gap-4">
            <Button size="lg" onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/cart')}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
