package com.example.api.controller;

import com.example.api.model.User;
import com.example.api.model.UserDto;
import com.example.api.repository.UserRepository;
import com.example.api.service.JwtUserDetailsService;
import com.example.api.util.JwtTokenUtil;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.CrossOrigin;


// import org.imixs.workflow.jee.ejb.EntityService;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthenticationController {

    protected final Log logger = LogFactory.getLog(getClass());

    final UserRepository userRepository;
    final AuthenticationManager authenticationManager;
    final JwtUserDetailsService userDetailsService;
    final JwtTokenUtil jwtTokenUtil;
    

    public AuthenticationController(UserRepository userRepository, AuthenticationManager authenticationManager,
                                    JwtUserDetailsService userDetailsService, JwtTokenUtil jwtTokenUtil
                                    
                                    ) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;

        
    }

    


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody() UserDto dto) {
        var userName = dto.userName ;
        var password = dto.password ;
        Map<String, Object> responseMap = new HashMap<>();
        try {
            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName
                    , password));
            if (auth.isAuthenticated()) {
                logger.info("Logged In");
                UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
                String token = jwtTokenUtil.generateToken(userDetails);
                responseMap.put("error", false);
                responseMap.put("message", "Logged In");
                responseMap.put("token", token);
                return ResponseEntity.ok(responseMap);
            } else {
                responseMap.put("error", true);
                responseMap.put("message", "Invalid Credentials");
                return ResponseEntity.status(401).body(responseMap);
            }
        } catch (DisabledException e) {
            e.printStackTrace();
            responseMap.put("error", true);
            responseMap.put("message", "User is disabled");
            return ResponseEntity.status(500).body(responseMap);
        } catch (BadCredentialsException e) {
            responseMap.put("error", true);
            responseMap.put("message", "Invalid Credentials");
            return ResponseEntity.status(401).body(responseMap);
        } catch (Exception e) {
            e.printStackTrace();
            responseMap.put("error", true);
            responseMap.put("message", "Something went wrong");
            return ResponseEntity.status(500).body(responseMap);
        }
    }

    @PostMapping("/register" )
    public ResponseEntity<?> saveUser(@RequestBody() UserDto dto) {
        var userName = dto.userName;
        var password = dto.password;
        Map<String, Object> responseMap = new HashMap<>();
        User user = new User();
        
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setUserName(userName);
        UserDetails userDetails = userDetailsService.createUserDetails(userName, user.getPassword());
        String token = jwtTokenUtil.generateToken(userDetails);
        userRepository.save(user);
        responseMap.put("error", false);
        responseMap.put("username", userName);
        responseMap.put("message", "Account created successfully");
        responseMap.put("token", token);
        return ResponseEntity.ok(responseMap);
    }
}
