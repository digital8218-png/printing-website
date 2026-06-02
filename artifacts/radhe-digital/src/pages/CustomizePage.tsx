import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Shirt, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TSHIRT_TYPES = [
  "Round Neck T-Shirt",
  "Collar T-Shirt",
  "Holi Special T-Shirt",
  "Custom Event T-Shirt",
  "Bulk Order T-Shirt"
];

const COLORS = [
  { name: "White", hex: "#ffffff", border: "border-gray-300" },
  { name: "Black", hex: "#111111", border: "border-black" },
  { name: "Red", hex: "#e53e3e", border: "border-red-600" },
  { name: "Navy Blue", hex: "#1e3a8a", border: "border-blue-900" },
  { name: "Grey", hex: "#9ca3af", border: "border-gray-400" },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];
const POSITIONS = ["Front", "Back", "Both"];

export default function CustomizePage() {
  const [_, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const typeParam = searchParams.get("type");

  const [formData, setFormData] = useState({
    type: TSHIRT_TYPES.includes(typeParam || "") ? typeParam as string : "Round Neck T-Shirt",
    size: "M",
    color: "White",
    quantity: 1,
    position: "Front",
    designDesc: "",
    hasFile: false,
    name: "",
    mobile: "",
    city: ""
  });

  const selectedColorHex = COLORS.find(c => c.name === formData.color)?.hex || "#ffffff";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, hasFile: true }));
    } else {
      setFormData(prev => ({ ...prev, hasFile: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const designText = formData.hasFile ? 
      `File uploaded (Will send attachment here) | Note: ${formData.designDesc}` : 
      (formData.designDesc || "No specific design mentioned");
      
    const message = `Hello Radhe Digital! I want to place an inquiry:
*T-Shirt Details*
Type: ${formData.type}
Size: ${formData.size}
Color: ${formData.color}
Quantity: ${formData.quantity}
Print Position: ${formData.position}

*Design Details*
${designText}

*Customer Details*
Name: ${formData.name}
Mobile: ${formData.mobile}
City: ${formData.city}`;

    const waUrl = `https://wa.me/917417406959?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">Customize Your Order</h1>
          <p className="text-gray-600">Fill in the details below to get a quote via WhatsApp instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Visual Preview */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <Card className="border-0 shadow-lg overflow-hidden bg-white">
                <div className="bg-gray-100 p-8 flex items-center justify-center aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0,transparent_100%)] pointer-events-none" />
                  <Shirt 
                    size={280} 
                    color={formData.color === "White" ? "#e5e7eb" : selectedColorHex}
                    fill={selectedColorHex}
                    className="transition-colors duration-300 drop-shadow-xl"
                  />
                  {/* Decorative mockup text */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-60">
                    <p className={`text-xs font-bold uppercase tracking-widest ${formData.color === 'White' ? 'text-black' : 'text-white'}`}>
                      {formData.position === 'Front' || formData.position === 'Both' ? 'YOUR DESIGN' : ''}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{formData.type}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {formData.color} • Size {formData.size} • Qty: {formData.quantity}
                  </p>
                  <div className="bg-red-50 text-primary p-4 rounded-lg text-sm flex items-start gap-3">
                    <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                    <p>Submitting this form will open WhatsApp so you can share your design files and finalize pricing directly with us.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Configuration Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 text-black">Product Details</h3>
              
              <div className="space-y-6 mb-10">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">T-Shirt Type</label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange}
                    className="w-full flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {TSHIRT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Color</label>
                  <div className="flex flex-wrap gap-4">
                    {COLORS.map((c) => (
                      <button
                        type="button"
                        key={c.name}
                        onClick={() => setFormData({ ...formData, color: c.name })}
                        className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-transform ${formData.color === c.name ? 'scale-110 ring-2 ring-primary ring-offset-2' : c.border}`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {SIZES.map(s => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setFormData({ ...formData, size: s })}
                          className={`w-12 h-10 rounded-md border font-medium transition-colors ${formData.size === s ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (Min 1)</label>
                    <Input 
                      type="number" 
                      name="quantity" 
                      min="1" 
                      value={formData.quantity} 
                      onChange={handleChange} 
                      className="w-full h-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Print Position</label>
                  <div className="flex flex-wrap gap-4">
                    {POSITIONS.map(p => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setFormData({ ...formData, position: p })}
                        className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${formData.position === p ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 text-black">Design & Contact</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Design (Optional)</label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-600 mb-1">Click to attach file (PNG, JPG, PDF)</p>
                    <p className="text-xs text-gray-400">You can also send files directly on WhatsApp later.</p>
                    <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".png,.jpg,.jpeg,.pdf" />
                    {formData.hasFile && <p className="text-sm text-green-600 font-medium mt-2">File selected! (Send via WhatsApp)</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design Description (Optional)</label>
                  <Textarea 
                    name="designDesc" 
                    value={formData.designDesc} 
                    onChange={handleChange} 
                    placeholder="Mujhe aisi design chahiye... Describe colors, text, or any specific instructions."
                    className="h-24 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Rahul Kumar" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
                    <Input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <Input required type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Mathura" />
                </div>
              </div>

              <div className="mt-10">
                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#1ebe57] text-white">
                  Send Inquiry on WhatsApp
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">No payment required right now. We will confirm your order first.</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
