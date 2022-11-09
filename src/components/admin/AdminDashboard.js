import React from 'react'
import AdminSidebar from './AdminSidebar'

function AdminDashboard() {
  return (
    <div>
      <thead/>
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <AdminSidebar/>

                </aside>
                <section className='col-md-9'>
                <h1>Admin</h1>
                </section>

        </div>
    </div>

    </div>
  )
}

export default AdminDashboard