import React, { Component } from "react";
import leboncoin from "leboncoin-api";

class AddList extends Component {
  state = {
    liste: []
  };

  componentDidMount() {
    const search = new leboncoin.Search().setPage(1);
    search.run().then(
      data => {
        this.setState({ liste: data.results });
      },
      function(err) {
        console.error(err);
      }
    );
  }

  render() {
    if (this.state.liste.length === 0) {
      return <div>Chargement en cours</div>;
    } else {
      return (
        <span>
          {this.state.liste.map(data => (
            <React.Fragment className="divglo" style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", marginTop: "30px" }}>
                {data.title}
              </div>
              <br />
              <div>{data.description}</div>
              <br />
              <img
                style={{ height: "120px", margin: "auto" }}
                src={data.images}
                alt=""
              />
            </React.Fragment>
          ))}
        </span>
      );
    }
  }
}

export default AddList;
