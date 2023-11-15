export interface PackageContent {
  id: number;
  image: any;
  country: string;
  touristPlace: string;
  reviewsStar: number;
  description: string;
  pages_for_show: string[];
  category: string[];
  offer: number;
  price: number;
  territory: string;
  days: number;
  guideName?: string;
  guideImage: string;
  position?: string;
}
