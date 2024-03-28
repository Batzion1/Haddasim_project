import { Request, Response } from 'express';

import ManufacturersModel from '../modeles/ManufacturersModel';
import  PatientModel, { IPatient } from '../modeles/patientModel';
import VaccinesModel, { IVaccines } from '../modeles/VaccinesModel';

 

export const createPatient = async (req: Request, res: Response) => {
    try {
        const { firstName,lastName,tz,city,street,house_number,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date} = req.body;
        const newPatient: IPatient = new PatientModel({firstName,lastName,tz,city,street,house_number,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date});
        // ValidEmployee(newEmployee); //עשינו במודל עצמו ולידציות בסיסיות
        const PatientSave = await newPatient.save();
        res.status(200).json(PatientSave);
    } catch (error:any) {
        console.log(error)

        
    }
};
export const createVaccine = async (req: Request, res: Response) => {
    try {
        const { PatientId,Date_of_vaccination,manufacturer} = req.body;
        const newVaccine: IVaccines = new VaccinesModel({PatientId,Date_of_vaccination,manufacturer});
        const VaccinesSave = await newVaccine.save();
        res.status(200).json(VaccinesSave);
    } catch (error:any) {
        console.log(error)  
    }
};

export const updatePatient = async (req: Request, res: Response) => {
     try {
        const { id } = req.params;
        const { firstName,lastName,tz,city,street,house_number,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date } = req.body;
        const updated= await PatientModel.findByIdAndUpdate(id, {firstName,lastName,tz,city,street,house_number,Date_of_birth,Phone, Mobile_Phone,Date_of_receipt_answer,recovery_date}, { new: true });
        console.log(updated)
        res.status(200).json("ggod: "+updated);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update employee', error });
    }
};

export const getAllPatients = async (req: Request, res: Response) => {
    console.log(req.body+"hvjkwjfdhgjqw")
    try {
        const allPatients = await PatientModel.find();
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Patient', error });
    }
};
export const getAllVaccines = async (req: Request, res: Response) => {
    try {
        const allVaccines = await VaccinesModel.find();
        res.status(200).json(allVaccines);
 
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Vaccines', error });
    }
    
};

export const getPatientById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const searchPatient = await PatientModel.findById(id);
        if (!searchPatient) {
            return res.status(404).json({ msg: "Patient not found" });
        }
        res.status(200).json(searchPatient);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const deletePatient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletePatient = await PatientModel.findByIdAndDelete(id);
        if (!deletePatient) {
            return res.status(404).json({ msg: "Patient not found" });
        }
        res.status(200).json({ msg: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
export const deleteVaccine = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteVaccine = await VaccinesModel.findByIdAndDelete(id);
        if (!deleteVaccine) {
            return res.status(404).json({ msg: "Vaccines not found" });
        }
        res.status(200).json({ msg: "Vaccines deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
          export const getVaccinesByPatientId = async (req: Request, res: Response) => {
            const { id } = req.params;
    try {
      const vaccination = await VaccinesModel.find({PatientId: id});

      if (!vaccination) {
        return res.status(404).json({ message: 'vaccination not found' });
      }
    
      res.json(vaccination);
    } catch (error) {
      res.status(500).json({ message: "error.message" });
    }
  };
export const getAllManufacturers = async (req: Request, res: Response) => {
   
    try {
        const allKorona = await ManufacturersModel.find();
        res.status(200).json(allKorona);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get Manufacturers', error });
    }
};

 

