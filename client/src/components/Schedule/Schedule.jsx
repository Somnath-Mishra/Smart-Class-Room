import React from 'react'
import './schedule.css'

function Card({subject, teacher, startTime, endTime}) {
  return (
    <div className="card">
        <div id="details">
            <div id="class">
                <h2 style={{letterSpacing: "1.5px", fontWeight: "bolder"}}>{subject} |</h2>
                <h4 style={{paddingLeft: "10px"}}>{teacher}</h4>
            </div>
            <div id="duration" style={{marginTop: "20px"}}>
                <h3>{startTime} - {endTime}</h3>
            </div>
        </div>
        <button>JOIN</button>
    </div>
  )
}

function Schedule() {
  return(
    <>
    <Card subject={"Physics"} teacher={"P.R sir"} startTime={"12:00pm"} endTime="01:30pm" />
    <Card subject={"Biology"} teacher={"M.B sir"} startTime={"09:00am"} endTime="10:30am" />
    <Card subject={"Maths"} teacher={"P.K.M sir"} startTime={"02:00pm"} endTime="04:00pm" />
    </>
  )
}

export default Schedule