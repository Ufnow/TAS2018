package com.project.review.Services;

import com.project.review.Models.Products;

public interface ProductsServices {
    Products saveProduct(Products product);
    Products partialUpdated(Products product);
}
