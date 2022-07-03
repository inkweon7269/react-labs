import Join from "./pages/Join";
import Mst from "./component/mobx/Mst";
import Count from "./component/mobx/Count";
import { StoreProvider } from "./store/Stores";
import TodoEdit from "./component/mobx/TodoEdit";
import TodoList from "./component/mobx/TodoList";


const App = () => {
    return (
        <StoreProvider>
            {/*<Count />*/}

            <TodoEdit />
            <TodoList />
        </StoreProvider>
    );

    /*return (
        <>
            <Join />
            <Mst />
        </>
    )*/
};

export default App;