import Accordian from "./Components/Accordian";
import ImageSlider from "./Components/image-slider";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/starRating";
import LoadMoreData from "./Components/LoadMore-Button";
import TreeView from "./Components/tree-view";
import menus from "./Components/tree-view/data";

function App() {
    return (
        <div className="App">
            {/* Accordian component */}
            {/* <Accordian/> */}
            {/* Random color component*/}
            {/* <RandomColor/> */}
            {/* Star Rating Components */}
            {/* <StarRating NoofStars={10}/> */}
            {/* Image Slider */}
            {/* <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"2"}
                limit={10}
            /> */}
            {/* Load More Products Components */}
            {/* <LoadMoreData /> */}
            {/* Tree View component / recursive navigation menu*/}
            <TreeView menus={menus} />
        </div>
    );
}

export default App;
