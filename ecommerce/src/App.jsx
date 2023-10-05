import './App.css'
import ItemListContainer from './componets/listContainer/listContainer'
import NavBar from './componets/navBar/navBar'


function App() {
  return( 
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi Humilde Ecommerce"/>
    </>
  )
}

export default App
