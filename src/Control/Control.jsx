import React from 'react'

function Control({onClick}) {
  return (
    <ul>
      <li><a href='/create' onClick={e=>{
        e.preventDefault()
        onClick('create')
      }}>create</a></li>
      <li><a href='/update' onClick={e=>{
        e.preventDefault()
        onClick('update')
      }}>update</a></li>
      <li><input type='button' value='delete' onClick={e=>{
        e.preventDefault()
        onClick('delete')
      }}></input></li>
    </ul>
  )
}

export default Control