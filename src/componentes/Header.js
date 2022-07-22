import React from 'react';

// Ya que es function declaration, da por implicito el return
// Lo que esta dentro de {} es código JS, lo demás es Html
const Header = ({titulo}) => (
    <h1>{ titulo }</h1>
)
 
export default Header;