import React,{Component} from "react";   
import './Editor.css';  
        
export default class Editor extends Component{

    handleOnChange=(event)=>{
        this.props.onChange(event.target.value);
    }
    render(){
        return(
            <div className="editor-wrap w-50 d-flex flex-column justify-content-center ps-5 pe-4">
                <div className="toolbar w-100 rounded-top-3">
                    Editor
                </div>
                <textarea name="text" id="editor" className='w-100 bg-light rounded-bottom-3' value={this.props.data} onChange={this.handleOnChange}>
                    
                </textarea>
            </div>
        );
    }
}