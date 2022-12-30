import Head from "next/head"
import About from "../modules/app/components/about"
import Hero from "../modules/app/components/hero"
import Layout from "../modules/app/components/layout"

function index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gnark Projects</title>
        </Head>
        <Hero/>
        <About/>
      </Layout>
    </>
  )
}

export default index