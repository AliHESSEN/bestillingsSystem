import React, { useEffect, useState } from 'react'; // Importerer React og hooks for tilstands- og livssyklusstyring
import Card from 'react-bootstrap/Card'; // Importerer Card-komponenten fra react-bootstrap
import Button from 'react-bootstrap/Button'; // Importerer Button-komponenten fra react-bootstrap
import './menuStyling.css'; // Importerer CSS-filen for denne komponenten
import Badge from 'react-bootstrap/Badge'; // Importerer Badge-komponenten fra react-bootstrap

const Menu = () => {
    const [data, setData] = useState([]); // Oppretter en tilstandsvariabel for å lagre matdata

    // Funksjon for å legge til et element i handlekurven
    function addToCart(id) {  
        const url = "http://localhost:5000/api/cart"; // Setter URL for API-forespørselen
        const params = {
            method: 'post', // Bruker POST-metoden
            headers: {
                'Content-Type': 'application/json' // Setter innholdstypen til JSON
            },
            body: JSON.stringify({
                food_id: id, // Inkluderer matens ID i forespørselen
                user_id: 2 // Inkluderer brukerens ID i forespørselen
            })
        };
        fetch(url, params).then((res) => { // Sender forespørselen til API-et
            return res.json(); // Konverterer responsen til JSON
        }).then((data) => {
            console.log(data); // Logger responsen fra API-et
        });
    }

    // Funksjon for å hente matdata fra API
    const fetchData = () => {
        const url = "http://localhost:5000/api/foods"; // Setter URL for API-forespørselen
        const params = {
            method: 'get', // Bruker GET-metoden
            headers: {
                'Content-Type': 'application/json' // Setter innholdstypen til JSON
            }
        };
        fetch(url, params).then((res) => { // Sender forespørselen til API-et
            return res.json(); // Konverterer responsen til JSON
        }).then((data) => {
            console.log(data); // Logger dataene fra API-et
            setData(data); // Oppdaterer tilstanden med de hentede dataene
        });
    };

    // useEffect for å hente data når komponenten monteres
    useEffect(() => {
        fetchData(); // Henter data fra API-et
    }, []); // Tom array som andre argument sikrer at effekten kjører kun en gang ved montering

    return ( 
        <div>
            <div className='menu'> 
                {data.map((f) => { // Mapper over matdataene og viser et kort for hver matvare
                    return (
                        <Card className='card' key={f.food_id}> {/* Viser kortet for hver matvare */}
                            <Card.Img variant="top" src={f.food_image} /> {/* Viser matbildet */}
                            <Badge bg="secondary">Huge Discounts</Badge> {/* Viser en badge */}
                            <Card.Body>
                                <Card.Title>{f.food_name}</Card.Title> {/* Viser navnet på maten */}
                                <Card.Text>
                                    Price {f.food_price}/- {/* Viser prisen på maten */}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { addToCart(f.food_id) }}>
                                    Add to cart
                                </Button> {/* Knapp for å legge til i handlekurven */}
                            </Card.Body>
                            <Card.Text>
                                <div className="ratings">
                                    {f.ratings}
                                    <i className="fa fa-star rating-color"></i>
                                </div> {/* Viser vurderingene */}
                            </Card.Text>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu; // Eksporterer Menu-komponenten som standard eksport
