import React, {Component} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

const Main = styled.main.attrs({
  id: "Main"
})`
    font-family: 'Neucha' 
    width: 70%
    text-align: center
`;

const TTBSMain = styled.main`
  width: 70%
  height: auto 
` 
const TBSDate = styled.div`
  border-right: 3px solid black
  width: 70px
`

const TextAreaButon = styled.p.attrs({
  type: 'submit'
})`
  width: 70px
  margin-left: 600px
  padding: 15px 70px
  border: 3px solid black
  cursor: pointer
  &:hover {
    background-color: black
    color: white
  }
  `
const TextAreaStyles = {
  width: "70%",
  height: "300px",
  border: '3px solid black',
  fontSize: '1.5em',
  marginBottom: '10px',
  padding: '10px'
};





class TextArea extends Component {
  constructor(props){
    super(props)
    this.state = { Notes: '' }
    this.HandleSubmit = this.HandleSubmit.bind(this)
    this.HandleChange = this.HandleChange.bind(this)
  }
  
  HandleChange( e ) {
    this.setState({ Notes: e.target.value})
  }

  HandleSubmit() {
    console.log( 'Submitting...')
    {
      <TextToBeSaved Notes={this.state.Notes}/>
    }
  }
  render(){
      return (
        <div style={{width: '70%',marginLeft: 'auto',marginRight: 'auto'}}>
          <textarea style={TextAreaStyles}
            id='TextArea'
            onChange={this.HandleSubmit} 
          />
          <TextAreaButon onSubmit={this.Submit}>
              SAVE
          </TextAreaButon>
          <hr />
        </div>
      );
    };
}

const TextToBeSaved = (props) =>
    <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div>
        <TBSDate>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>T</span>
          <span style={{ fontSize: '.7em' }}>UE</span><hr />
          <span style={{}}>6/26</span><br />
          <span style={{ fontSize: '.8em', fontWeight: 'bold' }}>1</span>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>8</span>
        </TBSDate>
        <div>
          {props.Notes}
        </div>
      </div>
    </div>


    function App() {
      return (
        <Main>
            <h1>My Notes</h1>
            <TextArea />
            <TextToBeSaved />            
        </Main>
      );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
