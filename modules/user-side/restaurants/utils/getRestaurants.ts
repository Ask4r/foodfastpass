import type { Restaurant } from '~/modules/user-side/restaurants/types';


const restaurants = reactive<Restaurant[]>([]);

export default async function (): Promise<Restaurant[]> {

  const { data } = await useCustomFetch(
    '/menu/getRest',
    {
      method: 'GET',
      server: false,
      params: {
        lazy: true,
      },
    },
  );

  return data.value as Restaurant[];
}
