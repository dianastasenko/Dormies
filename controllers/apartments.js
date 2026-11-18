// the apartments listed on the dormies site and server, 
// apartmentId is the connection between the apartment and the listing that lists that apartment
const apartments = [ 
    { apartmentId: 1, located: 'Dorms building A', floor: 2, numOfRooms: 2, balcony: false, college: 'Tel Aviv-Yaffo Academic College', basePrice: 3200, apartmentType: 'couple' },
    { apartmentId: 3, located: 'Dorms building B', floor: 4, numOfRooms: 3, balcony: true, college: 'Tel Aviv-Yaffo Academic College', basePrice: 2600, apartmentType: 'roommates_3' },
    { apartmentId: 5, located: 'Dorms building A', floor: 3, numOfRooms: 2, balcony: false, college: 'Tel Aviv-Yaffo Academic College', basePrice: 2000, apartmentType: 'single' }
];


exports.getApartments = (req, res) => {
  res.json(apartments);
};

// Dynamically calculates a summary of all apartments in the system
exports.getSummary = (req, res) => {
  const summary = {
    totalApartments: apartments.length,
    byBuilding: {},
    byType: {}
  };

  // Loop through all apartments to calculate totals
  apartments.forEach(apt => {
    // Count apartments per building
    const building = apt.located;
    if (!summary.byBuilding[building]) {
      summary.byBuilding[building] = 0;
    }
    summary.byBuilding[building]++;

    // Count apartments per type (single, couple, etc.)
    const type = apt.apartmentType;
    if (!summary.byType[type]) {
      summary.byType[type] = 0;
    }
    summary.byType[type]++;
  });

  res.json(summary);
};

exports.getfilterApartments = (req, res) => {
  const located = req.query.located;
  const floor = req.query.floor;
  const numOfRooms = req.query.numOfRooms;
  const balcony = req.query.balcony;
  const college = req.query.college;
  
  let result = apartments;

  // Quick return: if no query parameters are provided, return everything immediately
  if (!located && !floor && !numOfRooms && !balcony && !college) {
    return res.json(result);
  }

  // Chaining the filters
  if (located) {
    result = result.filter(a => a.located === located);
  }

  if (floor) {
    // Conversion to Number happens only here, after verifying the user sent a floor
    result = result.filter(a => a.floor === Number(floor));
  }

  if (numOfRooms) {
    result = result.filter(a => a.numOfRooms === Number(numOfRooms));
  }

  if (balcony) {
    result = result.filter(a => String(a.balcony) === balcony);
  }

  if (college) {
    result = result.filter(a => a.college === college);
  }

  if (result.length === 0) {
    return res.status(404).json({ 
      message: 'No matching apartments found.'
    });
  }
  
  // Return the final filtered array
  res.json(result);
};

exports.getApartmentById = (req, res) => {
  const apartmentId = Number(req.params.apartmentId);
  const apartment = apartments.find((p) => p.apartmentId === apartmentId);
  
  if (!apartment) {
    return res.status(404).json({ message: 'Apartment not found.' });
  }
  
  res.json(apartment);
};

exports.addApartments = (req, res) => {
  res.json(apartments);
};
exports.updateApartments = (req, res) => {
  res.json(apartments);
};
exports.deleteApartments = (req, res) => {
  res.json(apartments);
};