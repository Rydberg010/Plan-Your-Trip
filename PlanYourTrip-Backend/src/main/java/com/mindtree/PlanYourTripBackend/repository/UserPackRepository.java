package com.mindtree.PlanYourTripBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.PlanYourTripBackend.model.UserPackMapping;

@Repository
public interface UserPackRepository extends JpaRepository<UserPackMapping, Integer> {

	List<UserPackMapping> findUserPackMappingByUserUserId(int userId);


}
