import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Iragu</h3>
            <p className="text-muted-foreground">
              Your trusted partner for fresh groceries and quality ingredients. 
              Bringing farm-fresh produce to your doorstep.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover-warm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-warm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-warm">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
                About Us
              </Button>
              <Button variant="link" className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
                Products
              </Button>
              <Button variant="link" className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
                Categories
              </Button>
              <Button variant="link" className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
                Recipes
              </Button>
              <Button variant="link" className="p-0 h-auto justify-start text-muted-foreground hover:text-primary">
                Blog
              </Button>
            </div>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@iragu.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>123 Fresh Market Street, Food District, Mumbai 400001</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates about new products and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Your email address" 
                className="transition-smooth focus:ring-primary/50"
              />
              <Button className="w-full gradient-warm text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Iragu. All rights reserved. Made with ❤️ for fresh food lovers.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;