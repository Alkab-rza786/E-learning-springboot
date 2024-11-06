// CourseRepository.java
package com.LoginRegister.example.repository;

import com.LoginRegister.example.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}

