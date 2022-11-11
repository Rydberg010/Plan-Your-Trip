package com.mindtree.PlanYourTripBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.PlanYourTripBackend.model.Pack;

@Repository
public interface PackageRepository extends JpaRepository<Pack, Integer>{

	public Pack findByPackCity(String emailid);

	public List<Pack> findPackByHotelHotelId(int id);

}
