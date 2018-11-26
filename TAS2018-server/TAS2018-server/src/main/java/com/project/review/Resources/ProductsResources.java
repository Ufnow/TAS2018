package com.project.review.Resources;

import com.project.review.Models.Products;
import com.project.review.Models.Users;
import com.project.review.Repos.ProductsRepository;
import com.project.review.Services.ProductsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("api/products")
public class ProductsResources {

    @Autowired
    ProductsRepository productsRepository;

    @Autowired
    ProductsServices productsServices;

    //GET
    @GetMapping("/")
    public List<Products> getAll(){
        return  productsRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Products getById(@PathVariable("id") Integer id){
        Products product = this.productsRepository.getById(id);

        return product;
    }

    @GetMapping(value = "/name/{name}")
    public List<Products> getByName(@PathVariable("name") String name){
        List<Products> products = this.productsRepository.getByName(name);

        return products;
    }

    @GetMapping(value = "/category/{category}")
    public List<Products> getByCategory(@PathVariable("category") String category){
        List<Products> products = this.productsRepository.getByCategory(category);

        return products;
    }

    @GetMapping(value = "/price/g/{price}")
    public List<Products> getByPriceGreaterOrEqual(@PathVariable("price") Double price){
        List<Products> products = this.productsRepository.getByPriceGreaterThanEqual(price);

        return products;
    }

    @GetMapping(value = "/price/l/{price}")
    public List<Products> getByPriceLessOrEquals(@PathVariable("price") Double price){
        List<Products> products = this.productsRepository.getByPriceLessThanEqual(price);

        return products;
    }

    //PATCH
    @PatchMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK, reason = "Product updated.")
    public void updateProduct(@RequestBody Map<String, Object> updates, @PathVariable Integer id){
        Products product = productsRepository.getById(id);

        partialUpdate(product, updates);
    }

    private void partialUpdate(Products product, Map<String, Object> updates){
        if(updates.containsKey("name")){
            product.setName((String) updates.get("name"));
        }
        if(updates.containsKey("category")){
            product.setCategory((String) updates.get("category"));
        }
        if(updates.containsKey("description")){
            product.setDescription((String) updates.get("description"));
        }
        if(updates.containsKey("price")){
            product.setPrice((Double) updates.get("price"));
        }

        productsServices.partialUpdated(product);
    }

    //POST

    @PostMapping(value = "/")
    @ResponseStatus(value = HttpStatus.CREATED, reason = "User created.")
    public ResponseEntity<Products> create(@RequestBody @Valid @NotNull Products product) {
        productsServices.saveProduct(product);
        return ResponseEntity.ok().body(product);
    }

    //DELETE

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK, reason = "User removed.")
    public void deleteReview(@PathVariable("id") Integer id){
        productsRepository.deleteById(id);
    }

}
