import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layout/DefaultLayout"
import { TMDBProvider } from "./context/TMDBContext"

import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <TMDBProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TMDBProvider>
  )
}

export default App
