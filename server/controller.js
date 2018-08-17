module.exports = {

  readAllStatesWithCapitals: (req, res) => {
    const db = req.app.get("db");
    db.read_all_states_with_capitals().then(states => {
      res.send(states)
    }).catch(err => {
      return err
    })
  }



}