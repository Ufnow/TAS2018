package com.project.review.Resources;

import com.project.review.Models.Reviews;
import com.project.review.Models.Users;
import com.project.review.Repos.ReviewsRepository;
import com.project.review.Services.ReviewsServices;
import jdk.management.resource.ResourceRequestDeniedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/reviews")
public class ReviewsResources {

    @Autowired
    ReviewsRepository reviewRepository;

    @Autowired
    ReviewsServices reviewsServices;

    //GET
    @GetMapping("/")
    public List<Reviews> getAll(){
        return  reviewRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Reviews getById(@PathVariable("id") Integer id){
        Reviews review = this.reviewRepository.getById(id);

        return review;
    }

    @GetMapping(value = "/rate/{rate}")
    public List<Reviews> GetByEqualRate(@PathVariable("rate") Double rate){
        List<Reviews> reviews = this.reviewRepository.findByRateEquals(rate);

        return reviews;
    }

    @GetMapping(value = "/rate/g/{rate}")
    public List<Reviews> GetByGreaterOrEqualRate(@PathVariable("rate") Double rate){
        List<Reviews> reviews = this.reviewRepository.findByRateGreaterThanEqual(rate);

        return reviews;
    }

    @GetMapping(value = "/rate/l/{rate}")
    public List<Reviews> GetByLessOrEqualRate(@PathVariable("rate") Double rate){
        List<Reviews> reviews = this.reviewRepository.findByRateLessThanEqual(rate);

        return reviews;
    }

    @GetMapping(value = "/user/{user}")
    public List<Reviews> GetByUsername(@PathVariable("user") String user){
        List<Reviews> reviews = this.reviewRepository.findByUser_LoginEquals(user);

        return reviews;
    }

    @GetMapping(value = "/product/{name}")
    public List<Reviews> GetByProductName(@PathVariable("name") String name){
        List<Reviews> reviews = this.reviewRepository.findByProduct_NameEquals(name);

        return reviews;
    }

    //PATCH
    @PatchMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK, reason = "Review updated.")
    public void updateReview(@RequestBody Map<String, Object> updates, @PathVariable Integer id){
        Reviews review = reviewRepository.getById(id);

        partialUpdate(review, updates);
    }

    private void partialUpdate(Reviews review, Map<String, Object> updates){
        if(updates.containsKey("rate")){
            review.setRate((Double) updates.get("rate"));
        }
        if(updates.containsKey("description")){
            review.setDescription((String) updates.get("description"));
        }
        reviewsServices.partialUpdated(review);
    }

    //POST

    @PostMapping(value = "/")
    @ResponseStatus(value = HttpStatus.CREATED, reason = "Review added.")
    public ResponseEntity<Reviews> create(@RequestBody @Valid @NotNull Reviews review) {
        reviewsServices.saveReview(review);
        return ResponseEntity.ok().body(review);
    }

    //DELETE
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK, reason = "Review removed.")
    public void deleteReview(@PathVariable("id") Integer id){
        reviewRepository.deleteById(id);
    }


}
