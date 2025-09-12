export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
