import styled from "styled-components";

export const Productscontainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* padding: 5rem calc((100vw - 1300px) / 2); */
  /* background: #150f0f; */
  color: #000;
`;
export const Productwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;
export const ProductCard = styled.div`
  margin: 1rem 2rem;
  width: 300px;
  box-shadow: 2px 2px 2px 2px rgba(66, 117, 77);
  /* padding: 1rem; */
`;
export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  /* box-shadow: 8px 8px #105e2a; */
  /* object-fit: cover; */
`;
export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5rem, 3rem);
  text-align: center;
  margin-bottom: 1rem;
`;
export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding: 2rem; */
`;
export const Productdesc = styled.p`
  margin-bottom: 0.1rem;
`;
export const ProductPrice = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;
export const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  margin-bottom: 1rem;
  &:hover {
    background: #105e2a;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
