package com.memorise.memorise_backend.repository;

import com.memorise.memorise_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByUsername(String username);
    User findByUsername(String username);

    User findByOtp(String otp);
}
