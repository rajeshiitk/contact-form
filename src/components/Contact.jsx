import React from 'react'
import "../styles/style.css"

const Contact = () => {
    return (
        <div className='container'>
            <form action="" autoComplete='disabled'>
                <h2>Contact Us</h2>
                <div className="name-box">
                    <input  required autoComplete="disabled" type="text" name="name" id="name" />
                    <span>Name</span>
                    <i></i>
                </div>
                <div className="email-box">
                    <input required autoComplete='disabled' type="email" name="email" id="email" />
                    <span>Email</span>
                    <i></i>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Contact