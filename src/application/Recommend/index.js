import React,{useEffect} from "react";
import Slider from "components/slider"
import RecommendList from "components/list"
import Scroll from "baseUI/scroll";//滑动效果
import { Content } from "./style";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";//所有的派发方法
import { forceCheck } from "react-lazyload";//引入
import Loading from "baseUI/loading/index";
import { renderRoutes } from "react-router-config";
function Recommend(props) {
    const { bannerList, recommendList,enterLoading } = props;//参数
    useEffect(() => {
        const { getBannerList, getRecommendList } = props;//方法
        if(bannerList.size==0) getBannerList();
        if(recommendList.size==0) getRecommendList();
    }, [])
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];
    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
              <div>{/**这个div必须保留，否则Scroll无法工作 */}
                <Slider bannerList={bannerListJS}></Slider>
                <RecommendList recommendList={recommendListJS}></RecommendList>
              </div>
            </Scroll>
            {enterLoading && <Loading></Loading>}
            {renderRoutes(props.route.routes)}
        </Content>
    )
}
// 映射Redux 全局的state到组件的props
const mapStateToProps = (state) => ({
    //获取相应的数据
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
    enterLoading: state.getIn(["recommend", "enterLoading"])
})
//将ui组件包装成容器组件
export default connect(mapStateToProps, actionCreators)(React.memo(Recommend))