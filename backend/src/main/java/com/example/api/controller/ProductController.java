package com.example.api.controller;

import java.util.List;
import com.example.api.model.Product;
import com.example.api.repository.ProductRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// start

import com.example.api.repository.PriceListRepository;


import com.example.api.model.PriceList;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

// end

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {

    protected final Log logger = LogFactory.getLog(getClass());

    
    final ProductRepository repository;
    final PriceListRepository priceRepository;
    

    public ProductController(ProductRepository repository , PriceListRepository priceRepository) {
        this.repository = repository ;
        this.priceRepository = priceRepository ;
    }

    @GetMapping("/list")
    public List<Product> list_products() {
       return repository.findAll() ;
    }

    @GetMapping("/price_list")
    public List<PriceList> list_price() {
       return priceRepository.findAll() ;
    }

    @GetMapping("/list_detail")
    @ResponseBody
    public List<Product> list_products_by_name(@RequestParam  String productName) {
        System.out.println("productname");
        System.out.println(productName);
        List<Product> product_detail  = repository.findByName(productName) ;
        return product_detail ;
    }

}
