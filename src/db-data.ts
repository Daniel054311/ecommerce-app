export const CLOTHING_PRODUCTS: any = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    imageUrl: './assets/retail1.png',
    description: "A comfortable and stylish casual shirt for men",
    price: 39.99,
    category: "Men's Fashion",
    quantity: 10, // Set default quantity
  },
  {
    id: 2,
    name: "Women's Jeans",
    imageUrl: './assets/retail2.png',
    description: "Classic denim jeans for women with a perfect fit",
    price: 49.99,
    category: "Women's Fashion",
    quantity: 5, // Set default quantity
  },
  {
    id: 3,
    name: 'Unisex Hoodie',
    description: "Stay warm and stylish with our cozy unisex hoodie",
    imageUrl: './assets/retail3.png',
    price: 29.99,
    category: 'Unisex',
    quantity: 8, // Set default quantity
  },
  {
    id: 4,
    name: "Men's Formal Suit",
    imageUrl: './assets/retail4.png',
    description: "Elegant formal suit for men, perfect for special occasions",
    price: 149.99,
    category: "Men's Fashion",
    quantity: 15, // Set default quantity
  },
  {
    id: 5,
    name: "Women's Summer Dress",
    imageUrl: './assets/retail5.png',
    description: "Light and breezy summer dress for women",
    price: 59.99,
    category: "Women's Fashion",
    quantity: 20, // Set default quantity
  },
  {
    id: 6,
    name: 'Kids Cartoon T-Shirt',
    description: "Adorable cartoon-themed T-shirt for kids",
    imageUrl: './assets/retail6.png',
    price: 19.99,
    category: 'Kids Fashion',
    quantity: 12, // Set default quantity
  },
  {
    id: 7,
    name: 'Sporty Running Shoes',
    description: "High-performance running shoes for your active lifestyle",
    imageUrl: './assets/retail7.png',
    price: 79.99,
    category: 'Athletic Footwear',
    quantity: 18, // Set default quantity
  },
  {
    id: 8,
    name: 'Cozy Winter Jacket',
    description: "Stay warm and stylish during the winter with our cozy jacket",
    imageUrl: './assets/retail8.png',
    price: 99.99,
    category: 'Winter Wear',
    quantity: 25, // Set default quantity
  },
  {
    id: 9,
    name: 'Formal Black Dress',
    description: "Classic black dress for formal occasions",
    imageUrl: './assets/retail9.png',
    price: 69.99,
    category: "Women's Fashion",
    quantity: 14, // Set default quantity
  },
  {
    id: 10,
    name: "Men's Leather Jacket",
    description: "Stylish leather jacket for men with a rugged look",
    imageUrl: './assets/retail10.png',
    price: 119.99,
    category: "Men's Fashion",
    quantity: 22, // Set default quantity
  },
  {
    id: 11,
    name: 'Casual Sneakers',
    description: "Comfortable and trendy sneakers for everyday wear",
    imageUrl: './assets/retail11.png',
    price: 59.99,
    category: 'Footwear',
    quantity: 30, // Set default quantity
  },
  {
    id: 12,
    name: 'Summer Hat',
    description: "Stay cool in the summer with our stylish sun hat",
    imageUrl: './assets/retail13.png',
    price: 29.99,
    category: 'Accessories',
    quantity: 16, // Set default quantity
  },
  {
    id: 13,
    name: 'Denim Skirt',
    description: "Fashionable denim skirt for a casual and chic look",
    imageUrl: './assets/retail14.png',
    price: 39.99,
    category: "Women's Fashion",
    quantity: 10, // Set default quantity
  },
  {
    id: 14,
    name: 'Hiking Boots',
    description: "Durable and comfortable hiking boots for outdoor adventures",
    imageUrl: './assets/retail15.png',
    price: 89.99,
    category: 'Outdoor Gear',
    quantity: 7, // Set default quantity
  },
  {
    id: 15,
    name: 'Striped Polo Shirt',
    description: "Classic striped polo shirt for a smart casual look",
    imageUrl: './assets/retail16.png',
    price: 34.99,
    category: "Men's Fashion",
    quantity: 12, // Set default quantity
  },
];

export function findProductById(productId: number) {
  return CLOTHING_PRODUCTS.find((product: { id: number }) => product.id == productId);
}
