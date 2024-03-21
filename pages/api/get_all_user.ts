import User from "@/models/user.model";
import { connectAloraDB } from "@/utils/connectDB";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req,res,authOptions);
if(!session) {
  res.send({message:'Please login first'});
  return
}
  try{
    await connectAloraDB();

    const users = await User.find();
    res.status(200).json(users);
  } catch(error) {
    res.status(400).json({message: 'Error fetching user', error})
  }
}