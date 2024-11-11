import userModel from "../models/user.model"
import { Response } from "express";

// get user by id
export const getUserById = async (id: string, res: Response) => {
  const user = await userModel.findOne({_id: id});
  res.status(201).json({
    success: true,
    user,
  })
}