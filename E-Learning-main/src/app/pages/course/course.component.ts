import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // Import necessary modules directly here
})
export class CourseComponent {
  course = {
    courseName: '',
    startDate: '',
    endDate: '',
    availableSeats: 0,
    status: 'open'
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8082/api/courses/add', this.course)
      .subscribe(
        (response) => {
          console.log('Course submitted successfully', response);
          alert('Course submitted successfully');
        },
        (error) => {
          console.error('Error submitting course', error);
          if (error.status === 0) {
            alert('Unable to connect to the backend. Please check if your Spring Boot server is running.');
          } else {
            alert('Error submitting course: ' + error.message);
          }
        }
      );
  }
}
