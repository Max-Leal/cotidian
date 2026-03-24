package com.cotidian.backend.controllers;

import com.cotidian.backend.models.User;
import com.cotidian.backend.models.dtos.AutenticationDTO;
import com.cotidian.backend.models.dtos.RegisterDTO;
import com.cotidian.backend.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository){
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AutenticationDTO dto){
        var userPassword = new UsernamePasswordAuthenticationToken(dto.login(), dto.password());
        var auth = authenticationManager.authenticate(userPassword);
        System.out.println(auth.getAuthorities());

        return  ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterDTO dto){
        if(this.userRepository.findByLogin(dto.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(dto.password());
        User user =  new User(dto.login(), encryptedPassword, null);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }
}