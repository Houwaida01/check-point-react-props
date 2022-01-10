import React from 'react'
import {Card,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

function Profile({fullName,bio,children,handelName}) {
  console.log(handelName)
    return (
        <div >
            <Card style={{ width: '18rem' , backgroundColor:"beige"}}>
  <Card.Img variant="top" src={children} />
  <Card.Body>
    <Card.Title style={{color:"red"}}>{fullName}</Card.Title>
    <Card.Text style={{ fontFamily: "Arial",textAlign: "justify", color: "blue"}}>
      {bio}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Profile
Profile.defaultProps={
  fullName:"dadou"
}
Profile.propTypes = {
  fullName: PropTypes.string,
}
