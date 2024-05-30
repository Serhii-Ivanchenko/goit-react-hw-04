import { Field, Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.searchQuery);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="searchQuery"></Field>
        <button type="submit">
          <BsSearch />
        </button>
      </Form>
    </Formik>
  );
}
