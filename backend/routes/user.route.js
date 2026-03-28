import express from 'express';



import { createUser,bookVisit,allBookings,cancelBooking,toFav,getAllFav } from '../controllers/user.controller.js';
import jwtCheck from '../config/auth0Config.js';

const router = express.Router();

router.post("/register",jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", allBookings);
router.post("/cancelBooking/:id", jwtCheck,cancelBooking);
router.post("/toFav/:rid",jwtCheck, toFav);
router.post("/getAllFav",jwtCheck, getAllFav);


export {router as userRoute};