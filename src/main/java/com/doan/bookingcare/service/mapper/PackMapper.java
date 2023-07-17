package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Hospital;
import com.doan.bookingcare.domain.Pack;
import com.doan.bookingcare.service.dto.HospitalDTO;
import com.doan.bookingcare.service.dto.PackDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Pack} and its DTO {@link PackDTO}.
 */
@Mapper(componentModel = "spring")
public interface PackMapper extends EntityMapper<PackDTO, Pack> {
    @Mapping(target = "hospital", source = "hospital", qualifiedByName = "hospitalId")
    PackDTO toDto(Pack s);

    @Named("hospitalId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    HospitalDTO toDtoHospitalId(Hospital hospital);
}
