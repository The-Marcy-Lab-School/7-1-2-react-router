import { Link } from "react-router-dom";

/* 
1. fetch all of the pokemon
2. iterate through the pokemon list
3. for each pokemon object: { id: 1, name: 'pikachu', ... }
4. render <Link to=`/pokemons/${pokemon.id}`>{pokemon.name}</Link>

*/

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to='/products/1'>Product 1</Link></li>
        <li><Link to='/products/2'>Product 2</Link></li>
        <li><Link to='/products/3'>Product 3</Link></li>
      </ul>
    </>
  )
}

export default Products;