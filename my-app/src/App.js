import React, {useState} from 'react'
import AddText from './AddText'
import Test1 from './Test/Test1State'
import Test2 from './Test/Test2StateObj'
import Test3 from './Test/Test3StateArray'
import Test4 from './Test/Test4EffectAndInit'
import Test5 from './Test/Test5CleanUp'
import Test6 from './Test/Test6SetInterval'
import Test7 from './Test/Test7FeedAxios'
import Test8 from './Test/Test8Context'
import Test9 from './Test/Test9Memo'
import Test10 from './Test/Test10Callback'
import Test11 from './Test/Test11Facebook'

function App() {

  const[isShow, setIsShow] = useState(true)
  return (
    <div className="App">
      <Test11/>
      {/* <AddText/> */}
      {/* {isShow && <Test5/>}
     <button onClick={() => setIsShow(false)}>Hide</button> */}
    </div>
  );
}

export default App;
