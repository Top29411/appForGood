package com.example.api.repository;

import com.example.api.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

// import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {

    @Query("{productID:'?0'}")
    List<Product> findByName(String productID);
}
