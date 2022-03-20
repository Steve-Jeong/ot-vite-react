import React from 'react'

function Create({ onCreate }) {
  return (
    <div>
      <h2>Create</h2>
      <form mothod='post' action='/create' onSubmit={e => {
        e.preventDefault()
        onCreate(e.target.title.value, e.target.desc.value)
      }}>
        <p>
          <input type='text' name='title' placeholder='title'></input>
        </p>
        <p>
          <textarea name='desc' placeholder='description'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </div>
  )
}

export default Create