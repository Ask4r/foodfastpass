import type { Restaurant } from '~/modules/restaurants/types';


let restaurants = reactive<Restaurant[]>([]);


export default function (): Restaurant[] {

  onMounted(() => {
    getRestaurants()
      .then((response) => {
        sortRestaurants(response);

        restaurants.splice(0);
        restaurants.push(...response);
      });
  });

  return restaurants;
}
