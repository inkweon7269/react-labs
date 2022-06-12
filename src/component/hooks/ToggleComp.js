import useToggle from "../../hooks/useToggle";

const ToggleComp = () => {
    const [isShow, setShow] = useToggle();

    return (
        <button onClick={setShow}>{isShow ? 'true' : 'false'}</button>
    );
};

export default ToggleComp;