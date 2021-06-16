import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from "./routes/index";//路由文件配置的所有路由
import { HashRouter } from "react-router-dom";//hash路由
//读取路由配置并转化Route标签,但是只能渲染第一层路由
import { renderRoutes } from "react-router-config";
import store from "./store/index";
import { Provider } from "react-redux";//所有容器能够访问到store
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;