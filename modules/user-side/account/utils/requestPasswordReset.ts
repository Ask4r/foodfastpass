export default async function (email: string, username: string) {


  const { data } = useCustomFetch(
    '/auth/users/reset_password/',
    {
      method: 'POST',
      body: {
        email,
        username,
      },
    },
  );

  return data.value;

}