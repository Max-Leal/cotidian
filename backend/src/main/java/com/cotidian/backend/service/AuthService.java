package com.cotidian.backend.service;

import com.cotidian.backend.database.models.UserEntity;
import com.cotidian.backend.database.repository.UserRepository;
import com.cotidian.backend.dto.AutenticationDTO;
import com.cotidian.backend.dto.LoginResponseDTO;
import com.cotidian.backend.dto.RegisterDTO;
import com.cotidian.backend.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    public LoginResponseDTO login(AutenticationDTO dto) {
        var credentials = new UsernamePasswordAuthenticationToken(dto.email(), dto.password());
        var authentication = authenticationManager.authenticate(credentials);
        var token = tokenService.generateToken((UserEntity) authentication.getPrincipal());

        return new LoginResponseDTO(token);
    }

    public void register(RegisterDTO dto) throws BadRequestException {
        if (userRepository.existsByEmail(dto.email())) {
            throw new BadRequestException("Email already in use");
        }

        String encryptedPassword = passwordEncoder.encode(dto.password());

        UserEntity user = UserEntity.builder()
                .name(dto.name())
                .email(dto.email())
                .password(encryptedPassword)
                .build();

        userRepository.save(user);
    }
}
