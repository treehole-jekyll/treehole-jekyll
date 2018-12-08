package com.zhangyingwei.treehole.jekyll.common.config;

import com.github.zhangyingwei.solid.config.FileTemplateResourceLoader;
import com.github.zhangyingwei.solid.config.SolidConfiguration;
import com.github.zhangyingwei.solid.spring.SolidSpringTemplateResolver;
import com.github.zhangyingwei.solid.template.TemplateResolver;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author zhangyw
 * @date: 2018/10/8
 * @desc: 配置 solid 模板引擎到 spring 中
 */

@Configuration
public class TreeHoleViewConfig {

    @Bean(name = "solidConfiguration")
    public SolidConfiguration templateBuilder(ApplicationContext ctx) {
        SolidConfiguration configuration = new SolidConfiguration(
                new FileTemplateResourceLoader("src/main/resources/templates")
        );
        return configuration;
    }

    @Bean
    public SolidSpringTemplateResolver getViewResolver(@Qualifier("solidConfiguration") SolidConfiguration configuration) {
        TemplateResolver templateResolver = new TemplateResolver(configuration);
        templateResolver.setSuffix(".html");
        return new SolidSpringTemplateResolver(templateResolver);
    }
}
