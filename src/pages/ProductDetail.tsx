import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart, ArrowLeft, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import VoiceAssistant from '@/components/VoiceAssistant';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { t } = useLanguage();
  
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

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  const productDescription = `${product.name}. ${product.description}. Price: ${product.price} rupees. Made by ${product.artisan} in ${product.location}.`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToProducts')}
        </Button>
        <VoiceAssistant textToSpeak={productDescription} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                {t('videoSection')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground font-semibold">{t('comingSoon')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">₹{product.price}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {t('madeIn')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{product.location}</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-semibold mb-2">{t('description')}</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t('artisan')}</h3>
            <p className="text-muted-foreground">{product.artisan}</p>
          </div>

          <div className="flex gap-4">
            <Button size="lg" onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              {t('addToCart')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleBuyNow}>
              {t('buyNow')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
