import React, { useState } from 'react'

const Register = () => {

  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="/images/register.png" alt="registerimage" width="400" height="500" />
              </div>

              <div className="registration-form">
                <h1 className='main-heading mb-3'>Registration</h1>
                <br/>

                <form onSubmit={handleSubmit}>

                  <div>
                    <lable htmlFor="username">Username</lable>
                    <input type="text" name="username"  placeholder='Enter Username' id="username" required autoComplete='off' value={user.username} onChange={handleInput} />
                  </div>

                  <div>
                    <lable htmlFor="email">Email</lable>
                    <input type="email" name="email"  placeholder='Enter Email' id="email" required autoComplete='off' value={user.email} onChange={handleInput} />
                  </div>

                  <div>
                    <lable htmlFor="phone">Phone</lable>
                    <input type="number" name="phone"  placeholder='Enter phone' id="phone" required autoComplete='off' value={user.phone} onChange={handleInput} />
                  </div>

                  <div>
                    <lable htmlFor="password">Password</lable>
                    <input type="password" name="password"  placeholder='Enter password' id="password" required autoComplete='off' value={user.password} onChange={handleInput}/>
                  </div>

                  <br/>
                  <button type="submit" className='btn btn-submit'>Register Now</button>

                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Register