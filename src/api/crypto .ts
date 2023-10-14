// pages/api/crypto.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/');
    const cryptoData = response.data;
    res.status(200).json(cryptoData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch cryptocurrency data' });
  }
};
