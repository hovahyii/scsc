import Nav from '../components/Nav'
import Js from '../components/Js'
import Head from "next/head";


export default function Home() {
  return (

    <div>
      <Head>
      <title>Welcome to SCSC</title>
      <meta name="description" content="Swinburne Sarawak Computer Science Club also known as SCSC was founded in 2018 by Hovah YIi and Alywin Sim" />
      <meta name="keywords" content="SCSC, About SCSC, Swinburne Computer Science Club, SCSC Sarawak, Swinburne CompSci Club" />
      <meta name="author" content="Hovah Yii"/>
      </Head>
      
      <Js />
     
    <body>
      <div className="container-fluid">

          <div className="row">

            <Nav />

          <main className="col-md markdown-body">

          <h1>Welcome to SCSC</h1>

          <h2>
              <div className="typewrite" data-period="2000" data-type='[ "Hi, we are Swinburne Computer Science Club.", "We love programming.", "We like problem-solving.", "Most importantly, we share memes! =)" ]'>
                  <span className="wrap"></span>
              </div>
          </h2>
                  
           <iframe width="560" height="315" src="https://www.youtube.com/embed/s43gHr5rXeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
           </main>


          </div>

        </div>

  

    </body>
    </div>
  
  )
}
