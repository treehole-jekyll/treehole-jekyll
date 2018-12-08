package com.zhangyingwei.treehole.jekyll;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = "classpath:treehole.properties",encoding = "UTF-8")
public class TreeholeJekyllApplication {
    public static void main(String[] args) {
        SpringApplication.run(TreeholeJekyllApplication.class, args);
    }
}