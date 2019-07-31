import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';

import './FormStyle.css';
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;
const Row = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 5px;
`;
function AddReleaseSearch(props) {
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
                <Field
                  type="text"
                  name="Searchquery"
                  placeholder={`Search for ${props.searchType}`}
                />
                <button type="submit" disabled={isSubmitting}>
                  Search
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </FormContainer>
      {/* <p>Can't find an artist? Make sure your spelling is correct, then move on to next step.</p> */}
      <button onClick={() => props.changeStep(1)}>Next Step</button>
    </React.Fragment>
  );
}

export default AddReleaseSearch;
