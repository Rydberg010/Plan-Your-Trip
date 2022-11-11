package com.mindtree.PlanYourTripBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.PlanYourTripBackend.model.Hotel;
import com.mindtree.PlanYourTripBackend.model.Organization;
import com.mindtree.PlanYourTripBackend.repository.OrganizationRepository;
import com.mindtree.PlanYourTripBackend.service.OrganizationService;

@RestController
public class OrganizationController {

	@Autowired
	private OrganizationRepository repository;

	@Autowired
	private OrganizationService service;

	/* find all organization name */
	@GetMapping("/organization")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Organization> findAllOrganization() {
		return repository.findAll();
	}

	/* find all organization by name */
	@PostMapping("/organization")
	@CrossOrigin(origins = "http://localhost:4200")
	public Organization getAllOrganizationByName(@RequestBody String name) {
		return service.findAllOrganizationByName(repository.findAll(), name);
	}

	@PostMapping("/create-organization")
	@CrossOrigin(origins = "http://localhost:4200")
	public Organization createOrganization(@RequestBody Organization org) {
		Organization o = repository.save(org);
		return o;
	}
	
	@PutMapping("/update-organization")
	@CrossOrigin(origins = "http://localhost:4200")
	public Organization updatePackage(@RequestBody Organization org) {
		Organization o = repository.save(org);
		return o;
	}
}
