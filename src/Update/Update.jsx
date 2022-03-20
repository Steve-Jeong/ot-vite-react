import React from 'react'
import { useState } from 'react'

function Update({ title, desc, onUpdate }) {
  const [_title, setTitle] = useState(title)
  const [_desc, setDesc] = useState(desc)
  return (
    <div>
      <h2>Update</h2>
      <form mothod='post' action='/update' onSubmit={e => {
        e.preventDefault()
        //debugger
        onUpdate(_title, _desc)
      }}>
        <p>
          <input type='text' name='title' value={_title} onChange={e => setTitle(e.target.value)}></input>
        </p>
        <p>
          <textarea name='desc' placeholder='description' value={_desc} onChange={e => setDesc(e.target.value)}></textarea>
        </p>
        <p>
          <input type='submit' value='Update'></input>
        </p>
      </form>
    </div>
  )
}

export default Update