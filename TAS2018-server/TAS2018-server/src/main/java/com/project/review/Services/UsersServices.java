package com.project.review.Services;

import com.project.review.Models.Users;

public interface UsersServices {

    Users saveUser(Users user);
    Users partialUpdated(Users user);
    Users findOne(String login);
}
