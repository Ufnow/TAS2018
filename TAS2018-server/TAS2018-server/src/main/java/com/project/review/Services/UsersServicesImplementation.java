package com.project.review.Services;

import com.project.review.Models.Reviews;
import com.project.review.Models.Users;
import com.project.review.Repos.UsersRepository;
import com.project.review.Resources.UserResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServicesImplementation implements UsersServices{

    @Autowired
    UsersRepository usersRepository;

    @Override
    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public Users partialUpdated(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public Users findOne(String usersLogin) {
        return usersRepository.getByLogin(usersLogin);
    }


}
