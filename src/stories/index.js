import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { FaBeer } from 'react-icons/fa';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/Button';

import Color from '../common/color.js';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Z-Index', () => 
    <div style={{"font-family": "'Poppins', sans-serif", "display": "flex", "flex-direction": "row"}} >
      <Button zValue='top' onClick={action('clicked')}>Top</Button>
      <Button zValue='float' onClick={action('clicked')}>Float</Button>
      <Button zValue='flat' onClick={action('clicked')}>Flat</Button>
    </div>
  )
  .add('Icon', () =>
    <div style={{"font-family": "'Poppins'", "display": "flex", "flex-direction": "row"}} >
      <Button Icon={FaBeer} onClick={action('clicked')}></Button>
      <Button Icon={FaBeer} iconLeft onClick={action('clicked')}> Cerveza </Button>
      <Button Icon={FaBeer} iconRight onClick={action('clicked')}> Cerveza </Button>
      <Button Icon={FaBeer} iconTop onClick={action('clicked')}> Cerveza </Button>
      <Button Icon={FaBeer} iconBottom onClick={action('clicked')}> Cerveza </Button>
    </div>  
  )
  .add('Color', () => 
    <div style={{"font-family": "'Poppins', sans-serif", "display": "flex", "flex-direction": "row"}} >
      <Button color="red" secundaryColor={null} Icon={FaBeer} onClick={action('clicked')}></Button>
      <Button color="red" secundaryColor="white" Icon={FaBeer} onClick={action('clicked')}></Button>
    </div>
  )
