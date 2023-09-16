import type { Dish } from '~/modules/user-side/menu/types';


interface Cart {
  [i: number]: {
    quantity: number
    dish: Dish
  };
}

const cart = useSessionStorage<Cart>('cart', {});


function add(dish: Dish) {
  cart.value.hasOwnProperty(dish.id) ?
    cart.value[dish.id].quantity++ :
    cart.value[dish.id] = { quantity: 1, dish };
}

function remove(dish: Dish) {
  if (cart.value.hasOwnProperty(dish.id) && cart.value[dish.id].quantity > 0)
    cart.value[dish.id].quantity--;
}

function refresh() {
  for (const dishId in cart.value)
    delete cart.value[dishId]
}

function priceSum(): string {
  if (Object.keys(cart.value).length == 0)
    return '0';

  let sum = 0;

  let currency = cart.value[
    Number(Object.keys(cart.value)[0])
    ].dish.currency;

  for (const position in cart.value)
    sum += cart.value[position].quantity * cart.value[position].dish?.priceValue;


  return currency + String(Number(sum).toFixed(2));
}

function isCheckoutReady(): boolean {

  const restaurantNames = new Set();

  const mealTypes = new Set();

  let dishesAmount = 0;

  for (const position in cart.value) {
    const name = cart.value[position].dish?.restaurantName;
    restaurantNames.add(name);

    const dishMealTypes = cart.value[position].dish?.mealTypes;
    dishMealTypes?.forEach(mealType => mealTypes.add(mealType));

    dishesAmount += cart.value[position].quantity;
  }

  mealTypes.delete('ETC');


  const areRestaurantsApproved = restaurantNames.size === 1;

  const areMealTypesApproved = mealTypes.size <= 1;

  const isAmountApproved = dishesAmount > 0;


  return areRestaurantsApproved
    && areMealTypesApproved
    && isAmountApproved;
}


export default function () {
  return {
    cart,
    add,
    remove,
    priceSum,
    isCheckoutReady,
    refresh
  };
}
