import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import heroCurry from "@/assets/hero-curry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCurry}
          alt="Delicious curry made with fresh Iragu ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Daily Groceries,
            <span className="text-yellow-300"> Delivered Fresh</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Quality ingredients for delicious home-cooked meals. 
            Farm-fresh vegetables, premium spices, and daily essentials.
          </p>

          {/* Search Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="What are you cooking today?"
                  className="h-14 pl-12 text-lg bg-white/95 backdrop-blur border-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white">
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 gradient-warm text-white font-semibold shadow-warm hover:shadow-lg transition-smooth"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 border-white text-white hover:bg-white hover:text-foreground transition-smooth"
            >
              View Categories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Farm Fresh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Same Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;