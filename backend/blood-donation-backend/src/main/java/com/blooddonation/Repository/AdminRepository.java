package com.blooddonation.Repository;

import com.blooddonation.Entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminEntity, String> {
    AdminEntity findByUsernameAndPassword(String username, String password);
}

