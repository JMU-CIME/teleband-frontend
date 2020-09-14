import React, { useState, useEffect } from 'react'
import NewAssignmentContainer from './NewAssignmentContainer'
import AdminAssignmentsList from '../components/AdminAssignmentsList'
import { Typography } from '@material-ui/core'
import { FetchURL } from '../env/url'

function AdminPanel(){
const [assignments, setAssignments]=useState([])

useEffect(() => {
        fetch(`${FetchURL}assignments`)
        .then(resp => resp.json())
        .then(assignments => {
        setAssignments(assignments)
        })
    }
    , [])
    
    return(
        <div>
            Admin Panel
            <Typography variant="h4">Add an Assignment</Typography>
            <NewAssignmentContainer assignments={assignments} setAssignments={setAssignments} />
            <Typography variant="h4">Current Assignments</Typography>
            <AdminAssignmentsList assignments={assignments} setAssignments={setAssignments}/>
        </div>
    )
}

export default AdminPanel