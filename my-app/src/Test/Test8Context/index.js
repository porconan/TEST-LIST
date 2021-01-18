import React, {useContext} from 'react'
import UseContextDemo1 from './UseContextDemo1'
import ThemeContext from './ThemeContext'

export default function Test8(){

   return(
       <div>
         <ThemeContext.Provider value="yellow">
            <UseContextDemo1/>
         </ThemeContext.Provider>
       </div>
   );
}