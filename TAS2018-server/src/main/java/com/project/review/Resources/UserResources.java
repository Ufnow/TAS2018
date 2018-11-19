package com.project.review.Resources;

import com.project.review.Models.Reviews;
import com.project.review.Models.Users;
import com.project.review.Repos.UsersRepository;
import com.project.review.Services.UsersServices;
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
@RequestMapping("/api")
public class UserResources {

    @Autowired
    UsersRepository userRepository;

    @Autowired
    UsersServices usersServices;


    @GetMapping("/users")
    public List<Users> getAll(){
        List<Users> users = this.userRepository.findAll();
        return users;
    }

    @GetMapping(value = "/users/{userId}")
    public Users getById(@PathVariable("userId") Integer userId){
        Users user = this.userRepository.getById(userId);

        return user;
    }

    @GetMapping(value = "/username/{username}")
    public Users getByUsername(@PathVariable("username") String username){
        Users user = this.userRepository.getByLogin(username);

        return user;
    }

    @GetMapping(value = "/permission/{number}")
    public List<Users> getByPermission(@PathVariable("number") Integer permission){
        List<Users> users = this.userRepository.getByPermission(permission);

        return users;
   }

    //PATCH
    //@PatchMapping("/users/{userId}")
   // @ResponseStatus(value = HttpStatus.OK, reason = "User updated.")
   // public void updateUser(@RequestBody Map<String, Object> updates, @PathVariable Integer userId){
    //    Users user = userRepository.getById(userId);

        //partialUpdate(user, updates);
   // }

    // private void partialUpdate(Users user, Map<String, Object> updates){
    // if(updates.containsKey("login")){
    //   user.setLogin((String) updates.get("login"));
    // }
    // if(updates.containsKey("password")){
    //    user.setLogin((String) updates.get("password"));
    // }
    // if(updates.containsKey("permission")){
    //   user.setLogin((String) updates.get("permission"));
    //  }

    // usersServices.partialUpdated(user);
    //}

    //POST
    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public Users addUser(@RequestBody Users user) {



        user.setId(null);

        usersServices.saveUser(user);

        return user;
    }

    @PutMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public Users updateCustomer(@RequestBody Users user) {

        usersServices.saveUser(user);

        return user;
    }
//Update
    // @PutMapping("/users")
    //  @ResponseStatus(HttpStatus.CREATED)
    //public Users updateUser(@RequestBody Users user) {

    // usersServices.saveUser(user);

    // return user;
//  }




    //DELETE
    @DeleteMapping("/users/{userId}")
    @ResponseStatus(value = HttpStatus.OK, reason = "User removed.")
    public void deleteReview(@PathVariable("userId") Integer userId){
        userRepository.deleteById(userId);
    }
}