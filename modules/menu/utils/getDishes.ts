import type { RawDish } from '~/modules/menu/types';


export default async function (restaurantName: string): Promise<RawDish[]> {

  const { data, refresh } = await useCustomFetch(
    '/menu/getRestProd/',
    {
      method: 'GET',
      server: false,
      params: {
        name: restaurantName,
      },
    },
  );

  await refresh();

  return data.value as RawDish[];
}
