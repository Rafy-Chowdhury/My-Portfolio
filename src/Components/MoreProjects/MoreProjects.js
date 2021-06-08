import React from 'react';
import { useHistory } from 'react-router';

const MoreProjects = () => {
    const history = useHistory();
    const handleBackHome = () => {
        history.push('/home')
    }
    return (
        <div className="text-center" style={{marginTop: '50px'}}>
            <h1>More Projects will comming soon...</h1>
            <button onClick={() => handleBackHome()} className="btn btn-primary mt-5">Back to home</button>
        </div>
    );
};

export default MoreProjects;