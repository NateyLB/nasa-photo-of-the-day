import React, {useState} from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from "axios";


function Description(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (

        <div>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Description</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {props.description}
          </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Description