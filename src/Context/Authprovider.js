import React, { createContext } from 'react';
import useFirebase from '../Pages/Authentication/useFirebase';

export const Authcontext = createContext();

const Authprovider = ({children}) => {
    const Allcontext = useFirebase()
    return (
        <Authcontext.Provider value={Allcontext}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;