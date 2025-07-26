import React from 'react'

function UserCard(props) {
  return (
  <>
  <h1>Name = {props.name}</h1>
  <h2> Age = { props.age} </h2>
  <h3> Status  = { props.isMember?"member":"Guest"} </h3>


  </>
  )
}

export default UserCard
