import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IImage } from 'app/shared/model/image.model';
import { ImageType } from 'app/shared/model/enumerations/image-type.model';
import { getEntity, updateEntity, createEntity, reset } from './image.reducer';

export const ImageUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const imageEntity = useAppSelector(state => state.image.entity);
  const loading = useAppSelector(state => state.image.loading);
  const updating = useAppSelector(state => state.image.updating);
  const updateSuccess = useAppSelector(state => state.image.updateSuccess);
  const imageTypeValues = Object.keys(ImageType);

  const handleClose = () => {
    navigate('/image' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...imageEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          type: 'LOGO',
          ...imageEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="bookingcareV1App.image.home.createOrEditLabel" data-cy="ImageCreateUpdateHeading">
            Create or edit a Image
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="image-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Name" id="image-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Path" id="image-path" name="path" data-cy="path" type="text" />
              <ValidatedField label="Type" id="image-type" name="type" data-cy="type" type="select">
                {imageTypeValues.map(imageType => (
                  <option value={imageType} key={imageType}>
                    {imageType}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField label="Hospital Id" id="image-hospitalId" name="hospitalId" data-cy="hospitalId" type="text" />
              <ValidatedField label="Doctor Id" id="image-doctorId" name="doctorId" data-cy="doctorId" type="text" />
              <ValidatedField label="Department Id" id="image-departmentId" name="departmentId" data-cy="departmentId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/image" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ImageUpdate;
