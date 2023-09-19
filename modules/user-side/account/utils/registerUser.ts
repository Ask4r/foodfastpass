export default async function (email: string, username: string, password: string): Promise<any> {

  const { data, error, refresh } = await useCustomFetch(
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

  await refresh();

  // console.log(data.value);

  // console.log(error.value);

  return data.value;
}