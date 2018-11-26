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
@RequestMapping("api/users")
public class UserResources {

    @Autowired
    UsersRepository userRepository;

    @Autowired
    UsersServices usersServices;


    @GetMapping("/")
    public List<Users> getAll(){
        List<Users> users = this.userRepository.findAll();
        return users;
    }

    @GetMapping(value = "/{id}")
    public Users getById(@PathVariable("id") Integer id){
        Users user = this.userRepository.getById(id);

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

//Put
    @PutMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public Users updateUser(@RequestBody Users user) {

        usersServices.saveUser(user);

        return user;
    }
    //PATCH
//    @PatchMapping(value = "/")
//    @ResponseStatus(value = HttpStatus.OK, reason = "User updated.")
//    public void updateUser(@RequestBody Map<String, Object> updates, @PathVariable Integer id){
//        Users user = userRepository.getById(id);
//
//        partialUpdate(user, updates);
//    }
//
//    private void partialUpdate(Users user, Map<String, Object> updates){
//        if(updates.containsKey("login")){
//            user.setLogin((String) updates.get("login"));
//        }
//        if(updates.containsKey("passsword")){
//            user.setLogin((String) updates.get("password"));
//        }
//        if(updates.containsKey("permission")){
//            user.setLogin((String) updates.get("permission"));
//        }
//
//        usersServices.partialUpdated(user);
//    }

    //POST

    @PostMapping(value = "/")
    @ResponseStatus(value = HttpStatus.CREATED, reason = "User created.")



    public ResponseEntity<Users> create(@RequestBody @Valid @NotNull Users user) {

        Users userExists = usersServices.findOne(user.getLogin());

        System.out.println(userExists);
        if (userExists == null) {
            usersServices.saveUser(user);
        }
          return ResponseEntity.ok().body(user);
        }

    //DELETE
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK, reason = "User removed.")
    public void deleteReview(@PathVariable("id") Integer id){
        userRepository.deleteById(id);
    }
}
