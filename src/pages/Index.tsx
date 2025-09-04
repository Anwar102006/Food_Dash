import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RestaurantCard } from "@/components/RestaurantCard";
import { FoodItem } from "@/components/FoodItem";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Truck, MapPin } from "lucide-react";

// Import food images
import burgerImg from "@/assets/burger.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import sushiImg from "@/assets/sushi.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample data
  const featuredRestaurants = [
    {
      id: "1",
      name: "Burger Palace",
      image: burgerImg,
      rating: 4.5,
      deliveryTime: "25-35 min",
      deliveryFee: "$2.99",
      cuisine: "American",
      isOpen: true,
      featured: true
    },
    {
      id: "2",
      name: "Pizza Corner",
      image: pizzaImg,
      rating: 4.7,
      deliveryTime: "30-40 min",
      deliveryFee: "Free",
      cuisine: "Italian",
      isOpen: true,
      featured: true
    },
    {
      id: "3",
      name: "Sushi Master",
      image: sushiImg,
      rating: 4.8,
      deliveryTime: "35-45 min",
      deliveryFee: "$3.99",
      cuisine: "Japanese",
      isOpen: true
    }
  ];

  const popularItems = [
    {
      id: "food-1",
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
      price: 12.99,
      image: burgerImg,
      category: "Burgers",
      isPopular: true,
      isSpicy: false,
      isVegetarian: false
    },
    {
      id: "food-2",
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
      price: 15.99,
      image: pizzaImg,
      category: "Pizza",
      isPopular: true,
      isVegetarian: true
    },
    {
      id: "food-3",
      name: "Salmon Roll",
      description: "Fresh salmon, avocado, and cucumber with soy sauce",
      price: 18.99,
      image: sushiImg,
      category: "Sushi",
      isPopular: true
    }
  ];

  const categories = ["Burgers", "Pizza", "Sushi", "Asian", "Mexican", "Desserts"];

  const handleAddToCart = (foodId: string, quantity: number) => {
    const food = popularItems.find(item => item.id === foodId);
    if (!food) return;

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === foodId);
      
      if (quantity === 0) {
        return prev.filter(item => item.id !== foodId);
      }
      
      if (existingItem) {
        return prev.map(item =>
          item.id === foodId ? { ...item, quantity } : item
        );
      } else {
        return [...prev, {
          id: foodId,
          name: food.name,
          price: food.price,
          quantity,
          image: food.image
        }];
      }
    });
  };

  const handleUpdateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here!");
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <Hero />
        
        {/* Featured Restaurants */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Restaurants
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the most popular restaurants in your area with fast delivery and great food
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  {...restaurant}
                  onClick={() => alert(`Opening ${restaurant.name} menu...`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Food Items */}
        <section className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular Right Now
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Try these customer favorites that everyone's talking about
              </p>
            </div>

            <div className="mb-8">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            
            <div className="space-y-6">
              {popularItems
                .filter(item => selectedCategory === "All" || item.category === selectedCategory)
                .map((item) => (
                  <FoodItem
                    key={item.id}
                    {...item}
                    onAddToCart={handleAddToCart}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Partner Restaurants</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-warning">25 min</div>
                <div className="text-muted-foreground">Average Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting your favorite food delivered is easier than ever
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose Location</h3>
                  <p className="text-muted-foreground">
                    Enter your address and browse restaurants in your area
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pick Your Food</h3>
                  <p className="text-muted-foreground">
                    Browse menus and select your favorite dishes
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Get your food delivered hot and fresh to your door
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            FoodDash
          </div>
          <p className="text-muted mb-8">
            Bringing delicious food to your doorstep since 2024
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-primary-glow transition-colors">About</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <Cart
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Index;
