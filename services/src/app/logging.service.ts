export class LoggingService {
    logInfo(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}