import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IManufacturers extends Document {

manufacturer_name: string
}

const ManufacturersSchema = new Schema<IManufacturers>({

    manufacturer_name: { type: String, required: true },

});

const ManufacturersModel: Model<IManufacturers> = mongoose.model<IManufacturers>('Manufacturers', ManufacturersSchema);
export default ManufacturersModel;







 
