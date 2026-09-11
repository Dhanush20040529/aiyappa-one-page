// ============================================================
// AIYAPPA TEXTILES — PRODUCT CATALOGUE
// 8 Collections: Women, Men, Girls, Boys, New Born,
//                Home & Kitchen, Giftings, Toys & Games
// ============================================================


// ─────────────────────────────────────────────────────────────
// SUBCATEGORY TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────

/*  ||  WOMEN Collection  || */
import kurthi from "../assets/womens/kurthi.webp"
import ThreePieceKurtiSet from "../assets/womens/3-Piece-Kurti-Set.webp"
import auraSilkSaree from "../assets/womens/aura-silk-saree.webp"
import banarasSaree from "../assets/womens/banaras-saree.webp"
import bottomWear from "../assets/womens/bottom-wear.webp"
import chettinadCottonSaree from "../assets/womens/chettinad-cotton-saree.webp"
import maternityWear from "../assets/womens/maternity-wear.webp"
import nightWear from "../assets/womens/night-wear.webp"
import shortKurthi from "../assets/womens/short-kurthi.webp"
import softSilkSaree from "../assets/womens/soft-silk-saree.webp"
import sungudiCottonSaree from "../assets/womens/sungudi-cotton-saree.webp"

/*  ||  MENS Collection ||*/
import casualShirt from "../assets/men/casual-shirt.webp"
import formalShirthirt from "../assets/men/formal-shirt.webp"
import vestiShirtCombo from "../assets/men/vesti-shirt-combo.webp"
import whiteShirt from "../assets/men/white-shirt.webp"

/*  || GIRLS Collection  || */
import cottonFrock from "../assets/girls/cotton-frock.webp"
import leggings from "../assets/girls/leggings.webp"
import westernWear from "../assets/girls/western-wear.webp"

/*  || BOYS Collection  || */
import boysShirt from "../assets/boys/Boys-Cotton-Shirt.webp"
import boysVestiShirtCombo from "../assets/boys/boys-Vesti-Shirt-Combo.webp"

/*  || NEW BORN Collection  || */
import bornBabyGiftBoxSet from "../assets/new-born/bornbabygiftbox.webp"
import feedingBottle from "../assets/new-born/feeding-Bottle.webp"

/*  || HOME & KITCHEN Collection  || */
import homeKitchen from "../assets/home-kitchen/home-kitchen.webp"

/*  || GIFTINGS Collection  || */
import allGifts from "../assets/gifts/gift.webp"

/*  || TOYS & GAMES Collection  || */
import kidsToysGifts from "../assets/toys-games/toys-games.webp"



export const SUBCATEGORY_TYPES = {
  women: [
    { key: 'kurti', label: 'Kurti' },
    { key: 'short-kurti', label: 'Short Kurti' },
    { key: 'night-wear', label: 'Night Wear' },
    { key: 'bottom-wear', label: 'Bottom Wear' },
    { key: 'chettinad-cotton-saree', label: 'Chettinad Cotton Saree' },
    { key: 'soft-silk-saree', label: 'Soft Silk Saree' },
    { key: 'sungudi-cotton-saree', label: 'Sungudi Cotton Saree' },
    { key: 'maternity-wear', label: 'Maternity Wear' },
    { key: 'aura-silk-saree', label: 'Aura Silk Saree' },
    { key: 'banaras-saree', label: 'Banaras Saree' },
    { key: '3-piece-kurti-set', label: '3-Piece Kurti Set' },
  ],

  men: [
    { key: 'vesti-shirt-combo', label: 'Vesti Shirt Combo' },
    { key: 'casual-shirts', label: 'Casual Shirts' },
    { key: 'formal-shirts', label: 'Formal Shirts' },
    { key: 'white-shirts', label: 'White Shirts' },
  ],

  girls: [
    { key: 'western-wear', label: 'Western Wear' },
    { key: 'leggings', label: 'Leggings' },
    { key: 'cotton-frock', label: 'Cotton Frock' },
  ],

  boys: [
    { key: 'boys-vesti-shirt-combo', label: 'Boys Vesti Shirt Combo' },
    { key: 'boys-shirts', label: 'Boys Shirts' },
  ],

  'new-born': [
    {
      key: 'born-baby-gift-box-set',
      label: 'Born Baby Gift Box Set',
    },
    {
      key: 'feeding-bottle',
      label: 'Feeding Bottle',
    },
  ],

  'home-kitchen': [
    {
      key: 'home-kitchen',
      label: 'Home & Kitchen',
    },
  ],

  giftings: [
    {
      key: 'all-gifts',
      label: 'All Types of Gifts',
    },
  ],

  'toys-games': [
    {
      key: 'kids-toys-gifts',
      label: 'Kids Toys & Gifts',
    },
  ],
};


