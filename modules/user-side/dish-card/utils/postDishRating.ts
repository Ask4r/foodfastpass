export default function (dishId: number, rating: number) {
  useCustomFetch(
    '/menu/postRating/',
    {
      method: 'POST',
      body: {
        pk: dishId,
        rating,
      },
    },
  );
}