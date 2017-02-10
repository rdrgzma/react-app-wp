import React from 'react';

class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:""
        }
        this._textChange=this._textChange.bind(this);
    }
    _textChange(ev){
        this.setState({
            text: ev.target.value
        });
    }
    render(){
        return(
            <div>
                <textarea onChange={this._textChange} value={this.state.text} />
                <h3>{this.state.text.length}</h3>
            </div>
        );
    }
}

export default TextArea;