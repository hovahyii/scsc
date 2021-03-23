import Nav from '../components/Nav'
import Js from '../components/Js'
import Link from 'next/link'

const yic = () => {
  return (
    <body>

      <Js />
      
      <div className="container-fluid">

      <div className="row">
        
        <Nav />

    
          <main className="col-md markdown-body">


          <h1>Be A YIC Mentor</h1>

          <p>
            Young Innovators Challenge started in year 2013, with only 2 schools and 4 teams of students involved. Today we have gotten more than 400 schools and 6000 students participated in the competition. 
          </p>

          <p><strong>We are currently recruiting for YIC mentors and we would like to invite young and passionate university students to join our mission! </strong></p>

          <h2>Roles and Responsibilities of a mentor: </h2>
          
          <ul>
              <li> a technical support for students</li>
              <li> volunteer time and knowledge to 2 assigned schools</li>
              <li> attend online Train-The-Trainer and 1 Arduino kit will be provided for 1 mentor.</li>
          </ul>

          <h2>What's in it for you? </h2>
          
          <ul>
              <li> National level certificate</li>
              <li> Hands-on training &amp; courseware on Arduino</li>
              <li> CV/resume workshop</li>
              <li> A chance to shadow industry experts during Yoda sessions</li>
          </ul>

          <h2>Requirement of a mentor:  </h2>
          
          <ul>
              <li>be passionate about contributing to younger generation, and</li>
              <li>have some experience in coding and microcontroller</li>
          </ul>
          <br/>

           <p>This will be a rewarding volunteering opportunity. <strong><Link href="https://chat.whatsapp.com/HJ4JuVKQjLFFoulCacehks">Join Here!</Link></strong></p>

          </main>


         </div>

      </div>
  </body>
  )
}

export default yic