// Load the express library and initialize the app
const express = require('express');
const app = express();

// Base route: Welcome message for the home page
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Dormies API' });
});

// Import route files for listings and apartments
const listingsRoutes = require('./routes/listings');
const apartmentsRoutes = require('./routes/apartments');

// Mount the routes to their specific API endpoints
app.use('/api/listings', listingsRoutes);
app.use('/api/apartments', apartmentsRoutes);

// Catch-all middleware for 404 errors (Route not found)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Dormies Server is running on port 3000');
});