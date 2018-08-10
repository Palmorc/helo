module.exports = {
  register :  (req,res) => {
    try {
      let db = req.app.get('db')
      let newUser =  db.registerNewUser()
      res.send(newUser)
    } catch (e) {
      console.log('error registering new user:', e);
      res.status(500).send(e)
    }
  },

  retrieve: (req,res) => {
    try {
      let db = req.app.get('db')
      let all = db.getUsers()
      res.send(all)
    } catch (e) {
      console.log('Error fetching users',e);
      res.status(500).send(e)
    }
}
}
