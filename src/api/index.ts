export const BASE_URL = 'https://dev.teledirectasia.com:3092';

export const fetchUserData = async (
  apiKey: string,
  name: string,
) => await fetch(
  `${BASE_URL}/login`,
  {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name: 'Azri Farid', apiKey: '3ac8f7b34f0d1fb7' })
  }
).then((res)=> res.json());