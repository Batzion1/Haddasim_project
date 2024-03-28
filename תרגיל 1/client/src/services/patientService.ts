import axios from "axios";
import { Patient } from "../types/Patient";
import { error } from "console";
// import { useDispatch } from "react-redux";

class patientService {

 
  async getAll() {
    try {
      const response = await axios.get('http://localhost:3000/Patient/');
      console.log('get all Patient successful:', response.data);
      return response.data;  
    } catch (error) {
      console.error('Failed to get all Patient:', error);
      throw error; 
    }
  }
  
  async addPatient(newPatient:Patient){
    newPatient.Date_of_receipt_answer=new Date(NaN);
    newPatient.recovery_date=new Date(NaN);
    await  axios.post("http://localhost:3000/Patient/",newPatient)
   
    }
    
  

   updatePatient = async (id: string, data: Patient) => {
    try {
      console.log(id+"jhgf")
      console.log(data)
      const response = await axios.put(`http://localhost:3000/Patient/${id}`, data);
   
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Failed to update:', error);
    }
  };
  
  
   deletePatient = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/Patient/${id}`);
      console.log('Deleted Patient successful', response.data);
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };
  

}
export default new patientService