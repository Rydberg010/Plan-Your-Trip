package com.mindtree.PlanYourTripBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.PlanYourTripBackend.model.User;
import com.mindtree.PlanYourTripBackend.repository.RegistrationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository registrationRepository;

	public User saveUser(User user) {
		return registrationRepository.save(user);
	}
	
	public User fetchUserByEmailIdAndPassword(String email,String password) {
		
		return  registrationRepository.findByEmailIdAndPassword(email, password);
	}
}
