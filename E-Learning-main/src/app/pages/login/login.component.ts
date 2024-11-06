// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// // import { error } from 'console';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   data = new FormGroup({
//     roll:new FormControl(''),
//     email: new FormControl(''),
//     password: new FormControl('')
//   });

//   constructor(private httpClient: HttpClient) { }

//   public handleSubmit() {
//     console.log(this.data.value);

//     this.httpClient.post('http://localhost:8084/loginUser', this.data.value).subscribe((data: any) => {
//       console.log(data);
//       if (data == true) {
//         alert("login successfully");
//       }
//       else {
//         alert("Wrong credentials Please try again");
//       }
//     })

//   }

// }

import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  private currentSlide: number = 0;
  private slides!: NodeListOf<HTMLElement>; // Use definite assignment assertion
  private totalSlides: number = 0; // Initialize to zero

  data = new FormGroup({
   
    userId: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
    this.slides = document.querySelectorAll<HTMLElement>('.slide');
    this.totalSlides = this.slides.length;
    this.scrollAnimation();
    this.startImageSlider(); // Start the image slider
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollAnimation();
  }

  private scrollAnimation(): void {
    const boxes = document.querySelectorAll('.info__box') as NodeListOf<HTMLElement>;
    const triggerPoint = window.innerHeight / 1.3;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerPoint) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  }

  private startImageSlider(): void {
    this.showSlide(this.currentSlide);
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private showSlide(index: number): void {
    const slidesContainer = document.querySelector<HTMLElement>('.slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  public nextSlide(): void { // Changed to public
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  public prevSlide(): void { // Changed to public
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  onMouseEnter(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('hovered');
  }

  onMouseLeave(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('hovered');
  }

  // Add public methods for arrow clicks
  public handleNext(): void {
    this.nextSlide();
  }

  public handlePrev(): void {
    this.prevSlide();
  }

  public handleSubmit() {
    console.log(this.data.value);

    this.httpClient.post('http://localhost:8082/loginUser', this.data.value).subscribe((data: any) => {
      console.log(data);
      if (data == true) {
        alert("login successfully");
      }
      else {
        alert("Wrong credentials Please try again");
      }
    })
  }
}

