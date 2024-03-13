import { useParams } from "react-router-dom";

/* 
Maybe this array is actually stored in the context
*/
const pokemons = [
  { id: 1, hp: 5, name: 'pikachu', img: '....' },
  { id: 2, hp: 10, name: 'bulbasaur', img: '....' },
  { id: 3, hp: 20, name: 'charizard', img: '....' },
  { id: 4, hp: 30, name: 'squirtle', img: '....' },
]

const Product = () => {
  const params = useParams();

  console.log(params);

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(params.id))

  return (
    <>
      <h1>Name: {pokemon.name}</h1>
      <p>HP: {pokemon.hp}</p>
    </>
  )
}

export default Product;