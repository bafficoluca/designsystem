import React from 'react';
import markdown from './README.mdx';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';

export default {
  title: 'Components/Content Related/Module',
  component: Module,
  subcomponents: { ModuleHeader, ModuleBody, ModuleFooter },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <Module {...args}>
    <ModuleHeader>Module example</ModuleHeader>
    <ModuleBody>
      <p>
        Lorem Ipsum is dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
  </Module>
);



export const Dark = (args) => (
  <Module dark>
    <ModuleHeader>Dark module example</ModuleHeader>
    <ModuleBody>
      <p>
        Lorem Ipsum is dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
  </Module>
);

Dark.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`dark\` prop to highlight a module.`,
    },
  },
};

export const Light = (args) => (
  <Module light>
    <ModuleHeader>Dark module example</ModuleHeader>
    <ModuleBody>
      <p>
        Lorem Ipsum is dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
  </Module>
);

Light.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`light\` prop to show a module on a white background.`,
    },
  },
};

export const WithHover = (args) => (
  <Module light withHover>
    <ModuleBody>
      <p>
        Lorem Ipsum is dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </ModuleBody>
  </Module>
);

WithHover.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`light\` prop to show a module on a white background.`,
    },
  },
};
