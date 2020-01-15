import React from 'react';

const newContext = React.createContext({ color: 'black' });

const value = useContext(newContext);

console.log(value);

export default value