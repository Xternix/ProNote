import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";
import { NotesProvider} from "./context/NotesProvider"


function App () {
  return (
    <NotesProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </Router>
    </NotesProvider>
  );
}

export default App;