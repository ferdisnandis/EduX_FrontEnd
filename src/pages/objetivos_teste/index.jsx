import React, { useState } from "react";
import Menu from '../../components/menu/index.jsx'
import Rodape from '../../components/rodape/index.jsx'
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'
import './index.css'

const Objetivos = () => {
    const [list1, setList1] = useState(false);
    const [list2, setList2] = useState(false);
    const [list3, setList3] = useState(false);

    function setContentList1() {
        setList1(!list1);
        setList2(false);
        setList3(false);
    }

    function setContentList2() {
        setList1(false)
        setList2(!list2);
        setList3(false)
    }

    function setContentList3() {
        setList1(false)
        setList2(false)
        setList3(!list3);
    }


    return (
        <div>
            <Menu />
            <div class="container-fluid">
                <Carousel interval={null}>
                    <Carousel.Item onClick={setContentList1} style={{ 'height': "700px" }}>
                        <img
                            className="d-block w-100"
                            src="https://www.tuiuti.edu.br/hubfs/analise%20e%20desenvolvimento%20de%20sistemas%20utp.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={setContentList2} style={{ 'height': "700px" }}>
                        <img
                            className="d-block w-100"
                            src="https://techdicas.net.br/wp-content/uploads/2018/06/foto-2000281454.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={setContentList3} style={{ 'height': "700px" }}>
                        <img
                            className="d-block w-100"
                            src="https://iestudar.com/cursos/36049e1c6514be948cb350092d7884b9.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {list1 === true ? (
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>1111111111</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>API</ListGroup.Item>
                        <ListGroup.Item>JavaSvript</ListGroup.Item>
                        <ListGroup.Item>C#</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                    </ListGroup>
                ) : null}

                {list2 === true ? (
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>222222</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>API</ListGroup.Item>
                        <ListGroup.Item>JavaSvript</ListGroup.Item>
                        <ListGroup.Item>C#</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                    </ListGroup>
                ) : null}
                {list3 === true ? (
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>33333</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>API</ListGroup.Item>
                        <ListGroup.Item>JavaSvript</ListGroup.Item>
                        <ListGroup.Item>C#</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                    </ListGroup>
                ) : null}
            </div>
            <Rodape />
        </div>
    )
}

export default Objetivos;