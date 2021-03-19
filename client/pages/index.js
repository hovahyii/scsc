import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>  
        {/* import external javascript */}
        <script type="text/javascript" src="../js/getFullYear.js"></script>
        <link href="../assets/@fortawesome/fontawesome-free/css/all.min4935.css" rel="stylesheet"/>
        <link href="../assets/page4935.css" rel="stylesheet"/>

        <script src="../assets/jquery/dist/jquery.min4935.js"></script>
        <script src="../assets/popper.js/dist/umd/popper.min4935.js"></script>
        <script src="../assets/bootstrap/dist/js/bootstrap.min4935.js"></script>

        <script src="../assets/jstz.min4935.js"></script>
        <script src="../assets/text-animation.js"></script>

        <script src="../assets/jekyll-theme-cs504935.js"></script>

      </Head>
      <Nav />
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/favicon.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
  )
}
