const loginAuth=(req,res) => {
    const { name,email } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}..you have logged in with email address: ${email}`)
  }

  res.status(401).send('Please Provide Credentials')

}
module.exports =loginAuth