// import React from 'react'
// import MyClass from './MyClass'
// import Ter from './Ter'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Layout from './Layout'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'


// export default function App() {
//   return (
    
//       <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="contact" element={<Contact/>}/>
          


//         </Route>
//       </Routes>
//       </BrowserRouter>

    
//   )
// }

// import React from 'react'
// import Basic from './Events/Basic'
import Counter from './Hooks/UseState/Counter'

// export default function App() {
//   return (
//     <div>
        

//     </div>
//   )
// }

// import React from 'react'
// import CounterR from './Hooks/UseState/CounterR'
// import Effect from './Hooks/UseState/Effect'
// import Reducer from './Hooks/UseState/Reducer'

// export default function App() {
//   return (
//     <div>
//       <CounterR/>
//       <Effect/>
//       <Reducer/>
//     </div>
//   )
// }

import React from 'react'
import Callback from './Callback'
import CounterR from './Hooks/UseState/CounterR'

export default function App() {
  return (
    <div>
      {/* <Basic/> */}
      <CounterR/>
      <Counter/>
      <Callback/>
    </div>
  )
}


