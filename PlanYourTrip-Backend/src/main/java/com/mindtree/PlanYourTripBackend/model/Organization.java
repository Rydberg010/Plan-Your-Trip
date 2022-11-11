package com.mindtree.PlanYourTripBackend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "organization")
public class Organization {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "organization_id", nullable = false)
	private int organizationId;
	private String organizationName;

	@JsonIgnore
	@OneToMany(mappedBy = "organization")
	private List<OrganizationHotelMapping> organizationHotelMappings;

	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Admin admin;

	public Organization() {

	}

	public int getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}

	public String getOrganizationName() {
		return organizationName;
	}

	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	public List<OrganizationHotelMapping> getOrganizationHotelMappings() {
		return organizationHotelMappings;
	}

	public void setOrganizationHotelMappings(List<OrganizationHotelMapping> organizationHotelMappings) {
		this.organizationHotelMappings = organizationHotelMappings;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	@Override
	public String toString() {
		return "Organization [organizationId=" + organizationId + ", organizationName=" + organizationName
				+ ", organizationHotelMappings=" + organizationHotelMappings + ", admin=" + admin + "]";
	}

}
