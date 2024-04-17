import { Page1 } from "./component/page1"
import { Page2 } from "./component/page2"
import { Page3 } from "./component/page3"
import { Page4 } from "./component/page4"
import { Page5 } from "./component/page5"
import { Page6 } from "./component/page6"
import { Home } from "./home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
