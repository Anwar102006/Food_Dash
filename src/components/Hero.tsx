import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Truck } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious food delivery"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Delicious Food
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Order from your favorite restaurants and get fresh, hot meals delivered 
              to your doorstep in minutes.
            </p>

            {/* Search Bar */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant max-w-md mx-auto md:mx-0">
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter your address"
                    className="pl-10 h-12 bg-background border-border"
                  />
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for restaurants or dishes"
                    className="pl-10 h-12 bg-background border-border"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Find Food
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">On orders over $30</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Search className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Easy Ordering</h3>
                  <p className="text-sm text-muted-foreground">Simple & fast checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Food Elements */}
        <div className="hidden lg:block absolute right-20 top-20">
          <div className="float-animation">
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-food-card">
              <div className="text-2xl">🍕</div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-40 bottom-32">
          <div className="float-animation" style={{ animationDelay: '1s' }}>
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-food-card">
              <div className="text-2xl">🍔</div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-10 bottom-20">
          <div className="float-animation" style={{ animationDelay: '2s' }}>
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-food-card">
              <div className="text-2xl">🍜</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};