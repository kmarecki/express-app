import * as express from 'express';
import { ExpressApp } from '../expressApp';

export class ResponseService {

    handleError(
        res: express.Response,
        message: string,
        reason: string,
        code?: number): void {
        ExpressApp.log(`ERROR ${code}: ${reason}`);
        res.status(code || 500).json({ 'error': message });
    }
}