package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Department;
import com.doan.bookingcare.domain.Hospital;
import com.doan.bookingcare.service.dto.DepartmentDTO;
import com.doan.bookingcare.service.dto.HospitalDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Department} and its DTO {@link DepartmentDTO}.
 */
@Mapper(componentModel = "spring")
public interface DepartmentMapper extends EntityMapper<DepartmentDTO, Department> {
    @Mapping(target = "hospital", source = "hospital", qualifiedByName = "hospitalId")
    DepartmentDTO toDto(Department s);

    @Named("hospitalId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    HospitalDTO toDtoHospitalId(Hospital hospital);
}
