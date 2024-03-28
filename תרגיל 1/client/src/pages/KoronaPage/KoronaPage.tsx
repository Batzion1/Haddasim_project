
import React, { FC, useEffect, useState } from 'react';

import { Patient } from '../../types/Patient';
import { Column } from '../../compomemts/Column';
import { useLocation } from 'react-router';
import TableComponent from '../../compomemts/Tables';
import PopUp from '../../compomemts/PopUp';
import PopUpedit from '../../compomemts/PopUpedit';
import VaccinesService from '../../services/VaccinesService';
import patientService from '../../services/patientService';
import AddKorona from '../../compomemts/AddKorona';


export const columns: Column<any>[] = [
  { label: 'Date_of_vaccination', value: 'Date_of_vaccination' },
  { label: 'manufacturer', value: 'manufacturer' },

]


function KoronaPage() {


  const [listPatient, setListPatient] = useState<any[]>([]);
  const [CurrentPatient, setCurrentPatient] = useState<any | null>(null);

  const [disableButton, setDisableButton] = useState(false);
  const [currentid, setcurrentid] = useState();
  const params = useLocation()


  useEffect(() => {


    const id = params.state
    setcurrentid(id)


    const fetchpatient = async () => {
      try {
        const resultb = await VaccinesService.getById(id);
        const adata = resultb;

        setCurrentPatient(adata)



      } catch (error) {
        console.error('Error fetching data:', error);

      }
      try {


        const response = await fetch(`http://localhost:3000/Vaccines/getVaccinesByPatientId/${id}`);

        const data = await response.json();
        setListPatient(data);
        if (data.length < 4) {
          setDisableButton(true)
        }
        else {
          setDisableButton(false)
        }

      }

      catch (error) {
        console.error('Failed to fetch patient:', error);
      }



    };
    fetchpatient();


  }, []);
  return (
    <div>
      <h1>כרטיס חבר</h1>
      <p> Name: {CurrentPatient?.firstName}     {CurrentPatient?.lastName}</p>
      <p> Tz: {CurrentPatient?.tz}</p>
      <p>{`date of recovery: ${(new Date(CurrentPatient?.Date_of_receipt_answer)).toLocaleDateString()}`}</p>
      <p>{`date of recovery: ${(new Date(CurrentPatient?.recovery_date)).toLocaleDateString()}`}</p>
      <h3>טבלת מעקב אחר חיסוני הקורונה</h3>
      {/* <h1>{employeeReducer.numberOfEmployee}</h1> */}
      <TableComponent<any> columns={columns} data={listPatient} mode="korona"></TableComponent>
      {/* {disableButton ? <button disabled>יש לך יותר מ4 חיסונים</button> : < >Add Vaccines </button>} */}
      {disableButton ? <AddKorona Patient={CurrentPatient} /> : <p>לא ניתן להוסיף חיסון</p>}


    </div>


  )
}

export default KoronaPage;