import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './pack.reducer';

export const PackDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const packEntity = useAppSelector(state => state.pack.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="packDetailsHeading">Pack</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{packEntity.id}</dd>
          <dt>
            <span id="nane">Nane</span>
          </dt>
          <dd>{packEntity.nane}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{packEntity.description}</dd>
          <dt>Hospital</dt>
          <dd>{packEntity.hospital ? packEntity.hospital.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/pack" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/pack/${packEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PackDetail;
