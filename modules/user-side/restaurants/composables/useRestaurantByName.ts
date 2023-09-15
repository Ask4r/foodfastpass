import { Restaurant } from '~/modules/restaurants/types';


const restaurants = useRestaurants();

export default function (restaurantName: string): Restaurant | undefined {

  for (const restaurant of restaurants)
    if (restaurant.name === restaurantName)
      return restaurant

}