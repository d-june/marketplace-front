import { FC } from "react";
import { Helmet } from "react-helmet";
import { TestDiv } from "./styled";

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная - Marketplace</title>
      </Helmet>

      <TestDiv />

      <h1>Главная</h1>
    </>
  );
};

export default HomePage;
