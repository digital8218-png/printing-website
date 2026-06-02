import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shirt, Truck, Headset, Layers, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const features = [
    {
      icon: <Layers size={32} />,
      title: "Quality Print",
      description: "Premium DTG & sublimation printing that lasts wash after wash."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      description: "Quick turnaround times across India. We deliver when you need it."
    },
    {
      icon: <Headset size={32} />,
      title: "Custom Design Support",
      description: "Need help? Our design team is ready to perfect your artwork."
    },
    {
      icon: <Shirt size={32} />,
      title: "Bulk Orders Available",
      description: "Special pricing and dedicated management for large corporate orders."
    }
  ];

  const gallery = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png"
  ];

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "College Event Coordinator",
      text: "Ordered 500 custom tees for our annual fest. The quality was outstanding and delivered 2 days before the deadline!"
    },
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      text: "Radhe Digital perfectly matched our brand colors. The polo shirts look incredibly professional. Will order again."
    },
    {
      name: "Ankit Patel",
      role: "Fitness Club Manager",
      text: "The fabric quality is great for workouts, and the prints haven't faded at all. Best local printing service hands down."
    }
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ)?",
      a: "We cater to everyone! You can order just 1 single custom T-shirt, or place a bulk order of 1000+ pieces."
    },
    {
      q: "How long does delivery take?",
      a: "Standard delivery takes 5-7 business days. For urgent requirements, we offer expedited 2-3 day shipping options."
    },
    {
      q: "What file formats do you accept for designs?",
      a: "We accept high-resolution PNG, JPG, and PDF files. For best results, we recommend PNGs with transparent backgrounds."
    },
    {
      q: "Can I wash the printed T-shirts in a machine?",
      a: "Yes, our prints are highly durable. We recommend washing them inside out with cold water for maximum longevity."
    },
    {
      q: "How do I make a payment?",
      a: "Once you finalize your design and requirements via WhatsApp, our team will share a payment link or UPI details to confirm the order."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #e53e3e 0%, transparent 50%)', backgroundSize: '100% 100%' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30">
              India's Premier Digital Printing
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Design Your Own <br/>
              <span className="text-primary">T-Shirt</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
              Custom Printing Made Easy. Premium quality printing, fast delivery, and custom designs for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white border-0">
                  Start Designing
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                  Browse T-Shirts
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">We Bring Your Ideas To Life.</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Radhe Digital, we believe a T-shirt is a blank canvas for your identity. Whether it's a corporate uniform, a college fest, or a personal statement, we ensure your vision is printed with striking clarity and durability.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With state-of-the-art printing tech and a commitment to quality, we've become the trusted partner for thousands of creators and businesses.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-black transition-colors">
                Learn more about us <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="/images/gallery-1.png" alt="Printing Process" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <img src="/images/gallery-2.png" alt="T-Shirt Quality" className="w-full h-64 object-cover rounded-xl shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why Choose Radhe Digital?</h2>
            <p className="text-gray-600 text-lg">We don't just print shirts; we deliver an experience. Here's why customers keep coming back.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-primary bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-gray-400 text-lg max-w-xl">See how vivid and sharp our prints are. Real photos of our premium custom apparel.</p>
            </div>
            <Link href="/categories" className="hidden md:inline-flex items-center text-primary font-bold hover:text-white transition-colors">
              View all products <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900"
              >
                <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black">Loved by Creators & Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex text-yellow-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-8 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to wear your design?</h2>
          <p className="text-xl mb-10 text-white/90">Join thousands of happy customers and get your custom T-shirt printed today.</p>
          <Link href="/categories">
            <Button size="lg" className="text-lg h-14 px-10 bg-black text-white hover:bg-gray-900 border-0 shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
