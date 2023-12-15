import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs'>
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" alt="Room" />
      </div>
      <div className="col-md-7">
        <h3>{room.name}</h3>
        <b>
          <p>Max Count: {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Type: {room.type}</p>
        </b>
        <div style={{ float: 'right', marginTop: '10px' }}>
          <Link to={`/book/${room._id}`}>
            <button className='btn btn-dark' style={{ marginRight: '10px' }}>
              Book Now
            </button>
          </Link>
          <button className="btn btn-dark" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map(url => (
              <Carousel.Item key={url}>
                <img className="d-block w-100 bigimg" src={url} alt="Room" />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
