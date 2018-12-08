package com.zhangyingwei.treehole.jekyll.common.mail.models;

import lombok.Data;
import lombok.Getter;

/**
 * @author zhangyw
 * @date: 2018/10/8
 * @desc:
 */

@Data
public class MailEntity {
    private String mailTo;
    private String subject;
    private String text;
}
