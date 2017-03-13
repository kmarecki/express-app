import { ResponseService } from './services/response';

export class ExpressApp {
    static physicalPath: string;

    static response = new ResponseService();

    private static logger: (message: string) => any = (msg) => console.log(msg);

    static log(message: string): void {
        if (ExpressApp.logger) {
            ExpressApp.logger(message);
        }
    }
}

