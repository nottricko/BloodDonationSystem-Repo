package com.blooddonation.Repository;

import com.blooddonation.Entity.BloodRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequestEntity, Long> {

    // Custom queries (if needed)

    // Get all requests for a specific patient (you can also add filtering based on status)

    Optional<BloodRequestEntity> findByRepresentativeName(String representativeName);

    List<BloodRequestEntity> findByPatientName(String patientName);

    // Find by request status (Pending, Approved, Rejected)
    List<BloodRequestEntity> findByStatus(String status);

    // Find by patient ID
    ;
}

