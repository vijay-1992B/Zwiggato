// src/api/proxy.js

import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query; // Get the target URL from the query parameters

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        // Forward original headers if necessary
        ...req.headers,
      },
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the resource', error });
  }
}
