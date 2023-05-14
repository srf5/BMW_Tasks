import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit {

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

