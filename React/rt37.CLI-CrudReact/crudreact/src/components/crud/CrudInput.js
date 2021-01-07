import React from 'react';

class CrudInput extends React.Component {

    static defaultProps = {  /*  props의 디폴트 값 설정 */  } 
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ } 
    state = {
        // 상태값(변수)을 정의한다.
        user: {
            name: null,
            power: 0,
        },
    }
    style = {
        // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.

    }
    func = {
        // fucn에 정의된 메서드는 반드시 constructor에서 this bind() 해야 한다.

    }
    constructor(props) {
        super();
        // this 바인딩
        
        // ref 만들기
        this.refName = React.createRef();
        this.refPower = React.createRef();
    }
    componentDidMount() {
        // 마운트 완료 후에  : 페이지 load 될 때 한번
    }
    componentDidUpdate(prevProps, prevState) {
        // 업데이트 완료 후에 : 여러번, state 가 변경될 때마다
    }
    componentWillUnmount() {
        // 언마운트 완료 후에 : 페이지 unload 될 때 한번
    }
    doIns = (event)=>{
        // 유효성 검사.
        debugger;
        // 부모 state.list 에 추가 
        const obj = {
            id: null,
            name: this.refName.current.value,
            power: Number(this.refPower.current.value),
        }
        this.props.doIns( obj );
        // 초기화 
        this.refName.current.value = "";
        this.refPower.current.value = "";
    }
    render() {
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" ref={this.refName} placeholder="이름을 입력하세요" />
                </div>
                <div>
                    <label htmlFor="">Power : </label>
                    <input type="text" ref={this.refPower} placeholder="숫자만 입력하세요" />
                </div>
                <button onClick={this.doIns}>Add</button>
            </div>
        );
    }
}
export default CrudInput;