import React from 'react';
import axios from 'axios';

export class Info extends React.Component {


    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGoals = this.onChangeGoals.bind(this);
        this.onChangeAssists = this.onChangeAssists.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);

        this.state = {
            Name: '',
            Goals: '',
            Assists: '',
            Picture: '',
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeGoals(e) {
        this.setState({
            Goals: e.target.value
        });
    }

    onChangeAssists(e){
        this.setState({
            Assists: e.target.value
        });
    }

    onChangePicture(e){
        this.setState({
            Picture: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Player Name: " + this.state.Name + " " + this.state.Name +"scored" + this.state.Goals + "goals in his career" + " " +  this.state.Name +"completed" + this.state.Assists + "assists in his career" +this.state.Picture );

        const newStat = {
            name: this.state.Name,
            goals: this.state.Goals,
            assists: this.state.Assists,
            picture: this.state.Picture
        }
        axios.post('http://localhost:4000/api/stats',newStat)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Player Name</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Goals Scored by this player </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Goals}
                            onChange={this.onChangeGoals}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Assists Completed by this player </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Assists}
                            onChange={this.onChangeAssists}></input>
                    </div>

                    <div className="form-group">
                        <label>Insert Url To Picture Of Your Player </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Picture}
                            onChange={this.onChangePicture}>

                            </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Player'
                            className='btn btn-primary'></input>

                    </div>

                </form>

            </div>
        );
    }
}
