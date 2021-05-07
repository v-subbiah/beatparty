import React, {Component} from 'react';

interface InputFormUploadSongProps{
    onChange(): void;
}

class InputFormUploadSong extends Component<InputFormUploadSongProps, {}>{

    backToHomePage = () =>{
        this.props.onChange();
    }

    submitSong = () =>{
        alert("Submitted");
    }

    //single input form - song link only
    //validate button - fetch song data from spotify directly
    //store data from spotify and send to back-end using stringify

    render(){
        return (
          <div style = {{ marginLeft: '36.5rem'}}>
          <form>
            <h1>Upload A Song</h1>
            <p>Enter song name:</p>
            <input
              type="text"
            />
            <p>Enter artist name:</p>
            <input
              type="text"
            />
            <p>Enter song URL:</p>
            <input
              type="text"
            />
          </form>
          <button style = {{ marginLeft: '-3.5rem'}} onClick={this.backToHomePage}>Return to Home Page</button>
          <button onClick={this.submitSong}>Submit Song Selection</button>
          </div>
        );
    }
}
export default InputFormUploadSong;