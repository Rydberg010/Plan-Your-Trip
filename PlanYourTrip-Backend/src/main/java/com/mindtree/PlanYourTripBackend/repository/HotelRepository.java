package com.mindtree.PlanYourTripBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.PlanYourTripBackend.model.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	
}
