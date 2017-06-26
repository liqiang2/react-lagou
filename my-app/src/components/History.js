/**
 * Created by qianfeng on 2017/6/23.
 */
import React, { Component } from 'react';

class History extends Component {
    constructor(){
        super();
        this.state={
            del:false
        }
        this.delItem=this.delItem.bind(this);
    }

    delItem(id){
        this.setState({del:true})
    }

    render() {
        var {list}=this.props;
        return (
            <li style={{display:this.state.del?"none":"block"}} className="activeable history-item">
                <span className="text" data-name="搜索">{list}</span>
                <div onClick={this.delItem} className="delcon" data-time="1497944212047" data-name="搜索"><span className="delicon"></span></div>
            </li>
        );
    }
}

export default History;







