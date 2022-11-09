import React from 'react'
import { Link } from 'react-router-dom'

import {Routes as Switch,Route } from 'react-router-dom'
import Head from '../Head'
import Sidebar from './Sidebar'

function Sdashbord() {
  return (
    <div>
      <Head/>
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <Sidebar/>

        </aside>
        <section className='col-md-9'>
          <h1>dash</h1>
        </section>

      </div>
    </div>
    </div>

  )
}

export default Sdashbord
