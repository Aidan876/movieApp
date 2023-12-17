import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './components/List';
import New from './components/New';
import Edit from './components/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;