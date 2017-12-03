// Framework
import React, { PureComponent } from "react";

// Components
import Page from "../components/Page.jsx";
import Button from "../components/Button.jsx";

class Home extends PureComponent {
  render() {
    return (
      <Page>
        <div className="home-page">
            <video className="bgvid" autoPlay loop>
              <source src="video/fashion.mp4" type="video/mp4"/>
            </video>
          <h2 className="title">Welcome to our humble Shop</h2>
          <Button
            onClick={() => {
              this.props.history.push("/shop");
            }}
          >
            Go shopping
          </Button>
        </div>
      </Page>
    );
  }
}

export default Home;
