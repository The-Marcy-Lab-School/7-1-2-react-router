import { Link } from "react-router-dom";

const NavBar = () => {
  return (<nav>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/'>Dashboard</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='https://www.reddit.com/'>Reddit</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar;