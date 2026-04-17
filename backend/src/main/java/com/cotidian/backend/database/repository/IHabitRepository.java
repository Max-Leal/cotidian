package com.cotidian.backend.database.repository;

import com.cotidian.backend.database.models.HabitEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHabitRepository extends JpaRepository<HabitEntity, Long> {
}
