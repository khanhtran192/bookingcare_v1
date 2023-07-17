import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './time-slot.reducer';

export const TimeSlotDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const timeSlotEntity = useAppSelector(state => state.timeSlot.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="timeSlotDetailsHeading">Time Slot</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{timeSlotEntity.id}</dd>
          <dt>
            <span id="time">Time</span>
          </dt>
          <dd>{timeSlotEntity.time}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{timeSlotEntity.description}</dd>
          <dt>
            <span id="price">Price</span>
          </dt>
          <dd>{timeSlotEntity.price}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{timeSlotEntity.status ? 'true' : 'false'}</dd>
          <dt>Doctor</dt>
          <dd>{timeSlotEntity.doctor ? timeSlotEntity.doctor.id : ''}</dd>
          <dt>Pack</dt>
          <dd>{timeSlotEntity.pack ? timeSlotEntity.pack.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/time-slot" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/time-slot/${timeSlotEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TimeSlotDetail;
