package com.project.review.Services;

import com.project.review.Models.Products;
import com.project.review.Models.Users;
import com.project.review.Repos.ProductsRepository;
import com.project.review.Repos.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductsServicesImplementation implements ProductsServices {

    @Autowired
    ProductsRepository productsRepository;

    @Override
    public Products saveProduct(Products product) {
        return productsRepository.save(product);
    }

    @Override
    public Products partialUpdated(Products product) {
        return productsRepository.save(product);
    }
}
