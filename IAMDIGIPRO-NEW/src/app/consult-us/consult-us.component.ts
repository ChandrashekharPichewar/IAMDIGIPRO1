import { Component } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrl: './consult-us.component.css'
})
export class ConsultUsComponent {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
}
