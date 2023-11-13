import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Button, Checkbox, Container, TextField } from '@mui/material'
import { Link } from "react-router-dom"

function Register() {
  return (
    <>
      <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
        <Nav />
        <Container>
          <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="" style={{ width: "60%", textAlign: "center" }}>
              <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Create Account</p>
              <p style={{ fontSize: "14px", color: "#464646", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Create an account to start using Make my menu service and enjoy all the benefits.</p>
              <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <TextField id="outlined-basic" label="First Name" required variant="outlined" style={{ width: "100%" }} />
                <TextField id="outlined-basic" label="Last Name" required variant="outlined" style={{ width: "100%" }} />

              </div>
              <TextField id="outlined-basic" label="Enter your email" required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                required
                style={{ width: "100%", marginTop: "10px" }}
              />
              <TextField
                id="outlined-password-input"
                label="Re-Enter Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                required
                style={{ width: "100%", marginTop: "10px" }}
              />
              <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>  <Checkbox /><p>I agree to all the <a href="">Terms & Condition</a></p></div>
              <Link to="/verifyaccount">
                <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" }}>Next</Button>

              </Link>
              <p style={{ textAlign: "center", fontSize: "12px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Already have an account? <Link to="/" style={{ color: "#44A08D" }}>Login</Link></p>

            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Register