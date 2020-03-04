import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import filmImage from '../Assets/demo_film.png'


class Film extends React.Component{
    constructor(){
        super();

        this.state = {
            films: [],
        }
    }

    componentWillMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then( results => {
            return results.json();
        })
        .then(data => {
            let films = data;
            

            this.setState({ films: films });
            //console.log(films);
            
        })
    }

    render(){
        const maxLength = 200;
        let filmsList = this.state.films.map((film, i) => {
                return (
                    <Col sm={3} className="mb-4" key={i}>
                        <div className="filmImage">
                            {film.image !== null ? (
                                <img src={filmImage} alt="Demo Film"/>
                            ) : <img src={film.image} alt="Film" /> }
                        </div>
                        <div className="filmName"><strong>Name:</strong> {film.title}</div>
                        <div className="filmDirector"><strong>Director:</strong> {film.director}</div>
                        <div className="filmProducer"><strong>Producer:</strong> {film.producer}</div>
                        <div className="filmRelease"><strong>Release Date:</strong> {film.release_date}</div>
                        <div className="filmDetails"><strong>Description:</strong>
                        { film.description.length > maxLength ? (
                                <div>{`${film.description.substring(0, maxLength)}`}...</div>
                            ) : <div>{film.description}</div>}
                        </div>
                    </Col>
                )
            })

        return(
           <Container>
                <Row>
                    {filmsList} 
               </Row>
           </Container> 
        );
    }

}

export default Film;