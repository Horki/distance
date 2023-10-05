import express from 'express';
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('bearer') && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  // TODO: Add verification!
  jwt.verify(token as string, 'no_key_now', (err, user) => {
    // console.warn(`Error = ${err} | User = ${user}`);
  });

  return next();
};
