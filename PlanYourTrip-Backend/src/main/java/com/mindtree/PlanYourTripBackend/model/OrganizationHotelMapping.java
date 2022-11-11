package com.mindtree.PlanYourTripBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "organizationhotel")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class OrganizationHotelMapping {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int orgHotId;
	
	@ManyToOne
	@JoinColumn(name = "organization_id")
	private Organization organization;
	
	@ManyToOne
	@JoinColumn(name = "hotal_id")
	private Hotel hotel;
	
	public OrganizationHotelMapping() {
		
	}

	public int getOrgHotId() {
		return orgHotId;
	}

	public void setOrgHotId(int orgHotId) {
		this.orgHotId = orgHotId;
	}

	public Organization getOrganization() {
		return organization;
	}

	public void setOrganization(Organization organization) {
		this.organization = organization;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	@Override
	public String toString() {
		return "OrganizationHotelMapping [orgHotId=" + orgHotId + ", organization=" + organization + ", hotel=" + hotel
				+ "]";
	}
	
	

}
