const BASE_URL = 'https://dev.teledirectasia.com:3092';

export const ID = '3ac8f7b34f0d1fb7';

export const NAME = 'test' 

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
    body: JSON.stringify({ name, apiKey })
  }
).then((res)=> res.json());