import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import categoryVegetables from "@/assets/category-vegetables.jpg";
import categorySpices from "@/assets/category-spices.jpg";
import categoryDairy from "@/assets/category-dairy.jpg";

const categories = [
  {
    name: "Fresh Vegetables",
    description: "Farm-fresh vegetables delivered daily",
    image: categoryVegetables,
    itemCount: "200+ items",
    color: "bg-green-500"
  },
  {
    name: "Spices & Seasonings",
    description: "Authentic spices for flavorful cooking",
    image: categorySpices,
    itemCount: "150+ items",
    color: "bg-orange-500"
  },
  {
    name: "Dairy & Eggs",
    description: "Fresh dairy products and farm eggs",
    image: categoryDairy,
    itemCount: "80+ items",
    color: "bg-blue-500"
  },
  {
    name: "Rice & Grains",
    description: "Premium quality rice and whole grains",
    image: categoryVegetables, // Reusing for now
    itemCount: "120+ items",
    color: "bg-yellow-600"
  },
  {
    name: "Fruits",
    description: "Seasonal fruits picked at peak ripeness",
    image: categoryVegetables, // Reusing for now
    itemCount: "100+ items",
    color: "bg-red-500"
  },
  {
    name: "Snacks & Beverages",
    description: "Healthy snacks and refreshing drinks",
    image: categoryDairy, // Reusing for now
    itemCount: "180+ items",
    color: "bg-purple-500"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh ingredients organized by category. 
            Everything you need for delicious home cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group overflow-hidden hover-lift cursor-pointer border-none shadow-soft"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-smooth"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {category.itemCount}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group-hover:gap-2 transition-smooth"
                >
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-warm">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;