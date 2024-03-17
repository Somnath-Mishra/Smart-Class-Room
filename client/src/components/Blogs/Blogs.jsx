import React from 'react'
// import { useState, useEffect } from 'react';
import './blogs.css'

function Card({ tag, title, message }) {

  return (
    <div className="card-container">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="card-body">
        <span className="card-badge card-badge-blue">{tag}</span>
        <h1>
          {title}
        </h1>
        <p class="card-subtitle">
          {message}
        </p>
      </div>
    </div>
  )
}


function Blogs() {



  const cards = [];
  const mess = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod adipisci consectetur ducimus explicabo accusantium soluta atque eveniet molestias cupiditate in sequi nobis, fugit facilis voluptatum veritatis ab architecto sint illo! Qui, quae tenetur odio esse velit odit quis in obcaecati debitis, ipsa quia saepe aliquid magnam sint voluptatem doloremque"

  for(let i = 0; i < 10; i++) {
    cards.push(<Card tag={"Productivity"} title={"Boost Productivity by Time Management"} message={mess} />)
  }

  return (
    <div id="blog-wraper">
      <div id="blog">
        <div className="blog-heading">
          <h1>Get Some Tips And Tricks</h1>
        </div>
        <div className="blog-container">

          {cards}

        </div>
      </div>
    </div>
  )
}

export default Blogs