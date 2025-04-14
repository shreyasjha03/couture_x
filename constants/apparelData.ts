export interface ApparelItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  store: string;
  size: string;
  color: string;
}

const generateId = () => Math.random().toString(36).substring(7);

export function getApparelItems(count: number): ApparelItem[] {
  const items: ApparelItem[] = [
    {
      id: generateId(),
      name: "Floral Summer Dress",
      category: "Dresses",
      description: "A beautiful floral print dress perfect for summer occasions",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=60",
      price: "79.99",
      store: "Zara",
      size: "XS, S, M, L",
      color: "Blue Floral"
    },
    {
      id: generateId(),
      name: "Classic Denim Jacket",
      category: "Outerwear",
      description: "Versatile denim jacket that goes with everything",
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60",
      price: "89.99",
      store: "Levi's",
      size: "S, M, L, XL",
      color: "Light Blue"
    },
    {
      id: generateId(),
      name: "White Sneakers",
      category: "Shoes",
      description: "Clean and minimalist white sneakers for everyday wear",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60",
      price: "129.99",
      store: "Nike",
      size: "US 6-10",
      color: "White"
    },
    {
      id: generateId(),
      name: "Leather Crossbody Bag",
      category: "Accessories",
      description: "Elegant leather crossbody bag with gold hardware",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&auto=format&fit=crop&q=60",
      price: "149.99",
      store: "Coach",
      size: "One Size",
      color: "Brown"
    },
    {
      id: generateId(),
      name: "Silk Blouse",
      category: "Tops",
      description: "Luxurious silk blouse perfect for work or evening",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&auto=format&fit=crop&q=60",
      price: "119.99",
      store: "H&M",
      size: "XS-XL",
      color: "Ivory"
    },
    {
      id: generateId(),
      name: "High-Waist Jeans",
      category: "Pants",
      description: "Flattering high-waist jeans with stretch comfort",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60",
      price: "99.99",
      store: "Madewell",
      size: "24-32",
      color: "Dark Blue"
    },
    {
      id: generateId(),
      name: "Pleated Midi Skirt",
      category: "Skirts",
      description: "Elegant pleated midi skirt with metallic finish",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop&q=60",
      price: "69.99",
      store: "Zara",
      size: "XS-XL",
      color: "Silver"
    },
    {
      id: generateId(),
      name: "Oversized Knit Sweater",
      category: "Sweaters",
      description: "Cozy oversized sweater perfect for fall weather",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60",
      price: "89.99",
      store: "& Other Stories",
      size: "S-L",
      color: "Cream"
    },
    {
      id: generateId(),
      name: "Platform Combat Boots",
      category: "Shoes",
      description: "Edgy platform boots with chunky soles",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60",
      price: "159.99",
      store: "Dr. Martens",
      size: "US 5-10",
      color: "Black"
    },
    {
      id: generateId(),
      name: "Structured Blazer",
      category: "Outerwear",
      description: "Professional blazer with modern cut",
      image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=500&auto=format&fit=crop&q=60",
      price: "129.99",
      store: "Massimo Dutti",
      size: "XS-XL",
      color: "Navy"
    },
    {
      id: generateId(),
      name: "Wide-Leg Trousers",
      category: "Pants",
      description: "Flowing wide-leg trousers for elegant comfort",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60",
      price: "89.99",
      store: "COS",
      size: "2-12",
      color: "Beige"
    },
    {
      id: generateId(),
      name: "Statement Necklace",
      category: "Accessories",
      description: "Bold chain necklace with pendant detail",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=60",
      price: "49.99",
      store: "& Other Stories",
      size: "One Size",
      color: "Gold"
    },
    {
      id: generateId(),
      name: "Wrap Dress",
      category: "Dresses",
      description: "Flattering wrap dress in floral print",
      image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&auto=format&fit=crop&q=60",
      price: "99.99",
      store: "Reformation",
      size: "XS-XL",
      color: "Red Floral"
    },
    {
      id: generateId(),
      name: "Leather Moto Jacket",
      category: "Outerwear",
      description: "Classic leather motorcycle jacket",
      image: "https://images.unsplash.com/photo-1551028719-8f2b3fad9184?w=500&auto=format&fit=crop&q=60",
      price: "299.99",
      store: "AllSaints",
      size: "XS-L",
      color: "Black"
    },
    {
      id: generateId(),
      name: "Silk Scarf",
      category: "Accessories",
      description: "Luxurious silk scarf with artistic print",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&auto=format&fit=crop&q=60",
      price: "39.99",
      store: "Massimo Dutti",
      size: "One Size",
      color: "Multicolor"
    },
    {
      id: generateId(),
      name: "Cashmere Beanie",
      category: "Accessories",
      description: "Soft cashmere beanie for winter",
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60",
      price: "59.99",
      store: "COS",
      size: "One Size",
      color: "Gray"
    },
    {
      id: generateId(),
      name: "Cropped Cardigan",
      category: "Sweaters",
      description: "Trendy cropped cardigan with pearl buttons",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&auto=format&fit=crop&q=60",
      price: "69.99",
      store: "Urban Outfitters",
      size: "XS-L",
      color: "Pink"
    },
    {
      id: generateId(),
      name: "Palazzo Pants",
      category: "Pants",
      description: "Flowing palazzo pants in silk blend",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60",
      price: "119.99",
      store: "Anthropologie",
      size: "0-14",
      color: "Emerald"
    },
    {
      id: generateId(),
      name: "Platform Sandals",
      category: "Shoes",
      description: "70s inspired platform sandals",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60",
      price: "89.99",
      store: "Steve Madden",
      size: "US 6-10",
      color: "Tan"
    },
    {
      id: generateId(),
      name: "Satin Slip Dress",
      category: "Dresses",
      description: "Elegant satin slip dress for evenings",
      image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500&auto=format&fit=crop&q=60",
      price: "129.99",
      store: "Reformation",
      size: "XS-L",
      color: "Champagne"
    },
    {
      id: generateId(),
      name: "Bucket Hat",
      category: "Accessories",
      description: "Trendy bucket hat in cotton twill",
      image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&auto=format&fit=crop&q=60",
      price: "29.99",
      store: "Urban Outfitters",
      size: "One Size",
      color: "Off-White"
    },
    {
      id: generateId(),
      name: "Utility Jumpsuit",
      category: "Jumpsuits",
      description: "Versatile utility jumpsuit with belt",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&auto=format&fit=crop&q=60",
      price: "149.99",
      store: "Madewell",
      size: "XS-XL",
      color: "Olive"
    },
    {
      id: generateId(),
      name: "Chunky Loafers",
      category: "Shoes",
      description: "Modern chunky loafers with platform",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60",
      price: "119.99",
      store: "Sam Edelman",
      size: "US 5-11",
      color: "Black Patent"
    },
    {
      id: generateId(),
      name: "Printed Maxi Dress",
      category: "Dresses",
      description: "Bohemian printed maxi dress",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=60",
      price: "159.99",
      store: "Free People",
      size: "XS-XL",
      color: "Multi Floral"
    },
    {
      id: generateId(),
      name: "Leather Tote Bag",
      category: "Accessories",
      description: "Spacious leather tote for everyday",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&auto=format&fit=crop&q=60",
      price: "199.99",
      store: "Madewell",
      size: "One Size",
      color: "Cognac"
    },
    {
      id: generateId(),
      name: "Ribbed Tank Top",
      category: "Tops",
      description: "Essential ribbed tank in soft cotton",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&auto=format&fit=crop&q=60",
      price: "24.99",
      store: "Everlane",
      size: "XS-XL",
      color: "White"
    }
  ];

  // If count is less than or equal to items length, return the first 'count' items
  if (count <= items.length) {
    return items.slice(0, count);
  }

  // If count is greater than items length, duplicate items to reach the desired count
  const result: ApparelItem[] = [];
  while (result.length < count) {
    const itemsToCopy = count - result.length;
    const itemsToAdd = items.slice(0, Math.min(itemsToCopy, items.length)).map(item => ({
      ...item,
      id: generateId(), // Generate new ID for duplicated items
    }));
    result.push(...itemsToAdd);
  }
  return result;
} 