import React, {Component} from "react";
import './Previewer.css';

export default class Previewer extends Component{
    componentDidUpdate(){
        document.getElementById('preview').innerHTML = this.props.data;
    }
    render(){
        return(
            <div className="preview-wrap w-50 d-flex flex-column justify-content-center ps-4 pe-5">
                <div className="toolbar w-100 rounded-top-3 bg-light">
                    Preview
                </div>
                <div id="preview" className='w-100 rounded-bottom-3 overflow-scroll'>

                </div>
            </div>
        );
    }
}