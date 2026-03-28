import { Container, Modal, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import AddLocation from './AddLocation'
import { useAuth0 } from '@auth0/auth0-react'
import UploadImage from './UploadImage'

const AddPropertyModal = ({opened ,setOpened}) => {


    const [active,setActive] =useState(0)
    const {user} =useAuth0()
    const[propertyDetails, setPropertyDetails] =useState({

        title:"",
        description:"",
        price:0,
        city:"",
        address:"",
        image:"",
        facilities:{
             
            bedrooms:0,
            bathrooms:0,
            parkings:0,

        },
        userEmail:user?.email
        
       



    })
    const nextStep = () => {
        
        setActive((current)=>(current < 4 ? current+1 :current) )
    }


    
    const prevStep = () => {
        
        setActive((current)=>(current < 0 ? current-1 :current) )

    }
  return (
  
   <Modal opened={opened}
   onClose={()=>setOpened (false)}
   closeOnClickOutside
   size={"90rem"}
   
   >
    <Container h={"34rem"} w={"100%"}> 
        <>
        
       <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Add Location">
          <AddLocation 
          nextStep ={ nextStep}
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
          />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Upload Image">
       
         <UploadImage
          prevStep={prevStep} 
          nextStep ={ nextStep}
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
          />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
        
        </>


    </Container>
  

  Add property modal



   </Modal>


  )
}

export default AddPropertyModal