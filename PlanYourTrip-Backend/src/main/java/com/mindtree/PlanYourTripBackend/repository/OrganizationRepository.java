package com.mindtree.PlanYourTripBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.PlanYourTripBackend.model.Organization;

@Repository
public interface OrganizationRepository extends JpaRepository<Organization, Integer> {

	
}
