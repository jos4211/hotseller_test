import { Route } from "react-router-dom";
import Main from "./pages/main";
import HashtagInfo from "./pages/hashtagInfo";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Main} />
      <Route path="/:name" exact={true} component={HashtagInfo} />
    </>
  );
}

export default App;
