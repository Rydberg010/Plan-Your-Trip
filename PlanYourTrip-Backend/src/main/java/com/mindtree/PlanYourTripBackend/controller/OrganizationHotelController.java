package com.mindtree.PlanYourTripBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.PlanYourTripBackend.model.Hotel;
import com.mindtree.PlanYourTripBackend.service.OrganizationHotelService;

@RestController
public class OrganizationHotelController {
	@Autowired
	OrganizationHotelService organizationHotelService;
	
	
	@PostMapping(value = "/organization/hotels")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Hotel> getAllHotelFromOrganization(@RequestParam int id){
		List<Hotel> hotels = organizationHotelService.findHotelByOrganization(id);
		return hotels;
	}

}
