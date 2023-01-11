import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../ui/app/App'
import Card from '../ui/app/components/Card'
import CardClass from  '../ui/app/components/CardClass'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Card family={'Parsa'}/>
    <CardClass/>
  </React.StrictMode>
)
