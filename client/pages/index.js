import Head from 'next/head'
import Nav from '../components/Nav'
import About from '../pages/about'

export default function Home() {
  return (
    <div>

      <Head>  
        {/* import external javascript */}
        <script type="text/javascript" src="../js/getFullYear.js"></script>
         {/*  https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use */}
    <link href="../assets/%40fortawesome/fontawesome-free/css/all.min4935.css" rel="stylesheet" />

    <link href="../assets/page4935.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="assets/responsive.css" />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


    {/*  Start WOWSlider.com HEAD section */}
    <link rel="stylesheet" type="text/css" href="../engine1/style.css" />
    <script type="text/javascript" src="../engine1/jquery.js"></script>
     {/*  End WOWSlider.com HEAD section */}

     {/*  http://getbootstrap.com/docs/4.3/getting-started/introduction/ */}
    <script src="../assets/jquery/dist/jquery.min4935.js"></script>
    <script src="../assets/popper.js/dist/umd/popper.min4935.js"></script>
    <script src="../assets/bootstrap/dist/js/bootstrap.min4935.js"></script>

     {/*  https://github.com/pellepim/jstimezonedetect */}
    <script src="../assets/jstz.min4935.js"></script>
    <script src="../assets/text-animation.js"></script>
    <script src="../assets/jekyll-theme-cs504935.js"></script>

    <script type="text/javascript" src="engine1/wowslider.js"></script>
    <script type="text/javascript" src="engine1/script.js"></script>

    </Head>

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
  
      <div id="mySidenav" className="sidenav">
      <a href="mailto:scscsarawak@gmail.com?cc=hovahyii@gmail.com&subject=Feedback" target="_top" id="feedback"> <i className="fa fa-envelope"> Email SCSC web developer</i></a>
      <a href="mailto:scscsarawak@gmail.com?cc=hovahyii@gmail.com&subject=Bug%20on%20website" id="bug"> <i className="fa fa-bug"> Found a bug</i></a>
        </div>
        
                
                <div id="wowslider-container1">
                <div className="ws_images"><ul>
                    <li><img src="../data1/images/1.jpg" alt="1" title="1" id="wows1_0"/></li>
                    <li><img src="../data1/images/2.jpg" alt="2" title="2" id="wows1_1"/></li>
                    <li><img src="../data1/images/3.jpg" alt="3" title="3" id="wows1_2"/></li>
                    <li><img src="../data1/images/4.jpg" alt="4" title="4" id="wows1_3"/></li>
                    <li><img src="../data1/images/5.jpg" alt="5" title="5" id="wows1_4"/></li>
                    <li><img src="../data1/images/6.jpg" alt="6" title="6" id="wows1_5"/></li>
                    <li><a href="http://wowslider.net"><img src="../data1/images/7.jpg" alt="javascript slideshow" title="7" id="wows1_6"/></a></li>
                    <li><img src="../data1/images/8.jpg" alt="8" title="8" id="wows1_7"/></li>
                  </ul></div>
                  <div className="ws_bullets"><div>
                    <a href="#" title="1"><span><img src="../data1/tooltips/1.jpg" alt="1"/>1</span></a>
                    <a href="#" title="2"><span><img src="../data1/tooltips/2.jpg" alt="2"/>2</span></a>
                    <a href="#" title="3"><span><img src="../data1/tooltips/3.jpg" alt="3"/>3</span></a>
                    <a href="#" title="4"><span><img src="../data1/tooltips/4.jpg" alt="4"/>4</span></a>
                    <a href="#" title="5"><span><img src="../data1/tooltips/5.jpg" alt="5"/>5</span></a>
                    <a href="#" title="6"><span><img src="../data1/tooltips/6.jpg" alt="6"/>6</span></a>
                    <a href="#" title="7"><span><img src="../data1/tooltips/7.jpg" alt="7"/>7</span></a>
                    <a href="#" title="8"><span><img src="../data1/tooltips/8.jpg" alt="8"/>8</span></a>
                  </div></div>
                <div className="ws_shadow"></div>
                </div>	
               
              
      <br/><br/>


        </main>

          </div>

        </div>

    </div>
  
  )
}
