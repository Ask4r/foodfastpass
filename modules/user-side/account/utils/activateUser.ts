export default async function (uid: string, token: string) {

  const { data } = await useCustomFetch(
    '/auth/users/activation/',
    {
      method: 'POST',
      body: {
        uid,
        token,
      },
    },
  );

}