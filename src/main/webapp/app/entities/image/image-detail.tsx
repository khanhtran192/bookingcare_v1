import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './image.reducer';

export const ImageDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const imageEntity = useAppSelector(state => state.image.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="imageDetailsHeading">Image</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{imageEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{imageEntity.name}</dd>
          <dt>
            <span id="path">Path</span>
          </dt>
          <dd>{imageEntity.path}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{imageEntity.type}</dd>
          <dt>
            <span id="hospitalId">Hospital Id</span>
          </dt>
          <dd>{imageEntity.hospitalId}</dd>
          <dt>
            <span id="doctorId">Doctor Id</span>
          </dt>
          <dd>{imageEntity.doctorId}</dd>
          <dt>
            <span id="departmentId">Department Id</span>
          </dt>
          <dd>{imageEntity.departmentId}</dd>
        </dl>
        <Button tag={Link} to="/image" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/image/${imageEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ImageDetail;
