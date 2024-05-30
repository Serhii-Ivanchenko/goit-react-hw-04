// import { Field, Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value;
    query.trim() === '' ? toast.error('Input can not be empty!') : onSubmit(query);
    event.target.reset();
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );

  //     (
  //     <Formik
  //       initialValues={{ searchQuery: '' }}
  //       onSubmit={(values, actions) => {
  //         onSearch(values.searchQuery);
  //         actions.resetForm();
  //       }}
  //     >
  //       <Form>
  //         <Field name="searchQuery"></Field>
  //         <button type="submit">
  //           <BsSearch />
  //         </button>
  //       </Form>
  //     </Formik>
  //   );
}
