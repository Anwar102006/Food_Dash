import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Search, MapPin, Menu, X } from "lucide-react";

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

export const Header = ({ cartItemsCount = 0, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-header border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FoodDash
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Restaurants
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Cuisines
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Location */}
          <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Downtown, NYC</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search restaurants, dishes..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-primary"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button
              variant="outline"
              size="icon"
              className="relative hover:bg-accent transition-colors"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button variant="outline" size="icon" className="hover:bg-accent">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search restaurants, dishes..."
                  className="pl-10 bg-muted/50"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Home
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Restaurants
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Cuisines
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  About
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                  <MapPin className="h-4 w-4" />
                  <span>Downtown, NYC</span>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};