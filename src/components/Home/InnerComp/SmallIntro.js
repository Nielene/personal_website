import React , { Component } from 'react';
import '../../../css/SmallIntro.css'

class SmallIntro extends Component {
  render() {
    return (
        <div className='smallIntroDiv'>

          <div className='name'>
            <h1>Nielene Thomas.</h1>
          </div>

          <div className='career'>
            <h1>Full-Stack Web Developer</h1>
          </div>

          <div className='shortTalk'>
            <p>I love good work and good people. </p>
          </div>

        </div>

    )
  }

}

export default SmallIntro;
