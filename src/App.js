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
import RegularList from "./component/pattern/layout/RegularList";
import SmallPersonListItem from "./component/pattern/layout/SmallPersonListItem";
import LargePersonListItem from "./component/pattern/layout/LargePersonListItem";
import SmallProductListItem from "./component/pattern/layout/SmallProductListItem";
import LargeProductListItem from "./component/pattern/layout/LargeProductListItem";
import Modal from "./component/pattern/layout/Modal";


const people = [
    {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games']
    },
    {
        name: 'Brenda Smith',
        age: 33,
        hairColor: 'black',
        hobbies: ['golf', 'mathematics']
    },
    {
        name: 'Jane Garcia',
        age: 27,
        hairColor: 'blonde',
        hobbies: ['biology', 'medicine', 'gymnastics']
    },
];

const products = [
    {
        name: 'Flat-Screen TV 1',
        price: '$300',
        description: 'Description 1',
        rating: 4.5
    },
    {
        name: 'Flat-Screen TV 22',
        price: '$200',
        description: 'Description 22',
        rating: 3.5
    },
    {
        name: 'Flat-Screen TV 333',
        price: '$330',
        description: 'Description 333',
        rating: 4.2
    },
]


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


            {/*
            <SplitComp
                leftWeight={1}
                rightWeight={3}
            >
                <LeftHandComp name='Kim' />
                <RightHandComp message='Hello World' />
            </SplitComp>
            */}

            {/*
            <RegularList
                items={people}
                resourceName='person'
                itemComponent={SmallPersonListItem}
            />

            <RegularList
                items={people}
                resourceName='person'
                itemComponent={LargePersonListItem}
            />

            <RegularList
                items={products}
                resourceName='product'
                itemComponent={SmallProductListItem}
            />

            <RegularList
                items={products}
                resourceName='product'
                itemComponent={LargeProductListItem}
            />
            */}

            {/*
            <Modal>
                <LargeProductListItem product={products[0]} />
            </Modal>
            */}
        </div>
    );
};

export default App;