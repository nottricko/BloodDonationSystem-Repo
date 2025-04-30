package com.blooddonation.Repository;


import com.blooddonation.Entity.VerifiedDocumentEntity;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerifiedDocumentRepository extends JpaRepository<VerifiedDocumentEntity, Integer> {
    List<VerifiedDocumentEntity> findByApprovalStatus(String status); // Optional: for filtering
}
