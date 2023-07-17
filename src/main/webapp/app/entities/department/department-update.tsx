import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IHospital } from 'app/shared/model/hospital.model';
import { getEntities as getHospitals } from 'app/entities/hospital/hospital.reducer';
import { IDepartment } from 'app/shared/model/department.model';
import { getEntity, updateEntity, createEntity, reset } from './department.reducer';

export const DepartmentUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const hospitals = useAppSelector(state => state.hospital.entities);
  const departmentEntity = useAppSelector(state => state.department.entity);
  const loading = useAppSelector(state => state.department.loading);
  const updating = useAppSelector(state => state.department.updating);
  const updateSuccess = useAppSelector(state => state.department.updateSuccess);

  const handleClose = () => {
    navigate('/department' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getHospitals({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...departmentEntity,
      ...values,
      hospital: hospitals.find(it => it.id.toString() === values.hospital.toString()),
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
          ...departmentEntity,
          hospital: departmentEntity?.hospital?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="bookingcareV1App.department.home.createOrEditLabel" data-cy="DepartmentCreateUpdateHeading">
            Create or edit a Department
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="department-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Department Name"
                id="department-departmentName"
                name="departmentName"
                data-cy="departmentName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Description" id="department-description" name="description" data-cy="description" type="text" />
              <ValidatedField id="department-hospital" name="hospital" data-cy="hospital" label="Hospital" type="select">
                <option value="" key="0" />
                {hospitals
                  ? hospitals.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/department" replace color="info">
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

export default DepartmentUpdate;
