import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  ngAfterViewInit(): void {
    const work = document.querySelector('.work');
    if (work){
      window.addEventListener('scroll', () => {
        const workPosition = work.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (workPosition < screenPosition) {
          work.classList.add('fade');
        }
      });
    }
  }
}
