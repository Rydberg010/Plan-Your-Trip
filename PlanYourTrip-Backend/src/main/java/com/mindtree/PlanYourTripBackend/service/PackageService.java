package com.mindtree.PlanYourTripBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.PlanYourTripBackend.model.Pack;
import com.mindtree.PlanYourTripBackend.repository.PackageRepository;

@Service
public class PackageService {
	
	@Autowired
	private PackageRepository packageRepository;

	public List<Pack> listOfPackage(List<Pack> packages , String city){
		
		List<Pack> packList = new ArrayList<Pack>();
		
		for(int i=0;i<packages.size();i++) {
			if(packages.get(i).getPackCity().equals(city)) {
				packList.add(packages.get(i));
			}
		}
		return packList;
	}

	public List<Pack> findPackByHotelId(int id){
		return packageRepository.findPackByHotelHotelId(id);
	}
}
