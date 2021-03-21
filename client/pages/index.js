import Head from 'next/head'
import Nav from '../components/Nav'
import Slideshow from '../components/Slideshow'

export default function Home() {
  return (
    <div>
m
      <Head>  
    {/* import external javascript */}
    <script type="text/javascript" src="..j/js/getFullYear.js"></script>

    {/*  https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use */}
    <link href="../assets/%40fortawesome/fontawesome-free/css/all.min4935.css" rel="stylesheet" />

    <link rel="stylesheet" type="text/css" href="../assets/responsive.css" />

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

    <script type="text/javascript" src="../engine1/wowslider.js"></script>
    <script type="text/javascript" src="../engine1/script.js"></script>

    </Head>
    <body>
      <div className="container-fluid">

          <div className="row">

            <Nav />

            <Slideshow />
           
          </div>

        </div>
    </body>
    </div>
  
  )
}
