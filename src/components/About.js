import React from 'react'
import UserClass from './UserClass'
import userContext from '../../utils/userContext'

function About() {
  return (
    <div>
      
 <UserClass name={"  Ram"} location={"  everywhere"} />

 <userContext.Consumer>
  {({loggedInUser}) => (
    <h1 className='text-lg font-extrabold'>{loggedInUser} </h1>
  )}
 </userContext.Consumer>
    </div>
  )
}

export default About