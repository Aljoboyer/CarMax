import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import useAuth from '../Context/useAuth';

const Privateroute = ({children, ...rest}) => {
    const {user, isloading} = useAuth();
    
    if(isloading)
    {
        return <div className="spinnerss mx-auto"></div>
    }
    return (
        <Route
        {...rest}
        render= {({location}) => user.email ? children : 
        <Redirect
        to={
            {
                pathname: '/login',
                state:{from: location}
            }
        } 
        >

        </Redirect>
        }
        >

        </Route>
    );
};

export default Privateroute;