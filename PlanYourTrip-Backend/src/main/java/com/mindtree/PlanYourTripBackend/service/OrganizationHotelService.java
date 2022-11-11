package com.mindtree.PlanYourTripBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.PlanYourTripBackend.model.Hotel;
import com.mindtree.PlanYourTripBackend.model.OrganizationHotelMapping;
import com.mindtree.PlanYourTripBackend.repository.HotelRepository;
import com.mindtree.PlanYourTripBackend.repository.OrganizationHotelRepository;

@Service
public class OrganizationHotelService {
	@Autowired
	OrganizationHotelRepository organizationHotelRepository;
	
	@Autowired
	HotelRepository hotelRepository;
	
	public List<Hotel> findHotelByOrganization(int id) {
		List<OrganizationHotelMapping> ohm = organizationHotelRepository.findByOrganizationOrganizationId(id);
		List<Hotel> hotels = new ArrayList<Hotel>();
		for(OrganizationHotelMapping i:ohm)
		{
			hotels.add(hotelRepository.findById(i.getHotel().getHotelId()).orElse(null));
		}
		return hotels;
	}

}
