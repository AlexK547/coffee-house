package com.coffeehouse.coffeehouse.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MenuController {

    @GetMapping("/menu")
    public String about(Model model) {
        model.addAttribute("title", "Menu");
        return "menu";
    }
}
