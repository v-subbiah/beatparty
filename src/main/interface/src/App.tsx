import React, {Component} from 'react';

//import TitleAndButtons from "./TitleAndButtons";
import Song from './Song';
import InputFormUploadSong from "./InputFormUploadSong";

import "./App.css";

interface AppState{
    //songList: Song[];

    songList: [];

    uploadButtonPressed: boolean;
}

class App extends Component<{}, AppState>{

    //create constructor here
    constructor(props: any){
        super(props);
        this.state = {
            songList: [],
            uploadButtonPressed: false,
        }
    }

    //function to get new data from Back-End
    componentDidMount(){
        //populate songList with data from Back-End.
        this.getSongData();
    }

    getSongData = async () => {
       // /*
        let extendPath = 'http://localhost:8080/getSongs/2';
        try {
            let response = await fetch(extendPath);
            if (!response.ok) {
                alert("Could not receive song data");
                return;
            }
            let allSongs = await response.json();
            this.setState({
                songList: allSongs,
            })
            console.log(this.state.songList);
        } catch (e) {
            alert("There was an error contacting the server.");
            console.log(e);
        }
        //*/
    };

    displayPopUp(clicked: boolean){
        alert("pop up here");
    }

    getShuffledSongs = async () =>{
        //alert("Shuffled");
        ///*
        let extendPath = 'http://localhost:8080/getShuffledSongs/2';
        try {
            let response = await fetch(extendPath);
            if (!response.ok) {
                alert("Could not receive song data");
                return;
            }
            let allSongs = await response.json();
            this.setState({
                songList: allSongs,
            })
            console.log(this.state.songList);
        } catch (e) {
            alert("There was an error contacting the server.");
            console.log(e);
        }
        //*/
    }

    getTopSongs = async () =>{
        //alert("Top");
        let extendPath = 'http://localhost:8080/getSongs/20';
        try {
            let response = await fetch(extendPath);
            if (!response.ok) {
                alert("Could not receive song data");
                return;
            }
            let allSongs = await response.json();
            this.setState({
                songList: allSongs,
            })
            console.log(this.state.songList);
        } catch (e) {
            alert("There was an error contacting the server.");
            console.log(e);
        }
    }

    uploadSong = () =>{
        //alert("Uploading");
        //this.props.uploadButtonClicked(true);
        this.setState({
            uploadButtonPressed: true,
        })
    }

    notUploadingAnymore = () =>{
        this.setState({
            uploadButtonPressed: false,
        });
    }

    render() {
        if (this.state.uploadButtonPressed){
            return(
                <InputFormUploadSong onChange={this.notUploadingAnymore}/>
            );
        }
        else{
            const songsToRender = [];
            for (const currentSong of this.state.songList){
                songsToRender.push(<Song   id={currentSong['id']}
                                           artist={currentSong['artistName']}
                                           date={currentSong['uploadDate']}
                                           name={currentSong['name']}
                                           upvotes={currentSong['votes']}
                                           url={currentSong['songLink']}
                                   />);

            }
            console.log(songsToRender);
            return (
              <div className="App" >
                  <h1 style={{ marginLeft: '40.5rem' }} >
                  BeatParty!
                  </h1>
                  <div style = {{ marginLeft: '36.5rem'}}>
                      <button onClick={this.getShuffledSongs}>Shuffle</button>
                      <button onClick={this.getTopSongs}>See Top Songs</button>
                      <button onClick={this.uploadSong}>Upload a Song</button>
                  </div>
                    <ol style = {{}}>

                    {songsToRender.map(song => (
                        <li className="song-list">
                          {song}
                        </li>
                      ))}

                    </ol>
              </div>
            );
        }
    }
}
export default App;
