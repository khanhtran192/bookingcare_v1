package com.doan.bookingcare.service.mapper;

import com.doan.bookingcare.domain.Image;
import com.doan.bookingcare.service.dto.ImageDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Image} and its DTO {@link ImageDTO}.
 */
@Mapper(componentModel = "spring")
public interface ImageMapper extends EntityMapper<ImageDTO, Image> {}
