import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [showNoti, setShowNoti] = useState(false);
    const [brandRequest, setBrandRequest] = useState("-");

    return (
        <AppContext.Provider
            value={{ showNoti, setShowNoti, brandRequest, setBrandRequest }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
