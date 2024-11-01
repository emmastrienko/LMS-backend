import { NextFunction, Request, Response } from "express";

export const CatchAsyncError =
  (theFunk: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunk(req, res, next)).catch(next);
  };
