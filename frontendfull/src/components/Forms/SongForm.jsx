import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, PickyFieldContainer, Tooltip, Row } from '../../pages/AddReleaseElements';
import { css } from '@emotion/core';

import './FormStyle.css';

const maxArtistNameLength = 50;
const maxAlbumNameLength = 100;

function SongForm({ trackNumber, addSongForm }) {
  const [isSelected, setIsSelected] = useState('true');
  return (
    <FormContainer>
      <Formik
        initialValues={{
          Song_title: '',
          Artist: '',
          Length: '',
          Try_flag: 'false',
          Exp_flag: 'true'
        }}
        validate={values => {
          let errors = {};
          if (!values.Length) {
            errors.Length = 'Required';
            /** Fix regex */
          } else if (!/^\d{0,1}:\d{0,1,2}:\d{1,2}$/i.test(values.Release_date)) {
            errors.Length = 'Format as H:MM:SS';
          }
          if (!values.Song_title) {
            errors.Song_title = 'Required';
          }
          if (!values.Artist) {
            errors.Artist = 'Required';
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
                <h3>{trackNumber}.</h3>
                <PickyFieldContainer size={'50%'}>
                  <Field type="text" name="Song_title" placeHolder="Song title" />
                  <ErrorMessage name="Song_title" component={Tooltip} />
                </PickyFieldContainer>
                <PickyFieldContainer size={'35%'}>
                  <Field
                    type="text"
                    name="Artist"
                    className="input-medium"
                    placeHolder="Artist, Artist ft. etc"
                  />
                  <ErrorMessage name="Artist" component={Tooltip} />
                </PickyFieldContainer>
                <PickyFieldContainer size={'12%'}>
                  <Field type="text" name="Length" className="input-small" placeHolder="H:MM:SS" />
                  <ErrorMessage name="Length" component={Tooltip} />
                </PickyFieldContainer>
              </Row>
              <Row>
                <h3>Try?</h3> <Field type="checkbox" className="checkbox" name="Try_flag" />
                <h3>Explicit?</h3> <Field type="checkbox" className="checkbox" name="Exp_flag" />
                <button type="submit" className="form-button" disabled={isSubmitting}>
                  Submit Song
                </button>
              </Row>
            </Form>
            {isSelected ? (
              <button
                onClick={() => {
                  addSongForm(++trackNumber);
                  setIsSelected(false);
                }}
                className="form-button"
              >
                Add Song
              </button>
            ) : (
              ''
            )}
          </React.Fragment>
        )}
      </Formik>
    </FormContainer>
  );
}

export default SongForm;
