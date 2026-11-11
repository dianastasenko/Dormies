//loading the express library and creating a router for all the listings routes
const express=require ('express')
const router=express.Router();

// the listings on the dormies site and server, 
//apartmentId is the connection between the listing to the same apartment in the routes/apartment file
const listings=[ 
    {listingId:1,header:'Single room in dorms',price:2000,college: 'Tel Aviv-Yaffo Academic College',apartmentId:5,availability:'now'},
    {listingId:2,header:'Couples apartment in dorms',price:3200,college: 'Tel Aviv-Yaffo Academic College',apartmentId:1,availability:'now'},
    {listingId:3,header:'Two rooms with balcony in dorms',price:2600,college: 'Tel Aviv-Yaffo Academic College',apartmentId:3,availability:'future'}
];
//shows just the listings that are available right now
const availableNow = [
    { listingId: 1, header: 'Single room in dorms', price: 2000, college: 'Tel Aviv-Yaffo Academic College', apartmentId: 5, availability: 'now' },
    { listingId: 2, header: 'Couples apartment in dorms', price: 3200, college: 'Tel Aviv-Yaffo Academic College', apartmentId: 1, availability: 'now' }
];
//returns all listings
router.get ('/',(req,res)=>{
res.json(listings);
});
// returns just the listing that are available now
router.get ('/availableNow',(req,res)=>{
res.json(availableNow);
});

//exports the router so app files can use it
module.exports=router;



