import Nav from '../components/Nav'
import Js from '../components/Js'
import Link from 'next/link'
import Head from "next/head";

const yic = () => {
  return (
    <body>

      <Head>
      <title>Young Innovators Challenge</title>
      <meta name="description" content="Young Innovators Challenge (YIC) is jointly organized by Yayasan Sime Darby and Chumbaka with Malaysia Digital Economy Corporation (MDEC) as its strategic partner, and supported by the Ministry of Education Malaysia. For 2021, Swinburne Sarawak is once again the technical partner for this event." />
      <meta name="keywords" content="Young Innovators Challenge, YIC, What is YIC, about yic, news on yic" />
      <meta name="author" content="Hovah Yii"/>
      </Head>

      <Js />
      
      <div className="container-fluid">

      <div className="row">
        
        <Nav />

    
          <main className="col-md markdown-body">


          <h1>Young Innovators Challenge (YIC)</h1>

          <p>
          Young Innovators Challenge (YIC) is jointly organized by Yayasan Sime Darby and Chumbaka with Malaysia Digital Economy Corporation (MDEC) as its strategic partner, and supported by the Ministry of Education Malaysia. For 2021, Swinburne Sarawak is once again the technical partner for this event.

          </p>


          <h2>Mentors </h2>
          <p>
          The Faculty of Engineering, Computing and Science shall oversee the assignment of undergraduate students to the YIC event as Mentors, under the guidance of Chumbaka.
          </p>

          <h2>The involvement of Mentors in YIC are as such: </h2>
          
          <ol>
              <li> Train-the-trainer with participating schools and their teachers</li>
              <li> Mentoring the schools and their teams / students – 4 sessions</li>
              <li> Technical support for students</li>
          </ol>

          <h2>For 2021 </h2>
          
         <p>The YIC 2021 event shall be mainly online. Mentors shall also be involved virtually with the schools, teachers and students. Mentors need not be physically in Kuching, and can participate as long as there is internet connectivity (e.g. Zoom, Teams, email). We welcome Swinburne Sarawak who is knowledgeable in programming, electronics, and microcontrollers (Arduino / Pi) to be Mentors!</p>

         <p>We shall also submit the Mentor program for YIC to SLVP to provide further recognition to our students’ involvement.</p>

         <p>Info: <Link href="http://bit.ly/SUTSLVP" >http://bit.ly/SUTSLVP</Link></p>

         <h2>More information on YIC</h2>
          
          <ul>
              <li> About YIC: <Link href="https://younginnovators.my/faq/" >https://younginnovators.my/faq/</Link></li>
              <li> Timeline: <Link href="https://younginnovators.my/program-timeline/" >https://younginnovators.my/program-timeline/</Link></li>
              <li> About Chumbaka: <Link href="https://www.chumbaka.asia/" >https://www.chumbaka.asia/</Link></li>
          </ul>

          <h2>News on YIC</h2>
          
          <ul>
              <li><Link href="https://www.theborneopost.com/2018/07/18/tunku-putra-school-triumphs-at-yic-sarawak" >https://www.theborneopost.com/2018/07/18/tunku-putra-school-triumphs-at-yic-sarawak</Link></li>
              <li><Link href="https://www.facebook.com/swinburnesarawak/photos/a.264734026943674/3262479330502447" >https://www.facebook.com/swinburnesarawak/photos/a.264734026943674/3262479330502447</Link></li>
          </ul>

          </main>


         </div>

      </div>
  </body>
  )
}

export default yic