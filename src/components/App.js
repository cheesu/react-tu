import React from 'react';
import update from 'react-addons-update'
// this.state를 직접 수정하지 말고 this.setState()를 사용하여 수정 할 것을 강조합니다.

class App extends React.Component {
    render(){
        console.log("App 렌더링 시작");
        return (
            <Contacts/>
        );
    }
}

class Contacts extends React.Component {

    constructor(props) {
        console.log("컨텍트 생성자 시작");
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-00035"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            testValue : "번호다",
            selectedKey: -1
        };
        console.log("컨텍트 생성자 끝");
    }

    _insertContact(name, phone){
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    _editContact(name, phone){
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }

    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    render(){
        console.log("컨텍트 렌더링 시작");
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                             phone={contact.phone}
                                             testValue={this.state.testValue}
                                             key={i}
                                             contactKey={i}
                                             isSelected={this._isSelected.bind(this)(i)}
                                             onSelect={this._onSelect.bind(this)}
                        />);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                               isSelected={(this.state.selectedKey !=-1)}
                               contact={this.state.selected}/>
            </div>
        );
    }
}

class ContactInfo extends React.Component {

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    // 컴포넌트를 다시 렌더링 해야 할 지 말지 정의해준답니다.
    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }

    render() {
        console.log("컨텍트인포 렌더링 시작");
        console.log("rendered: " + this.props.name);
        let getStyle = isSelect => {
            //매개변수가 참이면 배경색이 아쿠아색인 스타일을 반환하며 거짓이면 비어있는 스타일을 반환합니다.
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };

        return(
           //<li>{this.props.name} {this.props.phone} {this.props.testValue}</li>
        <li style={getStyle(this.props.isSelected)}
            onClick={this.handleClick.bind(this)}>
            {this.props.name} {this.props.phone} {this.props.testValue}
        </li>
        );
    }
}

// 클래스 생성 및 렌더링
class ContactCreator extends React.Component {
    constructor(props) {
        super(props);
        // Configure default state
        // 인풋의 값을 컴포넌트의 state로 사용하기
        this.state = {
            name: "",
            phone: ""
        };
    }

    /*
    * 인풋박스의 값을 변경 할 때 실행 될 handleChange(e) 메소드를 만들었습니다.
     여기서 파라미터 e 는 JavaScript 의 Event 인터페이스입니다.
     e 를 사용함으로서 한 메소드로 여러 인풋박스를 인풋박스의 name 에 따라 처리 할 수 있게됩니다.
     렌더링 부분의 코드를 보기 좋게 하기위해 줄바꿈을 하였으며 onChange={this.handleChange.bind(this)}를 넣어주었습니다.
     인풋박스가 변경 될 때 해당 메소드를 실행한다는 의미 입니다. bind 를 통하여 컴포넌트의 this 에 접근 할 수 있게 됩니다.
    * */
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        );
    }
}


// 수정
class ContactEditor extends React.Component {
    constructor(props) {
        super(props);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");

            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                        Edit
                    </button>
                </p>
            </div>
        );
    }
}


// 삭제
class ContactRemover extends React.Component {
    handleClick() {
        this.props.onRemove();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Remove selected contact
            </button>
        );
    }
}

export default App;