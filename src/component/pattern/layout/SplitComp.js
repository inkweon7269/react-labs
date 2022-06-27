import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props => props.weight}
`;

const SplitComp = ({
                       left: Left,
                       right: Right,
                       leftWeight = 1,
                       rightWeight = 1,
                   }) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                <Left/>
            </Pane>
            <Pane weight={rightWeight}>
                <Right/>
            </Pane>
        </Container>
    );
};

export default SplitComp;