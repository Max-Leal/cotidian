package com.cotidian.backend.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.cotidian.backend.models.User;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    private String secret = "123";

    private String generateToken( User user) {
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer("auth-desvs2blu-api")
                    .withSubject(user.getName())
                    .withExpiresAt(generationExperationDate())
                    .sign(algorithm);
            return token;
        }catch (JWTCreationException e){
            throw new RuntimeException("Error ao gerar a token:"+e);

        }
    }

    private String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("auth-devs2blu-api")
                    .build()
                    .verify(token)
                    .getSubject();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private Instant generationExperationDate(){
        return LocalDateTime.now().plus(2, null).toInstant(ZoneOffset.of("-03:00"));
    }
}