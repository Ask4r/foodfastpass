export default function (token: string): {
  exp: number,
  user_id: number,
} | undefined {
  try {

    const base64Url = token.split('.')[1];

    const base64 = base64Url
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(ch => '%' + ('00' + ch.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );

    return JSON.parse(jsonPayload);

  } catch {
    return undefined;
  }
}