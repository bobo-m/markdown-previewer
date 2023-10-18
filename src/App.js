import React, {Component} from 'react';
import { marked } from 'marked';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

marked.use({
  breaks:true
});

class App extends Component{
  state={
    text:`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Coding](https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1697634190~exp=1697634790~hmac=1f6ba5710e2d39d7011b8f024cb25750fccdf0709cc12cd533aa39161e69051a)
`,
    markdown:''
  }

  componentDidMount(){
    const text = this.state.text;
    const markdown = marked(text);
    this.setState({
      markdown:markdown
    });
  }

  handleChange=(data)=>{
    const markdown = marked(data);
    this.setState({
      text:data,
      markdown:markdown
    });
  };
  render(){
    return(
      <div id="container" className="h-100 w-100 m-0 p-0">
        <div className="title w-100 fs-3 m-0 p-0">
          Markdown Previewer
    </  div>
        <div className="wrapper vw-100 d-flex m-0 p-0 align-items-center justify-content-center">
          <Editor data={this.state.text} onChange={this.handleChange}/>
          <Previewer data={this.state.markdown}/>
        </div>
      </div>
    );
  }
}
export default App;