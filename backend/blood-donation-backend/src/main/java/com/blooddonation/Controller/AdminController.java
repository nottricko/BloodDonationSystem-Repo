package com.blooddonation.Controller;

import com.blooddonation.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.blooddonation.Entity.AdminEntity;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = { RequestMethod.POST })

public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public boolean login(@RequestBody AdminEntity admin) {
        AdminEntity found = adminRepository.findByUsernameAndPassword(admin.getUsername(), admin.getPassword());
        return found != null;
    }
}
