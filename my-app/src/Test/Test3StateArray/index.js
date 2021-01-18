import React, {useState} from 'react'

export default function Test3() {
    const intialState={username:"",password:""};
    const [account, setAccount]=useState(intialState);
    const [accountList, setAccountlist] = useState([])

    return(
        <div>
            <p>#Debug {JSON.stringify(accountList)}</p>
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
                        setAccountlist([...accountList,account])
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
            <ul>
                {accountList.map(item=><li key={item.index}>UserName: {item.username} Password: {item.password}</li>)}
            </ul>
        </div>
    )
}