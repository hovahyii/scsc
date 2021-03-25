import Link from 'next/link'
import Head from "next/head";

const Nav = () => {
  return (

    <aside className="col-md">
        <Head>
          <script>document.getElementById("year").innerHTML = new Date().getFullYear();</script>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charset="UTF-8">
        </Head>
    <header>
    
        <h1 data-id="this-is-cs50"><a href="/">This is SCSC</a></h1>

        <p><Link href="https://www.swinburne.edu.my/">Swinburne University of Technology Sarawak Campus</Link><br /> 
        Fall <span id="year"></span>


        </p>
    </header>

    <button aria-controls="nav" aria-expanded="false" className="btn btn-sm collapsed d-md-none" data-target="aside > nav" data-toggle="collapse">Menu</button>

    <nav className="collapse d-md-block">
        <hr />

        <ul>
            <li data-marker="*"><a href="/about-scsc/">About SCSC</a></li>
            <li data-marker="*"><a href="/upcoming-events/">Upcoming Events</a></li>
            <li data-marker="*"><a href="/norms/">Norms</a></li>
            <li data-marker="*"><a href="/staffs/">Staffs</a></li>
            <li data-marker="*"><a href="/committees/">Committees</a></li>
        </ul>

        <hr />

        <ul className="small">
          <li data-marker="*"><a href="/young-innovators-challenge/" >Young Innovators Challenge</a></li>
            <li data-marker="*"><a href="/be-a-yic-mentor/" >YIC Mentor</a></li>
            <li data-marker="*"><a href="http://tiny.cc/joinscsc" target="_blank">Join SCSC</a></li>
        </ul>

        <hr />

        <ul className="small">
          <h4>Follow us</h4>
          <a href="https://www.facebook.com/swinburnecompsci" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/swinburnecompsci/" className="fa fa-instagram"></a>
          <a href="https://github.com/Swinburne-Sarawak-Computer-Science-Club" className="fa fa-github"></a>

        </ul>

        <hr />

           <p>With <a href="/thanks">thanks</a> to SCSC's alumni and friends</p>     
    </nav>

    <footer></footer>

  </aside>
  )
}

export default Nav