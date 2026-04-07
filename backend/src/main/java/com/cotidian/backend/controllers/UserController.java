package com.cotidian.backend.controllers;

import com.cotidian.backend.database.models.UserEntity;
import com.cotidian.backend.dto.UserResponseDTO;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public UserResponseDTO getAuthenticatedUser(@AuthenticationPrincipal UserEntity user) {
        return new UserResponseDTO(user.getName(), user.getEmail());
    }
}
