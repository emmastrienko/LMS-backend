import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  sicialAuth,
  updateAccessToken,
  updateUserInfo,
} from "../controllers/user.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate_user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAuthenticated, logoutUser);

userRouter.get("/refresh", updateAccessToken);

userRouter.get("/me", isAuthenticated, getUserInfo);

userRouter.post("/social-auth", sicialAuth)

userRouter.put("/update-user-info", isAuthenticated, updateUserInfo)


export default userRouter;
