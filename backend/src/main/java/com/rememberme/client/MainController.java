package com.rememberme.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rememberme.client.Snapuser;
import com.rememberme.client.SnapuserRepository;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/api")
public class MainController {

    @Autowired
    private SnapuserRepository snapuserRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewSnapuser (@RequestParam String name, @RequestParam String img_url, @RequestParam String email, @RequestParam String ins_id, @RequestParam String password, @RequestParam String friends){

        Snapuser u = new Snapuser();
        u.setName(name);
        u.setImg_url(img_url);
        u.setEmail(email);
        u.setIns_id(ins_id);
        u.setPassword(password);
        u.setFriends(friends);
        snapuserRepository.save(u);
        return "saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Snapuser> getAllUsers() {
        return snapuserRepository.findAll();
    }
}
