package com.project.review.Repos;

import com.project.review.Models.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductsRepository extends JpaRepository <Products, Integer> {


    Products getById(Integer id);
    List<Products> getByName(String name);
    List<Products> getByCategory(String category);
    List<Products> getByPriceGreaterThanEqual(Double price);
    List<Products> getByPriceLessThanEqual(Double price);

}