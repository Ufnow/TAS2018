package com.project.review.Repos;

import com.project.review.Models.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewsRepository extends JpaRepository <Reviews, Integer> {

    Reviews getById(Integer id);
    List<Reviews> findByRateGreaterThanEqual(Double rate);
    List<Reviews> findByRateLessThanEqual(Double rate);
    List<Reviews> findByRateEquals(Double rate);
    List<Reviews> findByUser_LoginEquals(String username);
    List<Reviews> findByProduct_NameEquals(String name);
}
