// loading the express library and creating a router for all the apartments routes
const express = require('express');
const apartmentsController = require('../controllers/apartments');
const router = express.Router();

// returns all apartments there are
router.get('/', apartmentsController.getApartments);

router.get('/summary', apartmentsController.getSummary);

router.get('/search', apartmentsController.getfilterApartments);

// placeholders for future operations
router.get('/add', apartmentsController.addApartments);
router.get('/update', apartmentsController.updateApartments);
router.get('/delete', apartmentsController.deleteApartments);

// returns a specific apartment by its ID (MUST be at the bottom)
router.get('/:apartmentId', apartmentsController.getApartmentById);

// exports the router so app files can use it
module.exports = router;