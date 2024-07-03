import jwt, { Secret, JwtPayload, JsonWebTokenError, TokenExpiredError, NotBeforeError } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import authConfig from '../config/auth';


const { secret, expiresIn } = authConfig.jwt;
export const SECRET_KEY: Secret = secret;

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        if (error instanceof JsonWebTokenError) return res.status(401).json({ error: 'Token inválido' });
        if (error instanceof TokenExpiredError) return res.status(401).json({ error: 'Token expirado' });
        if (error instanceof NotBeforeError) return res.status(401).json({ error: 'Token ainda não é válido' });
        
        return res.status(401).json({ error: 'Erro ao autenticar' });
    }
};