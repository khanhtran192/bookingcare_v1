import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './hospital.reducer';

export const HospitalDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const hospitalEntity = useAppSelector(state => state.hospital.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="hospitalDetailsHeading">Hospital</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{hospitalEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{hospitalEntity.name}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{hospitalEntity.address}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{hospitalEntity.email}</dd>
          <dt>
            <span id="phoneNumber">Phone Number</span>
          </dt>
          <dd>{hospitalEntity.phoneNumber}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{hospitalEntity.description}</dd>
          <dt>
            <span id="workDay">Work Day</span>
          </dt>
          <dd>{hospitalEntity.workDay}</dd>
          <dt>
            <span id="workTime">Work Time</span>
          </dt>
          <dd>{hospitalEntity.workTime}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{hospitalEntity.type}</dd>
          <dt>
            <span id="procedure">Procedure</span>
          </dt>
          <dd>{hospitalEntity.procedure}</dd>
        </dl>
        <Button tag={Link} to="/hospital" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/hospital/${hospitalEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default HospitalDetail;
