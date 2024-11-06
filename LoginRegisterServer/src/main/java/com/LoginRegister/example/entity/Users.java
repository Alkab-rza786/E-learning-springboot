package com.LoginRegister.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Users {
	
	public Users() {
	}

	public Users(String email, String fullName, String password, Date date, String address, String course, String phone) {
		super();
		this.email = email;
		this.fullName = fullName;
		this.password = password;
		this.date = date;
		this.address = address;
		this.course = course;
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Id
	private String email;

	private String fullName;
	private String password;
	private Date date; // You may want to specify the format or use LocalDate for date
	private String address;
	private String course;
	private String phone;

}


// Course.java
