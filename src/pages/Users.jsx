import React from 'react'
import { DataGridTables, NavBar } from '../Components'
import useAuth from '../custom-hooks/useAuth';
import { userColumns, usersData } from '../utilis/dashboardData'

const Users = () => {
  

    const { currentUser } = useAuth();

  return (
    <>
      {currentUser && (
        <div>
          <NavBar name="Users" type="Pages" />
        </div>
      )}
   <DataGridTables title={'Users'} rows={usersData} columns={userColumns}/></>
  )

}

export default Users