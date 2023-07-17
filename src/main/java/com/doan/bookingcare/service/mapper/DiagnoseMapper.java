package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Diagnose;
import com.doan.bookingcare.domain.Order;
import com.doan.bookingcare.service.dto.DiagnoseDTO;
import com.doan.bookingcare.service.dto.OrderDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Diagnose} and its DTO {@link DiagnoseDTO}.
 */
@Mapper(componentModel = "spring")
public interface DiagnoseMapper extends EntityMapper<DiagnoseDTO, Diagnose> {
    @Mapping(target = "order", source = "order", qualifiedByName = "orderId")
    DiagnoseDTO toDto(Diagnose s);

    @Named("orderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    OrderDTO toDtoOrderId(Order order);
}
