import logo from '../assets/globe.png'

export default function Header(){
  return(
    <header>
      <img src={logo} alt="globe logo" />
      <h1>My travel journal</h1>
    </header>
  )
}