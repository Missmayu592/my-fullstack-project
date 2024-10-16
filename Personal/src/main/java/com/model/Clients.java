package com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Clients {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String subject;
	private String msg;
	public Clients() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Clients(Long id, String name, String email, String subject, String msg) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.msg = msg;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	@Override
	public String toString() {
		return "Clients [id=" + id + ", name=" + name + ", email=" + email + ", subject=" + subject + ", msg=" + msg
				+ "]";
	}
	
	

}
