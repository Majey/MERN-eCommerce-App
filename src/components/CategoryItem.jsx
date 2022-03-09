import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 70vh;    
    margin: 3px;
    position: relative;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-weight: 900;
    background-color: white;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    text-align: center
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 900;

`;

const CategoryItem = ({item}) => {
    return (
        <Container key={item.id}>
            <Link to={`products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
