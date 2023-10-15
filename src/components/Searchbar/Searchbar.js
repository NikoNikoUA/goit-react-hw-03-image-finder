import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './Searchbar.module.css';
import { SlMagnifier } from 'react-icons/sl';

const Schema = yup.object().shape({
  value: yup
    .string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Enter valid symbols'
    ),
});

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <Formik
        initialValues={{
          value: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          console.log(values);
          onSubmit(values.value);
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonlabel}>Search</span>
            <SlMagnifier />
          </button>

          <Field
            className={css.input}
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="div" name="value" />
        </Form>
      </Formik>
    </header>
  );
};
