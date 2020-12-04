import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faTrash, faTrashRestore)


const App = ({ children }) => (
    <main className="main">
        {children}
    </main>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}
export default App;