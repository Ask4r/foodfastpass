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

export { Dish, FoodProperties };