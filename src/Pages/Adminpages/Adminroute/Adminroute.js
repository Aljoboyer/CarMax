import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import useAuth from '../../../Context/useAuth';


const Adminroute = ({children, ...rest}) => {
    const {user, isloading,isadmin} = useAuth()
    
    if(isloading)
    {
        return <div className="spinnerss mx-auto"></div>
    }
    return (
        <Route
        {...rest}
        render= {({location}) => user.email && isadmin ? children : 
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

export default Adminroute;