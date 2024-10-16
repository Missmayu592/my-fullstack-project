package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Clients;
import com.service.ClientServiceInterface;

@RestController
public class TestClientsController {
	
	@Autowired
	ClientServiceInterface cService;
	
	 @CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add")
	public Clients addClients(@RequestBody Clients s) {
		return cService.saveClients(s);
	}

}
