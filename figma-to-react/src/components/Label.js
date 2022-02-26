import styled from "styled-components";

const LabelStyle = styled.div`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
    padding: 4px 14px;
    background: ${props => props.color == "green" ? "#D6FDB7" : "#FDEEB7"};
    border-radius: 25px;
    margin: 0px 5px;

    &:first-child {
        margin-left: 0;
    }
`;

const Label = ({ text, color }) => (
    <LabelStyle color={color}>{text}</LabelStyle>
);


export default Label;