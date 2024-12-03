import express from "express";
import { createLayout } from "../controllers/layout.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRole("admin"),
  createLayout
);

export default layoutRouter;