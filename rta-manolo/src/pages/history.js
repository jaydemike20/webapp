import React, { useState } from 'react';
import Navbar from '../Navbar';

function History(props) {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>RECORD PAGE</h1>
            </div>
            <div style={{backgroundColor:"white", width:"94rem", height:"30rem", display:"flex", position:"absolute", marginTop: "35rem", borderRadius: 20, padding: 30, flexDirection:"column"}}>
                <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
            </div>
            
        </div>
    );
}

export default History;