import mongoose from 'mongoose';
const DB_URL: string = process.env.ALORADB_URL || "";

export const connectAloraDB = async () => {
    try{
        await mongoose.connect(DB_URL);
        console.log('Alora connected')
    } catch(error) {
        console.log('Error connect Alora', error)
    }
}


