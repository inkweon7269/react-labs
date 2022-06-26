import {useState, useContext, createContext} from "react";
import styled from "styled-components"

const ToggleContext = createContext();

const Accordion = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
};

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(true)
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);
    return (
        <Body className={toggleShow ? "open" : "closed"}>
            <span>{children}</span>
        </Body>
    )
}

export default Accordion;




const Container = styled.div`
  display: flex;
  border-bottom: 80px solid #222;
`;

const Frame = styled.div`
  margin-bottom: 40px;
`;

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: black;
  text-align: center;
`;

const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;

const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    transition: max-height 0.25ms cubic-bezier(0.5, 0, 0.1, 1);
  }

  &.open {
    max-height: 0px;
    transition: max-height 0.25ms cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
`;