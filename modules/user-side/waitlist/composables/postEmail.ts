export default async function (email: string, slug: string) {
  const { data } = await useCustomFetch(
    `/Information/${ slug }/`,
    {
      params: {
        email,
      },
    },
  );

  return data.value
}