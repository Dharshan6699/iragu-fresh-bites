import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Heart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg",
    tag: "Bestseller",
    tagColor: "bg-green-500",
    inStock: true
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: 45,
    originalPrice: 55,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg",
    tag: "Fresh",
    tagColor: "bg-red-500",
    inStock: true
  },
  {
    id: 3,
    name: "Premium Turmeric Powder",
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviews: 234,
    image: "/placeholder.svg",
    tag: "Premium",
    tagColor: "bg-yellow-600",
    inStock: true
  },
  {
    id: 4,
    name: "Fresh Spinach",
    price: 25,
    originalPrice: 30,
    rating: 4.7,
    reviews: 67,
    image: "/placeholder.svg",
    tag: "Organic",
    tagColor: "bg-green-600",
    inStock: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked favorites from our customers. Quality ingredients 
            at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover-lift border-none shadow-soft"
            >
              <div className="relative">
                <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  
                  {/* Product Tag */}
                  <Badge 
                    className={`absolute top-3 left-3 ${product.tagColor} text-white border-none`}
                  >
                    {product.tag}
                  </Badge>

                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <Button
                  size="sm"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth bg-primary hover:bg-primary/90 text-white shadow-warm"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full transition-bounce hover:scale-105" 
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-warm">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;