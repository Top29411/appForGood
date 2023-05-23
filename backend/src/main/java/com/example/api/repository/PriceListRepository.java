package com.example.api.repository;

import com.example.api.model.PriceList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

// import java.util.Optional;

public interface PriceListRepository extends MongoRepository<PriceList, String> {

    // @Query("{productID:'?0'}")
    // List<Product> findByName(String productID);
}
