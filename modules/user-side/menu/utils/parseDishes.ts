import type { Categories, Dish, FoodProperties, RawDish } from '~/modules/user-side/menu/types';


const currencyMap = {
  'eur': '€',
};

export default function (rawDishes: RawDish[], restaurantName: string): Categories {
  const categories: Categories = {};

  for (const dish of rawDishes) {
    const category = dish.category ?? 'Other dishes';

    if (!categories.hasOwnProperty(String(category)))
      categories[category] = [];

    const price = (currencyMap[dish.currency] ?? dish.currency) + Number(dish.price).toFixed(2);

    const images = [
      dish['photo1'],
      dish['photo2'],
      dish['photo3'],
    ].filter(photo => {
      return photo !== null;
    }) as string[];

    if (images.length === 0)
      images.push('/images/default-restaurant-card-image.png');


    const description = dish.description?.replaceAll(
      /(\s*\n+)+/g, '\n',
    );


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
      price,
      priceValue: Number(dish.price),
      currency: currencyMap[dish.currency] ?? dish.currency,
      images,
      filters: dish.filters ?? [],
      rating: Number(dish.ratings),
      description: description,
      foodProperties: foodProperties,
      restaurantName,
      mealTypes: dish.menuType,
    };

    categories[category].push(parsedDish);
  }

  return categories;
}
