import React from "react";
import styled from "styled-components";

const StyledLabel = ({ htmlFor, text, style }) => {
    return (
        <_StyledLabel htmlFor={htmlFor} style={style}>{text}</_StyledLabel>
    );
};

export default StyledLabel;

const _StyledLabel = styled('label')`
  display: block;
  color: rgba(0,0,0,.85);
  font-weight: 600;
`;