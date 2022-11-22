import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About This Project</h1>
            <p>this is a traversy media project from react fron to back course</p>
            <p>version 1.0.2</p>
            

            <p><Link to='/'>Back To Home</Link></p>
        </div>

    </Card>
  )
}

export default AboutPage