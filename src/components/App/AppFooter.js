import React from 'react'
import * as Constants from '../../utils/constants'


let packageJsonFile = require('../../../package.json');

const AppFooter = () => {
    return <div className="container-fluid text-center text-md-right app-footer">
        <span> &copy; {new Date().getFullYear()}{' '}
                    <a href={Constants.URL_HOMEPAGE}>{Constants.COMPANY_NAME}. </a>
                    {packageJsonFile.name + ' version ' + packageJsonFile.version}</span>
    </div>
}

export default AppFooter;