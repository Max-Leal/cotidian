package com.cotidian.backend.controllers;

import com.cotidian.backend.dto.AutenticationDTO;
import com.cotidian.backend.dto.LoginResponseDTO;
import com.cotidian.backend.dto.RegisterDTO;
import com.cotidian.backend.exception.BadRequestException;
import com.cotidian.backend.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@Validated
@Tag(name = "Authentication", description = "Endpoints for register and login")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    @Operation(
            summary = "Authenticate a user",
            description = "Send a POST with email and password. If the credentials are valid, the API returns a JWT token."
    )
    @CrossOrigin("*")
    public LoginResponseDTO login(@Valid @RequestBody AutenticationDTO dto) {
        return authService.login(dto);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(
            summary = "Register a new user",
            description = "Example POST body: {\"name\":\"Max\",\"email\":\"max@email.com\",\"password\":\"123456\"}"
    )
    @CrossOrigin("*")
    public void register(@Valid @RequestBody RegisterDTO dto) throws BadRequestException {
        authService.register(dto);
    }
}
