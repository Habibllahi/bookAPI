import { NextFunction, Request, Response } from "express";

export const requestContentTypeJsonOnly = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400);
    res.statusMessage =
      "Server only allow application/json content-type for this request";
    res.json({
      error: "Server only allow application/json content-type for this request",
    });
  } else {
    next();
  }
};
