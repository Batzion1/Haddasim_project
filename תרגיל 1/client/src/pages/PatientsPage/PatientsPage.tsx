 
import React, { FC, useEffect, useState } from 'react';

import { Patient } from '../../types/Patient';
import { Column } from '../../compomemts/Column';
import { useLocation, useNavigate } from 'react-router';
import TableComponent from '../../compomemts/Tables';
import PopUp from '../../compomemts/PopUp';
import PopUpedit from '../../compomemts/PopUpedit';
import VaccinesService from '../../services/VaccinesService';


export const columns:Column<Patient>[] = [
  { label: 'First Name', value: 'firstName'  },
  { label: 'lastName', value: 'lastName'   },
  { label: 'tz', value: 'tz'   },
  { label: 'Address', value: 'city ' },
  { label: 'Date_of_birth', value: 'Date_of_birth'   },
  { label: 'Phone', value: 'Phone'   },
  { label: 'Mobile_Phone', value: 'Mobile_Phone'   },
  { label: 'image', value: 'image'   }
]

function PatientsPage()  {
  const myNav = useNavigate();
  const [listPatient, setListPatient] = useState<Patient[]>([]);
  const params=useLocation()
  useEffect(() => {

    const id=params.state
 
    const fetchpatient = async () => {
      try {
        const response = await fetch(`http://localhost:3000/patient/`);
        const data = await response.json();
        setListPatient(data);
        

      } catch (error) {
        console.error('Failed to fetch patient:', error);
      }
    };
    fetchpatient();
  }, []);
 return (
  <div>
    <h1>patient Page</h1> 
    <TableComponent<Patient> columns={columns} data={listPatient} mode ="patient" ></TableComponent>
    <PopUp mode="add" ></PopUp>
   
  </div>
);
};




export default PatientsPage;


