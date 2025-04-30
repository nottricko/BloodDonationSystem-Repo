package com.blooddonation.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blooddonation.Entity.DonationEntity;

@Repository
public interface DonationRepository extends JpaRepository<DonationEntity, Integer> {
    List<DonationEntity> findByStatus(String status); // Optional filter
}