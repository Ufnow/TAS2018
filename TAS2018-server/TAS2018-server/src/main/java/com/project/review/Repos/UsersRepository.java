package com.project.review.Repos;

import com.project.review.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository <Users, Integer> {
    Users getById(Integer id);
    Users getByLogin(String login);
    List<Users> getByPermission(Integer id);
}
