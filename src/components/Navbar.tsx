import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            The Local Bazar
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About us</Link>
            <Link to="/location" className="hover:text-primary transition-colors">Location</Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">Contacts</Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10"
              />
            </div>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
