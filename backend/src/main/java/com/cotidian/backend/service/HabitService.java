package com.cotidian.backend.service;

import com.cotidian.backend.database.models.HabitEntity;
import com.cotidian.backend.database.repository.IHabitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HabitService {

    private final IHabitRepository habitRepository;


    public List<HabitEntity> findAll() {
        return habitRepository.findAll();
    }
}
