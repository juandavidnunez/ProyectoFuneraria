package com.ucaldas.mssecurity.Controllers;

import com.ucaldas.mssecurity.Models.User;
import com.ucaldas.mssecurity.Repositories.UserRepository;
import com.ucaldas.mssecurity.Services.EncryptionService;
import com.ucaldas.mssecurity.Services.JwtService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/api/public/security")
public class SecurityController {
    @Autowired
    private UserRepository theUserRepository;

    @Autowired
    private EncryptionService theEncryptionService;

    @Autowired
    private JwtService theJwtService;

    @PostMapping("/login")
    public String login(@RequestBody User theUser,
                        final HttpServletResponse response) throws IOException{
        String token = "";
        User theActualUser = this.theUserRepository.getUserByEmail(theUser.getEmail());
        if (theActualUser != null) {
            if (theActualUser.getPassword().equals(theEncryptionService.convertSHA256(theUser.getPassword()))) {
                token = theJwtService.generateToken(theActualUser);
            }else {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid credentials");
            }
        }
        return token;
    }
}