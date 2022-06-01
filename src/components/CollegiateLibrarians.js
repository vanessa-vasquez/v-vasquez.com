import React from 'react';
import '../styles/CollegiateLibrarians.css';
import Overview from './Overview.js'; 
import Problem from './Problem.js'; 
import Research from './Research.js'; 
import Results from './Results.js'; 

export default function CollegiateLibrarians(){
    return(
        <>
            <Overview />
            <Problem />
            <Research />
            <Results />
        </>
    )
}
