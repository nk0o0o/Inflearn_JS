import JayG from "./assets/jayG.png";
import Frodo from "./assets/frodo.png";
import Neo from "./assets/neo.png";
import Profile from "./Profile.js";
import './App.css';

function App() { // 함수 선언식
  return (
    <div className="App">
      {/* '=' 는 할당 */}
      <Profile 
        img={JayG}
        name="제이지"
        detail="Yo! 나는 힙합을 좋아하는 비밀 요원 두더지 제이지 G"
        isNew={true}
      />
      <Profile 
        img={Frodo}
        name="프로도" 
        detail="네오의 영원한 단짝. 부잣집 도시개 프로도를 알고싶다면?"
      />
      <Profile 
        img={Neo}
        name="네오" 
        detail="카카오프렌즈 최고의 패셔니스타. 도도한 고양이 네오의 하루가 궁금하니?"
      />
    </div>
  );
}

export default App;
