package com.blooddonation.Service;

import com.blooddonation.Entity.Appointment;
import com.blooddonation.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repository;

    public List<Appointment> getAll() {
        return repository.findAll();
    }

    public Appointment save(Appointment appointment) {
        return repository.save(appointment);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
