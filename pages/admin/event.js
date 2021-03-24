
import { Button, Form, Loader } from 'semantic-ui-react';
import styles from '../../styles/admin.module.css'
import Navbar from './components/Navbar'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';


const Event = ({ events }) => {

    return (
        <div className={styles.container}>
        <Navbar />
          
            <div className={styles.mainContent}>
            <h1>All Events:</h1>

            <Button><a href="./create-event/">Add Event</a></Button>
           
            <table className="table" >
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Description</th>
                    <th>Registation link</th>
                    <th></th>
                    <th></th>
                </tr>
                {events.map(event => {
                return (
                <tr key={event._id}>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.venue}</td>
                    <td>{event.description}</td>
                    <td>{event.link}</td>
                    <th>    
                    <Link href={`/admin/event/${event._id}`}>
                        <Button primary>View</Button>
                    </Link></th>
                    <th>   
                    <Link href={`/admin/event/${event._id}/edit`}>
                        <Button primary>Edit</Button>
                    </Link>
                    </th>
                </tr>
              )
            })}
            </table>
              
                
            </div>
        </div>
    )
}

Event.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/events');
    const { data } = await res.json();
  
    return { events: data }
  } 

export default Event;