import type { Restaurant } from '~/modules/restaurants/types';


export default function (restaurants: Array<Restaurant>) {
  restaurants.sort((a, b) => {
    return a.priority > b.priority ? 1 : -1;
  });
}
