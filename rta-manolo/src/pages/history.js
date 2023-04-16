import React, { useState } from 'react';
import Navbar from '../Navbar';

function History(props) {
    return (
        <div>
            <Navbar></Navbar>

            

            <div style={{backgroundColor:"#D9F3FF", boxShadow:"1px 1px 34px 1px #75D4FF", display:"flex", position:"absolute", width: "94rem", height: 60, justifyContent: "center", marginTop: "27rem"}}>
                <h3>TRACK RECORD</h3>
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