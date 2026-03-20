package com.cotidian.backend.controllers;

import com.cotidian.backend.models.User;
import com.cotidian.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users") 
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> listAll() {
        return userRepository.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }
}