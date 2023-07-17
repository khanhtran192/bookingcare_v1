package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Customer;
import com.doan.bookingcare.domain.Doctor;
import com.doan.bookingcare.domain.Order;
import com.doan.bookingcare.domain.Pack;
import com.doan.bookingcare.domain.TimeSlot;
import com.doan.bookingcare.service.dto.CustomerDTO;
import com.doan.bookingcare.service.dto.DoctorDTO;
import com.doan.bookingcare.service.dto.OrderDTO;
import com.doan.bookingcare.service.dto.PackDTO;
import com.doan.bookingcare.service.dto.TimeSlotDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Order} and its DTO {@link OrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderMapper extends EntityMapper<OrderDTO, Order> {
    @Mapping(target = "timeslot", source = "timeslot", qualifiedByName = "timeSlotId")
    @Mapping(target = "customer", source = "customer", qualifiedByName = "customerId")
    @Mapping(target = "doctor", source = "doctor", qualifiedByName = "doctorId")
    @Mapping(target = "pack", source = "pack", qualifiedByName = "packId")
    OrderDTO toDto(Order s);

    @Named("timeSlotId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    TimeSlotDTO toDtoTimeSlotId(TimeSlot timeSlot);

    @Named("customerId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CustomerDTO toDtoCustomerId(Customer customer);

    @Named("doctorId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DoctorDTO toDtoDoctorId(Doctor doctor);

    @Named("packId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    PackDTO toDtoPackId(Pack pack);
}
