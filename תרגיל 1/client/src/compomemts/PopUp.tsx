import React, { useEffect, useState, useRef } from 'react';
import styles from './PopUp.module.css';
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@mui/material';
 import PatientService  from '../../src/services/patientService';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Grid, TextField, IconButton } from '@mui/material';
import { Patient } from '../types/Patient';
import EditIcon from '@mui/icons-material/Edit';
interface PopUpProps { 
  mode: 'add' | 'update';


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

function PopUp({ mode }: PopUpProps) {

  const { register, handleSubmit, formState: { errors }  } = useForm<Patient>();
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    
  };


  const add: SubmitHandler<Patient> = async (data) => {
   


    const newPatient: Patient = {
      firstName: data.firstName,
      lastName: data.lastName,
      tz: data.tz,
      city: data.city ,
      street: data.street ,
      house_number: data.house_number ,
      Date_of_birth: data.Date_of_birth,
      Phone:data.Phone,
      Mobile_Phone: data.Mobile_Phone,
      recovery_date: null,
      Date_of_receipt_answer: null

    }

    await PatientService.addPatient(newPatient)
   
   
    handleClose();
    window.location.reload();
  }
 

  return (
    <div>

      <Button variant="outlined" onClick={handleClickOpen}>
        Add patient
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>

        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {mode} Patient
        </BootstrapDialogTitle>

        <form onSubmit={handleSubmit(add)}>
          <DialogContent dividers>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <TextField {...register("firstName", { required: true, max: 20 })} id="outlined-required" margin='dense' placeholder="firstName" />
                {errors.firstName && "name is required" ? <p>name job is required</p> : ''}
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("lastName", { required: true })} id="outlined-required" margin='dense' placeholder="lastName" />
                {errors.lastName && "lastName is required" ? <p>lastName is required</p> : ''}
              </Grid>
              <Grid item xs={6}>
              <TextField {...register("tz", { required: true, pattern: /^[0-9]{9}$/ })} id="outlined-required" margin='dense' placeholder="Tz"    type="number"/>
      {errors.tz && errors.tz.type === "required" && <p>Tz is required</p>}
      {errors.tz && errors.tz.type === "pattern" && <p>Invalid ID</p>}
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("city", { required: true })} id="outlined-required" margin='dense' placeholder="city" />
                {errors.city && "city is required" ? <p>adress is required</p> : ''}
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("street", { required: true })} id="outlined-required" margin='dense' placeholder="street" />
                {errors.street && "street is required" ? <p>street is required</p> : ''}
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("house_number", { required: true })} id="outlined-required" margin='dense' placeholder="house_number" />
                {errors.house_number && "house_number is required" ? <p>house_number is required</p> : ''}
              </Grid>

              <Grid item xs={6}>
              <TextField {...register("Date_of_birth", { required: true })} id="outlined-required" margin='dense' placeholder="Date_of_birth" />
                {errors.Date_of_birth && "Date_of_birth is required" ? <p>Date_of_birth is required</p> : ''}
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("Phone")} id="outlined-required" margin='dense' placeholder="Phone" />
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("Mobile_Phone")} id="outlined-required" margin='dense' placeholder="Mobile_Phone" />
              </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField {...register("image")} id="outlined-required" margin='dense' placeholder="image" />
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

export default PopUp;
