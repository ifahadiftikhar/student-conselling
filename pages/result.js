import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

function Result() {
    return (
        <Container>
            <Row className='header'>
                <Col className='name'>Website Name</Col>
            </Row>
            <h2 className="resultHeading1">from our observation</h2>
            <p><Button className="selectedSbj">science subject</Button></p>
            <h2 className="resultHeading2">will be greate for your career</h2>
            <p><Link href="/" className="btn goBack">go back</Link></p>
        </Container>
    );
}
export default Result;