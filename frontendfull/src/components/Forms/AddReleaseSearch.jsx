import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormContainer, Row } from '../../pages/AddReleaseElements';

import './FormStyle.css';

function AddReleaseSearch({ searchType, changeStep }) {
  const [searchedArtist, setName] = useState({});
  return (
    <React.Fragment>
      <FormContainer>
        <Formik
          initialValues={{
            Searchquery: ''
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row>
                <Field type="text" name="Searchquery" placeholder={`Search for ${searchType}`} />
                <button type="submit" disabled={isSubmitting}>
                  Search
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </FormContainer>
      {/* <p>Can't find an artist? Make sure your spelling is correct, then move on to next step.</p> */}
      <button onClick={() => changeStep(1)}>Next Step</button>
    </React.Fragment>
  );
}

export default AddReleaseSearch;
