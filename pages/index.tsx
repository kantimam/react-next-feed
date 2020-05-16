/* import Link from 'next/link' */
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { getRecipes } from '../redux/actions/recipeActions';
import Button from '@material-ui/core/Button';
import { getPreviewAPI } from '../api';
import { Container, Grid, Typography } from '@material-ui/core';


const IndexPage = ({ recipes, getRecipes }: { recipes: any, getRecipes: any }) => (
  < Layout>
    <Container>


      <Searchbar
        getOptions={getPreviewAPI}
      />
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography>
          {recipes && JSON.stringify(recipes)}
        </Typography>
        <Button onClick={getRecipes} variant="contained" color="primary">
          Primary
        </Button>
      </Grid>


    </Container>
  </Layout >
)

const mapStateToProps = (state: RootState) => {
  return { recipes: state.recipeState.recipes }
}

export default connect(mapStateToProps, { getRecipes })(IndexPage)
