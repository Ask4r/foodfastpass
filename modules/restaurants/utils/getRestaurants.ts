import type { Restaurant } from '~/modules/restaurants/types';


export default async function (): Promise<Restaurant[]> {
  const { data, refresh } = await useCustomFetch(
    '/menu/getRest',
    {
      method: 'GET',
      server: false,
    },
  );

  await refresh();

  return data.value as Restaurant[];
}
