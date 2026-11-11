//loading the express library and creating the server 
const express = require('express');
const app = express();

//home page messages
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Dormies API' });
});

//loading the listings and apartments route files 
const listingsRoutes = require('./routes/listings');
const apartmentsRoutes = require('./routes/apartments');

//connects the routes file to the server
app.use('/api/listings', listingsRoutes);
app.use('/api/apartments', apartmentsRoutes);

//error, runs only if request doesnt match any of the routes above
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});


//uploads the server listening to port 3000
app.listen(3000);
