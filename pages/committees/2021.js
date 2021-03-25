import Nav from '../../components/Nav'
import Js from '../../components/Js'
import Head from "next/head";

const twoOne = () => {
  return (

    <body>


        <Head>
      <title>2021</title>
      <meta name="description" content="All about the SCSC committees 2021" />
      <meta name="keywords" content="scsc committees, committee 2021" />
      <meta name="author" content="Hovah Yii"/>
      </Head>



      <Js />


    <div className="container-fluid">

    <div className="row">
      
      <Nav />

   
    <main className="col-md markdown-body">

    <h1>Committees 2021</h1>
    
                   
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LAI KOK WUI</td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>CHIN ZHAN HUNG</td>
                                    <td>Vice President</td>
                                </tr>
                                <tr>
                                    <td>IVAN ONG</td>
                                    <td>Secretary</td>
                                </tr>
                            
                                <tr>
                                    <td>ADAM SZE JET</td>
                                    <td>Treasurer</td>
                                </tr>
                        
                               
                            </tbody>
                        </table>
    </main>

</div>

</div>
</body>

  )
}

export default twoOne