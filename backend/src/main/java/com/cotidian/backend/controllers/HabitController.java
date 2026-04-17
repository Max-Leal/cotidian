package com.cotidian.backend.controllers;

import com.cotidian.backend.database.models.HabitEntity;
import com.cotidian.backend.service.HabitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/habits")
@RequiredArgsConstructor
@Validated
public class HabitController {

    private final HabitService habitService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<HabitEntity> findAll() {
        return habitService.findAll();
    }
}
