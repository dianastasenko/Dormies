// loading the express library and creating a router for all the listings routes
const express = require('express');
const listingsController = require('../controllers/listings');
const router = express.Router();

// returns all listings
router.get('/', listingsController.getListings);

// returns just the listings that are available now
router.get('/availableNow', listingsController.getAvailableNow);

// advanced search filter
router.get('/search', listingsController.getFilteredListings);

// placeholders for future operations
router.get('/add', listingsController.addListings);
router.get('/update', listingsController.updateListings);
router.get('/delete', listingsController.deleteListings);

// returns a specific listing by its ID (MUST be at the bottom!)
router.get('/:listingId', listingsController.getListingById);

// exports the router so app files can use it
module.exports = router;