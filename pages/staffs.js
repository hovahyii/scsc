import Nav from '../components/Nav'
import Js from '../components/Js'
import Image from 'next/image'
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Swinburne-Sarawak-Computer-Science-Club/scsc/master/public/staffs.json');
  const data = await res.json();

  return {
    props: { staffs: data }
  }
}

const Staffs = ({ staffs })  => {
  return (

    <body>
      <Head>
      <title>Staffs</title>
      <meta name="description" content="Staffs of the SCSC" />
      <meta name="keywords" content="Staff SCSC, Advisor SCSC,Advisor Swinburne Computer Science Club, Advisor SCSC Sarawak, Advisor Swinburne CompSci Club" />
      <meta name="author" content="Hovah Yii"/>
      </Head>


      <Js />
    <div className="container-fluid">

    <div className="row">
      
      <Nav />

      <main className="col-md">

          <h1>Staff</h1>

          <p className="mb-4 mt-4">Email us all at <a href="computerscience.club@students.swinburne.edu.my">computerscience.club@students.swinburne.edu.my</a>!</p>
          
          {staffs.map(staff => (

          <div key={staff.id} className="border-0 card mb-4">
            <div className="no-gutters row">
              <div className="pr-3">
            
                <Image width={130} height={140} alt={staff.name} className="card-img img-thumbnail" src={staff.image} />

                </div>
                <div>
                <div className="card-body pl-0">
                <p className="card-text mb-0">
                <strong>{staff.name}</strong>, {staff.role}
                </p>

                <p className="card-text mb-0">
                {staff.faculty}
                </p>

                <p className="card-text mb-0">
                <a href={staff.mailto}>{staff.email}</a>
                </p>

                <p className="card-text mb-0">
                    <a href={staff.website}>{staff.website}</a>
                </p>

              </div>
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

export default Staffs