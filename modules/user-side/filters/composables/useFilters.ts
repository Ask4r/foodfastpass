import type { Dish } from '~/modules/menu/types';


const diets = [ 'Vegan', 'Vegetarian', 'Pescatarian' ];

const allergens = [ 'Diary', 'Gluten/Wheat', 'Shellfish',
  'Eggs', 'Soya', 'Peanut', 'Nuts', 'Celery', 'Mustard', 'Lupin',
  'Sulphites', 'Molluscs', 'Fish', 'Sesame' ];

const mealTypes = [ 'Breakfast', 'Lunch', 'Dinner' ];


const chosenDiets = reactive<string[]>([]);

const chosenAllergens = reactive<string[]>([]);

const chosenRating = ref<number>(0);

const chosenMealType = ref<string>('Lunch');


const filtersChange = createEventHook();


watchDeep(
  () => ([ chosenDiets, chosenAllergens, chosenRating, chosenMealType ]),
  () => filtersChange.trigger(null),
);


function areFiltersApproved(dish: Dish): boolean {

  const passDiets =
    chosenDiets.every(diet => {
      return dish.filters.includes(diet);
    });

  const passAllergens =
    chosenAllergens.every(allergen => {
      return !dish.filters.includes(allergen);
    });

  const passRating = dish.rating >= chosenRating.value;

  const passMeatType = dish.mealTypes.includes('ETC')
    || dish.mealTypes.includes(chosenMealType.value);

  return passDiets
    && passAllergens
    && passRating
    && passMeatType;
}

function reset() {
  chosenDiets.splice(0);
  chosenAllergens.splice(0);
  chosenRating.value = 0;
}

export default function () {
  return {
    diets,
    allergens,
    chosenDiets,
    chosenAllergens,
    chosenRating,
    chosenMealType,
    areFiltersApproved,
    reset,
    onFiltersChange: filtersChange.on,
  };
}
