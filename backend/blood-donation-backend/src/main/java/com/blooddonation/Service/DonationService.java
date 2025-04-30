package com.blooddonation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blooddonation.Entity.DonationEntity;
import com.blooddonation.Repository.DonationRepository;

@Service
public class DonationService {

    @Autowired
    private DonationRepository repo;

    // Create
    public DonationEntity createDonation(DonationEntity donation) {
        return repo.save(donation);
    }

    // Read all
    public List<DonationEntity> getAllDonations() {
        return repo.findAll();
    }

    // Read by ID
    public DonationEntity getDonationById(int id) {
        Optional<DonationEntity> optional = repo.findById(id);
        return optional.orElse(null);
    }

    // Update
    public DonationEntity updateDonation(int id, DonationEntity newData) {
        DonationEntity existing = getDonationById(id);
        if (existing != null) {
            existing.setDonorId(newData.getDonorId());
            existing.setRecipientId(newData.getRecipientId());
            existing.setDonationDate(newData.getDonationDate());
            existing.setStatus(newData.getStatus());
            return repo.save(existing);
        }
        return null;
    }

    // Delete
    public String deleteDonation(int id) {
        DonationEntity donation = getDonationById(id);
        if (donation != null) {
            repo.deleteById(id);
            return "Donation ID " + id + " has been deleted.";
        } else {
            return "Donation ID not found.";
        }
    }
}

