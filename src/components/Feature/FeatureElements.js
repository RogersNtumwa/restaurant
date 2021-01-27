import styled from "styled-components";
import ImgBg from "../../images/featureBg.jpg";

export const FeaturContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureBtn = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #105e2a;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
