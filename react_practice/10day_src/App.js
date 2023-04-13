import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.js";
import About from "./pages/About.js";
import Profile from "./pages/Profile.js";
import Articles from "./pages/Articles.js";
import Article from "./pages/Article.js";
import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";
import MyPage from "./pages/MyPage.js";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>{/* path="/" == index */}
                <Route path="/about" element={<About/>}/>
                <Route path="/profiles/:username" element={<Profile/>}/>
            </Route>
            <Route path="/articles" element={<Articles/>}>
                <Route path=":id" element={<Article/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPage />} />

            <Route path="*" element={<NotFound />} />{/* 위의 경로 이외의 모든 url */}
        </Routes>
    </div>
  );
}

export default App;