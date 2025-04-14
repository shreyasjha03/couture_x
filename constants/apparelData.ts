export interface ApparelItem {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
}

const baseApparelItems: ApparelItem[] = [
  {
    id: '1',
    name: 'Summer Dress',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60',
    category: 'Dresses',
    description: 'Light and airy summer dress perfect for warm days',
  },
  {
    id: '2',
    name: 'Denim Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60',
    category: 'Jackets',
    description: 'Classic denim jacket for any casual occasion',
  },
  {
    id: '3',
    name: 'White T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60',
    category: 'Tops',
    description: 'Essential white t-shirt for everyday wear',
  },
  {
    id: '4',
    name: 'Black Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60',
    category: 'Bottoms',
    description: 'Versatile black jeans for any occasion',
  },
  {
    id: '5',
    name: 'Casual Blazer',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60',
    category: 'Jackets',
    description: 'Stylish blazer for smart casual looks',
  },
  {
    id: '6',
    name: 'Floral Skirt',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&auto=format&fit=crop&q=60',
    category: 'Skirts',
    description: 'Beautiful floral pattern skirt for spring',
  },
];

const additionalApparelItems: ApparelItem[] = [
  {
    id: '7',
    name: 'Striped Sweater',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60',
    category: 'Sweaters',
    description: 'Cozy striped sweater for chilly days',
  },
  {
    id: '8',
    name: 'Leather Boots',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60',
    category: 'Footwear',
    description: 'Classic leather boots for any outfit',
  },
  {
    id: '9',
    name: 'Silk Blouse',
    image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=500&auto=format&fit=crop&q=60',
    category: 'Tops',
    description: 'Elegant silk blouse for formal occasions',
  },
  {
    id: '10',
    name: 'Wool Coat',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60',
    category: 'Outerwear',
    description: 'Warm wool coat for winter days',
  },
  {
    id: '11',
    name: 'Pleated Skirt',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&auto=format&fit=crop&q=60',
    category: 'Skirts',
    description: 'Elegant pleated skirt for a polished look',
  },
  {
    id: '12',
    name: 'Knit Cardigan',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60',
    category: 'Sweaters',
    description: 'Versatile knit cardigan for layering',
  },
];

export const getApparelItems = (count: number): ApparelItem[] => {
  const allItems = [...baseApparelItems, ...additionalApparelItems];
  return allItems.slice(0, count);
}; 