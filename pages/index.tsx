/* import Link from 'next/link' */
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <main>
      <Searchbar
        getOptions={() => fetch('https://country.register.gov.uk/records.json?page-size=5000')}
      />
    </main>
  </Layout>
)



export default IndexPage
