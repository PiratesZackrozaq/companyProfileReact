import React from 'react';
import ProjectCard from '../Helper/ProjectCard';

const Project = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading__mini'>Easy Connect to modern devices and enjoy secure and private access to the internet — even on public Wi-Fi.</p>
                <h1 className='heading__primary'>Available for all your <span className='text-yellow-300'>Devices</span></h1>
            </div>
            <ProjectCard
                title="Quick And Simple Installation"
                tech1="Windows"
                tech2="Linux"
                tech3="Android"
                tech4="iOS"
                image="/images/p1.jpg"
            />
        </div>
    )
}

export default Project