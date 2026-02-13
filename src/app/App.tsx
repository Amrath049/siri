import { Mail, Phone, MapPin, Leaf, Shield, Award, Droplet } from 'lucide-react';
import { Button } from './components/ui/button';
import logo from '../assets/ea3ac245bc56f930353dc88f1742094b705a2c03.png';
import heroBanner from '../assets/25f4320411a90283018883540937a0b9b5589b24.png';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: "Areca Leaf Plates",
      description: "Premium quality biodegradable plates in various sizes",
      image: "https://images.unsplash.com/photo-1742974809777-259cea55ed1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVjYSUyMGxlYWYlMjBwbGF0ZXN8ZW58MXx8fHwxNzY1OTA1OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Areca Leaf Bowls",
      description: "Natural and sturdy bowls perfect for all occasions",
      image: "https://images.unsplash.com/photo-1586439280783-e7274032bc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGVhZiUyMGJvd2x8ZW58MXx8fHwxNzY1OTA1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Eco Tableware Set",
      description: "Complete dining solution with plates, bowls and cutlery",
      image: "https://images.unsplash.com/photo-1723899659577-8ff5ee778153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHRhYmxld2FyZXxlbnwxfHx8fDE3NjU5MDU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Sustainable Party Ware",
      description: "Eco-friendly alternatives for events and catering",
      image: "https://images.unsplash.com/photo-1668959813575-8e68053e2fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzJTIwbmF0dXJlfGVufDF8fHx8MTc2NTkwNTk1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Made from naturally fallen areca palm leaves"
    },
    {
      icon: Droplet,
      title: "100% Biodegradable",
      description: "Decomposes naturally within 60 days"
    },
    {
      icon: Shield,
      title: "Hygienic & Chemical-Free",
      description: "No chemicals or additives used in manufacturing"
    },
    {
      icon: Award,
      title: "Durable & Food-Safe",
      description: "Heat resistant and suitable for all food types"
    }
  ];

  return (
    <div className="size-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Siri Enterprises Logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-green-700 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-stone-700 hover:text-green-700 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('features')} className="text-stone-700 hover:text-green-700 transition-colors">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-green-700 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src={heroBanner} alt="Areca Leaf Products" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6" />
          </div>
          <p className="text-green-700 mb-4 tracking-wide">ECO-FRIENDLY ARECA LEAF PRODUCTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Areca Leaf Plates Manufacturer in Brahmavara, Udupi</h1>
          <p className="text-stone-600 max-w-2xl mx-auto mb-12">
            Manufacturing premium quality, 100% natural and biodegradable areca leaf products for a sustainable future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => scrollToSection('products')}
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Eco-Friendly Areca Leaf Products</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>
          <div className="space-y-6 text-stone-700">
            <p>
              Siri Enterprises is a leading manufacturer and supplier of eco-friendly areca leaf products. 
              We specialize in producing high-quality, biodegradable plates, bowls, and tableware made from 
              naturally fallen areca palm leaves.
            </p>
            <p>
              Our mission is to provide sustainable alternatives to plastic and paper products while 
              maintaining the highest standards of quality and hygiene. Each product is carefully crafted 
              using traditional techniques combined with modern manufacturing processes.
            </p>
            <p>
              We are committed to environmental sustainability and work directly with local communities 
              to source our raw materials responsibly. Our products are chemical-free, completely natural, 
              and safe for use with all types of food.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Areca Leaf Plates Supplier in Udupi</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Discover our range of premium areca leaf products designed for modern, eco-conscious living
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-stone-800">{product.name}</h3>
                  <p className="text-stone-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Why Choose Siri Enterprises</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-stone-800">{feature.title}</h3>
                  <p className="text-stone-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Contact Us</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12">
            Get in touch with us for orders, inquiries, or partnerships
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-stone-800">Phone</h3>
                  <p className="text-stone-600">+91 8088467281</p>
                  {/* <p className="text-stone-600">+91 98765 43211</p> */}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-stone-800">Email</h3>
                  <p className="text-stone-600">sirienterprises.business@gmail.com</p>
                  {/* <p className="text-stone-600">sales@sirienterprises.in</p> */}
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-stone-800">Location</h3>
                  <p className="text-stone-600">
                    Siri Enterprises<br />
                    Brahmavar, Udupi<br />
                    Karnataka <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Siri Enterprises" className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-green-100">© 2026 Siri Enterprises. All rights reserved.</p>
              <p className="text-green-200 mt-2">Committed to a sustainable future</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}