import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import {RerenderProvider} from "./helpers/rerenderContext.jsx";

function App() {

    return (
        <RerenderProvider>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <CardContainer/>
                <Footer/>
            </div>
        </RerenderProvider>

    );
}

export default App;
