import Nav from '../components/Nav'
import Js from '../components/Js'
import Link from 'next/link'
import Head from "next/head";

const norms = () => {
  return (
    <body>
      <Head>
        <title>Norm </title>
        <meta name="description" content="SCSC new norms after COVID-19" />
        <meta name="keywords" content="norms, team microsoft, events, dr mark" />
        <meta name="author" content="Hovah Yii"/>
      </Head>
      <Js />
      
      <div className="container-fluid">

      <div className="row">
        
        <Nav />

    
          <main className="col-md markdown-body">


          <h1>Team</h1>

     

          <p>
          Team is video-conferencing software that you can <u><Link href="https://www.microsoft.com/en-us/microsoft-teams/download-app">download</Link></u> for Android, iOS, Linux, macOS, or Windows. Email Dr. Mark to add you into the Team.
          </p>

          
          <h2>Norms</h2>
          
          <p>Our events now are mostly conducted on Team Microsoft. For any meeting that you attend, be sure to:</p>
          <ul>
              <li> Join our Team Microsoft</li>
              <li> Participate from a quiet space where can you listen and speak. If you participate from a more public space, just be sure you won’t be approached or disturbed by others while there.</li>
          </ul>


          </main>


         </div>

      </div>
  </body>
  )
}

export default norms