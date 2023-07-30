interface Categories {
  [category: string]: Dish[];
}

interface Dish {
  id: number;
  name: string;
  price: string;
  images: string[];
  filters: string[];
  rating: number;
  description?: string;
  foodProperties?: FoodProperties;
}

interface FoodProperties {
  [propertyName: string]: {
    value: number | null
    unit: string
    main: boolean
  };
}

interface RawDish {
  id: number;
  name: string;
  category: string;
  price: string;
  currency: string;
  description: string | null;
  photo1: string | null;
  photo2: string | null;
  photo3: string | null;
  filters: string[];
  ratings: string;
  grams: number | null;
  calories: number | null;
  proteins: number | null;
  fats: number | null;
  carbohydrates: number | null;
}

export { Categories, Dish, RawDish, FoodProperties };
