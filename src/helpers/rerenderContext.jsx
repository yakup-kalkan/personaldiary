import {createContext, useContext, useState} from "react";

const RerenderContext = createContext();

export function RerenderProvider({children}) {
    const [isRerender, setIsRerender] = useState(true);
    const triggerRerender = () => {
        setIsRerender(!isRerender);
    };

    return (
        <RerenderContext.Provider value={{isRerender, triggerRerender}}>
            {children}
        </RerenderContext.Provider>
    );
}

export function useRerender() {
    const context = useContext(RerenderContext);
    if (!context) {
        throw new Error('useRerender must be used within a RerenderProvider')
    }
    return context;
}
