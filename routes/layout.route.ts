import express from "express";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";
const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  editLayout
);

layoutRouter.get(
  "/get-layout/:type",
  getLayoutByType
)


export default layoutRouter;