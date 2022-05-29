import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger(AppService.name) // uses this name when logs something
  }

  getHello(): string {
    this.logger.debug('GET method') // for debug level
    return 'Hello World!';
  }

  getHelloFromPost(): string {
    return 'Hello from post request!'
  }
}
