package com.cotidian.backend.controllers;

import com.cotidian.backend.database.models.UserEntity;
import com.cotidian.backend.dto.UserResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/users")
@Tag(name = "Users", description = "Endpoints related to authenticated users")
public class UserController {

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    @Operation(
            summary = "Return the authenticated user",
            description = "Send the JWT token in the Authorization header using the format: Bearer <token>"
    )
    public UserResponseDTO getAuthenticatedUser(@AuthenticationPrincipal UserEntity user) {
        return new UserResponseDTO(user.getName(), user.getEmail());
    }
}
