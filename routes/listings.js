const express=require ('express')
const router=express.Router();

const listings=[ 
    {listingId:1,header:'Single room in dorms',price:2000,college: 'Tel Aviv-Yaffo Academic College',apartmentId:5,availability:'now'},
    {listingId:2,header:'Couples apartment in dorms',price:3200,college: 'Tel Aviv-Yaffo Academic College',apartmentId:1,availability:'now'},
    {listingId:3,header:'Two rooms with balcony in dorms',price:2600,college: 'Tel Aviv-Yaffo Academic College',apartmentId:3,availability:'future'}
];

const availableNow = [
    { listingId: 1, header: 'Single room in dorms', price: 2000, college: 'Tel Aviv-Yaffo Academic College', apartmentId: 5, availability: 'now' },
    { listingId: 2, header: 'Couples apartment in dorms', price: 3200, college: 'Tel Aviv-Yaffo Academic College', apartmentId: 1, availability: 'now' }
];

router.get ('/',(req,res)=>{
res.json(listings);
});
router.get ('/availableNow',(req,res)=>{
res.json(availableNow);
});
module.exports=router;



