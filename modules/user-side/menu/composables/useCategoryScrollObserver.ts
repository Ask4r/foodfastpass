const currentCategory = ref();


const handCategorySelect = createEventHook();

const scrollCategorySelect = createEventHook();


function handSetCategory(category: string) {
  handCategorySelect.trigger(category);
}

function scrollSetCategory(category: string) {
  currentCategory.value = category;
  scrollCategorySelect.trigger(category);
}

export default function () {
  return {
    currentCategory,
    handSetCategory,
    scrollSetCategory,
    onHandCategorySet: handCategorySelect.on,
    onScrollCategorySet: scrollCategorySelect.on,
  };
};
