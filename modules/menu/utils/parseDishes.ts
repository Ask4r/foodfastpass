import type { Categories, Dish, FoodProperties, RawDish } from '~/modules/menu/types';


export default function (rawDishes: RawDish[]): Categories {
  const categories: Categories = {};

  for (const dish of rawDishes) {
    const category = dish.category;

    if (!categories.hasOwnProperty(String(category)))
      categories[category] = [];


    const price = dish.currency + Number(dish.price).toFixed(2);


    const images = [
      dish['photo1'],
      dish['photo2'],
      dish['photo3'],
    ].filter(photo => {
      return photo !== null;
    }) as string[];

    if (images.length === 0)
      images.push('/images/default-restaurant-card-image.png');


    let foodProperties: FoodProperties = {
      'Net weight': { value: dish.grams, unit: 'g', main: true },
      'Energy value': { value: dish.calories, unit: 'kcal', main: true },
      'Proteins': { value: dish.proteins, unit: 'g', main: false },
      'Fats': { value: dish.fats, unit: 'g', main: false },
      'Carbohydrates': { value: dish.carbohydrates, unit: 'g', main: false },
    };

    const parsedDish: Dish = {
      id: dish.id,
      name: dish.name,
      price: price,
      images: images,
      filters: dish.filters,
      rating: Number(dish.ratings),
      description: dish.description ?? undefined,
      foodProperties: foodProperties ?? undefined,
    };

    categories[category].push(parsedDish);
  }

  return categories;
}
