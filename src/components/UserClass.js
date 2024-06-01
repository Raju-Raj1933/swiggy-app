import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count:0,
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
      // userInfo: json,
    });
  }

  render() {
    // const {name, location} = this.props;
    // const {count} = this.state;

    return (
      <div className="userCard max-w-[1140px] mx-auto m-4 py-[2%] px-[5.5%] lg:px-[4%] text-[#ffffff] text-lg font-medium md:leading-[30px] ">
        <h1 className="text-center font-extrabold font-bold text-2xl sm:text-3xl text-pink-700 mb-2">About Us</h1>
        <p>
          Swiggy is an Indian online food ordering and delivery platform.
          Founded in 2014, Swiggy is headquartered in Bangalore and operates in
          more than 580 Indian cities, as of July 2023. Besides food
          delivery, the platform also provides on-demand grocery deliveries
          under the name Instamart, and a same-day package delivery service
          called Swiggy Genie.
        </p>
        <p>
          In 2011, Sriharsha Majety and Nandan Reddy designed an e-commerce
          website called Bundl to facilitate courier service and shipping within
          India. Bundl was halted in 2014 and rebranded to enter the food
          delivery market. Majety and Reddy approached Rahul Jaimini,
          formerly with Myntra, and founded Swiggy in August 2014.
        </p>

        <p>
          By 2015, Swiggy expanded its food delivery operations from just
          Bangalore to eight Tier 1 cities across India. At the time, the
          food delivery sector was in turmoil as several notable startups, such
          as Foodpanda (later acquired by Ola Cabs), TinyOwl (later acquired by
          Zomato) and Ola Cafe (later closed) were struggling.
        </p>
        <p>
          In January 2017, Swiggy started its cloud kitchen chain called "The
          Bowl Company". In November 2017, Swiggy started a kitchen
          incubator business called Swiggy Access, opening a network of
          ready-to-occupy kitchens for its restaurant partners. By 2019,
          over 1,000 Swiggy Access kitchens were operational, according to a
          TechCrunch report.
        </p>
        <p>
          In early 2019, Swiggy expanded into general product deliveries under
          the name Swiggy Stores, sourcing items from local stores.
          In September 2019, Swiggy launched the instant pickup/dropoff service
          Swiggy Go, allowing customers to send document or parcel
          deliveries. In April 2020, it rebranded Swiggy Go as Swiggy
          Genie. During the COVID-19 pandemic, it began doorstep delivery of
          alcohol in the states of Jharkhand, West Bengal and Odisha.
        </p>

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
