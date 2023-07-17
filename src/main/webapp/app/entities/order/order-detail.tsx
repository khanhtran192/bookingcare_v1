import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './order.reducer';

export const OrderDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const orderEntity = useAppSelector(state => state.order.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="orderDetailsHeading">Order</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{orderEntity.id}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{orderEntity.address}</dd>
          <dt>
            <span id="symptom">Symptom</span>
          </dt>
          <dd>{orderEntity.symptom}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>{orderEntity.date ? <TextFormat value={orderEntity.date} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{orderEntity.status}</dd>
          <dt>
            <span id="price">Price</span>
          </dt>
          <dd>{orderEntity.price}</dd>
          <dt>Timeslot</dt>
          <dd>{orderEntity.timeslot ? orderEntity.timeslot.id : ''}</dd>
          <dt>Customer</dt>
          <dd>{orderEntity.customer ? orderEntity.customer.id : ''}</dd>
          <dt>Doctor</dt>
          <dd>{orderEntity.doctor ? orderEntity.doctor.id : ''}</dd>
          <dt>Pack</dt>
          <dd>{orderEntity.pack ? orderEntity.pack.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/order" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/order/${orderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OrderDetail;
