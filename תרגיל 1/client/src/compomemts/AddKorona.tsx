import React, { useEffect, useState, useRef } from 'react';
import styles from './PopUp.module.css';
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, Select, MenuItem } from '@mui/material';

 import PatientService  from '../../src/services/patientService';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Grid, TextField, IconButton } from '@mui/material';
import { Patient } from '../types/Patient';
import EditIcon from '@mui/icons-material/Edit';
import { Vaccines } from '../types/Vaccines';
import VaccinesService from '../services/VaccinesService';
import { Manufacturers } from '../types/Manufacturers';
interface PopUpProps { 
 
  Patient: any;

}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

function PopUpedit({ Patient }: PopUpProps) {

  const { register, handleSubmit, formState: { errors }  } = useForm<any>();
  const [open, setOpen] = useState(false);
  const [manufacturers, setManufacturers] = useState<Manufacturers[]>([]);


const fetchData = async () => {
    const response = await VaccinesService.getManufacturers();
    setManufacturers(response)
  };
useEffect(() => {
    fetchData();
  }, []);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    
  };

    const add: SubmitHandler<any> = async (data) => {
   
        const newPatient: Patient = {
            firstName: Patient.firstName,
            lastName: Patient.lastName,
            tz: Patient.tz,
            city: Patient.city,
            street: Patient.street,
            house_number:  Patient.house_number,
            Date_of_birth: Patient.Date_of_birth,
            Phone: Patient.Phone,
            Mobile_Phone: Patient.Mobile_Phone,
            Date_of_receipt_answer:data.Date_of_receipt_answer||Patient.Date_of_receipt_answer,
            recovery_date:data.recovery_date||Patient.recovery_date
        }

        const newVaccines: Vaccines = {
            Date_of_vaccination: data.Date_of_vaccination,
            manufacturer: data.manufacturer ,
            PatientId: Patient._id
        }
    
        await VaccinesService.addVaccines(newVaccines)
        await PatientService.updatePatient(Patient._id,newPatient)
      
        window.location.reload();
       
    
        handleClose();
      }
     

  return (
    <div>


  <Button variant="outlined" onClick={handleClickOpen}>
    edit <EditIcon></EditIcon>
  </Button>



      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>

        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         update Patient
        </BootstrapDialogTitle>

        <form onSubmit={handleSubmit(add)}>
          <DialogContent dividers>
    
              <Grid item xs={6}>
                <h5>הוספת חיסון</h5>
                <TextField {...register("Date_of_vaccination")} id="outlined-required" margin='dense' placeholder="Date_of_vaccination"  />
              </Grid>
              <Grid item xs={6}>
      <Select
        {...register("manufacturer")}
        id="outlined-required"
        margin='dense'
        placeholder="manufacturer"
      >
        {manufacturers.map((option:any) => (
          <MenuItem key={option._id} value={option.manufacturer_name}>{option.manufacturer_name}</MenuItem>
        ))}
      </Select>
    </Grid>
              <h5>: פרטי מחלה</h5>
              <Grid item xs={6}>
                <TextField {...register("Date_of_receipt_answer")} id="outlined-required" margin='dense' placeholder="Date_of_receipt_answer" defaultValue={Patient.recovery_date} />
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("recovery_date")} id="outlined-required" margin='dense' placeholder="recovery_date" defaultValue={Patient.recovery_date}  />
              </Grid>
           
               
             
        

            <DialogActions>
        
            <Button type="submit" >Submit</Button>
        
         
            </DialogActions>
          </DialogContent>
        </form>
      </BootstrapDialog>
    </div>
  )

  }
export default PopUpedit;
