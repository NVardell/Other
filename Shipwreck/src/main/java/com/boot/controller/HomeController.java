package com.boot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "HOME! <3";
    }
    @RequestMapping(value="/home", method={RequestMethod.GET})
    public String home2() {
        return "HOME! <3";
    }
}
