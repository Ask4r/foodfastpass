import type { RawDish } from '~/modules/user-side/menu/types';


export default async function (restaurantName: string): Promise<RawDish[]> {

  const { data} = await useCustomFetch(
    '/menu/getRestProd/',
    {
      method: 'GET',
      server: false,
      params: {
        name: restaurantName,
        lazy: true,
      },
    },
  );

  return data.value as RawDish[];
}
