import React from 'react'

function Nav({ list, onClick }) {
  let _list = null;
  // debugger;
  _list = list.map((item) => 
    <li key={item.id}><a href={'/data/' + item.id + item.title} data-id={item.id} onClick={(e)=>{
      e.preventDefault()
      onClick(Number(e.target.dataset.id))
    }}>{ item.title }</a></li>
  )
  return (
    <div>
      <ol>
        {_list}
      </ol>
    </div>
  )
}

export default Nav