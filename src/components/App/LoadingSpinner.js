import React, {Fragment} from 'react'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const LoadingSpinner = () => {
    return <Fragment>
        <div className="loading-overlay">
        </div>
        <span className="spinner-icon">
            <FontAwesomeIcon icon={faSpinner} size="3x" spin/>
        </span>

    </Fragment>
}

export default LoadingSpinner;