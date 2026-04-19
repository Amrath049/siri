import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Leaf, Shield, Award, Droplet, Factory, CheckCircle2, Package, Star, Truck, Nut } from 'lucide-react';
import { Button } from './components/ui/button';
import emailjs from '@emailjs/browser';
import logo from '../assets/ea3ac245bc56f930353dc88f1742094b705a2c03.png';
import heroDual from '../assets/hero_dual.png';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';
import offer4 from '../assets/offer4.png';
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
import cashewW180 from '../assets/cashew/w180.png';
import cashewW240 from '../assets/cashew/w240.png';
import cashewW320 from '../assets/cashew/w320.png';
import cashewK from '../assets/cashew/k.png';
import cashewSP from '../assets/cashew/sp.png';
import cashewSSP from '../assets/cashew/ssp.png';
import cashewSWP from '../assets/cashew/swp.png';
import cashewBB from '../assets/cashew/bb.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'areca' | 'cashew'>('areca');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    sizeOrGrade: '',
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
          size_or_grade: formData.sizeOrGrade,
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
        sizeOrGrade: '',
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

  const isCashewSelected = formData.productType.toLowerCase().includes('cashew') ||
    ['W180', 'W240', 'W320', 'K - Butts', 'SP', 'SSP', 'SWP', 'BB', 'Cashew Mixed'].some(g => formData.productType.includes(g));

  const products = [
    {
      name: "Premium Areca Leaf Plates",
      description: "Durable, biodegradable plates made from naturally fallen areca palm leaves. Suitable for hot, cold, and oily foods.",
      image: offer1
    },
    {
      name: "Multiple Sizes & Shapes",
      description: "Available in round, square, and customized dimensions for various serving requirements.",
      image: offer2
    },
    {
      name: "Bulk & Export Supply",
      description: "Large-scale production capacity with consistent quality control for distributors, wholesalers, and export buyers.",
      image: offer3
    },
    {
      name: "Catering & Event Solutions",
      description: "Sustainable tableware solutions for weddings, corporate events, food services, and eco-conscious gatherings.",
      image: offer4
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

  const cashewFeatures = [
    {
      icon: Star,
      title: "CEPCI-Standard Grading",
      description: "All kernels graded to Cashew Export Promotion Council of India standards"
    },
    {
      icon: Shield,
      title: "Vacuum-Sealed Freshness",
      description: "Packed in vacuum-sealed, moisture-proof packaging to preserve crunch and shelf life"
    },
    {
      icon: Award,
      title: "Hygienic Processing",
      description: "Clean, modern processing unit with strict quality control at every stage"
    },
    {
      icon: Truck,
      title: "Bulk & Export Ready",
      description: "Reliable supply for wholesalers, traders, retailers, and international buyers"
    },
    {
      icon: Package,
      title: "All Grades Available",
      description: "Whole grades (W180–W320) to broken pieces (SP, SSP, SWP, BB) for every need"
    },
    {
      icon: CheckCircle2,
      title: "Consistent Quality",
      description: "Uniform size, colour, and purity in every consignment — no compromise"
    }
  ];

  const cashewGrades = [
    {
      image: cashewW180,
      grade: 'W180',
      name: 'King Cashews',
      kernelCount: '~180 kernels/lb',
      description: 'The largest, most premium whole cashew kernel. Prized for luxury gifting, gourmet foods, and high-end retail.',
      badge: 'Premium'
    },
    {
      image: cashewW240,
      grade: 'W240',
      name: 'Extra Large Whole',
      kernelCount: '~240 kernels/lb',
      description: 'Large, whole white kernels with excellent size and flavour. Popular for retail packs and premium gifting.',
      badge: 'Popular'
    },
    {
      image: cashewW320,
      grade: 'W320',
      name: 'Standard Whole',
      kernelCount: '~320 kernels/lb',
      description: 'The most widely traded cashew grade globally. Ideal for everyday snacking, bulk supply, and food manufacturing.',
      badge: 'Best Seller'
    },
    {
      image: cashewK,
      grade: 'K',
      name: 'Butts',
      kernelCount: 'Half kernels',
      description: 'Intact half kernels with a natural split. Used in baking, confectionery, and cooking where whole shape is not required.',
      badge: null
    },
    {
      image: cashewSP,
      grade: 'SP',
      name: 'Split Pieces',
      kernelCount: 'Split pieces',
      description: 'Cashew kernels split naturally lengthwise. Perfect for snack mixes, garnishes, and industrial food applications.',
      badge: null
    },
    {
      image: cashewSSP,
      grade: 'SSP',
      name: 'Small Split Pieces',
      kernelCount: 'Small splits',
      description: 'Smaller split pieces, ideal for bakeries, mithai making, and cost-effective bulk processing applications.',
      badge: null
    },
    {
      image: cashewSWP,
      grade: 'SWP',
      name: 'Small White Pieces',
      kernelCount: 'Small pieces',
      description: 'Small, white cashew pieces used in spreads, sauces, sweets, and confectionery where size uniformity is not critical.',
      badge: null
    },
    {
      image: cashewBB,
      grade: 'BB',
      name: 'Baby Bits',
      kernelCount: 'Tiny bits',
      description: 'Finest cashew bits and crumbs. Used in ice cream manufacturing, cashew powder, and industrial food processing.',
      badge: null
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

  const navLinks = [
    { label: 'About',         id: 'about'          },
    { label: 'Areca Plates',  id: 'product-catalog'},
    { label: 'Cashew Nuts',   id: 'cashew'         },
    { label: 'Manufacturing', id: 'manufacturing'  },
    { label: 'Why Choose Us', id: 'features'       },
    { label: 'Bulk Enquiry',  id: 'enquiry'        },
    { label: 'Contact',       id: 'contact'        },
  ];

  return (
    <div className="size-full bg-white">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Siri Enterprises Logo" className="h-12 w-auto" />
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-stone-700 hover:text-green-700 transition-colors text-sm font-medium"
                >
                  {label}
                </button>
              ))}
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
            {navLinks.map(({ label, id }) => (
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

      {/* ── Hero Section ── */}
      <section className="pt-20 pb-0 bg-stone-900">
        {/* Full-width banner image with overlay */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: '520px' }}>
          <img
            src={heroDual}
            alt="Siri Enterprises – Areca Leaf Plates & Cashew Nuts"
            className="w-full object-cover object-center"
            style={{ maxHeight: '520px' }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <span className="inline-block bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/30 mb-4 backdrop-blur-sm">
              Udupi, Karnataka · Est. Since 2023
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              Siri Enterprises
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-300 font-semibold mb-3 drop-shadow">
              Natural Products. Trusted Quality.
            </p>
            <p className="text-white/80 max-w-2xl text-sm sm:text-base md:text-lg mb-8">
              Premium Areca Leaf Plates &amp; Export-Quality Cashew Kernels — for wholesale, bulk, and international markets.
            </p>
            <div className="flex flex-col gap-2 w-full max-w-sm mx-auto sm:max-w-none sm:flex-row sm:gap-3 sm:justify-center">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => scrollToSection('product-catalog')}
                  className="flex-1 sm:flex-none px-5 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm shadow-lg"
                >
                  Areca Leaf Plates
                </button>
                <button
                  onClick={() => scrollToSection('cashew')}
                  className="flex-1 sm:flex-none px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors text-sm shadow-lg"
                >
                  Cashew Kernels
                </button>
              </div>
              <button
                onClick={() => scrollToSection('enquiry')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/40 transition-colors text-sm backdrop-blur-sm"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Business summary strip */}
        <div className="bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center gap-5 px-8 md:px-12 py-6 md:py-8 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-700" />
              </div>
              <div>
                <h2 className="font-bold text-stone-900 text-base md:text-lg">Areca Leaf Plates</h2>
                <p className="text-stone-500 text-xs md:text-sm mt-0.5">100% Natural · Chemical-Free · Bulk &amp; Export Supply</p>
              </div>
              <Button onClick={() => scrollToSection('product-catalog')} className="ml-auto bg-green-700 hover:bg-green-800 text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 h-auto">
                View
              </Button>
            </div>
            <div className="flex items-center gap-5 px-8 md:px-12 py-6 md:py-8">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <Nut className="w-6 h-6 md:w-8 md:h-8 text-amber-700" />
              </div>
              <div>
                <h2 className="font-bold text-stone-900 text-base md:text-lg">Premium Cashew Nuts</h2>
                <p className="text-stone-500 text-xs md:text-sm mt-0.5">CEPCI-Graded · W180 to BB · Wholesale &amp; Export</p>
              </div>
              <Button onClick={() => scrollToSection('cashew')} className="ml-auto bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 h-auto">
                View
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">About Siri Enterprises</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>
          <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
            <p>
              <strong>Siri Enterprises</strong> is a trusted business based near Brahmavara, Udupi, Karnataka. We operate two complementary divisions — premium areca leaf plate manufacturing, and export-quality cashew kernel marketing — serving local businesses, national distributors, and international buyers.
            </p>
            <p>
              Our <strong>Areca Leaf Plate division</strong> is our core manufacturing business. We produce 100% natural, chemical-free, biodegradable tableware directly from naturally fallen areca palm leaves using a hygienic heat-press process. We are <strong>manufacturers, not traders</strong> — ensuring consistent quality and competitive wholesale pricing.
            </p>
            <p>
              Our <strong>Cashew Nuts division</strong> sources and markets premium cashew kernels graded to CEPCI (Cashew Export Promotion Council of India) standards. We supply all major grades — from W180 "King Cashews" to broken piece grades (SP, SSP, SWP, BB) — catering to wholesalers, traders, retailers, and food manufacturers.
            </p>
            <p>
              Committed to quality, sustainability, and reliability, Siri Enterprises is your trusted one-stop partner for eco-friendly tableware and premium cashew kernels.
            </p>
          </div>
        </div>
      </section>

      {/* ── Areca Leaf Plates — Product Catalog ── */}
      <section id="product-catalog" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Areca Leaf Plates</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Biodegradable areca leaf plates and bowls in multiple sizes, shapes, and compartment options — available for retail, bulk, and export supply.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {[
              { image: plate1,  name: '12 Inch – 4 Partition Plate', label: 'Partition', imgScale: 'scale-145' },
              { image: plate10, name: '10 Inch – 3 Partition Plate', label: 'Partition', imgScale: 'scale-100' },
              { image: plate8,  name: '10 × 10 Inch Square Plate',   label: 'Square',   imgScale: 'scale-100' },
              { image: plate5,  name: '4 Inch Square Bowl',           label: 'Bowl',     imgScale: 'scale-130' },
              { image: plate3,  name: '10 Inch Shallow Round Plate',  label: 'Round',    imgScale: 'scale-120' },
              { image: plate4,  name: '5.5 Inch Round Bowl',          label: 'Bowl',     imgScale: 'scale-120' },
              { image: plate2,  name: '8 Inch Round Plate',           label: 'Round',    imgScale: 'scale-120' },
              { image: plate6,  name: '10 Inch Round Plate',          label: 'Round',    imgScale: 'scale-100' },
              { image: plate9,  name: '11 Inch Round Plate',          label: 'Round',    imgScale: 'scale-110' },
              { image: plate7,  name: '12 Inch Round Plate',          label: 'Round',    imgScale: 'scale-115' },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-white p-2 sm:p-3 flex items-center justify-center aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${item.imgScale ?? ''}`}
                  />
                </div>
                <div className="p-2 sm:p-3 flex flex-col gap-1">
                  <span className="inline-block self-start text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    {item.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-800 leading-snug">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Offerings row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold mb-2 text-stone-800">{product.name}</h3>
                  <p className="text-stone-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Cashew Nuts Section ── */}
      <section id="cashew" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Premium Cashew Nuts</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-stone-600 max-w-3xl mx-auto text-lg">
              CEPCI-standard graded cashew kernels sourced and marketed directly for wholesalers, traders, retailers, and food manufacturers. All grades available — from premium whole kernels to broken pieces.
            </p>
          </div>

          {/* Tab switcher for grade categories */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-stone-100 rounded-xl p-1.5 gap-1">
              <button
                onClick={() => setActiveTab('areca')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'areca'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                Whole Kernels (W-Grades)
              </button>
              <button
                onClick={() => setActiveTab('cashew')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'cashew'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                Pieces & Bits
              </button>
            </div>
          </div>

          {/* Cashew grades grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
            {cashewGrades.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-stone-50 p-4 sm:p-5 flex items-center justify-center aspect-square overflow-hidden relative">
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-500 text-white shadow-sm z-10">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={`${item.grade} - ${item.name}`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                      {item.grade}
                    </span>
                    <span className="text-xs text-stone-500">{item.kernelCount}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-800 leading-snug">{item.name}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed flex-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cashew Why Choose Us */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-amber-800 mb-8">Why Choose Our Cashew Kernels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cashewFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── Manufacturing Process ── */}
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

      {/* ── Why Choose Us (Areca) ── */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Why Choose Siri Enterprises</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-500 mb-16 max-w-xl mx-auto">For your areca leaf plate requirements</p>
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

      {/* ── Bulk Enquiry Form ── */}
      <section id="enquiry" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Request a Bulk Quote</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-center text-stone-600 mb-12 text-lg">
            Get in touch for wholesale, export, or bulk orders — areca leaf plates or cashew nuts. We'll respond within 24 hours.
          </p>

          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                {/* <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-stone-700 mb-2">Company Name *</label>
                  <input
                    type="text" id="company" name="company" required
                    value={formData.company} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div> */}
                  <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">Email </label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">Phone / WhatsApp *</label>
                  <input
                    type="tel" id="phone" name="phone" required
                    value={formData.phone} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                        <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-stone-700 mb-2">Country / Location *</label>
                  <input
                    type="text" id="location" name="location" required
                    placeholder="e.g., India, UAE, USA"
                    value={formData.location} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                {/* <div>
                  <label htmlFor="productType" className="block text-sm font-semibold text-stone-700 mb-2">
                    Product Category *
                  </label>
                  <select
                    id="productType" name="productType" required
                    value={formData.productType} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Product</option>
                    <optgroup label="── Areca Leaf Plates ──">
                      <option value="Areca – Round Plates">Round Plates</option>
                      <option value="Areca – Square Plates">Square Plates</option>
                      <option value="Areca – Bowls">Bowls</option>
                      <option value="Areca – Partition Plates">Partition Plates</option>
                      <option value="Areca – Mixed Assortment">Mixed Assortment</option>
                      <option value="Areca – Custom">Custom Requirements</option>
                    </optgroup>
                    <optgroup label="── Cashew Kernels ──">
                      <option value="Cashew – W180 (King)">W180 – King Cashews (Whole)</option>
                      <option value="Cashew – W240">W240 – Extra Large Whole</option>
                      <option value="Cashew – W320">W320 – Standard Whole</option>
                      <option value="Cashew – K (Butts)">K – Butts</option>
                      <option value="Cashew – SP (Split Pieces)">SP – Split Pieces</option>
                      <option value="Cashew – SSP">SSP – Small Split Pieces</option>
                      <option value="Cashew – SWP">SWP – Small White Pieces</option>
                      <option value="Cashew – BB (Baby Bits)">BB – Baby Bits</option>
                      <option value="Cashew – Mixed Grades">Mixed / Multiple Grades</option>
                    </optgroup>
                  </select>
                </div> */}

                {/* <div>
                  <label htmlFor="sizeOrGrade" className="block text-sm font-semibold text-stone-700 mb-2">
                    {isCashewSelected ? 'Additional Grade / Packing Preference' : 'Plate Size / Specification'}
                  </label>
                  <input
                    type="text" id="sizeOrGrade" name="sizeOrGrade"
                    placeholder={isCashewSelected ? 'e.g., 25 kg bags, vacuum tins' : 'e.g., 10 inch, 12 inch'}
                    value={formData.sizeOrGrade} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div> */}
              {/* </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-stone-700 mb-2">Quantity Required *</label>
                  <input
                    type="text" id="quantity" name="quantity" required
                    placeholder={isCashewSelected ? 'e.g., 1 MT, 500 kg' : 'e.g., 10,000 pieces'}
                    value={formData.quantity} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div> */}
        
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">Message</label>
                <textarea
                  id="message" name="message" rows={4}
                  placeholder="Additional requirements, packing preferences, delivery schedule..."
                  value={formData.message} onChange={handleInputChange}
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

      {/* ── Location / Contact ── */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Location</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-stone-800">Address</h4>
                    <p className="text-stone-600">
                      Siri Enterprises<br />
                      Mahatma Gandhi Nagar, Cherkady<br />
                      Udupi District<br />
                      Karnataka, India – 576215
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-stone-800">Phone / WhatsApp</h4>
                    <p className="text-stone-600">+91 8088467281</p>
                    <p className="text-stone-600">+91 9187567281</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-stone-800">Email</h4>
                    <p className="text-stone-600">sirienterprises.business@gmail.com</p>
                  </div>
                </div>

                {/* Business tags */}
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Leaf className="w-3.5 h-3.5" /> Areca Leaf Plates
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Nut className="w-3.5 h-3.5" /> Cashew Kernels
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62115.89847847847!2d74.71234567910156!3d13.351900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca5d0e2e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sBrahmavara%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Siri Enterprises Location – Udupi, Karnataka"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Siri Enterprises" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-green-100 mb-3">
                Premium areca leaf plate manufacturer and cashew kernel marketing company — serving local and international B2B markets with quality, trust, and reliability.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-green-800 text-green-200 px-2 py-1 rounded-full">Areca Leaf Plates</span>
                <span className="text-xs bg-green-800 text-green-200 px-2 py-1 rounded-full">Cashew Kernels</span>
                <span className="text-xs bg-green-800 text-green-200 px-2 py-1 rounded-full">Export Ready</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'About Us',            id: 'about'          },
                  { label: 'Areca Leaf Plates',   id: 'product-catalog'},
                  { label: 'Cashew Kernels',      id: 'cashew'         },
                  { label: 'Manufacturing',       id: 'manufacturing'  },
                  { label: 'Bulk Enquiry',        id: 'enquiry'        },
                  { label: 'Contact Us',          id: 'contact'        },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollToSection(id)} className="text-green-100 hover:text-white transition-colors text-sm">
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-3 text-green-100 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Mahatma Gandhi Nagar, Cherkady, Udupi, Karnataka – 576215</span>
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
            <p className="text-green-100 text-sm">© 2026 Siri Enterprises. All rights reserved. | Areca Leaf Plates & Cashew Kernels</p>
          </div>
        </div>
      </footer>

    </div>
  );
}