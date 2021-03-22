import Nav from '../components/Nav'
import Js from '../components/Js'
import Image from 'next/image'

export const getStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Swinburne-Sarawak-Computer-Science-Club/scsc/next/client/public/staffs.json');
  const data = await res.json();

  return {
    props: { staffs: data }
  }
}

const staffs = ({ staffs })  => {
  return (

    <body>
      <Js />
    <div className="container-fluid">

    <div className="row">
      
      <Nav />

      <main className="col-md">

          <a data-id="" id="staff" ></a><h1><a data-id="" href="#staff">Staff</a></h1>

          <p className="mb-4 mt-4">Email us all at <a href="computerscience.club@students.swinburne.edu.my">computerscience.club@students.swinburne.edu.my</a>!</p>
          
          {staffs.map(staff => (

          <div key={staff.id} className="border-0 card mb-4">
            <div className="no-gutters row">
              <div className="pr-3">
            
                <Image width={130} height={140} alt="Dr. Mark Tee Kit Tsun" className="card-img img-thumbnail" src={staff.image} />

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

export default staffs