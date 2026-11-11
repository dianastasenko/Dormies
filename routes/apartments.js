const express=require ('express');
const router=express.Router();


const apartments=[ 
    {apartmentId:1,located:'Dorms building A',floor:2,numOfRooms:2, balcony:false, college: 'Tel Aviv-Yaffo Academic College'},
    {apartmentId:3,located:'Dorms building B',floor:4,numOfRooms:3, balcony:true, college: 'Tel Aviv-Yaffo Academic College'},
    {apartmentId:5,located:'Dorms building A',floor:3,numOfRooms:2, balcony:false, college: 'Tel Aviv-Yaffo Academic College'},
];

const summary = {
    totalApartments: 3,
    totalApartmentsWithBalcony: 1,
    totalColleges: 1
};

router.get ('/',(req,res)=>{
res.json(apartments)});

router.get('/summary', (req, res) => {
    res.json(summary);
});
module.exports=router;



