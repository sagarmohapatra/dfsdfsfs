
import React, { useState } from 'react'

function Login(props) {
    const [update, setupdate] = useState({
        username: "",
        password: ""
    })
    const [isUserValid, setisusernameValid] = useState(true)
    const [userError, setuserError] = useState("")

    const [isPassword, setisPassword] = useState(true)
    const [passError, setpassError] = useState("")

    let changeval = (e) => {
        console.log(e);
        let userDetailcopy = { ...update }
        userDetailcopy[e.target.name] = e.target.value
        setupdate(userDetailcopy)
    }

    let Login = (e) => {
        console.log(e);
        e.preventDefault()

        console.log(update);

        const isname = validateName(update.username)
        const ispass = validatePassword(update.password)

        if (isname && ispass) {
            console.log("props", props);
            props.history.push("./home")
        } else {
            console.error("not valid");
        }



    }
    // name validation
    const validateName = (userval) => {
        if (userval) {
            if (/^[a-zA-Z ]+$/.test(userval)) {
                console.log('true');
                setisusernameValid(true)
                setuserError("")
                return true
            } else {
                setisusernameValid(false)
                setuserError("*Please enter valid name")
                return false
            }
            return true
        } else {
            setisusernameValid(false)
            setuserError("*Please enter name")
            return false
        }
    }

    // password validation
    const validatePassword = (passval) => {
        if (passval) {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(passval)) {
                console.log('true');
                setisPassword(true)
                setpassError("")
                return true;
            } else {
                setisPassword(false)
                setpassError("Password should contain atleast 1 Capital 1 small charactor and 1 number and 1 special charectar")
                return false
            }
        } else {
            setisPassword(false)
            setpassError("*Please enter password")
            return false
        }
    }
    return (
        <div>
            <div className='csa'>
                <div className='row'>
                    <div className='col-md-5 offset-md-3'>
                        <div className='card'>
                            <div className='card-header text-center bg-success text-white'>
                                <h2>Login Here</h2>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={Login}>
                                    {/* "value" are used to store the data when client put the value in input box  */}
                                    <input type="text" placeholder='Enter your userName'
                                        className='form-control mb-3' value={update.username}
                                        onChange={(e) => { changeval(e) }} name='username' />

                                    {!isUserValid ? <span style={{ color: "red", fontSize: "15px" }}>{userError}</span>
                                        : null}

                                    <input type="password" placeholder='Enter your password'
                                        className='form-control mb-3' value={update.password} onChange={(e) => { changeval(e) }} name='password' />

                                    {
                                        !isPassword ? <span style={{ color: "red", fontSize: "15px" }}>{passError}</span> : null
                                    }
                                    <div className='text-center '>
                                        <input type="submit" value="login" className='bg-success btn btn-outline text-white' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
