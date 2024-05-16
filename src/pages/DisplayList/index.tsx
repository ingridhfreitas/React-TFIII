import React from 'react'
import "./styles.css"


const DisplayList = () => {
    const times = [
        "Bebe Zahara Benet",
        "Tyra Sanchez",
        "Raja",
        "Sharon Needles",
        "Jinkx Monsoon",
        "Bianca Del Rio",
        "Violet Chachki",
        "Bob the Drag Queen",
        "Sasha Velour",
        "Aquaria",
        "Yvie Oddly",
        "Jaida Essence Hall",
        "Symone",
        "Willow Pill",
        "Sasha Colby"
    ]

  return (
    <div>
        <h1>Campeãs Rupaul's Drag Race </h1>
        <ul>
            {times.map((item) =>
            (<li>{item}</li>)
            )}
        </ul>
    </div>
  )
}

export default DisplayList