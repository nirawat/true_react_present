import { Route } from "react-router-dom";
import React from "react";
export const PublicRoute = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} />
            )} />
    );
}