import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'] 
})
export class CourseDetailsComponent {
  topics = [
    { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
    { name: 'SpringBoot', logo: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png' },
    { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
    { name: 'MySQL', logo: 'https://banner2.cleanpng.com/20180411/wre/avf0mauoj.webp' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'AWS', logo: 'https://saviynt.com/hubfs/aws.png' },
    { name: 'Azure', logo: 'https://www.business-central-app.it/wp-content/uploads/2021/12/logo-azure.png' }
  ];
  searchTerm: string = '';
  
  
  courses = [
    {
      title: 'Web Development',
      image: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
      startDate: '2024-01-10',
      endDate: '2024-04-20',
      availability: 'Available',
      duration: '3 months',
      author: 'John Doe',
      description: 'Learn how to build websites and web applications using HTML, CSS, and JavaScript.',
      topics: [
        'Introduction to HTML & CSS',
        'JavaScript Fundamentals',
        'Responsive Web Design',
        'Backend Development with Node.js',
        'Web Deployment and Hosting'
      ],
      schedule: [
        'Week 1: Introduction to HTML & CSS',
        'Week 2: JavaScript Basics',
        'Week 3: Responsive Design',
        'Week 4: Node.js & Backend Development',
        'Week 5: Final Project'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false,
      showOverlay: false
    },
    {
      title: 'Data Science',
      image: 'https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg',
      startDate: '2024-02-15',
      endDate: '2024-06-15',
      availability: 'Available',
      duration: '4 months',
      author: 'Jane Smith',
      description: 'Data Science is a multidisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
      topics: [
        'Introduction to Data Science',
        'Data Wrangling and Preprocessing',
        'Statistical Analysis and Probability',
        'Machine Learning Algorithms',
        'Data Visualization Techniques'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Mobile App Development',
      image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
      startDate: '2024-03-01',
      endDate: '2024-07-01',
      availability: 'Available',
      duration: '4 months',
      author: 'John Doe',
      description: 'Learn how to build mobile applications for iOS and Android platforms using tools like React Native, Flutter, and native development frameworks.',
      topics: [
        'Introduction to Mobile App Development',
        'Building User Interfaces with React Native',
        'Integrating APIs in Mobile Apps',
        'Database and Storage Solutions',
        'Publishing Apps to App Stores'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Cloud Computing',
      image: 'https://theicttrends.com/wp-content/uploads/2023/01/4-Pillars-of-Cloud-Computing-1.jpg',
      startDate: '2024-04-10',
      endDate: '2024-08-10',
      availability: 'Available',
      duration: '5 months',
      author: 'Alice Johnson',
      description: 'Cloud Computing enables businesses to use remote servers to store, manage, and process data, rather than using local servers or personal computers.',
      topics: [
        'Introduction to Cloud Computing',
        'Cloud Service Models (IaaS, PaaS, SaaS)',
        'Virtualization and Cloud Infrastructure',
        'Cloud Security',
        'Cloud Migration Strategies'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'AI & Machine Learning',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWSdD-C1RFUUoC0nR-3ZAo9HR0xBqOs146g&s',
      startDate: '2024-05-20',
      endDate: '2024-09-20',
      availability: 'Available',
      duration: '4 months',
      author: 'Michael Brown',
      description: 'AI & Machine Learning focus on creating intelligent systems that can learn, adapt, and improve from experience without explicit programming.',
      topics: [
        'Introduction to AI and ML',
        'Supervised and Unsupervised Learning',
        'Neural Networks and Deep Learning',
        'Natural Language Processing',
        'Reinforcement Learning'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Cybersecurity',
      image: 'https://senlainc.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-2560%D1%851600.jpg.webp',
      startDate: '2024-06-01',
      endDate: '2024-10-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Emma Wilson',
      description: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information.',
      topics: [
        'Introduction to Cybersecurity',
        'Network Security and Firewalls',
        'Cryptography and Encryption',
        'Cyber Threats and Mitigation Strategies',
        'Incident Response and Risk Management'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Blockchain Payments',
      image: 'https://digitalasset.intuit.com/content/dam/intuit/sbseg/en_us/Blog/Photography/Stock/blockchain-payments-faster-secure-us-en.png',
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      availability: 'Available',
      duration: '4 months',
      author: 'John Doe',
      description: 'Blockchain Payments focuses on utilizing blockchain technology for faster, more secure, and transparent payment systems, reducing fraud and transaction times.',
      topics: [
        'Introduction to Blockchain Technology',
        'Blockchain Payment Systems and Models',
        'Smart Contracts and Blockchain Integration',
        'Blockchain Security Features',
        'Future of Blockchain in Financial Transactions'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'UI/UX Design',
      image: 'https://img-c.udemycdn.com/course/750x422/531148_b0a2_4.jpg',
      startDate: '2024-02-01',
      endDate: '2024-06-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Jane Smith',
      description: 'UI/UX Design focuses on creating seamless user experiences through the design of interactive interfaces. This course covers wireframing, prototyping, and design principles to help build intuitive digital products.',
      topics: [
        'Introduction to UI/UX Design',
        'User Research and Persona Creation',
        'Wireframing and Prototyping Tools',
        'Design Thinking and User-Centered Design',
        'Usability Testing and Feedback Integration'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'DevOps Engineering',
      image: 'https://www.skillreactor.io/blog/wp-content/uploads/2024/03/DevOps-Engineer.webp',
      startDate: '2024-03-01',
      endDate: '2024-07-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Alice Johnson',
      description: 'DevOps Engineering involves automating and optimizing the processes of software development and IT operations. This course covers continuous integration, continuous delivery, and the tools required to create a DevOps pipeline.',
      topics: [
        'Introduction to DevOps and its Principles',
        'Continuous Integration and Continuous Deployment (CI/CD)',
        'Infrastructure as Code (IaC)',
        'Monitoring and Logging in DevOps',
        'Cloud Platforms and Automation Tools'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Game Development',
      image: 'https://www.appstudio.ca/blog/wp-content/uploads/2021/09/Cost-of-Game-Development.jpeg',
      startDate: '2024-04-01',
      endDate: '2024-08-01',
      availability: 'Available',
      duration: '4 months',
      author: 'David Brown',
      description: 'Game Development focuses on the process of creating video games. This course covers the fundamentals of game mechanics, design, and development using various game engines.',
      topics: [
        'Introduction to Game Development and Game Engines',
        'Game Design Principles and Mechanics',
        '2D and 3D Game Programming',
        'Game Testing and Debugging',
        'Building and Deploying Games'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Figma',
      image: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM',
      startDate: '2024-05-01',
      endDate: '2024-09-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Dr. Alan Turing',
      description: 'Figma is a powerful tool for UI/UX design and prototyping. This course teaches how to create responsive, interactive prototypes, and collaborate with teams in real time.',
      topics: [
        'Introduction to Figma and Interface Design',
        'Creating Prototypes and Wireframes',
        'Collaborative Design and Feedback in Figma',
        'Design Systems and Component Libraries',
        'Responsive Design and Interactive Elements'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
    },
    {
      title: 'Artificial Intelligence and Data Science (AIDS)',
      image: 'https://assets.thehansindia.com/h-upload/2022/04/23/1600x960_1288605-artificial-intelligence.webp',
      startDate: '2024-06-01',
      endDate: '2024-10-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Dr. Ada Lovelace',
      description: 'This course provides an in-depth understanding of Artificial Intelligence and Data Science, covering foundational principles, machine learning algorithms, data analysis, and AI applications.',
      topics: [
        'Introduction to Artificial Intelligence and Data Science',
        'Machine Learning Algorithms and Techniques',
        'Data Preprocessing and Visualization',
        'Deep Learning and Neural Networks',
        'AI Applications in Real-World Scenarios'
      ],
      showDetails: false,
      showEnroll: false,
      showSuccess: false
      
    }
  ];

  selectedCourse: any = null;

  // Method to generate weeks dynamically based on course duration
  getWeeks(course: any) {
    const weeks = [];
    let weekCount = 12; // For a 3-month course, assume 12 weeks

    for (let i = 1; i <= weekCount; i++) {
      weeks.push({
        weekNumber: i,
        module: `Module ${i}`,
        learningHours: 3, // Example: 3 hours per week
        assignments: `Assignment ${i}`
      });
    }

    return weeks;
  }

  showOverlay(course: any) {
    this.selectedCourse = course;
    this.selectedCourse.showOverlay = true;
  }

  closeOverlay() {
    if (this.selectedCourse) {
      this.selectedCourse.showOverlay = false;
      this.selectedCourse = null;
    }
  }

  showDetails(course: any) {
    course.showDetails = true;
  }

  hideDetails(course: any) {
    course.showDetails = false;
  }

  showEnroll(course: any) {
    course.showEnroll = true;
  }

  enrollCourse(course: any) {
    course.showSuccess = true;
    course.showEnroll = false;
    this.showOverlay(course);  // Show overlay after successful enrollment
  }  
  constructor(private router: Router) { }

  navigateToFeedback() {
    this.router.navigate(['/course-feedback']);
  }

  }