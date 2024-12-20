import {useState} from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import {RerenderContext} from "./helpers/rerenderContext.js";

function App() {
    const [isRerender, setIsRerender] = useState(true);
    const triggerRerender = () => {
        setIsRerender(!isRerender);
    };
    return (
        <RerenderContext.Provider value={{isRerender, triggerRerender}}>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <CardContainer/>
                <Footer/>
            </div>
        </RerenderContext.Provider>

    );
}

export default App;
