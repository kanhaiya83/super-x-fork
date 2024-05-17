import React from 'react'
import AdminUsageChart from './AdminUsageChart'
import UserDataChart from './UsersDataChart'
import { useOutletContext } from 'react-router-dom';

const StatsPage = () => {
  const { adminQuery } = useOutletContext();

  return (
    <div>
    <div className="mb-10">
        <h1 className="text-2xl font-semibold text-center">Completions requests</h1>
        <AdminUsageChart data={adminQuery?.data?.completionsData || {}}/>
    </div>
    <div className="mb-10">
            <h1 className="text-2xl font-semibold text-center">Users Data</h1>
            <UserDataChart data={adminQuery?.data?.users || []}/>
        </div>
    </div>
  )
}

export default StatsPage