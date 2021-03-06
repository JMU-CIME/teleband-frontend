import React, { useEffect, useState } from 'react';
import './App.css';
import Landing from './pages/Landing'
import StudentAssignment from './pages/StudentAssignment'
import StudentPage from './pages/Student'
import TeacherPage from './pages/Teacher'
// import Admin from './pages/Admin'
import Login from './pages/Login'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { FetchURL } from './env/url'
import Navbar from './components/Navbar'
import Container from '@material-ui/core/Container';

import { styled } from '@material-ui/core/styles';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [currentUserType, setCurrentUserType] = useState(undefined)
  const [studentAssignments, setStudentAssignments] = useState([])

  useEffect(() => {

    if (localStorage.getItem('jwt') && localStorage.getItem("type") === "teacher") {
      fetch(`${FetchURL}teacher/profile`, {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      }).then(resp => resp.json())
        .then(teacher => {
          setCurrentUser(teacher)
          setCurrentUserType("teacher")
        })
    } else if (localStorage.getItem('jwt') && localStorage.getItem("type") === "student") {
      fetch(`${FetchURL}student/profile`, {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      }).then(resp => resp.json())
        .then(student => {
          if (student) {
            setCurrentUser(student)
            setCurrentUserType("student")
            setStudentAssignments(student.student_assignments)
          }
        })
    }
  }
    , [])

  // const proxySetUser = (u) => {
  //   console.log('u', u)
  //   return setCurrentUser(u)
  // }

  function clearUserStates() {
    window.localStorage.clear()
    setCurrentUser(undefined);
    setCurrentUserType(undefined)
  }

  const FlexCol = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  })

  return (
    <BrowserRouter>
      <FlexCol maxWidth={false}>
        <Navbar currentUserType={currentUserType} currentUser={currentUser} clearUserStates={clearUserStates} />
        <Switch>
          <Route exact path="/" render={() => {
            if (currentUser && currentUserType === "teacher") {
              return <Redirect to="/teacher" />
            } else if (currentUser && currentUserType === "student") {
              return <Redirect to="/student" />
            } else {
              return <Landing />
            }
          }} />
          <Route exact path="/login/:teacher?" render={({match}) => {
            if (match?.params?.teacher === 'teacher') { //TODO add support for 
              return <Login setCurrentUser={setCurrentUser} setCurrentUserType={setCurrentUserType} setStudentAssignments={setStudentAssignments} teacher={true}/>
            } else {
              return <Login setCurrentUser={setCurrentUser} setCurrentUserType={setCurrentUserType} setStudentAssignments={setStudentAssignments} />
            }
          }} />
          <Route exact path="/student" render={() => {
            return < StudentPage currentUser={currentUser} studentAssignments={studentAssignments} />
          }} />
          <Route exact path="/teacher" render={() => {
            return < TeacherPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }} />
          <Route path="/assignments/:id" render={(props) => {
            const assignmentId = props.match.params.id
            return <StudentAssignment assignmentId={assignmentId} currentUser={currentUser} currentUserType={currentUserType} studentAssignments={studentAssignments} setStudentAssignments={setStudentAssignments}/>
            }}  />
          {/* <Route exact path="/admin" component={Admin} /> */}
          <Route>
            <Landing />
          </Route>
        </Switch>
      </FlexCol>
    </BrowserRouter>
  );
}

export default App;