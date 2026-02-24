import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Leaf, Shield, Award, Droplet, Factory, CheckCircle2, Package } from 'lucide-react';
import { Button } from './components/ui/button';
import emailjs from '@emailjs/browser';
import logo from '../assets/ea3ac245bc56f930353dc88f1742094b705a2c03.png';
import heroBanner from '../assets/homepage1.jpeg';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import plate1 from '../assets/products/plate1.jpeg';
import plate2 from '../assets/products/plate2.jpeg';
import plate3 from '../assets/products/plate3.jpeg';
import plate4 from '../assets/products/plate4.jpeg';
import plate5 from '../assets/products/plate5.jpeg';
import plate6 from '../assets/products/plate6.jpeg';
import plate7 from '../assets/products/plate7.jpeg';
import plate8 from '../assets/products/plate8.jpeg';
import plate9 from '../assets/products/plate9.jpeg';
import plate10 from '../assets/products/plate10.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    plateSize: '',
    quantity: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      // Get them from: https://dashboard.emailjs.com/
      const serviceId = 'service_ur83an7';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'd7khWSD6Ror53k6XT';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_company: formData.company,
          from_email: formData.email,
          from_phone: formData.phone,
          product_type: formData.productType,
          plate_size: formData.plateSize,
          quantity: formData.quantity,
          location: formData.location,
          message: formData.message,
          to_email: 'sirienterprises.business@gmail.com'
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productType: '',
        plateSize: '',
        quantity: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    {
      name: "Premium Areca Leaf Plates",
      description: "Durable, biodegradable plates made from naturally fallen areca palm leaves. Suitable for hot, cold, and oily foods.",
      image: image1
    },
    {
      name: "Multiple Sizes & Shapes",
      description: "Available in round, square, and customized dimensions for various serving requirements.",
      image: image2
    },
    {
      name: "Bulk & Export Supply",
      description: "Large-scale production capacity with consistent quality control for distributors, wholesalers, and export buyers.",
      image: image3
    },
    {
      name: "Catering & Event Solutions",
      description: "Sustainable tableware solutions for weddings, corporate events, food services, and eco-conscious gatherings.",
      image: image4
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Natural & Compostable",
      description: "Made from naturally fallen areca palm leaves, fully biodegradable"
    },
    {
      icon: Droplet,
      title: "No Chemicals or Additives",
      description: "Chemical-free manufacturing process, safe for all food types"
    },
    {
      icon: Shield,
      title: "Strong & Leak Resistant",
      description: "Heat resistant and durable for hot, cold, and oily foods"
    },
    {
      icon: Award,
      title: "Hygienic Production",
      description: "Manufactured in clean, quality-controlled facility"
    },
    {
      icon: Package,
      title: "Custom Bulk Orders Accepted",
      description: "Flexible order quantities and customization options"
    },
    {
      icon: CheckCircle2,
      title: "Reliable Delivery & Export Support",
      description: "Consistent supply chain for local and international markets"
    }
  ];

  const manufacturingSteps = [
    {
      step: "1",
      title: "Collection of Fallen Leaves",
      description: "We source naturally fallen areca palm leaves from local farms"
    },
    {
      step: "2",
      title: "Cleaning and Drying",
      description: "Leaves are thoroughly cleaned and sun-dried to remove moisture"
    },
    {
      step: "3",
      title: "Heat Pressing",
      description: "Dried leaves are shaped into plates using heat-press technology"
    },
    {
      step: "4",
      title: "Quality Inspection",
      description: "Each plate undergoes strict quality control checks"
    },
    {
      step: "5",
      title: "Packaging for Bulk Orders",
      description: "Products are hygienically packed for wholesale and export"
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
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-green-700 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('product-catalog')} className="text-stone-700 hover:text-green-700 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('manufacturing')} className="text-stone-700 hover:text-green-700 transition-colors">
                Manufacturing
              </button>
              <button onClick={() => scrollToSection('features')} className="text-stone-700 hover:text-green-700 transition-colors">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('enquiry')} className="text-stone-700 hover:text-green-700 transition-colors">
                Bulk Enquiry
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-green-700 transition-colors">
                Contact
              </button>
            </div>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-stone-700 hover:text-green-700 hover:bg-green-50 transition-colors"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-4 py-4 flex flex-col gap-4">
            {[
              { label: 'About',          id: 'about'          },
              { label: 'Products',       id: 'product-catalog'},
              { label: 'Manufacturing',  id: 'manufacturing'  },
              { label: 'Why Choose Us',  id: 'features'       },
              { label: 'Bulk Enquiry',   id: 'enquiry'        },
              { label: 'Contact',        id: 'contact'        },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => { scrollToSection(id); setMobileMenuOpen(false); }}
                className="text-left text-stone-700 hover:text-green-700 font-medium py-1 border-b border-stone-100 last:border-0 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src={heroBanner} alt="Areca Leaf Products" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6" />
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Premium Areca Leaf Plate Manufacturer in Udupi, Karnataka
          </h3>
          <p className="text-xl md:text-2xl text-green-700 font-semibold mb-6">
            100% Natural. Chemical-Free. Export-Ready Bulk Supply.
          </p>
          <p className="text-stone-600 max-w-3xl mx-auto mb-12 text-lg">
            We manufacture biodegradable areca leaf plates using naturally fallen palm leaves. Strong, compostable, and food-safe products ideal for wholesale, export, catering, and retail markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('enquiry')}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
            >
              Request Bulk Quote
            </Button>
            <Button 
              onClick={() => scrollToSection('product-catalog')}
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">About Siri</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>
          <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
            <p>
              <strong>Siri Enterprises</strong> is a dedicated manufacturer of premium areca leaf plates, located near Brahmavara, Udupi, Karnataka. We are <strong>manufacturers, not traders</strong> — producing high-quality, eco-friendly tableware directly from our own facility.
            </p>
            <p>
              Our products are made from <strong>naturally fallen areca palm leaves</strong>, collected sustainably without harming trees. Using a <strong>chemical-free heat-press process</strong>, we transform these leaves into durable, biodegradable plates that are safe for all food types.
            </p>
            <p>
              We maintain <strong>hygienic production standards</strong> throughout our manufacturing process, ensuring every plate meets international quality benchmarks. Our facility is equipped to handle both small and large-scale orders, serving local businesses, national distributors, and international export markets.
            </p>
            <p>
              Committed to sustainability and reliability, Siri Enterprises is your trusted partner for bulk supply of eco-friendly disposable tableware.
            </p>
          </div>
        </div>
      </section>

    

      {/* Product Sizes & Catalog Section */}
      <section id="product-catalog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Products</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto text-lg">
            Explore our range of biodegradable areca leaf plates and bowls available in multiple sizes, shapes, and compartment options for retail, bulk, and export supply.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              { image: plate1,  name: '12 Inch – 4 Partition Plate', label: 'Partition', imgScale: 'scale-145' },
              { image: plate10, name: '10 Inch – 3 Partition Plate', label: 'Partition' ,imgScale: 'scale-100' },
              { image: plate8,  name: '10 × 10 Inch Square Plate',   label: 'Square'  ,imgScale: 'scale-100'   },
              { image: plate5,  name: '4 Inch Square Bowl',           label: 'Bowl' ,imgScale: 'scale-150'},
              { image: plate3,  name: '10 Inch Shallow Round Plate',  label: 'Round' ,imgScale: 'scale-150'},
              { image: plate4,  name: '5.5 Inch Round Bowl',          label: 'Bowl' ,imgScale: 'scale-150'},
              { image: plate2,  name: '8 Inch Round Plate',           label: 'Round' ,imgScale: 'scale-150'},
              { image: plate6,  name: '10 Inch Round Plate',          label: 'Round'  ,imgScale: 'scale-115'   },
              { image: plate9,  name: '11 Inch Round Plate',          label: 'Round' ,imgScale: 'scale-115'},
              { image: plate7,  name: '12 Inch Round Plate',          label: 'Round' ,imgScale: 'scale-115'},
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-white p-4 sm:p-6 flex items-center justify-center aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${item.imgScale ?? ''}`}
                  />
                </div>
                <div className="p-3 sm:p-4 flex flex-col gap-1.5">
                  <span className="inline-block self-start text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    {item.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-800 leading-snug">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Offerings</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto text-lg">
            Premium areca leaf tableware designed for modern, eco-conscious businesses
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

      {/* Manufacturing Facility Section */}
      <section id="manufacturing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <Factory className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Our Manufacturing Process</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              From leaf to plate — our authentic, hygienic manufacturing process ensures premium quality at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {manufacturingSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg p-6 border border-green-200 h-full">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-stone-800">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.description}</p>
                </div>
                {index < manufacturingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-green-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Why Choose Siri Enterprises</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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

      {/* Bulk Enquiry Form Section */}
      <section id="enquiry" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Request a Bulk Quote</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12 text-lg">
            Get in touch for wholesale, export, or bulk orders. We'll respond within 24 hours.
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg shadow-sm border border-stone-200 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-stone-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="productType" className="block text-sm font-semibold text-stone-700 mb-2">
                    Required Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Product Type</option>
                    <option value="Round Plates">Round Plates</option>
                    <option value="Square Plates">Square Plates</option>
                    <option value="Bowls">Bowls</option>
                    <option value="Mixed Assortment">Mixed Assortment</option>
                    <option value="Custom">Custom Requirements</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="plateSize" className="block text-sm font-semibold text-stone-700 mb-2">
                    Plate Size
                  </label>
                  <input
                    type="text"
                    id="plateSize"
                    name="plateSize"
                    placeholder="e.g., 10 inch, 12 inch"
                    value={formData.plateSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-stone-700 mb-2">
                    Quantity Required *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    placeholder="e.g., 10,000 pieces"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-stone-700 mb-2">
                    Country / Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="e.g., India, USA, UAE"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Additional requirements or questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Thank you for your enquiry!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Something went wrong.</p>
                  <p className="text-sm">Please try again or contact us directly at sirienterprises.business@gmail.com</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Location</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-stone-800">Address</h4>
                    <p className="text-stone-600">
                      Siri Enterprises<br />
                      Near Brahmavara<br />
                      Udupi District<br />
                      Karnataka, India<br />
                      PIN: 576213
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-stone-800">Phone / WhatsApp</h4>
                    <p className="text-stone-600">+91 8088467281</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-stone-800">Email</h4>
                    <p className="text-stone-600">sirienterprises.business@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62115.89847847847!2d74.71234567910156!3d13.351900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca5d0e2e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sBrahmavara%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Siri Enterprises Location - Brahmavara, Udupi, Karnataka"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Siri Enterprises" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-green-100 mb-4">
                Premium areca leaf plate manufacturer serving local and international markets with sustainable, chemical-free products.
              </p>
              <p className="text-green-200 font-semibold">Committed to Sustainable Manufacturing</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-green-100 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('product-catalog')} className="text-green-100 hover:text-white transition-colors">
                    Our Products
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('manufacturing')} className="text-green-100 hover:text-white transition-colors">
                    Manufacturing Process
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('enquiry')} className="text-green-100 hover:text-white transition-colors">
                    Bulk Enquiry
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-green-100 hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Near Brahmavara, Udupi, Karnataka, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91 8088467281</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>sirienterprises.business@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 pt-8 text-center">
            <p className="text-green-100">© 2026 Siri Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}