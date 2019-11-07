import React, { Component } from "react";
import Card from "../components/card";
import data from "../json/home-data.json";

class Home extends Component {

  render() {

    return (
      <div class="container">
        <h1>Test Project</h1>

        {data.content.data.map(res => {
          return (
            <Card title={res["naslov"]}>
            </Card>
          )
        })
        }
      </div>

    );
  }
};

export default Home;