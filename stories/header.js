import React from 'react';
import Header from '../components/Header';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        <Header addTodo={action('Add Todo')}/>
      </div>
    );
  });
