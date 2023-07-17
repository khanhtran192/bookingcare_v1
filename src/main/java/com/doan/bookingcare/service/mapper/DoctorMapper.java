package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Department;
import com.doan.bookingcare.domain.Doctor;
import com.doan.bookingcare.service.dto.DepartmentDTO;
import com.doan.bookingcare.service.dto.DoctorDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Doctor} and its DTO {@link DoctorDTO}.
 */
@Mapper(componentModel = "spring")
public interface DoctorMapper extends EntityMapper<DoctorDTO, Doctor> {
    @Mapping(target = "department", source = "department", qualifiedByName = "departmentId")
    DoctorDTO toDto(Doctor s);

    @Named("departmentId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DepartmentDTO toDtoDepartmentId(Department department);
}
