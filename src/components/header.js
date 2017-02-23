//파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.

import React from 'react'; //import JavaScript ES6 에 새로 도입된 키워드로서, require('..') 의 역할을 합니다.

/*
* 컴포넌트에서 immutable (변하지 않는)  데이터가 필요 할 땐,
* render() 메소드의 내부에 안에 { this.props.propsName } 형식으로 넣고,
* 컴포넌트를 사용 할 때, < > 괄호 안에 propsName="value" 를 넣어 값을 설정합니다.
*
* */

class Header extends React.Component {
    render(){
        return (
            <h1>{ this.props.title }</h1>
        );
    }
}


export default Header; //export는 JavaScript ES6 에 새로 도입된 키워드로서, module.export = Header 와 같습니다.