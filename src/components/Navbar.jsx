import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    margin-left: 26px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;  
    text-align: center;  
`;

const Logo = styled.h1`
    font-weight: 900;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color:"gray", fontSize: 16}}/>                        
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MajesTech Creatives</Logo>
                </Center>
                <Right>
                    <StyledLink to="/register">
                            <MenuItem>REGISTER</MenuItem>
                    </StyledLink>

                    <StyledLink to="/login">
                        <MenuItem>SIGN IN</MenuItem>
                    </StyledLink>
                        
                    <Link to="/cart">
                        <MenuItem>
                            <Badge color="secondary" badgeContent={quantity} showZero>
                                <ShoppingCartOutlined />
                            </Badge>                    
                        </MenuItem>
                    </Link>
                </Right>
                
                
            </Wrapper>
        </Container>
    )
}

export default Navbar
