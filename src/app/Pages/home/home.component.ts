import {Component} from '@angular/core';
import {ConfigService} from '../../modules/mortgage/services/config.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title: string;

  constructor(private configService: ConfigService) {
    this.title = configService.getConfig('projectTitle');
  }
}
