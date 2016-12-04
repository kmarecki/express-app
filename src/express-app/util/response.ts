import * as express from 'express';

export class ResponseUtil {

    handleError(
        res: express.Response,
        message: string,
        reason: string,
        code?: number): void {
        console.log('ERROR: ' + reason);
        res.status(code || 500).json({ 'error': message });
    }
}