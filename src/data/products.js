export const PRODUCTS = [
  // MEN (1-4)
  {
    id: "m-shirt-01",
    name: "Premium Cotton Shirt",
    category: "men",
    type: "shirts",
    price: "Price on enquiry",
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Cream", hex: "#F6F0E7" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Green", hex: "#1F5A3A" },
      { name: "Blue", hex: "#1B263B" }
    ],
    description: "Refined 100% fine cotton shirt crafted with precision tailoring, smooth finish, and comfortable long-wear fit."
  },
  {
    id: "m-shirt-02",
    name: "Classic Formal Shirt",
    category: "men",
    type: "shirts",
    price: "Price on enquiry",
    badge: "Formal",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Cream", hex: "#F6F0E7" },
      { name: "Blue", hex: "#4A7C59" },
      { name: "Black", hex: "#2E251F" }
    ],
    description: "Crisp classic formal shirt designed for business occasions, offering structured collars and breathable luxury fabric."
  },
  {
    id: "m-tshirt-01",
    name: "Men's Casual T-Shirt",
    category: "men",
    type: "t-shirts",
    price: "Price on enquiry",
    badge: "Casual",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Green", hex: "#1F5A3A" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Black", hex: "#2E251F" },
      { name: "Cream", hex: "#F6F0E7" }
    ],
    description: "Soft premium combed cotton t-shirt with modern minimal styling and enhanced color retention."
  },
  {
    id: "m-pant-01",
    name: "Premium Trouser",
    category: "men",
    type: "pants",
    price: "Price on enquiry",
    badge: "Tailored",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: [
      { name: "Black", hex: "#2E251F" },
      { name: "Cream", hex: "#E7D8C6" },
      { name: "Blue", hex: "#1B263B" },
      { name: "Green", hex: "#1F5A3A" }
    ],
    description: "Tailored stretch-cotton trousers delivering effortless style, perfect drape, and durable everyday comfort."
  },

  // WOMEN (5-8)
  {
    id: "w-saree-01",
    name: "Kanchipuram Silk Saree",
    category: "women",
    type: "saree",
    price: "Price on enquiry",
    badge: "Signature Hero",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Maroon", hex: "#7D2435" },
      { name: "Gold", hex: "#B08A4A" },
      { name: "Green", hex: "#1F5A3A" },
      { name: "Pink", hex: "#C2185B" }
    ],
    description: "Exquisite handwoven Kanchipuram pure silk saree with heavy zari pallu and traditional temple motif border."
  },
  {
    id: "w-saree-02",
    name: "Traditional Silk Saree",
    category: "women",
    type: "saree",
    price: "Price on enquiry",
    badge: "Heritage",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Gold", hex: "#B08A4A" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Green", hex: "#1F5A3A" },
      { name: "Cream", hex: "#F6F0E7" }
    ],
    description: "Timeless silk saree adorned with subtle metallic brocade weave, perfect for wedding ceremonies and grand celebrations."
  },
  {
    id: "w-chudi-01",
    name: "Designer Chudidhar",
    category: "women",
    type: "chudidhar",
    price: "Price on enquiry",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pink", hex: "#D87093" },
      { name: "Green", hex: "#1F5A3A" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Cream", hex: "#F6F0E7" }
    ],
    description: "Elegantly embroidered Chanderi silk chudidhar set paired with matching dupatta and detailed neckwork."
  },
  {
    id: "w-ethnic-01",
    name: "Elegant Ethnic Wear",
    category: "women",
    type: "chudidhar",
    price: "Price on enquiry",
    badge: "New",
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Green", hex: "#1F5A3A" },
      { name: "Gold", hex: "#B08A4A" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Blue", hex: "#1B263B" }
    ],
    description: "Contemporary flared Indian ethnic ensemble tailored for grace, comfort, and festive sophistication."
  },

  // KIDS (9-11)
  {
    id: "k-boy-01",
    name: "Boys Traditional Wear",
    category: "kids",
    type: "kids wear",
    price: "Price on enquiry",
    badge: "Festive",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: [
      { name: "Cream", hex: "#F6F0E7" },
      { name: "Gold", hex: "#B08A4A" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Green", hex: "#1F5A3A" }
    ],
    description: "Charming traditional boys silk shirt and veshti set crafted with soft child-friendly fabrics."
  },
  {
    id: "k-girl-01",
    name: "Girls Ethnic Wear",
    category: "kids",
    type: "kids wear",
    price: "Price on enquiry",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: [
      { name: "Pink", hex: "#E91E63" },
      { name: "Green", hex: "#1F5A3A" },
      { name: "Gold", hex: "#B08A4A" },
      { name: "Maroon", hex: "#7D2435" }
    ],
    description: "Vibrant Pattu Pavadai lehenga set with intricate zari borders and gentle inner lining."
  },
  {
    id: "k-festive-01",
    name: "Kids Festive Set",
    category: "kids",
    type: "kids wear",
    price: "Price on enquiry",
    badge: "Special Edition",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: [
      { name: "Gold", hex: "#B08A4A" },
      { name: "Cream", hex: "#F6F0E7" },
      { name: "Maroon", hex: "#7D2435" },
      { name: "Blue", hex: "#1B263B" }
    ],
    description: "Festive ethnic set designed with rich colors, easy wearability, and long-lasting fabric care."
  }
];

export const CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "men", label: "MEN" },
  { id: "women", label: "WOMEN" },
  { id: "kids", label: "KIDS" }
];
