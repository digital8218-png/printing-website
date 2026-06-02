import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoriesPage() {
  const categories = [
    {
      id: "Round Neck T-Shirt",
      title: "Round Neck T-Shirt",
      description: "Classic, comfortable everyday wear. Perfect for casual events and basic custom prints.",
      image: "/images/category-round.png"
    },
    {
      id: "Collar T-Shirt",
      title: "Collar T-Shirt",
      description: "Professional polo style. Ideal for corporate wear, uniforms, and premium branding.",
      image: "/images/category-collar.png"
    },
    {
      id: "Holi Special T-Shirt",
      title: "Holi Special T-Shirt",
      description: "Bright white fabric optimized for vibrant color splashes and festive designs.",
      image: "/images/category-holi.png"
    },
    {
      id: "Custom Event T-Shirt",
      title: "Custom Event T-Shirt",
      description: "Bulk orders with large graphic prints for college fests, marathons, and gatherings.",
      image: "/images/category-event.png"
    },
    {
      id: "Bulk Order T-Shirt",
      title: "Bulk Order T-Shirt",
      description: "Wholesale pricing for mass distribution, NGOs, and promotional campaigns.",
      image: "/images/category-bulk.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Canvas</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Select the T-shirt style that best fits your needs, and let's get customizing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow bg-white h-full flex flex-col group">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <Link href={`/customize?type=${encodeURIComponent(category.id)}`} className="block w-full mt-auto">
                    <Button className="w-full py-6 text-md font-bold bg-primary hover:bg-black transition-colors">
                      Customize Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
