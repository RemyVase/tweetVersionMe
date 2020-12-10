import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faTrash, faTrashRestore)


const App = ({ children }) => (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="main">
            {children}
        </main>
    </div>

)

App.propTypes = {
    children: PropTypes.node.isRequired,
}
export default App;