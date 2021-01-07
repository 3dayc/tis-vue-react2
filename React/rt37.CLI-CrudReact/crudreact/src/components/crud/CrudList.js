import React, { Component } from 'react';
import CrudListItem from './CrudListItem';

class CrudList extends React.Component {

    static defaultProps = {  /*  props의 디폴트 값 설정 */  } 
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ } 
    state = {
        // 상태값(변수)을 정의한다.

    }
    style = {
        // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.

    }
    func = {
        // fucn에 정의된 메서드는 반드시 constructor에서 this bind() 해야 한다.

    }
    constructor(props) {
        super(props);
        // this 바인딩
        
        // ref 만들기
        
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
    render() {
        const list = this.props.list; // CrudApp.state.list

        const arrs = list.map((item, index)=>{
            // item = {id:"", name:"", power:""}
            return(
                /* props = state + func  */
                <CrudListItem key={index} index={index} item={ item}  {...this.props} >
                </CrudListItem>
            );
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {arrs}
                </tbody>
            </table>
        );
    }
}
export default CrudList;
