import Company from "./Company";
import {CompanyClass} from './CompanyClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData : {
        title: "About EatGo",
        description: 'EatGo is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app..',
        mission: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”"
      }
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="body common-page-container">
      <Company aboutData={this.state.aboutData}/>
      <CompanyClass aboutData={this.state.aboutData}/>
    </div>
    )
  }
}
// const About = () => {
//   const aboutData = {
//     title: "About EatGo",
//     description: 'EatGo is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app..',
//     mission: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”"
//   }
//   return (
//     <div className="body common-page-container">
//       {/* <Company aboutData={aboutData}/> */}
//       <CompanyClass aboutData={aboutData}/>
//     </div>
//   );
// };

export default About;