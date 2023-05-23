package com.example.api.service;

import com.example.api.repository.UserRepository;
import com.example.api.repository.ProductRepository;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Producer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.api.model.Product;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired ;
import java.lang.Override ;
@Service

// public interface ProductService {
//     List<User> getUsersByFirstName(String firstName);
// }

public class ProductService  {

    final ProductRepository productRepository ;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // @Override
    public List<Product> getProductByName(String productName) {
        return productRepository.findByName(productName) ;
    }
}
