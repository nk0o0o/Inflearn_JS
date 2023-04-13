import { useState } from 'react'
import TodoList from './TodoList'
import Header from './Header'
import "./App.css"

const filters=['all', 'active', 'completed']//header 필터목록 header,list 다필요해서 여기에서 정의

function App() {

  const [filter, setFilter] = useState(filters[0])

  return (
    <div className="App">
      <Header filters={filters} filter={filter} //젤첨걸로[0] 모두보기로 불러오기
              onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </div>
  );

}

export default App;
