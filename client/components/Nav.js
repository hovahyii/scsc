
const Nav = () => {
  return (

    <aside className="col-md">
  
    <header>
        <h1 data-id="this-is-cs50"><a href="/">This is SCSC</a></h1>

        <p><a href="https://www.swinburne.edu.my/">Swinburne University of Technology</a><br /> 
        Fall <span id="fullYear"></span>

        </p>
    </header>

    <button aria-controls="nav" aria-expanded="false" className="btn btn-sm collapsed d-md-none" data-target="aside > nav" data-toggle="collapse">Menu</button>

    <nav className="collapse d-md-block">
        <hr />

      <ul>
            <li data-marker="*"><a href="/scsc/event-photos/">Event Photos</a></li>
            <li data-marker="*"><a href="/about/">About SCSC</a></li>
            <li data-marker="*"><a href="/scsc/upcoming-events/">Upcoming Events</a></li>
            <li data-marker="*"><a href="/scsc/scsc-event-reports/">Events &amp; Activities</a></li>
            <li data-marker="*"><a href="/scsc/scsc-committees-2018-&amp;-2019/">Committees</a></li>
            <li data-marker="*"><a href="/scsc/scsc-advisors/">Advisors</a></li>
            <li data-marker="*"><a href="/credits">Credits</a></li>
        </ul>

        <hr />


        <ul>
            <li data-marker="*"><a href="http://tiny.cc/joinscsc" target="_blank">Join SCSC</a></li>
        </ul>


        <hr />


        <ul className="small">
            <li data-marker="*"><a href="https://devdocs.io/cpp/" target="_blank">C++ Documentation</a></li>
            <li data-marker=" * "><a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/ " target="_blank">C# Documentation</a></li>
            <li data-marker="* "><a href="https://stackoverflow.com/search " target="_blank">Stack Overflow</a></li>
        </ul>

        <hr />

           <p>This website is official &trade; and takes effect on 28 October 2019</p>     
    </nav>

    <footer></footer>

</aside>
  )
}

export default Nav