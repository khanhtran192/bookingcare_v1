package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Hospital;
import com.doan.bookingcare.service.dto.HospitalDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Hospital} and its DTO {@link HospitalDTO}.
 */
@Mapper(componentModel = "spring")
public interface HospitalMapper extends EntityMapper<HospitalDTO, Hospital> {}
