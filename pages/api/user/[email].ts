import type { NextApiRequest, NextApiResponse } from "next";
import User from '@/models/user.model';
import {connectAloraDB} from '@/utils/connectDB'


type Data = {
    errorMsg: string;
  };

  export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    const {email} = req.query;

    try{
      await connectAloraDB();

      const deletedUser = await User.findOneAndDelete({email});
      res.status(200).json(deletedUser)
    } catch(error) {
      res.status(400).json({errorMsg: 'Error deleting User'})
    }
  }