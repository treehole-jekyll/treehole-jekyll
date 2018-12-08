package com.zhangyingwei.treehole.jekyll.admin.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * @ClassName LoginController
 * @Author zhangyw
 * @Date 2018/11/20 上午11:29
 */

@Controller
@RequestMapping("/login")
public class LoginController {

    @GetMapping
    public String index() {
        return "dist/login";
    }
}
