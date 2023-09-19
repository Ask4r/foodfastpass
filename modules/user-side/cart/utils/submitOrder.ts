export default async function () {

  const token = useAuthToken();

  if (token.length === 0) {
    navigateTo('/');
    return;
  }


  const { data } = await useCustomFetch(
    '/order/GetOrderInfo/',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ token }`,
      },
    }
  );


  console.log(data.value);
}