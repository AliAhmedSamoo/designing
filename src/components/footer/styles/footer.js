import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  height: 1vh;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
  border-radius: 5px 5px 0  0 ;
  height: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
   height: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    // margin: 60 auto;
    /* background: red; */
`



export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;


  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 10px;
  text-decoration: none;

 
`;

export const info = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 10px;
  text-decoration: none;

 
`;

export const Title = styled.p`
  font-size: 10px;
  color: #fff;
  margin-bottom: 0px;
  font-weight: bold;
`;


