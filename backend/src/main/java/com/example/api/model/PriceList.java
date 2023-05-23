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


@Document("priceList")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PriceList {

    @Id
    private String id;
    @Indexed(unique = true)
    private String productSize;
    private String productPrice ;
    

}
