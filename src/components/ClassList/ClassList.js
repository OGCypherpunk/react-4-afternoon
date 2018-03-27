  import React, { Component } from 'react';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  
  export default class ClassList extends Component {
    constructor() {
      super();
  
      this.state = {
        students: []



      };
    }

//LIFE CYCLE METHODS//
    componentDidMount() {
      axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then( results => {
        this.setState({
          students: results.data
        });
      });
    }
  

  // How do you know to use this.props.match.params.class? What would I have to console.log? line 13 axios.get...
  //this.props.match is coming from 'react-router' comes efault with it.
//The json-server API url is http://localhost:3005/students?class=.
// Class should equal MATH1010 OR ENG2010 OR BIO2020 depending on the route parameter.
// Hint: react-router-dom passes down a match object on a component's props.


    render() {
      const students = this.state.students.map((student, i) => (
        <Link to={`/student/${student.id}`} key={ i }>
          <h3>{ student.first_name } { student.last_name }</h3>
        </Link>
      ));
//I need to be shown how EXCATLY this works the way it does
//Why do I have to wrap this around the LINK? I dont understand
//What is key being used for?
//Why does it need { i }


  return (
    <div className='box'>
      <h1>{ this.props.match.params.class }</h1>
      <h2>ClassList:</h2>
      { students }
    </div>
  )
}
}






// This makes no sense! STEP 6

// Now that we have our Student route setup, let's open the ClassList component and import the Link component from react-router-dom. We'll need to update our map in the render method to wrap the h3 element in a Link component. In this map, we have access to all the student's properties. Therefore, if we need the id, we can access it by student.id. Let's set the to prop of the Link component to be /student/${ student.id }. We'll also need to move the key prop onto the Link component since it'll now be the most parent item.


  

  