package com.blooddonation.Controller;

import com.blooddonation.Entity.BloodInventory;
import com.blooddonation.Service.BloodInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bloodinventory")
public class BloodInventoryController {

    @Autowired
    private BloodInventoryService service;

    @GetMapping
    public List<BloodInventory> getAll() {
        return service.getAll();
    }

    @PostMapping
    public BloodInventory create(@RequestBody BloodInventory inventory) {
        return service.save(inventory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteById(id);
    }
}
