import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props => props.weight}
`;

const SplitComp = ({
                       children,
                       leftWeight = 1,
                       rightWeight = 1,
                   }) => {

    const [left, right] = children;
    console.log(children);

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
};

export default SplitComp;