import React from 'react'
import routes from '../config/routes'
import AuthenticatedRoute from "../components/App/AuthenticatedRoute";

export const renderAuthRoutes = (isAuthenticated) => routes.map(item => {
    const {path, rendered} = item;
    return <AuthenticatedRoute key={path} exact path={path} component={rendered}
                               isAuthenticated={isAuthenticated}/>
});


export function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

export function printStamp(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`

}