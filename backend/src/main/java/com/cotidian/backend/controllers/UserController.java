package com.cotidian.backend.controllers;

import com.cotidian.backend.models.User;
import com.cotidian.backend.models.dtos.UserResponseDTO;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public UserResponseDTO getAuthenticatedUser(@AuthenticationPrincipal User user) {
        return new UserResponseDTO(user.getName(), user.getEmail());
    }
}
