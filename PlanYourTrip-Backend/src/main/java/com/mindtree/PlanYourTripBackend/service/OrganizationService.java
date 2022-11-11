package com.mindtree.PlanYourTripBackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mindtree.PlanYourTripBackend.model.Organization;

@Service
public class OrganizationService {

	public Organization findAllOrganizationByName(List<Organization> organizations, String name) {

		Organization organization=null;
		for (int i = 0; i < organizations.size(); i++) {
			if (organizations.get(i).getOrganizationName().equals(name)) {
				organization =  organizations.get(i);
			}
		}
		return organization;
	}
	
	public Organization findOrganization(List<Organization> organizations , int id) {
		
		Organization organization=null;
		for (int i = 0; i < organizations.size(); i++) {
			if (organizations.get(i).getOrganizationId()==id) {
				organization =  organizations.get(i);
			}
		}
		return organization;
	}

}
