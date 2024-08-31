import mongoose from 'mongoose';

const dbConnect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB Connected");
  }catch(error){
    console.log(error);
  }
  
};

export default dbConnect;

