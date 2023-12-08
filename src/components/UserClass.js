import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "...",
        id: "111",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/raju-raj1933");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const {name, location} = this.props;
    // const {count} = this.state;

    return (
      <div className="userCard">
        <h1>Thnxx for Visiting</h1>
        {/* <h2>Name:{this.props.name}</h2>
                        <h2>Location:{this.props.location}</h2> */}
        {/* <h2>Name:{name}</h2>
                        <h2>Location:{location}</h2> */}
        {/* <h3>{count}</h3> */}
        {/* <button onClick={ () => {
                        this.setState({
                              count: this.state.count+1,
                        });
                      }}>
                              Increase
                  </button> */}

        {this.state.userInfo.login}
      </div>
    );
  }
}
export default UserClass;
