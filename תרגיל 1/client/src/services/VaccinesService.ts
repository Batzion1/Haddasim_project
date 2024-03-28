import axios from "axios";
import { Vaccines } from "../types/Vaccines";

class VaccinesService {

  getManufacturers = async () => {
    try {
   
      const response = await axios.get(`http://localhost:3000/Vaccines/manufacturers`);
      console.log('GatAll successful:', response.data);
      return response.data;  
    } catch (error) {
      console.error('Failed to update:', error);
    }
  };

      async getAll() {
        try {
          const response = await axios.get('http://localhost:3000/Vaccines');
          console.log('get all Patient successful:', response.data);
          return response.data;  
        } catch (error) {
          console.error('Failed to get all Patient:', error);
          throw error; 
        }
      }
      async getById(id:string) {
        try {
          const response = await axios.get(`http://localhost:3000/Patient/${id}`);
          console.log('get all Patient successful:', response.data);
          return response.data;  
        } catch (error) {
          console.error('Failed to get all Patient:', error);
          throw error; 
        }
      }
      async addVaccines(newVaccines:Vaccines){
       
        await  axios.post("http://localhost:3000/Vaccines/",newVaccines)
        
        }
        deleteVaccines = async (id: string) => {
          console.log("הגעתי")
          try {
            const response = await axios.delete(`http://localhost:3000/Vaccines/${id}`);
            console.log('Deleted Patient successful', response.data);
          } catch (error) {
            console.error('Failed to delete:', error);
          }
        };
        
        getVaccinesByPatientId = async (id: string) => {
          try {
            const response = await axios.get(`http://localhost:3000/Vaccines/getVaccinesByPatientId${id}`);
            
            console.log('Deleted Patient successful', response.data);
          } catch (error) {
            console.error('Failed to delete:', error);
          }
        };

}
export default new VaccinesService