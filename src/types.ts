export interface Phone {
  id: string;
  name: string;
  brand: string;
  image: string;
  stores: {
    name: string;
    url: string;
    price: string;
  }[];
  reviews: {
    text: string;
    rating: number;
    author: string;
  }[];
  videoReviews: {
    title: string;
    url: string;
    thumbnail: string;
  }[];
  releaseDate: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
}