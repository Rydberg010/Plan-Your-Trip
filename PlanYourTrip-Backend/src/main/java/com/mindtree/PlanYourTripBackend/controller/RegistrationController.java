package com.mindtree.PlanYourTripBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.PlanYourTripBackend.model.User;
import com.mindtree.PlanYourTripBackend.service.RegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
	
	@PostMapping("/register")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) {
		User userobjUser = null;
		userobjUser = service.saveUser(user);
		return userobjUser;
	}
	
	@GetMapping(value = "/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestParam String email , @RequestParam String password) throws Exception {
		User user2 = new User();
		if(email != null && password != null) {
			user2= service.fetchUserByEmailIdAndPassword(email, password);
			
		}
		if(user2 == null) {
			throw new Exception("bad credentials");
		}
		return user2;	
	}

}
