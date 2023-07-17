package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Customer;
import com.doan.bookingcare.service.dto.CustomerDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Customer} and its DTO {@link CustomerDTO}.
 */
@Mapper(componentModel = "spring")
public interface CustomerMapper extends EntityMapper<CustomerDTO, Customer> {}
