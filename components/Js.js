
import Head from 'next/head'

const ScriptJs = () => {
    return (
       
        <Head>  
     
        {/*  https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use */}
        <link href="/assets/@fortawesome/fontawesome-free/css/all.min4935.css" rel="stylesheet" />
    
        <link rel="stylesheet" type="text/css" href="/assets/responsive.css" />
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    
    

         {/*  http://getbootstrap.com/docs/4.3/getting-started/introduction/ */}
        <script src="/assets/jquery/dist/jquery.min4935.js"></script>
        <script src="/assets/popper.js/dist/umd/popper.min4935.js"></script>
        <script src="/assets/bootstrap/dist/js/bootstrap.min4935.js"></script>
    
         {/*  https://github.com/pellepim/jstimezonedetect */}
        <script src="/assets/jstz.min4935.js"></script>
        <script src="/assets/text-animation.js"></script>
        <script src="/assets/jekyll-theme-cs504935.js"></script>

        
        </Head>
      
    )
  }
  
  export default ScriptJs