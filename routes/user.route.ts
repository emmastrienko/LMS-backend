import express from "express";
import { activateUser, loginUser, logoutUser, registrationUser } from "../controllers/user.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate_user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAuthenticated,  logoutUser );

export default userRouter;
