import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpaceTimer } from './components/Timer/space-time'
import './index.css';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <SpaceTimer />,
        document.getElementById('root')
    )

})