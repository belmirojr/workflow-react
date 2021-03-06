import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { addDecorator } from '@storybook/addon-links';

// React Router
import { MemoryRouter } from 'react-router'

// Examples
import { Button, Welcome } from '@storybook/react/demo';

// My Components
import NavMenu from '../src/components/NavMenu'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

// - NavMenu
storiesOf('NavMenu', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('home active', () => <NavMenu />)