import React from 'react'
import {useForm} from "@mantine/form"
import { validateString } from '../utils/common'
import useCities from '../hooks/useCities'
import { Select, TextInput, Button, Group } from "@mantine/core"  // ✅ add Button and Group
import Map from './Map'  // ✅ add Map import too


const AddLocation = ({propertyDetails,setPropertyDetails,nextStep}) => {

    const {getAll} =useCities()
    const form =useForm({
        initialValues:{

                   
            city:propertyDetails?.city,
            address:propertyDetails?.address,

                  

        },
        validate:{

            city:(value)=> validateString(value),
            address:(value)=> validateString(value),
        }

        
        
    })

    const {city,address} = form.values

    const handleSubmit =()=>{
        const {hasError} = form.validate()
        if(!hasError){

            setPropertyDetails((prev)=> ({...prev ,city,address}))
            nextStep()
        }

    }
    
    return (

        <form  onSubmit={(e)=>{
e.preventDefault()
  handleSubmit()
        }}>
          

          <div className='flexCenter'>

            {/* Left side */}

            <div className='flexCenter flex-1 '>
                   
                   {/* Inputs */}
                    <div>
                        
                        <Select
                         w={"100%"}
                         withAsterisk
                         label="City"
                         clearable
                         searchable
                         data={getAll()}
                        {...form.getInputProps("city",{type:"input"})}

                        />
                        <TextInput
                          
                          w={'100%'}
                          withAsterisk
                         label="Address"
                        {...form.getInputProps("address",{type:"input"})}

                        
                        />

                      
                         
                        </div>     

            </div>


            {/* right side */}

            <div className='flex-1'>


                <Map   address={address} city={city} />
            </div>
          </div>
            <Group justify="center" mt={"xl"}>
             
              <Button type="submit">Next Step</Button>   
            </Group>


        </form>

    )
}

export default AddLocation