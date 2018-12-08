package com.zhangyingwei.treehole.jekyll.common.mail.service;

import com.zhangyingwei.treehole.jekyll.common.mail.models.MailEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

/**
 * @author zhangyw
 * @date: 2018/10/8
 * @desc:
 */

@Service
@Slf4j
public class MailSenderService implements IMailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    private String mailFrom;

    @Override
    public void sendSimpleMail(MailEntity mailEntity) throws Exception {
        log.info("start send mail");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFrom);
        message.setTo(mailEntity.getMailTo());
        message.setSubject(mailEntity.getSubject());
        message.setText(mailEntity.getText());
        mailSender.send(message);
    }

    @Override
    public void sendTemplateMail(MailEntity mailEntity) throws Exception {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setFrom(mailFrom);
        helper.setTo(mailEntity.getMailTo());
        helper.setSubject(mailEntity.getSubject());
        helper.setText(mailEntity.getText(), true);
        mailSender.send(message);
    }
}
