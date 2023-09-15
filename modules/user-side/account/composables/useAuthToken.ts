export default function () {

  const authToken = useLocalStorage('foodfastpass_user_token', '', {
    mergeDefaults: true,
  });

  const now = useNow();

  const expire = parseJWT(authToken.value)?.exp ?? 0;

  const isExpired = expire * 1000 < now.value.getTime();

  if (isExpired) {
    return '';
  } else {
    return authToken.value;
  }

}