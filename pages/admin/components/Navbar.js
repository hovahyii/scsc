import styles from '../../../styles/admin.module.css'
import Image from 'next/image'



const Navbar = () => (
    <div>
       
        <div className={styles.header}>
            <div className={styles.logo}><span>Admin</span></div>
        </div>
	<div className={styles.navBtn}>Menu</div>
        <div className={styles.sidebar}>
			<nav>
            <Image src="/wp-content/uploads/so-media/clubs/logo/Swinburne-Computer-Science-Club-Logo.png" alt="Picture of the author"  width={300} height={200} />
				<ul>
					<li class="active"><a  className={styles.a}  href="/admin/welcome-to-dashboard/">Dashboard</a></li>
					<li><a className={styles.a}  href="/admin/event/">Event</a></li>
					<li><a className={styles.a}  href="/admin/contact/">Contact</a></li>
				</ul>
			</nav>
		</div>
   
        </div>
)


export default Navbar;