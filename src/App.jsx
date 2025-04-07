import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import comics from "./components/data/comics"

function App() {

  return (
    <>
    <Header />
    <Main comics = {comics}/>
    <Footer />

    </>
  )
}

export default App
