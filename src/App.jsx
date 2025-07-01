
import Accordian from './Components/Accordian'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/starRating'




function App() {

  return (
    <div className="App">
     
     {/* Accordian component */}
      {/* <Accordian/> */}
     {/* Random color component*/}
     {/* <RandomColor/> */}
     {/* Star Rating Components */}
     <StarRating NoofStars={10}/>
    </div>
  )
}

export default App