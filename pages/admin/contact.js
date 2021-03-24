
import Navbar from './components/Navbar'
import styles from '../../styles/admin.module.css'

const Contact = () => {

    return (
      
        <div className={styles.container}>
            <Navbar />
            <div className={styles.mainContent}>
                <h1>Contact me</h1>
                <p>If you have any question, feel free to contact me at <a href="mailto:hovahyii@gmail.com">hovahyii@gmail.com</a>.</p>
              
            </div>
        </div>
        
    )
}

export default Contact;