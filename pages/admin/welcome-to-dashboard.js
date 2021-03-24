
import Navbar from './components/Navbar'
import styles from '../../styles/admin.module.css'

const Dashboard = () => {

    return (
      
        <div className={styles.container}>
            <Navbar />
            <div className={styles.mainContent}>
                <h1>Dashboard</h1>
                <p>The only way to learn a new programming language is by writing programs in it.</p>
                <div className={styles.panelWrapper}>
                    <div className={styles.panelHead}>
                        Words of Encouragement 
                    </div>
                    <div className={styles.panelBody}>
                        Hi, I am Hovah. Basically this dashboard is just a amatuer product. I am lazy to code extra features and I hope that you guys can continue the works.
                    </div>
                </div>
                <div className={styles.panelWrapper}>
                    <div className={styles.panelHead}>
                        Suggestion 
                    </div>
                    <div className={styles.panelBody}>
                        You could improve this website by:
                        <ul>
                            <li> adding on user Authetication</li>
                            <li> improve UI and mobile responsiveness</li>
                            <li> create a forum</li>
                            <li> anything you like you can just add it</li>
                        </ul>
                    </div>
                </div>
              
            </div>
        </div>
        
    )
}

export default Dashboard;