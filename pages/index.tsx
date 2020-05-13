/* import Link from 'next/link' */
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { getRecipes } from '../redux/actions/recipeActions';


const IndexPage = ({ recipes, getRecipes }: { recipes: number, getRecipes: any }) => (
  < Layout title="Home | Next.js + TypeScript Example" >
    {console.log(recipes, getRecipes)}
    <h1>Hello Next.js 👋</h1>
    <main>
      <div onClick={getRecipes}>PLUS</div>
      <div>
        {recipes}
      </div>

      <Searchbar
        getOptions={() => fetch('https://country.register.gov.uk/records.json?page-size=5000')}
      />
    </main>
  </Layout >
)

const mapStateToProps = (state: RootState) => {
  return { recipes: state.recipeState.recipes }
}

export default connect(mapStateToProps, { getRecipes })(IndexPage)
