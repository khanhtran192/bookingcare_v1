import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './diagnose.reducer';

export const DiagnoseDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const diagnoseEntity = useAppSelector(state => state.diagnose.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="diagnoseDetailsHeading">Diagnose</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{diagnoseEntity.id}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{diagnoseEntity.description}</dd>
          <dt>Order</dt>
          <dd>{diagnoseEntity.order ? diagnoseEntity.order.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/diagnose" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/diagnose/${diagnoseEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DiagnoseDetail;
