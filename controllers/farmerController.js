const farmerService = require('../services/farmerServices');
const farmerMOdel = require ('../models/farmer');

module.exports.farmerRegistration = async(req, res , next) => {
    const farmer=req.body;

    try {
          const addFaremerResult = await farmerService.registerFarmer(farmer)
         
          if(addFaremerResult.data) {
            addFaremerResult.satus=200;
            res.status(200).json(addFaremerResult);
          }else{
              next(addFaremerResult.error);
          }
    }  catch (e) { }
}

// Thid Module is to sign in the farmer into his account
module.exports.farmerSignIn = async(req,res,next) => {

         const{email,password} = req.body;
        
         try {
            const result = await farmerService.farmerSignIn(email,password)
              
            if(result.data) {
              result.satus=200;
              res.status(200).json({status: "ok",
              messege: "signed in",
              name: result.data.name.firstname,});
            }else{
                next(result.error);
            }
      }  catch (e) { }

}

//This Module is to Add Products into Farmers Product List 
module.exports.addProducts = async(req,res,next) => {
           const body =req.body;
           const farmerId = req.params.id;
           try{
                const result= await farmerService.addProducts(farmerId,body);
                console.log(result)
                if(result){
                    result.satus=200;
              res.status(200).json({status: "ok",
              messege: "Product is Succesfully added",
              name: result});
                }
           }catch(e){

           }

}
