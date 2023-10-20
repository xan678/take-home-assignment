import React from "react";
import * as Styled from './styles';

const Title : React.FC = () => {
    return <Styled.TitleContainer>
            <h1 style={{
                "margin":"1px"
            }}>
                Github
            </h1>
            <p style={{
                "margin" : "1px"
            }}>
                Search User or Repositories below
            </p>
        </Styled.TitleContainer>
}

export default Title;