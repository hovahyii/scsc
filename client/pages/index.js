import Nav from '../components/Nav'
import Js from '../components/Js'


export default function Home() {
  return (

    <div>
      
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
