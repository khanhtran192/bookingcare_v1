import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './doctor.reducer';

export const DoctorDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const doctorEntity = useAppSelector(state => state.doctor.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="doctorDetailsHeading">Doctor</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{doctorEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{doctorEntity.name}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{doctorEntity.email}</dd>
          <dt>
            <span id="phoneNumber">Phone Number</span>
          </dt>
          <dd>{doctorEntity.phoneNumber}</dd>
          <dt>
            <span id="dateOfBirth">Date Of Birth</span>
          </dt>
          <dd>{doctorEntity.dateOfBirth ? <TextFormat value={doctorEntity.dateOfBirth} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="hospitalId">Hospital Id</span>
          </dt>
          <dd>{doctorEntity.hospitalId}</dd>
          <dt>
            <span id="degree">Degree</span>
          </dt>
          <dd>{doctorEntity.degree}</dd>
          <dt>
            <span id="rate">Rate</span>
          </dt>
          <dd>{doctorEntity.rate}</dd>
          <dt>
            <span id="specialize">Specialize</span>
          </dt>
          <dd>{doctorEntity.specialize}</dd>
          <dt>Department</dt>
          <dd>{doctorEntity.department ? doctorEntity.department.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/doctor" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/doctor/${doctorEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DoctorDetail;
