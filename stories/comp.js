import React from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Acccordion from '../components/accordion';
import Buttons from '../components/buttons';
import { storiesOf, action } from '@kadira/storybook';
import {
  SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE
} from '../constants/TodoFilters'

storiesOf('Components', module)
  .add('card view', () => (
    <Card />
  ))
  .add('Accordion', () => (
    <div className="main">
      <div className="title">Accordion</div>
      <Acccordion title="Section Title One">
        <Card />
      </Acccordion>
      {/* <Acccordion title="Section Title Two">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!</Acccordion>
      <Acccordion title="Section Title Three">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!</Acccordion> */}
    </div>
  ))
  .add('Buttons', () => (
    <Buttons />
  ))
