interface DishSubmits {
  // dishId: rating
  [dishId: number]: number;
}


const submits = reactive<DishSubmits>({});


export default function () {
  return submits;
}
