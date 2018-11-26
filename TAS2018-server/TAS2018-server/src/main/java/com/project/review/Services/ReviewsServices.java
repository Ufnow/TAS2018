package com.project.review.Services;

import com.project.review.Models.Reviews;

public interface ReviewsServices {

    Reviews saveReview(Reviews review);

    Reviews partialUpdated(Reviews review);
}
