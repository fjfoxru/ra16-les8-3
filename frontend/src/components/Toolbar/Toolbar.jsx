import React, { Fragment, useContext, useState } from 'react'
import AuthContext from '../../contexts/AuthContext';

export default function ToolbarFunctional() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const {token, profile, handleLogin, handleLogout} = useContext(AuthContext);


    const onSubmitAuth = () => {
        handleLogin(name, pass)
    }

    const setNameForm = (e) => {
        setName(e.target.value);
    }
    const setPassForm = (e) => {
        setPass(e.target.value);
    }

    return (
      <Fragment>
        {profile && <Fragment>
          <img src={profile.avatar} />
          <button onClick={handleLogout}>Logout</button>
        </Fragment>
        }
        {<input value={name} onChange={setNameForm}></input>}
        {<input value={pass} onChange={setPassForm}></input>}
        {!profile && <button onClick={onSubmitAuth}>Login</button>}
      </Fragment>
    )
}