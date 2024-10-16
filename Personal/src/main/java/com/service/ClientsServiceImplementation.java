package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ClientRepository;
import com.model.Clients;

@Service
public class ClientsServiceImplementation implements ClientServiceInterface{
	
	@Autowired
	ClientRepository cRepo;

	@Override
	public Clients saveClients(Clients c) {
		
		return cRepo.save(c);
	}

}
