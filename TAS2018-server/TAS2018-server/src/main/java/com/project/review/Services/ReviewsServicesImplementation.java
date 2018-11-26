package com.project.review.Services;

import com.project.review.Models.Reviews;
import com.project.review.Repos.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsServicesImplementation implements ReviewsServices {

    @Autowired
    private ReviewsRepository reviewsRepository;

    @Override
    public Reviews saveReview(Reviews review) {
        return reviewsRepository.save(review);
    }

    @Override
    public Reviews partialUpdated(Reviews review) {
        return reviewsRepository.save(review);
    }
}
