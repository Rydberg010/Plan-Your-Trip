package com.mindtree.PlanYourTripBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.PlanYourTripBackend.model.Admin;
import com.mindtree.PlanYourTripBackend.repository.AdminRepository;

@RestController
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	
	//Details Of all admin
	@GetMapping("/admins")
	public List<Admin> allAdmin(){
		return  adminRepository.findAll();
		}
	

}
