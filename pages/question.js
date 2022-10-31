import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Questions() {
    return (
        <Container>
            <Row className='header'>
                <Col className='name'>Website Name</Col>
            </Row>
            <Row className='sectionInfo'>
                <Col className='questioninfo'>Questions: 1 of 20</Col>
                <Col className='questionTime'>00:20</Col>
            </Row>
            <h2 className="questionHeading">what's your age lie betwwen</h2>
            <Row className="buttonFormat">
                <Button>10-20 Years</Button>
                <Button>20-30 Years</Button>
            </Row>
            <Row className="buttonFormat">
                <Button>10-20 Years</Button>
                <Button>20-30 Years</Button>
            </Row>
            <Row className="prevNextBtn">
                <Button>Back</Button>
                <Button>Next</Button>
            </Row>
        </Container>
    );
}
export default Questions;