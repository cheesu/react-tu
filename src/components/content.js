// app.js에 들어갈 컴포넌트 입니다.

//파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.

import React from 'react'; //import JavaScript ES6 에 새로 도입된 키워드로서, require('..') 의 역할을 합니다.

/*
 * 컴포넌트에서 immutable (변하지 않는)  데이터가 필요 할 땐,
 * render() 메소드의 내부에 안에 { this.props.propsName } 형식으로 넣고,
 * 컴포넌트를 사용 할 때, < > 괄호 안에 propsName="value" 를 넣어 값을 설정합니다.
 *
 * */

class Content extends React.Component {



    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p> { this.props.body }</p>
            </div>
        );
    }
}

/*
*
* 컴포넌트 에서 원하는 props 의 Type 과 전달 된 props 의 Type 이 일치하지 않을 때
* 콘솔에서 오류 메시지가 나타나게 하고 싶을 땐, 컴포넌트 클래스의 propTypes 객체를 설정하면 됩니다.
* 또한, 이를 통하여 필수 props 를 지정할 수 있습니다.
* 즉, props 를 지정하지 않으면 콘솔에 오류 메시지가 나타납니다.
* 그러나 잘못된 타입을 넘겨도 렌더링은 됨
**/

Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

export default Content; //export는 JavaScript ES6 에 새로 도입된 키워드로서, module.export = Content 와 같습니다.