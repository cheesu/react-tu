import React from 'react';


class RandomNumber extends React.Component {
    updateNumber(){
        console.log("RandomNumber의 updateNumber함수 실행 ");
        let value = Math.round(Math.random()*100);
        console.log("RandomNumber의 updateNumber함수의 value");
        console.log(value);
        this.props.onUpdate(value); // prop로 받은 함수를 실행한다.
        console.log("RandomNumber의 updateNumber함수의 THIS");
        console.log(this);
    }
    /*
    react 컴포넌트의 생성사이며 super(props)로 상속받은
    React.Component의 생성자 메소드를 실행 한 후
    사용자가 입력한 코드를 실행한다.
     */
    constructor(props){
        super(props);
        // 업데이트 메소드에서 this.props에 접근 할 수 있도록 바인딩한다.
        this.updateNumber = this.updateNumber.bind(this);
        console.log("RandomNumber 컨스트럭쳐");
        console.log(this);
    }
    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}
export default RandomNumber;