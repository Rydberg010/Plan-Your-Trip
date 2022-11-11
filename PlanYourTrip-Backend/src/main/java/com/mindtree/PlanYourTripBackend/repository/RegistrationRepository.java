package com.mindtree.PlanYourTripBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.PlanYourTripBackend.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{

	public User findByEmailId(String emailid);
	
	public User findByEmailIdAndPassword(String emailid,String password);
}
