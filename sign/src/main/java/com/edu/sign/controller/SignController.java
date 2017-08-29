package com.edu.sign.controller;

import com.edu.sign.dao.SignInfoDao;
import com.edu.sign.po.SignInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.UUID;


/**
 * Created by qiuch on 2017/8/12.
 */

@Controller
@EnableAutoConfiguration
public class SignController {
    final String sessionKey = "login_session";

    @Autowired
    SignInfoDao signInfoDao;

    @RequestMapping("/course")
    String course(Model model) {

        return "course";
    }

    @RequestMapping("/")
    String index(String success, Model model) {
        if ("1".equals(success)) {
            model.addAttribute("msg", "报名成功");
            model.addAttribute("success", 1);
        }

        if ("0".equals(success)) {
            model.addAttribute("msg", "报名失败");
        }
        return "index";
    }

    @RequestMapping("/sign")
    String sign(SignInfo signInfo, String[] channel_str) {
        if (signInfo != null) {
            if (channel_str != null && channel_str.length > 0) {
                signInfo.setChannel(StringUtils.join(channel_str, ","));
            }
            signInfoDao.save(signInfo);
            return "redirect:?success=1";
        } else {
            return "redirect:?success=0";
        }

    }

    @RequestMapping("/admin/login")
    String adminLogin(String username, String password, String is_submit, Model model, HttpSession session) {
        if ("admin".equals(username) && "admin123".equals(password)) {
            session.setAttribute(sessionKey, UUID.randomUUID().toString());
            return "redirect:/admin/sign_info";
        } else {
            if ("true".equals(is_submit)) {
                if (StringUtils.isEmpty(username) && StringUtils.isEmpty(password)) {
                    model.addAttribute("msg", "请输入用户名或密码");
                } else {
                    model.addAttribute("msg", "用户名或密码有误");
                }
            }
            return "login";
        }
    }

    @RequestMapping("/admin/sign_info")
    String signInfoList(Integer page, Model model, HttpSession session) {
        if (session.getAttribute(sessionKey) == null) {
            return "redirect:/admin/login";
        }
        if (page == null) {
            page = 1;
        }
        Sort sort = new Sort(Sort.Direction.DESC, "id");
        Pageable pageable = new PageRequest(page - 1, 20, sort);
        Page<SignInfo> signInfoPage = signInfoDao.findAll(pageable);
        model.addAttribute("sign_list", signInfoPage);
        model.addAttribute("page", page);
        model.addAttribute("total", signInfoPage.getTotalPages());
        return "sign_info";
    }
}
