const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Dormies API' });
});

const listingsRoutes = require('./routes/listings');
const apartmentsRoutes = require('./routes/apartments');

app.use('/api/listings', listingsRoutes);
app.use('/api/apartments', apartmentsRoutes);


app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});




app.listen(3000);