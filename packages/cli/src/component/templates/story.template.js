/** 
* Do not modify this file. The file is comming from IBM Carbon and created by copy-carbon 
**/
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { <%= name %> } from './';
import mdx from './<%= name %>.mdx';

export default {
  title: '<%= name %>',
  component: <%= name %>,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const example = () => <<%= name %>>Story Example</<%= name %>>;
