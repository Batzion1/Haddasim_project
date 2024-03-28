import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PatientService from '../services/patientService';
import PopUp from './PopUp';
import EditIcon from '@mui/icons-material/Edit';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PopUpedit from './PopUpedit';
import VaccinesService from '../services/VaccinesService';
export interface Column<T> {
  label: string;
  value: keyof T;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  mode: string

}

const TableComponent = <T extends Record<string, any>>({ columns, data, mode }: Props<T>) => {


  const [list, setList] = useState<T[]>(data);
  const [open, setOpen] = useState(false);
  const myNav = useNavigate();

  const displayVaccines = async (row: any) => {

    const id = row._id
    myNav('Vaccines', { state: id });
  }
  useEffect(() => {
    setList(data)
  });

  const deleteItem = async (row: any) => {


    const confirmation: boolean = window.confirm("Are you sure you want to delete this record?"); {


      if (confirmation && mode == "patient") {


        await PatientService.deletePatient(row._id);
        window.location.reload();
      }
      else if (confirmation && mode != "patient") {
        await VaccinesService.deleteVaccines(row._id);
        window.location.reload();
      }

    }


    setList([...list]);


  };

  return (

    <TableContainer component={Paper}>

      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" key={column.value.toString()}>{column.label}</TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell align="center" key={column.value.toString()}>
                  {column.label == "Date_of_birth" || column.label == "Date_of_vaccination" || column.label == "recovery_date" || column.label == "Date_of_receipt_answer" ? (
                    new Date(row[column.value]).toLocaleDateString('he-IL', { year: 'numeric', month: 'numeric', day: 'numeric' })
                  )  : column.value === 'image'&&column.value!=null ? (
                    <img src={row[column.value]} />
                  )  : (
                    row[column.value]
                  )}
                </TableCell>
              ))}
              <TableCell align="center">
                {mode === 'patient' && (
                  <>
                    <IconButton aria-label="View">
                      {/* <EditIcon /> */}
                      <PopUpedit patientToUpdate={row}></PopUpedit>
                    </IconButton>
                  </>
                )}
                
                {mode === 'patient' &&
                  <IconButton aria-label="View" onClick={() => displayVaccines(row)}>
                    <VaccinesIcon />
                  </IconButton>

                }
                
                <IconButton aria-label="Delete" onClick={() => deleteItem(row)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>


    </TableContainer>


  );
};

export default TableComponent;


