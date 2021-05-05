import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Particle-config';

const ParticleBackground = () => {
    return (
        <div style={{ height: "0px"}}>
            <Particles params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticleBackground;