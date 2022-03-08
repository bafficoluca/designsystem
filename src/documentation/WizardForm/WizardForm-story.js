/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'react-final-form';
import Wizard from './Wizard';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import Blockquote from '../../components/Blockquote';
import Wrapper from '../../components/Wrapper';
import RadioButton from '../../components/RadioButton/RadioButton';
import RegularPage from '../RegularPage';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span className="wfp--form-requirement">{error}</span>
  ) : (
    false
  );

storiesOf('Design|Templates', module)
  .addParameters({ hideProps: true })
  .addDecorator((story) => (
    <RegularPage title="Wizard form" withoutSecondaryTabs pageWidth="lg">
      {story()}
    </RegularPage>
  ))
  .add('Wizard Form ', () => (
    <Wrapper background="lighter" pageWidth="lg" spacing="xl">
      <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={onSubmit}
      >
        <Wizard.Page label="Name and last name">
          <Blockquote
            style={{ marginBottom: '2rem' }}
            title="Regular Blockquote"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.{' '}
          </Blockquote>
          <div className="row">
            <div className="col-md-6">
              <Field
                id="firstName"
                name="firstName"
                helperText="Enter your full first name"
                component={ReduxFormWrapper}
                inputComponent={TextInput}
                labelText="First Name"
              />
            </div>
            <div className="col-md-6">
              <Field
                id="lastName"
                name="lastName"
                helperText="Some more requirements"
                component={ReduxFormWrapper}
                inputComponent={TextInput}
                labelText="Last Name"
              />
            </div>
          </div>

          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="notes"
            labelText="Notes"
            placeholder="Notes"
          />

          <Field
            id="firstName"
            name="firstName"
            helperText="Enter your full first name"
            component={ReduxFormWrapper}
            inputComponent={TextInput}
            labelText="First Name"
          />
        </Wizard.Page>
        <Wizard.Page label="Contact data">
          <FormGroup>
            <label htmlFor="sex">Sex</label>
            <FormGroup
              className="wfp--input-group"
              name="input-group"
              defaultSelected="default-selected"
              legend="Group Legend"
            >
              <Field
                name="sex"
                component={ReduxFormWrapper}
                inputComponent={RadioButton}
                type="radio"
                value="male"
                labelText="Male"
              />
              <Field
                name="sex"
                component={ReduxFormWrapper}
                inputComponent={RadioButton}
                type="radio"
                value="female"
                labelText="Female"
              />
            </FormGroup>
            <FormGroup>
              <Field
                component={ReduxFormWrapper}
                inputComponent={TextArea}
                name="notes"
                labelText="Notes"
                placeholder="Notes"
              />
            </FormGroup>
            <Field name="sex" component={renderError} />
          </FormGroup>
        </Wizard.Page>
        <Wizard.Page
          label="Additional notes"
          validate={(values) => {
            const errors = {};
            if (!values.newNotes) {
              errors.newNotes = 'Required';
            }
            return errors;
          }}
        >
          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="newNotes"
            labelText="Notes"
            placeholder="Notes"
          />
        </Wizard.Page>
        <Wizard.Page label="Sulamen mon anmen">
          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="newNotes"
            labelText="Notes"
            placeholder="Notes"
          />
        </Wizard.Page>
        <Wizard.Page
          label="Summary"
          helperText="Check & validate"
          status={'summary'}
        >
          <Field
            component={ReduxFormWrapper}
            inputComponent={TextArea}
            name="newNotes"
            labelText="Summary"
            placeholder="Summary"
          />
        </Wizard.Page>
      </Wizard>
    </Wrapper>
  ));
