package com.memorise.memorise_backend.dto;

import java.util.Date;
import java.util.List;

public class UserDTO {
    private int id;
    private String username;
    private String name;
    private String avatar;
    private int roleId;
    List<ImageDTO> imageDTOS;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }


    public List<ImageDTO> getImageDTOS() {
        return imageDTOS;
    }

    public void setImageDTOS(List<ImageDTO> imageDTOS) {
        this.imageDTOS = imageDTOS;
    }
}
