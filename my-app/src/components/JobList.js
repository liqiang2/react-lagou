/**
 * Created by qianfeng on 2017/6/20.
 */
import React, { Component,PropTypes } from 'react';

import './JobList.css'

class JobList extends Component {
    constructor(){
        super();
        this.goPosition=this.goPosition.bind(this);
    }

    render() {
        var {list}=this.props;
        var src="//www.lgstatic.com/"+list.companyLogo;
        return (
                <li onClick={this.goPosition} data-positionName={list.positionName} data-salary={list.salary} data-imgsrc={src} data-city={list.city} data-companyName={list.companyName} className="activeable list-item" data-positionId={list.positionId} >
                    <img className="item-logo" src={src} alt=""/>
                    <div className="item-desc">
                        <h2 className="item-title">{list.companyName}</h2>
                        <p className="item-info"><span className="item-pos">{list.positionName}[{list.city}]</span><span className="item-salary">{list.salary}</span></p>
                        <p className="item-time">{list.createTime}</p>
                    </div>

                </li>

        );
    }

    goPosition(e){
        var path='/jobs/'+e.currentTarget.getAttribute('data-positionId');
        //this.props.history.pushState(null,path);
        this.context.router.push(path);

        var positionName=e.currentTarget.getAttribute('data-positionName'),
            salary=e.currentTarget.getAttribute('data-salary'),
            imgsrc=e.currentTarget.getAttribute('data-imgsrc') ,
            city=e.currentTarget.getAttribute('data-city') ,
            positionid=e.currentTarget.getAttribute('data-positionId'),
            companyName=e.currentTarget.getAttribute('data-companyName');
        var obj={positionName:positionName,salary:salary,imgsrc:imgsrc,city:city,companyName:companyName};
        var str=JSON.stringify(obj);

        localStorage.setItem(positionid,str)

    }

}

JobList.contextTypes={
    router:PropTypes.object
}

export default JobList;

