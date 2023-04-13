import React from 'react'

export default function RedBox() {// default는 하나만!
  return (
    <>
        <p>
            Hello, <span style={{"color":"red"}}>RED BOX</span>
        </p>
    </>
  )
}

export function BlueBox() {
    return (
        <>
            <p>
                Hello, <span style={{"color":"blue"}}>Blue BOX</span>
            </p>
        </>
    )
}

export function GreenBox() {
    return (
        <>
            <p>
                Hello, <span style={{"color":"green"}}>Green BOX</span>
            </p>
        </>
    )
}