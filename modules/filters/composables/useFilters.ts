interface Dish {
  filters: string[];
  rating: number;
}


const diets = [ 'Vegan', 'Vegetarian', 'Pescatarian' ];

const allergens = [ 'Diary', 'Gluten/Wheat', 'Shellfish',
  'Eggs', 'Soya', 'Peanut', 'Nuts', 'Celery', 'Mustard', 'Lupin',
  'Sulphites', 'Molluscs', 'Fish', 'Sesame' ];


const chosenDiets = reactive<string[]>([]);

const chosenAllergens = reactive<string[]>([]);

const chosenRating = ref<number>(0);


const filtersChange = createEventHook();


watchDeep(
  () => ([ chosenDiets, chosenAllergens, chosenRating ]),
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

  return passDiets
    && passAllergens
    && passRating;
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
    areFiltersApproved,
    reset,
    onFiltersChange: filtersChange.on,
  };
}
