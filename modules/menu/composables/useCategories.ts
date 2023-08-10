import type { Categories } from '~/modules/menu/types';


const categories = reactive<Categories>({});


export default function (restaurantName?: string): Categories {

  onMounted(() => {
    if (!restaurantName)
      return;

    getDishes(restaurantName)
      .then((response) => {
        const menu = parseDishes(response);
        for (const category in categories) delete categories[category];
        Object.assign(categories, menu);
      });

  });

  return categories;
}
