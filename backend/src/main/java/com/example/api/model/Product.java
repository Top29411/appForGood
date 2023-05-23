package com.example.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
// import javax.persistence.Column;


@Document("products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    private String productID;
    private String productName ;
    @Indexed(unique = true)
    private String colorWay ;
    private String price ;
    private Date relateDate ;
    private String description ;
    private Integer ImgUrl ;

}
