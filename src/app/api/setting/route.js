import { setCookie } from 'next/cookies';

export default function handler(req, res) {
  setCookie(res, 'theme', 'dark', {
    sameSite: 'strict'
  });

  res.status(200).send('Cookie set successfully');
}
