package com.mindtree.PlanYourTripBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.PlanYourTripBackend.model.OrganizationHotelMapping;

@Repository
public interface OrganizationHotelRepository extends JpaRepository<OrganizationHotelMapping, Integer> {

	List<OrganizationHotelMapping> findByOrganizationOrganizationId(int id);

	
}
