import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, Row } from '../../pages/AddReleaseElements';

import './FormStyle.css';

const Tooltip = styled.div`
  background-color: ${props => props.theme.highlightColor};
  text-align: center;
  padding: 8px 10px;
  width: 185px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  right: 43%;
  top: 16%;
  }
`;
const ArtistForm = ({ changeStep }) => (
  <FormContainer>
    <Formik
      initialValues={{
        Artist_name: '',
        Debut_year: '',
        Genre: '',
        City: '',
        State: '',
        Country: ''
      }}
      validate={values => {
        let errors = {};
        if (!values.Debut_year) {
          errors.Debut_year = 'Required';
        } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(values.Debut_year)) {
          errors.Debut_year = 'Incorrect date. Format: MM/DD/YYYY';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <React.Fragment>
          <Form>
            <Row>
              <h3>Artist name:</h3> <Field type="text" name="Artist_name" />
              <h3>Debut/birth year:</h3>
              <Field type="text" name="Debut_year" placeholder="MM/DD/YYYY" />
              <ErrorMessage name="Debut_year" component={Tooltip} />
            </Row>
            <h3>Location:</h3>
            <Row>
              <Field type="text" name="City" placeholder="City" />
              <Field type="text" name="State" placeholder="State/province/region" />
              <Field type="text" name="Country" placeholder="Country" />
            </Row>
            <Row>
              <h3>Genre(s): </h3>
              <Field type="text" name="Genre" />
            </Row>
            <Row>
              <button onClick={() => changeStep(0)}> Previous Step</button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Row>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  </FormContainer>
);

export default ArtistForm;
