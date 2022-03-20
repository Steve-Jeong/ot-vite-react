import './App.css'
import { Header } from '../Header'
import { Nav } from '../Nav'
import { Content } from '../Content'
import { useState } from 'react'
import { Control } from '../Control'
import { Create } from '../Create'
import { Update } from '../Update'

function App() {
  const [state, setState] = useState({
    mode: 'welcome',
    list: [
      { id: 1, title: 'HTML', desc: 'HTML is ...' },
      { id: 2, title: 'CSS', desc: 'CSS is ...' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is ...' },
    ],
    selected_id: 2,
    max_id: 3,
  })

  let content = null;
  if (state.mode === 'welcome') {
    content = <Content title='Welcome' desc='Welcome to WWW'></Content>
  } else if (state.mode === 'read') {
    let item = state.list.find(item => item.id === state.selected_id)
    content = <Content title={item.title} desc={item.desc}></Content>
  } else if (state.mode === 'create') {
    content = <Create onCreate={(title, desc) => {
      let newList = { id: state.max_id + 1, title, desc }
      setState({ ...state, list: [...state.list, newList], max_id: state.max_id + 1, mode: 'read', selected_id: state.max_id + 1 })
    }}></Create>
  } else if (state.mode === 'update') {
    let item = state.list.find(item => item.id === state.selected_id)
    if (item === undefined) {
      setState({ ...state, mode: 'welcome' })
      return;
    }
    content = <Update title={item.title} desc={item.desc} onUpdate={(title, desc) => {
      let newList = state.list.map(item => {
        if (item.id === state.selected_id) return { id: item.id, title, desc }
        else return item
      })
      setState({ ...state, list: newList, mode: 'read' })
    }}></Update>
  } else if (state.mode === 'delete') {
    let item = state.list.find(item => item.id === state.selected_id)
    let newList = state.list.filter(item => item.id !== state.selected_id)
    setState({ ...state, list: newList, mode: 'welcome' })
  }

  return (
    <div className="App">
      <Header title='WEB' desc='World Wide Web' onClick={() => {
        setState({ ...state, mode: 'welcome' })
      }}></Header>
      <Nav list={state.list} onClick={(id) => {
        setState({ ...state, mode: 'read', selected_id: id })
      }}></Nav>
      {content}
      <Control onClick={(mode) => {
        setState({ ...state, mode })
      }}></Control>
    </div >
  )
}

export default App
