export interface ApparelItem {
  id: string;
  name: string;
  image: any; // This will be the require() path to the image
  category: string;
  description: string;
}

export const apparelItems: ApparelItem[] = [
  {
    id: '1',
    name: 'Summer Dress',
    image: require('../assets/images/summer-dress.jpg'),
    category: 'Dresses',
    description: 'Light and airy summer dress perfect for warm days',
  },
  {
    id: '2',
    name: 'Denim Jacket',
    image: require('../assets/images/denim-jacket.jpg'),
    category: 'Jackets',
    description: 'Classic denim jacket for any casual occasion',
  },
  
  // Add more items as needed
]; 