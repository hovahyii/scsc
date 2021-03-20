import Head from 'next/head'
import Nav from '../components/Nav'
import About from '../pages/about'

export default function Home() {
  return (
    <div>
      <Head>  
        {/* import external javascript */}
        <script type="text/javascript" src="../js/getFullYear.js"></script>
        <link href="../assets/@fortawesome/fontawesome-free/css/all.min4935.css" rel="stylesheet"/>

        <script src="../assets/jquery/dist/jquery.min4935.js"></script>
        <script src="../assets/popper.js/dist/umd/popper.min4935.js"></script>
        <script src="../assets/bootstrap/dist/js/bootstrap.min4935.js"></script>

        <script src="../assets/jstz.min4935.js"></script>
        <script src="../assets/text-animation.js"></script>

        <script src="../assets/jekyll-theme-cs504935.js"></script>

      </Head>

      <Nav />

     <About />

    </div>
  
  )
}
