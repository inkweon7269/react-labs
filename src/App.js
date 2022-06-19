import ToggleComp from "./component/hooks/ToggleComp";
import ArrayComp from "./component/hooks/ArrayComp";
import PrevComp from "./component/hooks/PrevComp";
import StorageComp from "./component/hooks/StorageComp";
import ScriptComp from "./component/hooks/ScriptComp";
import OnScreenComp from "./component/hooks/OnScreenComp";
import ClickOutsideComp from "./component/hooks/ClickOutsideComp";
import CopyToClipboardComp from "./component/hooks/CopyToClipboardComp";
import CookieComp from "./component/hooks/CookieComp";
import DeferredComp from "./component/hooks/DeferredComp";

const App = () => {

    return (
        <div>
            {/*<ToggleComp />*/}
            {/*<ArrayComp />*/}
            {/*<PrevComp />*/}
            {/*<StorageComp />*/}

            {/*<ScriptComp />*/}
            {/*<OnScreenComp />*/}
            {/*<ClickOutsideComp />*/}
            {/*<CopyToClipboardComp />*/}
            {/*<CookieComp />*/}

            <DeferredComp />
        </div>
    );
};

export default App;