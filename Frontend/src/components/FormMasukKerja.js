import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Button from 'react-bootstrap/Button';

function formmasukkerja() {
  return (
    <div classname="formmasukkerja"> 
      <Form className="container">
        <Row classname="my-5">
          <Col>
            <Form.Label className="custom-text">Waktu Absen Masuk</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col sm={{offset: 7 }}>
            <Form.Label className="custom-text">ID Kegiatan</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <Form.Label className="custom-text">Waktu Absen Selesai</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col sm={{offset: 7 }}>
            <Form.Label className="custom-text">ID Kegiatan</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

        <Row className="my-5">
          <Col sm={{offset: 10 }}>
            <Button type="submit">Absen Keluar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default formmasukkerja;