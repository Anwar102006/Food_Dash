import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FoodItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  onAddToCart?: (id: string, quantity: number) => void;
}

export const FoodItem = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isSpicy = false,
  isVegetarian = false,
  isPopular = false,
  onAddToCart
}: FoodItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onAddToCart?.(id, newQuantity);
    }
  };

  return (
    <Card className="food-card overflow-hidden group">
      <div className="md:flex">
        <div className="md:flex-1 p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <div className="flex space-x-1">
                  {isPopular && (
                    <Badge className="bg-warning text-warning-foreground text-xs">
                      Popular
                    </Badge>
                  )}
                  {isSpicy && (
                    <Badge variant="destructive" className="text-xs">
                      🌶️ Spicy
                    </Badge>
                  )}
                  {isVegetarian && (
                    <Badge className="bg-success text-success-foreground text-xs">
                      🥬 Veg
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-primary">
                  ${price.toFixed(2)}
                </div>
                
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            {quantity === 0 ? (
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => handleQuantityChange(1)}
                className="ml-auto"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center space-x-3 ml-auto">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="h-8 w-8"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="font-semibold min-w-[20px] text-center">
                  {quantity}
                </span>
                
                <Button
                  variant="hero"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="h-8 w-8"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:w-32 lg:w-40">
          <img
            src={image}
            alt={name}
            className="food-image w-full h-32 md:h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
};