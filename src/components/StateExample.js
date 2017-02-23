/*
*컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용합니다..
* React.js 어플리케이션을 만들 땐, state를 사용하는 컴포넌트의 갯수를 최소화 하는 것 을 노력해야합니다.
* 예를들어, 10 개의 컴포넌트에서 유동적인 데이터를 사용 하게 될 땐, 각 데이터에 state를 사용 할 게 아니라,
* props 를 사용하고 10 개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는것이 효율적입니다.
* **/
import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        //state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
        this.state = {
            header: "Header Initial state",
            content: "Content Initial State"
        };
    }

    /*
    * state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다.
    * ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다.
    * (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)
    **/
    updateHeader(text){
        this.setState({
            header: "Header has changed"
        });
    }

    render() {
        return (
            <div>
                {/*state 를 렌더링 할 때는 { this.state.stateName } 을 사용합니다.*/}
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>Update</button>
            </div>
        );
    }
}

export default StateExample;