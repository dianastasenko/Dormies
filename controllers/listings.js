// controllers/listings.js

const listings = [ 
  {
    listingId: 1, 
    apartmentId: 5, // Single apartment (basePrice in apartments array is 2000)
    listingType: 'sublet', 
    price: 1000, // Custom price for the sublet period
    duration: '2 weeks', // ONLY sublets use this field to specify the timeframe
    description: 'Sublet for 2 weeks while I am on vacation',
    availability: 'future'
  },
  {
    listingId: 2, 
    apartmentId: 1, // Couples apartment (basePrice in apartments array is 3200)
    listingType: 'contract_end', 
    price: 3200, // Standard monthly price, inherited from the apartment
    description: 'Contract ends in October, the apartment will be fully vacant',
    availability: 'future'
  },
  {
    listingId: 3, 
    apartmentId: 3, // Roommates apartment (basePrice in apartments array is 2600)
    listingType: 'roommate_replacement', 
    price: 2600, // Standard monthly price, inherited from the apartment
    description: 'Looking for a quiet and clean roommate to replace me',
    availability: 'now'
  }
];

// Retrieve all listings
exports.getListings = (req, res) => {
  res.json(listings);
};
// Search for available now
exports.getAvailableNow = (req, res) => {
    const available = listings.filter(
        listing => listing.availability === 'now'
    );
    res.json(available);
};

// Advanced search filter for listings
exports.getFilteredListings = (req, res) => {
  const maxPrice = req.query.maxPrice;
  const availability = req.query.availability;
  const listingType = req.query.listingType; 

  let result = listings;

  if (!maxPrice && !availability && !listingType) {
    return res.json(result);
  }

  if (maxPrice) {
    result = result.filter(l => l.price <= Number(maxPrice));
  }

  if (availability) {
    result = result.filter(l => l.availability === availability);
  }

  if (listingType) {
    result = result.filter(l => l.listingType === listingType);
  }

  if (result.length === 0) {
    return res.status(404).json({ message: 'No matching listings found.' });
  }

  res.json(result);
};

// Retrieve a specific listing by its ID
exports.getListingById = (req, res) => {
  const listingId = Number(req.params.listingId);
  const listing = listings.find((l) => l.listingId === listingId);
  
  if (!listing) {
    return res.status(404).json({ message: 'Listing not found.' });
  }
  
  res.json(listing);
};

// Create a new listing
exports.addListings = (req, res) => {
  res.json(listings);
};

// Update an existing listing
exports.updateListings = (req, res) => {
  res.json(listings);
};

// Delete a listing
exports.deleteListings = (req, res) => {
  res.json(listings);
};