import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      states: [],
      authors: [],
      students: [],
      grades: [], 
      state: ''
    }
  }

  componentDidMount() {
    axios.get('/api/read/states').then(res => {
      this.setState({states: res.data})
      console.log(res.data)
    })
    axios.get('/api/read/authors').then(res => {
      this.setState({authors: res.data})
      console.log(res.data)
    })
    axios.get('/api/read/students').then(res => {
      this.setState({students: res.data})
      console.log(res.data)
    })
    axios.get('/api/read/studentGrades').then(res => {
      this.setState({grades: res.data})
      console.log(res.data)
    })
    axios.get(`/api/read/oneState?name=Florida`).then(res => {
      console.log(res)
      this.setState({state: res.data[0]})
      console.log(res.data)
    })
  }

  render() {
    let finalStates = this.state.states.map((state,i) => {
      return (
        <div key={i} className='statesNcapitals'>
          <div className='states'>
            <span>State Id: {state.state_id}</span><br/>
            <span>State Name: {state.state_name}</span>
          </div>
          <div className='capitals'>
            <span>Capital's State Id: {state.capitals_state_id}</span><br/>
            <span>Capital Id: {state.capital_id}</span><br/>
            <span>Capital Name: {state.capital_name}</span>
          </div>
        </div>
      )
    })
    let finalAuthors = this.state.authors.map((author,i) => {
      return (
        <div key={i} className='authorsNbooks'>
          <div className='authors'>
            <span>Author Id: {author.author_id}</span><br/>
            <span>Author Name: {author.author_name}</span>
          </div>
          <div className='books'>
            <span>Book's Author Id: {author.books_author_id}</span><br/>
            <span>Book Id: {author.book_id}</span><br/>
            <span>Book Title: {author.book_title}</span>
          </div>
        </div>
      )
    })
    let finalStudents = this.state.students.map((student,i) => {
      return (
        <div key={i} className='classNstudents'>
          <div className='class'>
            <span>Class Id: {student.class_id}</span><br/>
            <span>Class Name: {student.class_name}</span>
          </div>
          <div className='junction'>
            <span>Junction's Class Id: {student.c_id}</span><br/>
            <span>Junction's Student Id: {student.s_id}</span>
          </div>
          <div className='students'>
            <span>Student Name: {student.student_name}</span>
            <span>Student Id: {student.student_id}</span>
          </div>
        </div>
      )
    })
    let finalGrades = this.state.grades.map((grade,i) => {
      return (
        <div key={i} className='namesNgrades'>
          <div className='names'>
            <span>Student Name: {grade.student_name}</span><br/>
            <span>Grade: {grade.student_grade}</span>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        {this.state.state.state_name}
        {routes}
        <span>One to One Relationship</span>
        {finalStates}
        <span>One to Many Relationship</span>
        {finalAuthors}
        <span>Many to Many Relationship</span>
        {finalStudents}
        <span>Subquery</span>
        {finalGrades}
      </div>
    );
  }
}

export default App;
