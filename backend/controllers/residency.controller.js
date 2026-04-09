import asyncHandler from "express-async-handler"
import {prisma} from "../config/prisma.config.js"

// CONTROLLER FOR THE CREATING RESIDENCY

export const createResidency = asyncHandler(async(req,res)=>{
 

    const {title,description,price,address, city,facilities,image,userEmail}=req.body.data || req.body;

    console.log(req.body.data)

    try{

        const residency =await prisma.residency.create({
            data:{
                title,
                description,
                price,
                address, 
                city,
                facilities:{
                    set: [facilities]
                },
                image,
                owner:{connect:{email:userEmail}}
            
            }
        })
        res.send({message:"Residency created successfully",residency})

    }

    catch (err){
        if(err.code ==="p2002"){

            throw new Error('Already have a residency with this address')
        }

        throw new Error(err.message)


    }
});



// CONTROLLER FOR GETTING ALL THE RESIDENCY

export const getAllResidencies = asyncHandler(async(req,res)=>{

try {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  res.status(200).json(residencies);
} catch (error) {
  res.status(500).json({ message: error.message });
}
})  


// CONTROLLER FOR GETTING  A RESIDENCY ID

export const getResidency = asyncHandler(async(req,res)=>{

const {id}=req.params;

try{

    const residency =await prisma.residency.findUnique({where :{id}})

    res.send(residency)
}

catch(err){


    throw new Error(err.message)
}





})
