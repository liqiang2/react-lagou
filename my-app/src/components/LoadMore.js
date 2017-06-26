/**
 * Created by qianfeng on 2017/6/20.
 */
import React, { Component } from 'react';
import './LoadMore.css'

class LoadMore extends Component {

    render() {
        return (
                <div className="activeable list-more" onClick={this.props.loadmore}>加载更多</div>
        );
    }
}

export default LoadMore;



