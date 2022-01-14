import React, { useState } from 'react'
import "../App.css"
function Register(props) {
    let [detail, setdetail] = useState({
        firstName: "",
        lastName: "",
        age: "",
        mobile: "",
        Password: "",
        term: false,
        gender: false

    })
    const [isfirstName, setisfirstName] = useState(true)
    const [firstError, setfirstError] = useState("")

    const [isLast, setisLast] = useState(true)
    const [lastError, setlastError] = useState("")

    const [isage, setisage] = useState(true)
    const [ageError, setageError] = useState("")

    const [ismobile, setismobile] = useState(true)
    const [mobileError, setmobileError] = useState("")

    const [isPassword, setisPassword] = useState(true)
    const [wordError, setwordError] = useState("")

    const [isgender, setisgender] = useState(false)
    const [genderError, setgenderError] = useState("")

    const [isterm, setisterm] = useState(false)
    const [termError, settermError] = useState("")




    // SubmitEvent

    let login = (e) => {
        e.preventDefault()
        console.log(detail);


        const isName = firstNameValidate(detail.firstName)
        const isLastv = lastNameValidation(detail.lastName)
        const isAge = ageValidation(detail.age)
        const mobilev = mobileValidation(detail.mobile)
        const pass = passwordValidation(detail.Password)
        const term = termvalidation(detail.term)
        const gen = gernderValidation(detail.gender)

        if (isName && isLastv && isAge && mobilev && pass && term && gen) {
            console.log("props", props);
            props.history.push("./home")
        }

    }




    // firstName validatation
    const firstNameValidate = (firstval) => {
        if (firstval) {
            if (/^[a-zA-Z ]+$/.test(firstval)) {
                setisfirstName(true)
                setfirstError("")
                return true
            } else {
                setisfirstName(false)
                setfirstError("*Please Enter Valid Name")
                return false
            }

        } else {
            setisfirstName(false)
            setfirstError("*Enter your FirstName")
            return false
        }
    }


    // lastName validation
    const lastNameValidation = (last) => {
        if (last) {
            if (/^[a-zA-Z ]+$/.test(last)) {
                setisLast(true)
                setlastError("")
                return true
            } else {
                setisLast(false)
                setlastError("*Please enter valid name")
                return false
            }
        } else {
            setisLast(false)
            setlastError("*Enter your LastName")
            return false
        }
    }

    // ageValidation
    const ageValidation = (age) => {
        if (age) {
            if (/^\S[0-9]{0,3}$/.test(age)) {
                setisage(true)
                setageError("")
                return true
            } else {
                setisage(false)
                setageError("*Please enter valid Age")
                return false
            }
        } else {
            setisage(false)
            setageError("*Please enter  Age")
            return false
        }
    }
    // mobile validation
    const mobileValidation = (number) => {
        if (number) {
            if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(number)) {
                setismobile(true)
                setmobileError("")

                return true
            } else {
                setismobile(false)
                setmobileError("*Please enter valid number")
                return false
            }

        } else {
            setismobile(false)
            setmobileError("*Please enter  number")
            return false
        }
    }
    // passwordValidation

    const passwordValidation = (word) => {
        if (word) {
            if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(word)) {
                setisPassword(true)
                setwordError("")
                return true
            } else {
                setisPassword(false)
                setwordError("*Please enter valid password")
                return false
            }
        } else {
            setisPassword(false)
            setwordError("*Please enter valid password")
            return false
        }
    }


    // termvalidation
    const termvalidation = (bollean) => {

        if (bollean === true) {
            setisterm(true)
            settermError("")
            return true
        } else {
            setisterm(false)
            settermError("*Please Read term and condition")
            return false
        }


    }
    // gernderValidation

    const gernderValidation = (gender) => {
        if (gender === true) {
            setisgender(true)
            setgenderError("")
            return true
        } else {
            setisgender(false)
            setgenderError("*Please chose one value")
            return false
        }
    }

    // upDatevalue in form

    let upDatevalue = (e) => {
        // console.log(e.target.name);
        const copyupDatevalue = { ...detail }
        copyupDatevalue[e.target.name] = e.target.value
        setdetail(copyupDatevalue)
        console.log(detail);
    }

    // update checkbox

    const updateCheck = (e) => {
        // console.log(e);
        const copyDateCheck = { ...detail }
        copyDateCheck[e.target.name] = e.target.checked
        setdetail(copyDateCheck)
        // console.log(e.target.checked);
    }
    return (
        <div>
            <div className='container mt-4'>
                <div className='don'>
                    <div className='row '>
                        <div className='col-6 offset-md-3'>
                            <div className='card bg-light '>
                                <div className='card-header text-center bg-primary text-white'>

                                    <h2>Register Here</h2>
                                </div>

                                <div className='card-body'>
                                    <form onSubmit={login}>
                                        <input type="text" value={detail.firstName} placeholder='First Name'
                                            className='form-control mb-4' onChange={(e) => { upDatevalue(e) }} name='firstName' />
                                        {!isfirstName ? <span style={{ color: "red", fontSize: "15px" }}>{firstError}</span> : null}

                                        <input type="text" value={detail.lastName} placeholder='Last Name'
                                            className='form-control mb-4' onChange={(e) => { upDatevalue(e) }} name='lastName' />
                                        {!isLast ? <span style={{ color: "red", fontSize: "15px" }}>{lastError}</span> : null}

                                        <input type="text" value={detail.age} placeholder='Write Age'
                                            className='form-control mb-4' onChange={(e) => { upDatevalue(e) }} name='age' />
                                        {!isage ? <span style={{ color: "red", fontSize: "15px" }}>{ageError}</span> : null}

                                        <input type="number" value={detail.mobile} placeholder='mobile' name='mobile'
                                            className='form-control mb-4' onChange={(e) => { upDatevalue(e) }} />
                                        {!ismobile ? <span style={{ color: "red", fontSize: "15px" }}>{mobileError}</span> : null}

                                        <input type="password" value={detail.Password} placeholder='enter  Password'
                                            className='form-control mb-4' onChange={(e) => { upDatevalue(e) }} name='Password' />
                                        {!isPassword ? <span style={{ color: "red", fontSize: "15px" }}>{wordError}</span> : null}

                                        <div className='mb-3'>

                                            <div className='row'>
                                                <div className='col-sm-2'>
                                                    <label htmlFor="">Gender:-</label>
                                                </div>
                                                <div className='col-sm-5'>

                                                    <input type="radio" name='gender' onChange={updateCheck} /> Male
                                                </div>
                                                <div className='col-sm-5'>
                                                    <input type="radio" name='gender' onChange={updateCheck} />Female
                                                </div>
                                                {
                                                    !isgender ? < span style={{ color: "red", fontSize: "15px" }}>{genderError}</span> : null
                                                }
                                            </div>


                                        </div>

                                        <div className='mb-4'>
                                            <input type="radio" className='' name='term' onChange={updateCheck} />
                                            <label >*Term & Condition</label>
                                            {
                                                !isterm ? < span style={{ color: "red", fontSize: "15px" }}>{termError}</span> : null
                                            }
                                        </div>



                                        <div className='text-center'>
                                            <input type="submit" value="login" className='bg-primary text-white btn btn-outline' />
                                        </div>


                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Register
