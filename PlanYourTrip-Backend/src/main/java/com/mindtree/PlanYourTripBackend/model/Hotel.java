package com.mindtree.PlanYourTripBackend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "hotel")
public class Hotel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "hotel_id" , nullable = false)
	private int hotelId;
	
	private String hotelName;
	
	private String hotelCity;
	
	@JsonIgnore
	@OneToMany(mappedBy = "hotel")
	private List<OrganizationHotelMapping> organizationHotelMappings;
	
	public Hotel() {
		
	}

	public int getHotelId() {
		return hotelId;
	}

	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelCity() {
		return hotelCity;
	}

	public void setHotelCity(String hotelCity) {
		this.hotelCity = hotelCity;
	}

	public List<OrganizationHotelMapping> getOrganizationHotelMappings() {
		return organizationHotelMappings;
	}

	public void setOrganizationHotelMappings(List<OrganizationHotelMapping> organizationHotelMappings) {
		this.organizationHotelMappings = organizationHotelMappings;
	}

	@Override
	public String toString() {
		return "Hotel [hotelId=" + hotelId + ", hotelName=" + hotelName + ", hotelCity=" + hotelCity
				+ ", organizationHotelMappings=" + organizationHotelMappings + "]";
	}

	
}
