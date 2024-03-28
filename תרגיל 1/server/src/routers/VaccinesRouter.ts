import express from "express";

 const VaccinesRouter=express.Router();

 import {
    getAllVaccines,
    createVaccine,
    deleteVaccine,
    getVaccinesByPatientId,
    getAllManufacturers
    
  } 
  from '../controllers/MainController';



  VaccinesRouter.delete('/:id', deleteVaccine);
  VaccinesRouter.get('/',getAllVaccines)
  VaccinesRouter.post('/', createVaccine);
  VaccinesRouter.get('/getVaccinesByPatientId/:id', getVaccinesByPatientId);
  VaccinesRouter.get('/manufacturers',getAllManufacturers);

export default VaccinesRouter;
