export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
};

export  interface Products {
  name: string;
  price: number;
  description: string;
  image: {
      asset: {
          _ref: string;
          _type: string;
      };
  };
  category: 'tshirt' | 'short' | 'jeans' | 'hoodie' | 'shirt';
  discountPercent?: number;
  isNew: boolean;
  colors: string[];
  sizes: string[];
}




