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
    return (
      <div className="userCard">
        <h1>Thnxx for Visiting</h1>
        {this.state.userInfo.login}
      </div>
    );
  }
}
export default UserClass;
