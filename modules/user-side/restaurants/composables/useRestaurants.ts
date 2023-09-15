import type { Restaurant } from '~/modules/restaurants/types';


const restaurants = reactive<Restaurant[]>([]);


export default function (): Restaurant[] {
  const areRestaurantsEmpty = Object.keys(restaurants).length === 0;

  if (!areRestaurantsEmpty)
    return restaurants;

  onMounted(() => {
    nextTick(async () => {
      const response = await getRestaurants();

      sortRestaurants(response);

      restaurants.splice(0);
      restaurants.push(...response);
    });
  });

  return restaurants;
}
