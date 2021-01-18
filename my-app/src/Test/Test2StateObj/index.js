import React, {useState} from 'react'

export default function Test2() {
    const intialState={username:"",password:""};
    const [account, setAccount]=useState(intialState);

    return(
        <div>
            <p>#Debug {JSON.stringify(account)}</p>
            <input
                type="text"
                placeholder="username"
                value={account.username}
                onChange={e => (setAccount({...account,username: e.target.value}))}
            />
            <br/>
            <input
                type="text"
                placeholder="password"
                value={account.password}
                onChange={e => (setAccount({...account,password: e.target.value}))}
            />
              <button type="button" 
                onClick={
                    e => {
                        e.preventDefault();
                        alert(JSON.stringify(account));
                }}
            >
                Submit
            </button>
            <button type="button" 
                onClick={
                    e => {
                        e.preventDefault();
                        setAccount(intialState);
                }}
            >
                Clear
            </button>
        </div>
    )
}