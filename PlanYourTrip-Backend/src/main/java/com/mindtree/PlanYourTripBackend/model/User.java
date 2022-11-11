package com.mindtree.PlanYourTripBackend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "user_id" , nullable = false)
	private int userId;
	private String userName;
	private String emailId;
	private String password;
	
	public User() {
		
	}
	
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<UserPackMapping> userPackMappings;


	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<UserPackMapping> getUserPackMappings() {
		return userPackMappings;
	}

	public void setUserPackMappings(List<UserPackMapping> userPackMappings) {
		this.userPackMappings = userPackMappings;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", password=" + password
				+ ", userPackMappings=" + userPackMappings + "]";
	}
	
}
