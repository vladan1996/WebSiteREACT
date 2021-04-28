import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  box-shadow: 2px 5px 30px white;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      width: 50%;
      height: 50vh;
      object-fit: cover;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
