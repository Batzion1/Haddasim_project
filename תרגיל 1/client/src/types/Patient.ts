
export type Patient  = {

    firstName: string
    lastName: string
    tz: string
    city:string
  street:string
  house_number:string
    Date_of_birth: Date
    Phone:String
    Mobile_Phone: String,
    Date_of_receipt_answer?:Date |undefined|null,
    recovery_date?:Date |undefined|null,
    image?: string;
  }
  