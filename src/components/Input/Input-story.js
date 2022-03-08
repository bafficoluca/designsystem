import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Input from '../Input';
import TextInputSkeleton from '../TextInput/TextInput.Skeleton';

const types = {
  None: '',
  'Text (text)': 'text',
  'For email (email)': 'email',
  'For password (password)': 'password',
};

const TextInputProps = () => ({
  className: 'some-class',
  id: 'test2',
  defaultValue: text('Default value (defaultValue)', 'This is a default value'),
  labelText: text('Label text (labelText)', 'Text Input label'),
  placeholder: text('Placeholder text (placeholder)', 'Placeholder text'),
  light: boolean('Light variant (light)', false),
  disabled: boolean('Disabled (disabled)', false),
  hideLabel: boolean('No label (hideLabel)', false),
  invalid: boolean('Show form validation UI (invalid)', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'A valid value is required'
  ),
  readOnly: boolean('Read-only (readOnly)', false),
  helperText: text('Helper text (helperText)', 'Optional helper text.'),
  onClick: action('onClick'),
  type: select('Form control type (type)', types, 'text'),
  onChange: action('onChange'),
});

storiesOf('Components|Input', module)
  .addDecorator(withKnobs)
  /*.add('Default', () => (
    <Input {...TextInputProps()}>
      <input></input>
    </Input>
  ))*/
  .add('Functional', () => (
    <Input {...TextInputProps()}>
      {(props) => {
        return <input {...props} />;
      }}
    </Input>
  ))
  .add('skeleton', () => (
    <div>
      <TextInputSkeleton />
      <br />
      <TextInputSkeleton hideLabel />
    </div>
  ));
