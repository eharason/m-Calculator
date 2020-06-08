import {configurations} from './config/configuration';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  private readonly config = null;

  constructor() {
    this.config = configurations;
  }


  public getConfig(key: string): any {
    if (this.config && this.config[key]) {
      return this.config[key];
    }
    return null;
  }
}
