import Nav from '../components/Nav'
import Js from '../components/Js'
import Head from "next/head";

const about = () => {
  return (
    <body>


      <Head>
        <title>About SCSC</title>
        <meta name="description" content="SCSC was founded in April 2018 by Aylwin Sim and Hovah Yii. The club later was passed to Dr. Mark Tee Kit Tsun by the end of 2018. Since then, SCSC has been collaborating with IEEE, Robotics clubs to organise activities..." />
        <meta name="keywords" content="SCSC, About SCSC, Swinburne Computer Science Club, SCSC Sarawak, Swinburne CompSci Club, History, what we provide, we provide you" />
        <meta name="author" content="Hovah Yii"/>
      </Head>


      <Js />
      
      <div className="container-fluid">

      <div className="row">
        
        <Nav />

    
          <main className="col-md markdown-body">


          <h1>About SCSC</h1>

          <h2>History</h2>
          <p>
              SCSC was founded in April 2018 by Aylwin Sim and Hovah Yii. The club later was passed to Dr. Mark Tee Kit Tsun by the end of 2018. Since then, SCSC has been collaborating with IEEE, Robotics clubs to organise activities...
          </p>

          <h2>We code the future</h2>
          <p>
              We often invite speaker and professional in CS field to share their experience. We believe in collaboration. We encourage Google culture and life-long learning. We did all kind of activities to prepare our members for the future of work.
          </p>



          <h2>In SCSC, we provide you:</h2>
          <ul>
              <li> environment to learn and grow</li>
              <li> programming bootcamps</li>
              <li> useful workshops</li>
              <li> resources, platform to learn about various type of programming</li>
              <li> programming lovers &amp; geeks</li>
              <li> most importantly, <strong> memes</strong></li>

          </ul>


          </main>


         </div>

      </div>
  </body>
  )
}

export default about