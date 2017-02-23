//파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.

import React from 'react'; //import JavaScript ES6 에 새로 도입된 키워드로서, require('..') 의 역할을 합니다.
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
/*
 class 개념 역시 ES6 에 새로 도입된 요소중 하나 입니다.
 모든 Component는 React.Component 를 상속합니다.
 ES5 환경에서는 React.createClass() 라는 메소드를 사용합니다.
 또한, ES5 에서 클래스를 만들때는 메소드들을 nest 할 수 없고 prototype을 사용했어야 했는데, 많이 편해졌죠.
 */

class App extends React.Component {

    sayHey(){
        alert("hey");
        $("#test").text("change");
    }

    sayChange(){
        $("#test").text("change test");
    }

    //render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의합니다.
    render(){
        /*
        * JSX의 가장 중요한 부분입니다. 보시면, 자바스크립트에서 html 태그를 반환하는데,
        * 따옴표같은건 없죠? React JSX 는 XML-like Syntax 를 native Javascript로 변환해줍니다.
        * 따라서 ” ” 로 감싸지 않는 점 주의하시구요,
        * ( ) 를 사용하지 않아도 오류는 발생하지 않지만 가독성을 위하여 사용하는것이 좋습니다.
        * */


        /*
        * ES6 에 도입된 let 키워드는 var 과 비슷하지만,
        * var 변수의 scope는 기본적으로 함수 단위인데 let 은 블럭 범위 내에서 변수를 선언합니다.
        * 따라서 가끔 발생하는 javascript 의 Scope관련 문제를 해결 할 수 있습니다. 지금 이 상황에선
         * let 을 사용하는것이 필수는 아니지만, ES6 에선 평상시 let 을 쓰고 var은 필요한 상황에서만 사용하는게 좋습니다.
        * */
        let text = "Dev-Server";
        let val = 2;
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };
        return (
            <div>
                <p id="test">
                    aaa2
                </p>
                <h1> Hello cheesu </h1>
                <h2> Welcome to the {text}</h2>
                {/* {this.sayHey} 를 통해 버튼이 클릭되면 해당 메소드가 실행되게 할 수 있습니다.
                    () 가 뒤에 안붙어있다는점을 주의해주세요. 만약에 () 가 붙으면 페이지가 로드 될때도 실행되고,
                    클릭할때도 실행됩니다.
                */}
                <button onClick={this.sayHey()}>Click Me guys</button>
                <button onClick={this.sayChange()}>Click Me 2</button>
                <p style = {pStyle}>{val == 1 ? 'True' : 'False'}</p>
            </div>
        );
        /*
        * JSX 안에서 사용되는 JavaScript 표현에는 If-Else 문이 사용 불가합니다.
        * 이에 대한 대안은 ternary ( condition ? true : false ) 표현을 사용하는 것입니다.
         예:  <p>{1 == 1 ? 'True' : 'False'}</p>
        * */
    }


}

export default App; //export는 JavaScript ES6 에 새로 도입된 키워드로서, module.export = App 와 같습니다.