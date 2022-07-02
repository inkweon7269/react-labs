import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Paragraph } = Typography;

const StyledError = ({ message }) => {
    return (
        <_StyledError>{message}</_StyledError>
    );
};

export default StyledError;

const _StyledError = styled(Paragraph)`
  color: #c02428;
  margin: 0 !important;
`