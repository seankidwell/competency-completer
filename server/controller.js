module.exports = {

  readOneState: (req, res) => {
    const db = req.app.get("db");
    const {name} = req.query
    db.read_one_state([name]).then(state => {
      res.send(state)
    }).catch(err => {
      return err
    })
  },

  readAllStatesWithCapitals: (req, res) => {
    const db = req.app.get("db");
    db.read_all_states_with_capitals().then(states => {
      res.send(states)
    }).catch(err => {
      return err
    })
  },

  readAllAuthorsWithBooks: (req, res) => {
    const db = req.app.get("db");
    db.read_all_authors_with_books().then(authors => {
      res.send(authors)
    }).catch(err => {
      return arr
    })
  },

  getAllStudentsFromOneClass: (req, res) => {
    const db = req.app.get("db");
    console.log('endpoint hit')
    db.get_all_students_from_one_class().then(oneClass => {
      res.send(oneClass)
    }).catch(err => {
      return err
    })
  },

  getStudentsAbove90: (req, res) => {
    const db = req.app.get("db");
    db.get_good_grades().then(students => {
      res.send(students)
    }).catch(err => {
      return err
    })
  }

}