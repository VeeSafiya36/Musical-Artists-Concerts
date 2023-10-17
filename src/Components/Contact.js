import React from 'react'

export default function Contact () {
    
    return (

<div>
    <h2 className='Heading'>Contact</h2>
    <h3>Interested in Learning More?</h3> <br></br>
    
    <form>
        <label>Name</label>
        <input name='name' type='text'></input>

        <label>Phone Number</label>
        <input name='number' type=';number'></input> <br></br>

        <label>Email</label>
        <input name='email' type='text'></input>

        <label>Message</label>
        <input name='message' type='text'></input>
        
        <button>Submit</button>
    </form>
    <br/>
    <p>MuseScape is your number one go-to for updates on live performances all over the world from top musicians and artitsts. Sign up for your free account today! </p>
    <br/>
    <form>
        <label>Name</label>
        <input name='name' type='text'></input>

        <label>Email</label>
        <input name='name' type='text'></input>
        <br/>

        <label>Password</label>
        <input name='password' type='text'></input>
        <button>Join</button>
    </form>
</div>
    )
}