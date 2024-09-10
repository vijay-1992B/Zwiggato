const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6186784&lng=77.05335339999999');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
