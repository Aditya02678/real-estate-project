import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck =auth({
 
    audience:"http://localhost:3000",
   
    issuerBaseURL:"https://dev-vgsvnq2vkskyvlm1.us.auth0.com",

    tokenSigningAlg:"RS256"

}
)

export default jwtCheck