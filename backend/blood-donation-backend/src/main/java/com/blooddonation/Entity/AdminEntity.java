package com.blooddonation.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admins")
public class AdminEntity {
    @Id
    private String username;
    private String password;

    // Getters and Setters


    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }
}

