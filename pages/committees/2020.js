import Nav from '../../components/Nav'
import Js from '../../components/Js'
import Head from "next/head";

const twenty = () => {
  return (

    <body>
        <Head>
      <title>2020</title>
      <meta name="description" content="All about the SCSC committees 2020" />
      <meta name="keywords" content="scsc committees, committee 2020" />
      <meta name="author" content="Hovah Yii"/>
      </Head>



      <Js />
    <div className="container-fluid">

    <div className="row">
      
      <Nav />

   
    <main className="col-md markdown-body">

    <h1>Committees 2020</h1>
    
                   
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tony Lee</td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>Wong Jun Jie</td>
                                    <td>Vice President</td>
                                </tr>
                                <tr>
                                    <td>Low Lip Shen</td>
                                    <td>Secretary</td>
                                </tr>
                                <tr>
                                    <td>Josiah Yang Qi</td>
                                    <td>Vice Secretary</td>
                                </tr>
                                <tr>
                                    <td>Sze Xi Jie</td>
                                    <td>Treasurer</td>
                                </tr>
                                <tr>
                                    <td>Ian Marcellus Ong Hong</td>
                                    <td>Vice Treasurer</td>
                                </tr>

                               
                            </tbody>
                        </table>
    </main>

</div>

</div>
</body>

  )
}

export default twenty