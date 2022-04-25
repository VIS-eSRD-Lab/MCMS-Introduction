package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.ERole;
import com.vinternship.mcmsbackend.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
