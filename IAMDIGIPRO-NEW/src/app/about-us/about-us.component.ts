import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  faArrowRight = faArrowRight;

  selectedRating: number | null = null; 
  selectedInterest: string = 'None';

  
  updateRating(interest: string): void {
    this.selectedInterest = interest;
}
}
