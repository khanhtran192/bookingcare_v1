package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Doctor;
import com.doan.bookingcare.domain.Pack;
import com.doan.bookingcare.domain.TimeSlot;
import com.doan.bookingcare.service.dto.DoctorDTO;
import com.doan.bookingcare.service.dto.PackDTO;
import com.doan.bookingcare.service.dto.TimeSlotDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link TimeSlot} and its DTO {@link TimeSlotDTO}.
 */
@Mapper(componentModel = "spring")
public interface TimeSlotMapper extends EntityMapper<TimeSlotDTO, TimeSlot> {
    @Mapping(target = "doctor", source = "doctor", qualifiedByName = "doctorId")
    @Mapping(target = "pack", source = "pack", qualifiedByName = "packId")
    TimeSlotDTO toDto(TimeSlot s);

    @Named("doctorId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DoctorDTO toDtoDoctorId(Doctor doctor);

    @Named("packId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    PackDTO toDtoPackId(Pack pack);
}
