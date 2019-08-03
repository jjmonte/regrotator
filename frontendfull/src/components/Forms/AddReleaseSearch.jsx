import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import axios from 'axios';
import { FormContainer, Row, Tooltip } from '../../pages/AddReleaseElements';

import './FormStyle.css';

function AddReleaseSearch({ searchType, changeStep }) {
  const [foundItems, setFoundItems] = useState([]);
  const [searchedOnce, setSearchedOnce] = useState(false);
  return (
    <React.Fragment>
      <FormContainer>
        <Formik
          initialValues={{
            Searchquery: ''
          }}
          validate={values => {
            let errors = {};
            if (values.Searchquery.length < 3) {
              errors.Searchquery = 'Search must be at least 3 characters long.';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            async function searchAlbum() {
              const res = await axios('http://localhost:3001/api/searchAlbum', {
                params: {
                  Album_title: values.Searchquery
                }
              });
              setFoundItems(res.data.data);
              setSubmitting(false);
              setSearchedOnce(true);
            }
            async function searchArtist() {
              const res = await axios('http://localhost:3001/api/searchArtist', {
                params: {
                  Artist_name: values.Searchquery
                }
              });
              setFoundItems(res.data.data);
              setSubmitting(false);
              setSearchedOnce(true);
            }
            switch (searchType) {
              case 'Artist':
                searchArtist();
                break;
              case 'Album':
                searchAlbum();
                break;
              default:
                console.log(
                  'Error with component props; invalid searchType on AddReleaseSearch.jsx'
                );
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row>
                <Field type="text" name="Searchquery" placeholder={`Search for ${searchType}`} />

                <button type="submit" disabled={isSubmitting} className="form-button">
                  Search
                </button>
              </Row>
              <Row>
                {' '}
                {foundItems.length === 0 && searchedOnce === true ? (
                  <p>No {searchType.toLowerCase()}s found.</p>
                ) : (
                  ''
                )}
                <ErrorMessage name="Searchquery" component={Tooltip} />
              </Row>
              <Row>
                {searchType === 'Album'
                  ? foundItems.map(item => <p>{item.Album_title}</p>)
                  : foundItems.map(item => <p>{item.Artist_name}</p>)}
              </Row>
            </Form>
          )}
        </Formik>
      </FormContainer>
      {/* <p>Can't find an artist? Make sure your spelling is correct, then move on to next step.</p> */}
      <button onClick={() => changeStep(1)} className="form-button">
        Skip Step
      </button>
    </React.Fragment>
  );
}

export default AddReleaseSearch;
