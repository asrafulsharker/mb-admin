import { Button, Container, TextField } from "@mui/material"
import Footer from "../Footer/Footer"
import Nav from "../Header/Nav"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div style={{ height: "100vh" ,display:"flex",flexDirection:"column",gap:"10px"}}>
            <Nav/>

            <Container>
                <div className="login" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="login-left-part">
                        <p style={{ fontWeight: "400", fontSize: "48px", textAlign: "center", color: "#44A08D", lineHeight: "normal", padding: "0px" }}>Welcome back!</p>
                        <p style={{ textAlign: "center", fontSize: "14px", opacity: "0.8", marginBottom: "48px", color: "#464646" }}>Customize your Customer’s cravings with Cost Efficient Smarter Menus</p>
                        <img src="/images/auth/amico.png" alt="" />
                    </div>
                    <div className="login-right-part">
                        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", fontStyle: "normal", color: "#464646" }}>Login</p>
                        <TextField id="outlined-basic" label="Enter your email/phone number" variant="outlined" style={{ width: "100%" }} />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{ width: "100%", marginTop: "10px" }}
                        />
                        <p style={{ fontSize: "12px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Forget Password? <a href="#" style={{ color: "#44A08D" }}>Click here</a></p>
                        <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" }}>Login</Button>
                        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Don't have an account? <Link to="register" style={{ color: "#44A08D",textDecoration:"none" }}>Sign Up Now</Link></p>


                    </div>
                </div>

            </Container>


            <Footer/>
        </div>
    )
}

export default Login