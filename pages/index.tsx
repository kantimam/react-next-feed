/* import Link from 'next/link' */
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { getRecipes } from '../redux/actions/recipeActions';
import Button from '@material-ui/core/Button';
import { getPreviewAPI } from '../api';


const IndexPage = ({ recipes, getRecipes }: { recipes: any, getRecipes: any }) => (
  < Layout title="Home | Next.js + TypeScript Example" >
    <h1>Hello Next.js 👋</h1>
    <main>
      <div>
        {recipes && JSON.stringify(recipes)}
      </div>
      <Button onClick={getRecipes} variant="contained" color="primary">
        Primary
      </Button>

      <Searchbar
        getOptions={getPreviewAPI}
      />
    </main>
  </Layout >
)

const mapStateToProps = (state: RootState) => {
  return { recipes: state.recipeState.recipes }
}

export default connect(mapStateToProps, { getRecipes })(IndexPage)
