package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Clients;

public interface ClientRepository extends JpaRepository<Clients, Long>{

}
