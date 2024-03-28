import mongoose, { Document, Schema, Model } from 'mongoose';





export interface IPatient extends Document {
  firstName: string
  lastName: string
  tz:string,
  city:string
  street:string
  house_number:string
  Date_of_birth: Date
  Phone:string
  Mobile_Phone:string
  Date_of_receipt_answer:Date
  recovery_date:Date,
  image?: string;
  
  


  
}

const patientSchema = new Schema<IPatient>({
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 tz: {
  type: String,
  validate: {
    validator: function(value:any) {
      return /^\d{9}$/.test(value); // Validates for exactly 9 digits
    },
    message: props => `${props.value} is not a valid Israeli ID number!`
  }
},


 city: { type: String ,required: true},
 street: { type: String ,required: true},
 house_number: { type: String ,required: true},
 Date_of_birth: { type: Date, required: true },
 Phone: { type: String, required: true },
 Mobile_Phone: { type: String, required: true },
 Date_of_receipt_answer: { type: Date, required: false },
 recovery_date: { type: Date, required: false },
 image: { type: String },
});

const PatientModel: Model<IPatient> = mongoose.model<IPatient>('Patient', patientSchema);
export default PatientModel;







 
