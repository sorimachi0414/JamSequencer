import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export const ChordChopperCheckBox =(props)=>{
  return(
    <input className="form-check-input m-05 p-sm-2 mx-sm-1" type="checkbox" checked={props.checked} value={props.value} onChange={props.onClick} />
  )
}

export const ThreeButtonChanger =(props)=>{
  return(
    <Row className="p-2 ">
      <Col sm={3} md={3} className="p-0 m-0">
        <button className="btn btn-outline-primary p-0 w-100 h-100" value={props.value} onClick={props.onClickN}>{"<"}</button>
      </Col>
      <Col sm={6} md={6} className="p-0 m-0 ">
        <button className={props.color} value={props.value} onClick={props.onClickP}><span className="fs-2"> {props.value}</span></button>
      </Col>
      <Col sm={3} md={3} className="p-0 m-0">
        <button className="btn btn-outline-primary p-0 w-100 h-100" value={props.value} onClick={props.onClickP}>{">"}</button>
      </Col>
    </Row>
  )
}

export const DropDownSelector =(props)=> {
  let options=[]
  for(let key in props.optionList){
    options.push(
      <option key={key} value={key}>{key}</option>
    )
  }
  return(
    <select defaultValue={props.initValue} className="form-select w-100" onChange={(e)=>props.change(e.target.value)}>
      {options}
    </select>
  )
}

export class ListedSelector extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      //selectedType:this.localStorageIOListed(0),
    }
    //list:this.props.initList  //二重管理になっているが、Selectの初期値をセットしたいため。
  }
  /*
  localStorageIOListed(bool) {
    let ls = localStorage
    let key = 'list'+this.props.boxNum+this.props.chordOrScale
    let result = this.props.initList[this.props.boxNum]
    if (bool) {
      //Write to localStorage
      ls.setItem(key, this.state.selectedType);
    } else {
      //Read from localStorage
      if (key in ls){
        result =String(ls.getItem(key))
        this.setState({
          selectedType:result,
        })
      }
      return result
    }
  }*/

  componentDidMount() {
    //this.props.onChange(this.props.boxNum,this.localStorageIOListed(0))
    //if(this.props.chordOrScale=='Scale') {this.props.readStorage()}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    //this.localStorageIOListed(true)
  }


  render(){
    let options=[]
    for (let key in this.props.optionList) {
      options.push(
        <option key={key} value={key}>{key.substr(3,key.length)}</option>
      )
    }
    return(
      //valueがSelectの初期値となる。valueが入っていると、他に変更してもValueに戻る。
      <select
        size={3}
        defaultValue={this.props.initList}
        className="form-select p-1"
        value={this.props.value}
        onClick={(e)=>this.props.onChange(this.props.boxNum,e.target.value)}>
        {options}
      </select>
    )
  }
}
