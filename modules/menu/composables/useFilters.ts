const inclusiveFilters = [
  'Vegan',
  'Vegetarian',
];

const exclusiveFilters = [
  'Diary',
  'Gluten/Wheat',
  'Shellfish',
  'Eggs',
  'Soya',
  'Peanut',
  'Nuts',
];


const chosenInclusiveFilters = reactive<string[]>([]);

const chosenExclusiveFilters = reactive<string[]>([]);


function toggleFilter(filter: string) {
  if (inclusiveFilters.includes(filter)) {
    toggleArrayItem(filter, chosenInclusiveFilters);
  } else if (exclusiveFilters.includes(filter)) {
    toggleArrayItem(filter, chosenExclusiveFilters);
  }
}

function areFiltersApproved(filtersSet: string[]): boolean {
  const passIncludes =
    chosenInclusiveFilters.every(filter => {
      return filtersSet.includes(filter);
    });

  const passExcludes =
    chosenExclusiveFilters.every(filter => {
      return !filtersSet.includes(filter);
    });

  return passIncludes && passExcludes;
}


export default function () {
  return {
    inclusiveFilters,
    exclusiveFilters,
    chosenInclusiveFilters,
    chosenExclusiveFilters,
    toggleFilter,
    areFiltersApproved,
  };
}