import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Truck } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  cuisine: string;
  isOpen: boolean;
  featured?: boolean;
  onClick?: () => void;
}

export const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  deliveryFee,
  cuisine,
  isOpen,
  featured = false,
  onClick
}: RestaurantCardProps) => {
  return (
    <Card 
      className={`food-card cursor-pointer relative overflow-hidden group ${
        featured ? 'new-item-pulse border-primary/20' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="food-image w-full h-48 object-cover"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        {!isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Closed</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-medium">{rating}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>{deliveryFee}</span>
            </div>
          </div>
          
          <Badge variant="secondary" className="text-xs">
            {cuisine}
          </Badge>
        </div>

        <Button 
          variant="hero" 
          size="sm" 
          className="w-full mt-4"
          disabled={!isOpen}
        >
          {isOpen ? "Order Now" : "Closed"}
        </Button>
      </CardContent>
    </Card>
  );
};