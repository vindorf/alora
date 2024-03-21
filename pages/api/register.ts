import type { NextApiRequest, NextApiResponse } from "next";
import User from '@/models/user.model';
import {connectAloraDB} from '@/utils/connectDB'
import bcrypt from 'bcrypt';

type Data = {
  errorMsg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const {name, email, password, role, image} = await req.body;
  try{
    await connectAloraDB();

    const existUser = await User.findOne({email});
    if(existUser) {
        res.status(400).json({errorMsg: 'User already exitst'});
         return;
    };

    const hash = await bcrypt.hash(password, 10);

    const user = await new User({
        name,
        email,
        password: hash,
        role: 'user',
        image: '/image',
    })
    await user.save();
    res.status(200).json(user)
  } catch(error) {
    res.status(400).json({errorMsg: 'Error register User'})
  }
}