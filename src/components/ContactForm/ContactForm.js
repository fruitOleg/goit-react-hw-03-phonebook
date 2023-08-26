import { Component } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!'),
  number: Yup.number(),
});

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmitForm = (value, actions) => {
    this.props.addContact(this.state);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmitForm}
      >
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Input name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Input number"
              value={this.state.number}
              onChange={this.handleChange}
            />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
