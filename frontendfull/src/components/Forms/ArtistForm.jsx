import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, PickyFieldContainer, Tooltip, Row } from '../../pages/AddReleaseElements';

import './FormStyle.css';

const maxArtistNameLength = 50;
const maxLocationLength = 30;
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
          errors.Debut_year = 'Format as MM/DD/YYYY';
        }
        if (!values.Artist_name) {
          errors.Artist_name = 'Required';
        } else if (values.Artist_name.length > maxArtistNameLength) {
          errors.Artist_name = `${values.Artist_name.length -
            maxArtistNameLength} characters over limit`;
        }
        if (!values.City) {
          errors.City = 'Required';
        } else if (values.City.length > maxLocationLength) {
          errors.City = `${values.City.length - maxLocationLength} characters over limit`;
        }
        if (!values.Country) {
          errors.Country = 'Required';
        } else if (values.Country.length > maxLocationLength) {
          errors.Country = `${values.Country.length - maxLocationLength} characters over limit`;
        }
        /**
         * State is not required, as it's a little specific and might not be easily findable
         */
        if (values.State.length > maxLocationLength) {
          errors.State = `${values.State.length - maxLocationLength} characters over limit`;
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
              <h3>Artist name:</h3>
              <PickyFieldContainer>
                <Field type="text" name="Artist_name" />
                <ErrorMessage name="Artist_name" component={Tooltip} />
              </PickyFieldContainer>
              <h3>Debut/birth date:</h3>
              <PickyFieldContainer>
                <Field type="text" name="Debut_year" placeholder="MM/DD/YYYY" />
                <ErrorMessage name="Debut_year" component={Tooltip} />
              </PickyFieldContainer>
            </Row>
            <h3>Location:</h3>
            <Row>
              <PickyFieldContainer>
                <Field type="text" name="City" placeholder="City" />
                <ErrorMessage name="City" component={Tooltip} />
              </PickyFieldContainer>
              <PickyFieldContainer>
                <Field type="text" name="State" placeholder="State/region" />
                <ErrorMessage name="State" component={Tooltip} />
              </PickyFieldContainer>
              <PickyFieldContainer>
                <Field type="text" name="Country" placeholder="Country" />
                <ErrorMessage name="Country" component={Tooltip} />
              </PickyFieldContainer>
            </Row>
            <Row>
              <h3>Genre(s): </h3>
              <Field type="text" name="Genre" />
            </Row>
            <Row>
              {/** TODO: Add a dialog if any field has stuff in it asking if they really
               want to go back. This is to prevent accidental progress wipes. Maybe use
               the same dialog for submission? */}
              <button onClick={() => changeStep(0)} className="form-button">
                Previous Step
              </button>
              <button type="submit" className="form-button" disabled={isSubmitting}>
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
