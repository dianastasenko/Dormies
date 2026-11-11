//loading the express library and creating a router for all the apartmnets routes
const express=require ('express');
const router=express.Router();

// the apartments listed on the dormies site and server, 
//apartmentId is the connection between the apartment and the listing that lists that apartment
const apartments=[ 
    {apartmentId:1,located:'Dorms building A',floor:2,numOfRooms:2, balcony:false, college: 'Tel Aviv-Yaffo Academic College'},
    {apartmentId:3,located:'Dorms building B',floor:4,numOfRooms:3, balcony:true, college: 'Tel Aviv-Yaffo Academic College'},
    {apartmentId:5,located:'Dorms building A',floor:3,numOfRooms:2, balcony:false, college: 'Tel Aviv-Yaffo Academic College'},
];

//summarizes the data in the apartments
const summary = {
    totalApartments: 3,
    totalApartmentsWithBalcony: 1,
    totalColleges: 1
};
//returns all apartments there are
router.get ('/',(req,res)=>{
res.json(apartments)});

//returns just the summarized numbers 
router.get('/summary', (req, res) => {
    res.json(summary);
});
//exports the router so app files can use it
module.exports=router;



