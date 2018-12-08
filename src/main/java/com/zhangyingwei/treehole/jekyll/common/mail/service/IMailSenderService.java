package com.zhangyingwei.treehole.jekyll.common.mail.service;

import com.zhangyingwei.treehole.jekyll.common.mail.models.MailEntity;

/**
 * @author zhangyw
 * @date: 2018/10/8
 * @desc:
 */
public interface IMailSenderService {
    public void sendSimpleMail(MailEntity mailEntity) throws Exception;
    public void sendTemplateMail(MailEntity mailEntity) throws Exception;
}
