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
import UncontrolledForm from "./component/pattern/uncontrolled/UncontrolledForm";
import ControlledForm from "./component/pattern/controlled/ControlledForm";
import UncontrolledModal from "./component/pattern/uncontrolled/UncontrolledModal";
import ControlledModal from "./component/pattern/controlled/ControlledModal";
import {useState} from "react";
import UncontrolledOnBoardingFlow from "./component/pattern/uncontrolled/UncontrolledOnBoardingFlow";
import ControlledOnBoardingFlow from "./component/pattern/controlled/ControlledOnBoardingFlow";
import printProps from "./component/pattern/higher/printProps";
import UserInfo from "./component/pattern/higher/UserInfo";
import {withUser} from "./component/pattern/higher/withUser";
import {UserInfoForm} from "./component/pattern/higher/UserInfoForm";
import UserInfoComp from "./component/hooks/UserInfoComp";
import {BigSuccessButton1, DangerButton1} from "./component/pattern/functional/composition";
import {BigSuccessButton2, DangerButton2} from "./component/pattern/functional/partiallyApply";


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

// Controlled, UnControlled
/*
const StepOne = ({goToNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
);
const StepTwo = ({goToNext}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 50 })}>Next</button>
    </>
);
const StepThree = ({goToNext}) => (
    <>
        <h1>Step 3</h1>
        <p>Congratulations! You qualify for our senior discount</p>
        <button onClick={() => goToNext({ })}>Next</button>
    </>
);

const StepFour = ({goToNext}) => (
    <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({ hairColor: 'red' })}>Next</button>
    </>
);
*/


// Higher Order Component
// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, 1);


const App = () => {

    // Controlled, UnControlled
    /*
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const onNext = stepData => {
        setOnBoardingData({...onBoardingData, ...stepData});
        setCurrentIndex(currentIndex + 1);
    }
    */

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
            <UncontrolledModal>
                <LargeProductListItem product={products[0]} />
            </UncontrolledModal>
            */}

            {/*
            <UncontrolledForm />
            <ControlledForm />
            */}

            {/*
            <ControlledModal
                shouldShow={shouldShowModal}
                onRequestClose={() => setShouldShowModal(false)}
            >
                <h1>Hello World</h1>
            </ControlledModal>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}>
                {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>
            */}

            {/*
            <UncontrolledOnBoardingFlow onFinish={data => console.log(data)}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnBoardingFlow>
            */}

            {/*
            <ControlledOnBoardingFlow
                currentIndex={currentIndex}
                onNext={onNext}
                onFinish={data => console.log(data)}
            >
                <StepOne />
                <StepTwo />
                {onBoardingData.age >= 62 && <StepThree />}
                <StepFour />
            </ControlledOnBoardingFlow>
            */}


            {/*
            <UserInfoWrapped
                name='Leanne Graham'
                email='Sincere@april.biz'
                phone='1-770-736-8031 x56442'
            />
            */}


            {/*<UserInfoWithLoader />*/}

            {/*<UserInfoForm />*/}



            <UserInfoComp userId={1}/>
            {/*<UserInfoComp userId={2}/>*/}
            {/*<UserInfoComp userId={3}/>*/}


            {/*<DangerButton1 text="Don't do it!" />*/}
            {/*<BigSuccessButton1 text='Yes!!!' />*/}

            <DangerButton2 text="Don't do it!" />
            <BigSuccessButton2 text='Yes!!!' />
        </div>
    );
};

export default App;