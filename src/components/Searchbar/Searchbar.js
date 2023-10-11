import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Searchbar.css';
import { SlMagnifier } from 'react-icons/sl';

const Schema = yup.object().shape({
  text: yup
    .string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Enter valid symbols'
    ),
});

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <Formik
        initialValues={{
          text: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="buttonlabel">Search</span>
            <SlMagnifier />
          </button>

          <Field
            className="input"
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="div" name="text" />
        </Form>
      </Formik>
    </header>
  );
};