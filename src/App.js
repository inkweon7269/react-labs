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
import ImperativeComp from "./component/hooks/ImperativeComp";
import {Card} from "./component/pattern/compound/Card";
import movies from './data.json';
import Accordion from "./component/pattern/compound/Accordion";
import Toggle from "./component/pattern/compound/Toggle";
import SplitComp from "./component/pattern/layout/SplitComp";
import LeftHandComp from "./component/pattern/layout/LeftHandComp";
import RightHandComp from "./component/pattern/layout/RightHandComp";



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

            {/*<DeferredComp />*/}
            {/*<ImperativeComp />*/}

            {/*
            {movies.map(movie => (
                <Card key={movie.id} className='mr'>
                    <Card.Image src={movie.image} alt={movie.title} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.desc}</Card.Text>
                        <Card.Button>{movie.ctaText}</Card.Button>
                    </Card.Body>
                </Card>
            ))}
            */}

            {/*
            <Accordion>
                <Accordion.Title>Movie Info</Accordion.Title>
                <Accordion.Frame>
                    {movies.map(movie => (
                        <Accordion.Item key={movie.id}>
                            <Accordion.Header>{movie.title}</Accordion.Header>
                            <Accordion.Body>{movie.desc}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Frame>
            </Accordion>
            */}

            {/*
            <Toggle>
                <Toggle.On>The Button is On</Toggle.On>
                <Toggle.Off>The Button is Off</Toggle.Off>
                <div>
                    <Toggle.Button />
                </div>
            </Toggle>
            */}

            <SplitComp
                left={LeftHandComp}
                right={RightHandComp}
                leftWeight={1}
                rightWeight={3}
            />
        </div>
    );
};

export default App;