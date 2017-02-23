//파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.

import React from 'react'; //import JavaScript ES6 에 새로 도입된 키워드로서, require('..') 의 역할을 합니다.
// 만들어 놓은 헤더와 컨텐트를 임포트 시켜 이곳에서 사용 가능하도록 한다
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
/*
 class 개념 역시 ES6 에 새로 도입된 요소중 하나 입니다.
 모든 Component는 React.Component 를 상속합니다.
 ES5 환경에서는 React.createClass() 라는 메소드를 사용합니다.
 또한, ES5 에서 클래스를 만들때는 메소드들을 nest 할 수 없고 prototype을 사용했어야 했는데, 많이 편해졌죠.
 */

class App extends React.Component {

    constructor(props){
        super(props);
        // 초기 state 설정
        this.state = {
            value: Math.round(Math.random()*1000010)
        };
        this.updateValue = this.updateValue.bind(this); //updateValue() 메소드에서 this.setState에 접근 할 수 있도록 바인드
        console.log("APP 컨스트럭처");
        console.log(this);
    }

    updateValue(randomValue){
        console.log("APP updateVaue 실행");
        // state를 변경할떈 setState({key:value}) 메소드 사용
        this.setState({
            value: randomValue
        });
    }

    //render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의합니다.
    render(){
        return (
            <div>
                {/*
                 <Header/>
                 <Content/>
                */}
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                         body={ this.props.contentBody }/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue} />
            </div>
        );
    }
}

/*
props 값을 임의로 지정해주지 않았을 때 사용할 기본값을 설정하는 부분
기본값을 설정 할 땐, 컴포넌트 클래스 하단에 className.defaultProps = { propName: value } 를 삽입하면 됩니다.
**/
App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};


export default App; //export는 JavaScript ES6 에 새로 도입된 키워드로서, module.export = App 와 같습니다.