// ─────────────────────────────────────────────────────────────
// PRODUCT ENTRIES
// ─────────────────────────────────────────────────────────────

export const PRODUCTS = [

  // ═══════════════════════════════════════════════════════════
  // WOMEN
  // ═══════════════════════════════════════════════════════════

  {
    id: 'w-kurti-01',
    name: 'Kurti',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'kurti',
    subcategoryLabel: 'Kurti',
    price: 'Price on enquiry',
    badge: 'Bestseller',
    image:kurthi,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rose Pink', hex: '#D87093' },
      { name: 'Indigo', hex: '#4B0082' },
      { name: 'Sage Green', hex: '#6B8C5A' },
      { name: 'Ivory', hex: '#F6F0E7' },
    ],
    description:
      'Lightweight cotton kurti with vibrant floral prints, perfect for casual and semi-formal occasions.',
  },

  {
    id: 'w-short-kurti-01',
    name: 'Short Cotton Kurti',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'short-kurti',
    subcategoryLabel: 'Short Kurti',
    price: 'Price on enquiry',
    badge: 'Trending',
    image:shortKurthi,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Turquoise', hex: '#40E0D0' },
      { name: 'Maroon', hex: '#7D2435' },
      { name: 'Mustard', hex: '#E3A020' },
      { name: 'Cream', hex: '#F6F0E7' },
    ],
    description:
      'Breezy short kurti crafted from fine cotton with intricate block-print motifs for everyday elegance.',
  },

  {
    id: 'w-nightwear-01',
    name: 'Premium Night Wear Set',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'night-wear',
    subcategoryLabel: 'Night Wear',
    price: 'Price on enquiry',
    badge: 'New',
    image:nightWear,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Lilac', hex: '#B39DDB' },
      { name: 'Blush Pink', hex: '#F8BBD0' },
      { name: 'Sky Blue', hex: '#B3E5FC' },
      { name: 'Ivory', hex: '#F6F0E7' },
    ],
    description:
      'Super-soft cotton night wear set with relaxed silhouette and breathable fabric for restful comfort.',
  },

  {
    id: 'w-bottom-01',
    name: 'Bottom Wear',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'bottom-wear',
    subcategoryLabel: 'Bottom Wear',
    price: 'Price on enquiry',
    badge: 'Popular',
    image:bottomWear,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#2E251F' },
      { name: 'Cream', hex: '#F6F0E7' },
      { name: 'Navy', hex: '#1B263B' },
      { name: 'Maroon', hex: '#7D2435' },
    ],
    description:
      'Flowy palazzo-style bottom wear with an elastic waistband, ideal for pairing with kurtis or tops.',
  },

  {
    id: 'w-chettinad-01',
    name: 'Chettinad Cotton Saree',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'chettinad-cotton-saree',
    subcategoryLabel: 'Chettinad Cotton Saree',
    price: 'Price on enquiry',
    badge: 'Heritage',
    image:chettinadCottonSaree,
    sizes: ['Free Size'],
    colors: [
      { name: 'Black & White', hex: '#2E251F' },
      { name: 'Brick Red', hex: '#A0522D' },
      { name: 'Indigo', hex: '#3F51B5' },
      { name: 'Gold', hex: '#B08A4A' },
    ],
    description:
      'Authentic Chettinad handloom cotton saree with signature check and stripe patterns, woven in Karaikudi.',
  },

  {
    id: 'w-soft-silk-01',
    name: 'Soft Silk Saree',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'soft-silk-saree',
    subcategoryLabel: 'Soft Silk Saree',
    price: 'Price on enquiry',
    badge: 'Signature',
    image:softSilkSaree,
    sizes: ['Free Size'],
    colors: [
      { name: 'Maroon', hex: '#7D2435' },
      { name: 'Peacock Blue', hex: '#005F73' },
      { name: 'Rose Gold', hex: '#B76E79' },
      { name: 'Emerald', hex: '#1F5A3A' },
    ],
    description:
      'Luxuriously soft silk saree with delicate zari borders and an elegant fall, perfect for weddings and festivals.',
  },

  {
    id: 'w-sungudi-01',
    name: 'Sungudi Cotton Saree',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'sungudi-cotton-saree',
    subcategoryLabel: 'Sungudi Cotton Saree',
    price: 'Price on enquiry',
    badge: 'Traditional',
    image:sungudiCottonSaree,
    sizes: ['Free Size'],
    colors: [
      { name: 'Vermilion', hex: '#E34234' },
      { name: 'Peacock Green', hex: '#2D8653' },
      { name: 'Royal Blue', hex: '#1B3A6B' },
      { name: 'Turmeric Yellow', hex: '#D4A017' },
    ],
    description:
      'Classic Madurai Sungudi cotton saree with fine hand-tied bandhani dots and vibrant natural dyes.',
  },

  {
    id: 'w-maternity-01',
    name: 'Maternity Wear Set',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'maternity-wear',
    subcategoryLabel: 'Maternity Wear',
    price: 'Price on enquiry',
    badge: 'Comfort Fit',
    image:maternityWear,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Soft Peach', hex: '#FFCBA4' },
      { name: 'Mint', hex: '#B2DFDB' },
      { name: 'Lavender', hex: '#E1BEE7' },
      { name: 'Ivory', hex: '#F6F0E7' },
    ],
    description:
      'Thoughtfully designed maternity wear set with stretchable fabric, adjustable fit, and timeless comfort.',
  },

  {
    id: 'w-aura-silk-01',
    name: 'Aura Silk Saree',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'aura-silk-saree',
    subcategoryLabel: 'Aura Silk Saree',
    price: 'Price on enquiry',
    badge: 'Exclusive',
    image:auraSilkSaree,
    sizes: ['Free Size'],
    colors: [
      { name: 'Pearl White', hex: '#F5F0EB' },
      { name: 'Deep Maroon', hex: '#581829' },
      { name: 'Teal', hex: '#008080' },
      { name: 'Gold', hex: '#B08A4A' },
    ],
    description:
      'The Aura Silk Saree — our house signature — draped in pure silk with a luminous sheen and heritage motifs.',
  },

  {
    id: 'w-banaras-01',
    name: 'Banaras Saree',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: 'banaras-saree',
    subcategoryLabel: 'Banaras Saree',
    price: 'Price on enquiry',
    badge: 'Masterpiece',
    image:banarasSaree,
    sizes: ['Free Size'],
    colors: [
      { name: 'Royal Blue', hex: '#1B3A6B' },
      { name: 'Maroon', hex: '#7D2435' },
      { name: 'Violet', hex: '#6A0DAD' },
      { name: 'Green', hex: '#1F5A3A' },
    ],
    description:
      'Opulent Banarasi silk saree woven with intricate gold brocade and meenakari floral motifs from Varanasi.',
  },

  {
    id: 'w-3piece-01',
    name: '3-Piece Kurti Set',
    collection: 'women',
    collectionLabel: 'Women',
    subcategory: '3-piece-kurti-set',
    subcategoryLabel: '3-Piece Kurti Set',
    price: 'Price on enquiry',
    badge: 'Complete Look',
    image:ThreePieceKurtiSet,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sea Green', hex: '#2E8B57' },
      { name: 'Dusty Pink', hex: '#C99EA3' },
      { name: 'Saffron', hex: '#F4A300' },
      { name: 'Cream', hex: '#F6F0E7' },
    ],
    description:
      'Elegant 3-piece kurti set — kurti, palazzo & dupatta — designed for festive occasions and family functions.',
  },


  // ═══════════════════════════════════════════════════════════
  // MEN
  // ═══════════════════════════════════════════════════════════

  {
    id: 'm-vesti-01',
    name: 'Vesti Shirt Combo',
    collection: 'men',
    collectionLabel: 'Men',
    subcategory: 'vesti-shirt-combo',
    subcategoryLabel: 'Vesti Shirt Combo',
    price: 'Price on enquiry',
    badge: 'Traditional',
    image:vestiShirtCombo,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Cream & Gold', hex: '#F6F0E7' },
      { name: 'White & Gold', hex: '#FFFFFF' },
      { name: 'Cream & Maroon', hex: '#F0E8DC' },
    ],
    description:
      'Authentic South Indian vesti and matching shirt combo in fine cotton, ideal for temple visits and traditional events.',
  },

  {
    id: 'm-casual-shirt-01',
    name: 'Casual Cotton Shirt',
    collection: 'men',
    collectionLabel: 'Men',
    subcategory: 'casual-shirts',
    subcategoryLabel: 'Casual Shirts',
    price: 'Price on enquiry',
    badge: 'Everyday',
    image:casualShirt,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sky Blue', hex: '#5B9BD5' },
      { name: 'Olive', hex: '#6B8E23' },
      { name: 'Maroon', hex: '#7D2435' },
      { name: 'Cream', hex: '#F6F0E7' },
    ],
    description:
      'Breezy premium cotton casual shirt with a relaxed fit, designed for comfortable all-day wear.',
  },

  {
    id: 'm-formal-shirt-01',
    name: 'Classic Formal Shirt',
    collection: 'men',
    collectionLabel: 'Men',
    subcategory: 'formal-shirts',
    subcategoryLabel: 'Formal Shirts',
    price: 'Price on enquiry',
    badge: 'Office Ready',
    image:formalShirthirt,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Light Blue', hex: '#B0C4DE' },
      { name: 'Pale Yellow', hex: '#FFF8DC' },
      { name: 'Light Grey', hex: '#D3D3D3' },
    ],
    description:
      'Sharp and structured formal shirt with premium fabric finish, ergonomic fit, and crisp collar.',
  },

  {
    id: 'm-white-shirt-01',
    name: 'Premium White Shirt',
    collection: 'men',
    collectionLabel: 'Men',
    subcategory: 'white-shirts',
    subcategoryLabel: 'White Shirts',
    price: 'Price on enquiry',
    badge: 'Essential',
    image:whiteShirt,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Off White', hex: '#FAFAF0' },
    ],
    description:
      'Our signature premium white shirt — versatile, timeless, and crafted from pure fine cotton for all occasions.',
  },


  // ═══════════════════════════════════════════════════════════
  // KIDS — GIRLS
  // ═══════════════════════════════════════════════════════════

  {
    id: 'k-western-01',
    name: 'Girls Western Wear',
    collection: 'girls',
    collectionLabel: 'Girls',
    subcategory: 'western-wear',
    subcategoryLabel: 'Western Wear',
    price: 'Price on enquiry',
    badge: 'Trending',
    image:westernWear,
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    colors: [
      { name: 'Pink', hex: '#D87093' },
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Yellow', hex: '#E3A020' },
    ],
    description:
      'Comfortable and stylish western wear for girls, designed for everyday outings and special occasions.',
  },

  {
    id: 'k-leggings-01',
    name: 'Girls Cotton Leggings',
    collection: 'girls',
    collectionLabel: 'Girls',
    subcategory: 'leggings',
    subcategoryLabel: 'Leggings',
    price: 'Price on enquiry',
    badge: 'Everyday',
    image:leggings,
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    colors: [
      { name: 'Black', hex: '#222222' },
      { name: 'Maroon', hex: '#7D2435' },
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Pink', hex: '#D87093' },
    ],
    description:
      'Soft and stretchable cotton leggings for girls with a comfortable fit for everyday wear.',
  },

  {
    id: 'k-frock-01',
    name: 'Girls Cotton Frock',
    collection: 'girls',
    collectionLabel: 'Girls',
    subcategory: 'cotton-frock',
    subcategoryLabel: 'Cotton Frock',
    price: 'Price on enquiry',
    badge: 'Popular',
    image:cottonFrock,
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    colors: [
      { name: 'Peach', hex: '#FFCBA4' },
      { name: 'Lavender', hex: '#B39DDB' },
      { name: 'Mint', hex: '#B2DFDB' },
      { name: 'Yellow', hex: '#E3A020' },
    ],
    description:
      'Lightweight cotton frock with a playful design, perfect for parties, outings and everyday comfort.',
  },


  // ═══════════════════════════════════════════════════════════
  // KIDS — BOYS
  // ═══════════════════════════════════════════════════════════

  {
    id: 'k-boys-vesti-01',
    name: 'Boys Vesti Shirt Combo',
    collection: 'boys',
    collectionLabel: 'Boys',
    subcategory: 'boys-vesti-shirt-combo',
    subcategoryLabel: 'Boys Vesti Shirt Combo',
    price: 'Price on enquiry',
    badge: 'Traditional',
    image:boysVestiShirtCombo,    
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    colors: [
      { name: 'White & Gold', hex: '#FFFFFF' },
      { name: 'Cream & Gold', hex: '#F6F0E7' },
    ],
    description:
      'Traditional boys vesti and shirt combo designed for festivals, temple visits and family celebrations.',
  },

  {
    id: 'k-boys-shirt-01',
    name: 'Boys Cotton Shirt',
    collection: 'boys',
    collectionLabel: 'Boys',
    subcategory: 'boys-shirts',
    subcategoryLabel: 'Boys Shirts',
    price: 'Price on enquiry',
    badge: 'Everyday',
    image:boysShirt,
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1B263B' },
      { name: 'Green', hex: '#1F5A3A' },
    ],
    description:
      'Comfortable cotton shirts for boys, suitable for school functions, outings and casual occasions.',
  },


  // ═══════════════════════════════════════════════════════════
  // NEW BORN
  // ═══════════════════════════════════════════════════════════

  {
    id: 'nb-gift-box-01',
    name: 'Born Baby Gift Box Set',
    collection: 'new-born',
    collectionLabel: 'New Born',
    subcategory: 'born-baby-gift-box-set',
    subcategoryLabel: 'Born Baby Gift Box Set',
    price: 'Price on enquiry',
    badge: 'Gift Ready',
    image:bornBabyGiftBoxSet,
    sizes: ['New Born', '0-3M', '3-6M'],
    colors: [
      { name: 'Baby Pink', hex: '#F8BBD0' },
      { name: 'Baby Blue', hex: '#B3E5FC' },
      { name: 'Cream', hex: '#F6F0E7' },
    ],
    description:
      'Beautiful newborn baby gift box set with thoughtfully selected essentials, perfect for welcoming a little one.',
  },

  {
    id: 'nb-feeding-bottle-01',
    name: 'Baby Feeding Bottle',
    collection: 'new-born',
    collectionLabel: 'New Born',
    subcategory: 'feeding-bottle',
    subcategoryLabel: 'Feeding Bottle',
    price: 'Price on enquiry',
    badge: 'Baby Essential',
    image:feedingBottle,
    sizes: ['120ml', '240ml', '300ml'],
    colors: [
      { name: 'Pink', hex: '#F8BBD0' },
      { name: 'Blue', hex: '#B3E5FC' },
      { name: 'Cream', hex: '#F6F0E7' },
    ],
    description:
      'Practical baby feeding bottle designed for everyday newborn and infant feeding needs.',
  },


  // ═══════════════════════════════════════════════════════════
  // HOME & KITCHEN
  // ═══════════════════════════════════════════════════════════

  {
    id: 'hk-essentials-01',
    name: 'Home & Kitchen Essentials',
    collection: 'home-kitchen',
    collectionLabel: 'Home & Kitchen',
    subcategory: 'home-kitchen',
    subcategoryLabel: 'Home & Kitchen',
    price: 'Price on enquiry',
    badge: 'Home Essential',
    image:homeKitchen,
    sizes: ['Standard'],
    colors: [
      { name: 'Assorted', hex: '#F6F0E7' },
    ],
    description:
      'Useful home and kitchen essentials selected for everyday household needs.',
  },


  // ═══════════════════════════════════════════════════════════
  // GIFTINGS
  // ═══════════════════════════════════════════════════════════

  {
    id: 'g-all-gifts-01',
    name: 'All Types of Gifts',
    collection: 'giftings',
    collectionLabel: 'Giftings',
    subcategory: 'all-gifts',
    subcategoryLabel: 'All Types of Gifts',
    price: 'Price on enquiry',
    badge: 'Gift Collection',
    image:allGifts,
    sizes: ['Standard'],
    colors: [
      { name: 'Assorted', hex: '#B08A4A' },
    ],
    description:
      'A complete collection of gifting options including baby gifts, wedding gifts, festival gifts, family gifts, return gifts, corporate gifts and traditional gifts.',
  },


  // ═══════════════════════════════════════════════════════════
  // TOYS & GAMES
  // ═══════════════════════════════════════════════════════════

  {
    id: 'tg-kids-toys-gifts-01',
    name: 'Kids Toys & Gifts',
    collection: 'toys-games',
    collectionLabel: 'Toys & Games',
    subcategory: 'kids-toys-gifts',
    subcategoryLabel: 'Kids Toys & Gifts',
    price: 'Price on enquiry',
    badge: 'Kids Collection',
    image:kidsToysGifts,
    sizes: ['Standard'],
    colors: [
      { name: 'Assorted', hex: '#B39DDB' },
    ],
    description:
      'A fun collection of kids toys and gifts including educational toys, indoor games, outdoor games, baby toys, kids gifts and kids return gifts.',
  },
];


// ─────────────────────────────────────────────────────────────
// COLLECTION IDS
// ─────────────────────────────────────────────────────────────

export const COLLECTION_IDS = [
  'all',
  'women',
  'men',
  'girls',
  'boys',
  'new-born',
  'home-kitchen',
  'giftings',
  'toys-games',
];