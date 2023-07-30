import type { Dish } from '~/modules/menu/types';
import type{ Ref } from 'vue';


const currentDish = ref<Dish | null>(null);


export default function (dish?: Dish): Ref<Dish | null> {

  if (dish) {
    currentDish.value = dish;
  }

  return currentDish;
}
