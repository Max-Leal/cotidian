package com.cotidian.backend.database.repository;

import com.cotidian.backend.database.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<UserEntity, Long> {
    UserDetails findByEmail(String email);
    boolean existsByEmail(String email);
}
