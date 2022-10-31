import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

function Questions() {
    return (
        <Container>
            <Row className='header'>
                <Col className='name'>Website Name</Col>
            </Row>
            <Row className='sectionInfo'>
                <Col className='questioninfo'>Questions: <span>1 of 20</span></Col>
                <Col className='questionTime'>00:20</Col>
            </Row>
            <h3 className="questionHeading">what's your age lie between</h3>
            <Row className="buttonFormat">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <Button className="btn optionBtn">10-20 Years</Button>
                    </div>
                    <div className="col-3">
                        <Button className="btn optionBtn">20-30 Years</Button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <Button className="btn optionBtn">30-40 Years</Button>
                    </div>
                    <div className="col-3">
                        <Button className="btn optionBtn">40-50 Years</Button>
                    </div>
                </div>
            </Row>
            <Row className="prevNextBtn">
                <Col><button className="btn btnback">Back</button></Col>
                <Col><p className="text-end"><Link href='/result' className="btn btnnext">Next</Link></p></Col>
            </Row>
        </Container>
    );
}
export default Questions;