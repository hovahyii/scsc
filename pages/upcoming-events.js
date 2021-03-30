import Nav from '../components/Nav'
import Js from '../components/Js'
import fetch from 'isomorphic-unfetch';
import Head from "next/head";

const Events = ({ events })  => {
  return (

    <body>

      <Head>
      <title>Upcoming Events</title>
      <meta name="description" content="This page is all about SCSC upcoming events" />
      <meta name="keywords" content="event, upcoming event, event of SCSC" />
      <meta name="author" content="Hovah Yii"/>
      </Head>

      <Js />
    <div className="container-fluid">

    <div className="row">
      
      <Nav />

      <main className="col-md">

          <h1>Upcoming Events</h1>
          
          {events.map(event => (

          <div key={event.id}>

            <div className="no-gutters row">
          
            
                <div className="card-body pl-0">

                  <h2 className="card-text mb-0">
                  <strong>{event.title}</strong>
                  </h2>

                  <p className="card-text mb-0">
                  <strong>Date:</strong> {event.date}
                  </p>

                  <p className="card-text mb-0">
                  <strong>Time:</strong> {event.time}
                  </p>

                  <p className="card-text mb-0">
                  <strong>Venue:</strong> {event.venue}
                  </p>

                  <p className="card-text mb-0">
                  <strong>Description:</strong> {event.description}
                  </p>

                  <p className="card-text mb-0">
                  <strong>Register here:</strong>  <a href={event.link}>{event.link}</a>
                  </p>

              </div>
            
            </div>
          </div>

          ))}
     </main>
    </div>

    </div>
</body>

  )
}

Events.getInitialProps = async () => {
  const res = await fetch('https://swinburne-sarawak-compsci-club.herokuapp.com/api/events');
  const { data } = await res.json();

  return { events: data }
}

export default Events