import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function homepage() {
    return (
        <Container>
            <Row className='header'>
                <Col className='name'>Website Name</Col>
            </Row>
            <Row className='slider'>
                <Col className='sliderText'>it does not matter how slowly you go as long as you do not stop</Col>
            </Row>
            <h3>why student counselling</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p className='btnAlgnment'><a href='question' variant="outline-primary">get started</a></p>
        </Container>
    )
}
export default homepage;