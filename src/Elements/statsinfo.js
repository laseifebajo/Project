import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export class Statsinfo extends React.Component {

    constructor(){
    super();

    this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.stat._id);

        axios.delete("http://localhost:4000/api/stats/"+ this.props.stat._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>

                {/* <h4>{this.props.stat.Name}</h4>
                <p>{this.props.stat.Goals}</p>
                <p>{this.props.stat.Assist}</p>
                <img src={this.props.stat.Picture} width="200" height="200"></img> */}


                <Card>
                    <Card.Header>{this.props.stat.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.stat.picture} width="200" height="200"></img>
                        <br></br>
                        <br></br>
                            <footer className="blockquote-footer">
                            {this.props.stat.goals}
                            </footer>
                        
                            <footer className="blockquote-footer" >
                            {this.props.stat.assists}
                             </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.stat._id } className= "btn btn-primary"> Edit </Link>
                    <Button variant="danger" onClick={this.DeleteMovie}> Delete</Button>
                </Card>
            </div>
        );
    }
}
