import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, PickyFieldContainer, Tooltip, Row } from '../../pages/AddReleaseElements';

import './FormStyle.css';

const maxArtistNameLength = 50;
const maxAlbumNameLength = 100;
const AlbumForm = ({ changeStep }) => (
  <FormContainer>
    <Formik
      initialValues={{
        Album_title: '',
        Category: '',
        Release_date: '',
        Add_date: '',
        Rotation_flag: '',
        Description: '',
        Artist: ''
      }}
      validate={values => {
        let errors = {};
        if (!values.Release_date) {
          errors.Release_date = 'Required';
        } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(values.Release_date)) {
          errors.Release_date = 'Format as MM/DD/YYYY';
        }
        if (!values.Add_date) {
          errors.Add_date = 'Required';
        } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(values.Add_date)) {
          errors.Add_date = 'Format as MM/DD/YYYY';
        }
        if (!values.Album_title) {
          errors.Album_title = 'Required';
        } else if (values.Album_title.length > maxAlbumNameLength) {
          errors.Album_title = `${values.Album_title.length -
            maxAlbumNameLength} characters over limit`;
        }
        if (!values.Artist) {
          errors.Artist = 'Required';
        } else if (values.Artist.length > maxArtistNameLength) {
          errors.Artist = `${values.Artist.length - maxArtistNameLength} characters over limit`;
        }
        if (!values.Category) {
          errors.Category = 'Required';
        }
        if (!values.Rotation_flag) {
          errors.Rotation_flag = 'Required';
        }
        if (!values.Description) {
          errors.Description = 'Required';
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
              <h3>Album title:</h3>
              <PickyFieldContainer>
                <Field type="text" name="Album_title" />
                <ErrorMessage name="Album_title" component={Tooltip} />
              </PickyFieldContainer>
              <h3>Artist(s):</h3>
              <PickyFieldContainer>
                <Field type="text" name="Artist" />
                <ErrorMessage name="Artist" component={Tooltip} />
              </PickyFieldContainer>
            </Row>
            <Row>
              <h3>Category:</h3>
              <PickyFieldContainer>
                <Field component="select" name="Category">
                  <option value="" label="Select a category" />
                  <option value="H" label="Hot" />
                  <option value="M" label="Medium" />
                  <option value="L" label="Light" />
                  <option value="A" label="A" />
                </Field>
                <ErrorMessage name="Category" component={Tooltip} />
              </PickyFieldContainer>
              <h3>Rotation:</h3>
              <PickyFieldContainer>
                <Field component="select" name="Rotation_flag">
                  <option value="" label="Is this going into/in rotation?" />
                  <option value="1" label="Yes" />
                  <option value="0" label="No" />
                </Field>
                <ErrorMessage name="Rotation_flag" component={Tooltip} />
              </PickyFieldContainer>
            </Row>
            <Row>
              <h3>Release date:</h3>
              <PickyFieldContainer>
                <Field type="text" name="Release_date" placeholder="MM/DD/YYYY" />
                <ErrorMessage name="Release_date" component={Tooltip} />
              </PickyFieldContainer>
              <h3>Add date:</h3>
              <PickyFieldContainer>
                <Field type="text" name="Add_date" placeholder="MM/DD/YYYY" />
                <ErrorMessage name="Add_date" component={Tooltip} />
              </PickyFieldContainer>
            </Row>
            <Row>
              <h3>Description:</h3>
            </Row>
            <Row>
              <PickyFieldContainer>
                <Field
                  component="textarea"
                  name="Description"
                  placeholder="Write a brief description of the album."
                />
                <ErrorMessage name="Description" component={Tooltip} />
              </PickyFieldContainer>
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

export default AlbumForm;
