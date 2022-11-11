package com.mindtree.PlanYourTripBackend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "pack")
public class Pack {

	@Id
	@GeneratedValue
	@Column(name = "pack_id", nullable = false)
	private int packId;
	private String packName;
	private int packRating;
	private double packPrice;
	private String packCity;

	@JsonIgnore
	@OneToMany(mappedBy = "pack")
	private List<UserPackMapping> userPackMappings;

	@ManyToOne
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;

	public Pack() {

	}

	public int getPackId() {
		return packId;
	}

	public void setPackId(int packId) {
		this.packId = packId;
	}

	public String getPackName() {
		return packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	public int getPackRating() {
		return packRating;
	}

	public void setPackRating(int packRating) {
		this.packRating = packRating;
	}

	public double getPackPrice() {
		return packPrice;
	}

	public void setPackPrice(double packPrice) {
		this.packPrice = packPrice;
	}

	public String getPackCity() {
		return packCity;
	}

	public void setPackCity(String packCity) {
		this.packCity = packCity;
	}

	public List<UserPackMapping> getUserPackMappings() {
		return userPackMappings;
	}

	public void setUserPackMappings(List<UserPackMapping> userPackMappings) {
		this.userPackMappings = userPackMappings;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	@Override
	public String toString() {
		return "Pack [packId=" + packId + ", packName=" + packName + ", packRating=" + packRating + ", packPrice="
				+ packPrice + ", packCity=" + packCity + ", userPackMappings=" + userPackMappings + ", hotel=" + hotel
				+ "]";
	}

}
