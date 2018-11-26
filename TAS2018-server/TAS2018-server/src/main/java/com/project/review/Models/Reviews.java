package com.project.review.Models;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
public class Reviews {

    @Id
    @GenericGenerator(name="Reviewsor" , strategy="increment")
    @GeneratedValue(generator = "Reviewsor")
    private Integer id;
    private Double rate;
    private String description;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id")
    private Products product;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private Users user;
    //
    //
    // Nazwa user, nazwa gry i description, rating
    //
    public Reviews() {
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
