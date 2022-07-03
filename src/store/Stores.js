import { createContext, useContext } from "react";
import RootStore from "./index";

const StoreContext = createContext(null);

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within StoreProvider");
    }
    return context;
}

function initializeStore() {
    const _store = new RootStore();
    return _store;
}

export function StoreProvider({ children }) {
    const store = initializeStore();
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}