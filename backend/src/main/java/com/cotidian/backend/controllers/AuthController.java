package com.cotidian.backend.controllers;

import com.cotidian.backend.database.models.UserEntity;
import com.cotidian.backend.dto.AutenticationDTO;
import com.cotidian.backend.dto.LoginResponseDTO;
import com.cotidian.backend.dto.RegisterDTO;
import com.cotidian.backend.database.models.repositories.UserRepository;
import com.cotidian.backend.service.TokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder, TokenService tokenService){
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AutenticationDTO dto){
        var userPassword = new UsernamePasswordAuthenticationToken(dto.email(), dto.password());
        var auth = authenticationManager.authenticate(userPassword);
        var token = tokenService.generateToken((UserEntity) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterDTO dto){
        if (this.userRepository.existsByEmail(dto.email())) {
            return ResponseEntity.badRequest().body("Email already in use");
        }

        String encryptedPassword = passwordEncoder.encode(dto.password());
        UserEntity user =  new UserEntity(dto.name(), dto.email(), encryptedPassword, null);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }
}
