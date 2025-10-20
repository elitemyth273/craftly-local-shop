import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-crafts.jpg';

const Home = () => {
  const [locationFilter, setLocationFilter] = useState<string>('all');
  
  const locations = ['All Locations', ...new Set(products.map(p => p.location))];
  
  const filteredProducts = locationFilter === 'all' 
    ? products 
    : products.filter(p => p.location === locationFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Authentic
              <span className="block text-primary">Handmade Treasures</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Support local artisans and explore unique handcrafted products from across India. 
              Every purchase tells a story of tradition and craftsmanship.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/seller-register">
                <Button size="lg" variant="outline">
                  Become a Seller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Handcrafted Products</h2>
          <p className="text-muted-foreground">Discover unique items from talented local artisans</p>
        </div>

        <div className="flex justify-end mb-8">
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-[200px]">
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.slice(1).map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
