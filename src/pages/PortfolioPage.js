import React from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

function PortfolioPage() {
  return (
    <React.Fragment>
      <div className="background">
        <Header />
        <Portfolio />
      </div>
    </React.Fragment>
    );
}

export default PortfolioPage;
