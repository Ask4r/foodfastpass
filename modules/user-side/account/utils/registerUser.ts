export default async function (email: string, username: string, password: string) {

  const { data } = await useCustomFetch(
    '/auth/users/',
    {
      method: 'POST',
      body: {
        email,
        username,
        password,
        re_password: password,
      },
    },
  );

}