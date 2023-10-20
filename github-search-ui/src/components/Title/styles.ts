import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/'

export const TitleContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    justify-content:center;
    margin-left:20px
`;

export const TitleContainerRow = styled.div`
    display:flex;
    flex-direction: row
    align-items: center
    justify-contents:center
`;

export const GitIcon = styled(Github)`
    color: black
    size:20px
`;

export const Header = styled.h1`
    color:black
`;