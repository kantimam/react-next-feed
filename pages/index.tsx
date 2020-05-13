/* import Link from 'next/link' */
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { getRecipes } from '../redux/actions/recipeActions';


const IndexPage = ({ counter, getRecipes }: { counter: number, getRecipes: any }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <main>
      <div onClick={getRecipes}>PLUS</div>
      <div>
        {counter}
      </div>

      <Searchbar
        getOptions={() => fetch('https://country.register.gov.uk/records.json?page-size=5000')}
      />
    </main>
  </Layout>
)


export default connect((state: RootState) => { counter: state.recipeState.recipes }, getRecipes)(IndexPage)
