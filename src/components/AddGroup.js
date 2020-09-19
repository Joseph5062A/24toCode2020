import React, { useState } from 'react';
import '../style/AddGroup.scss';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Col } from 'react-bootstrap';
import { TwitterPicker  } from 'react-color';
import DataGrid, {
    Column,
    Selection,
    FilterRow,
    Paging
  } from 'devextreme-react/data-grid';
  import { sales } from './data';
  import '../style/Grid.scss';

const AddGroup = props => {
    const [visible, setVisible] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [color, setColor] = useState('#fff');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [machines, setMachines] = useState([]);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        setShowColorPicker(false);
    };

    const onNameChange = event => {
        setName(event.target.value);
      }
    
    const onDescChange = event => {
        setDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const onSelectionChanged = ({ selectedRowsData }) => {
        const data = selectedRowsData;
        let machs = [];
        for (var i=0; i < data.length; i++) {
          machs.push({
            macAddress: data[i].eth_src,
            ipv4: data[i].ip_src,
            message_length: data[i].data_len,
            packet_size: data[i].data_stream
          });
        }
        setMachines(machs);
    }

    return (
        <div className="AddGroup">
            <div className="top">
                <span>
                <h1 className="title">Add a Group</h1>
                <button onClick={() => {setVisible(!visible);
                setTimeout(function(){ window.scrollBy(0, 600) }, 250);
                }}>{!visible ? <FontAwesomeIcon icon={faPlusCircle} /> : null}</button>
                </span>
            </div>
            <hr/>
            <CSSTransitionGroup transitionName="example">
            	{ visible ? <div className='panel'> 
                <Form className="addForm" onSubmit={handleSubmit}>
                    <Form.Row className="row">
                        <Col xs={3}>
                        <Form.Group controlId="formGridName" className="FormElelment">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={onNameChange.bind(this)}/>
                        </Form.Group>
                        </Col>
                        <Col xs={1}>
                        <Form.Group controlId="formGridColor" className="FormElelment">
                            <Form.Label>Color</Form.Label>
                            <Button style={{background: color}} variant="outline-dark" onClick={() => setShowColorPicker(!showColorPicker)}><FontAwesomeIcon icon={faPalette}/></Button>
                            {showColorPicker ? <TwitterPicker 
                            color={ color }
                            onChangeComplete={ handleChangeComplete }
                            className="picker"
                             /> : null}
                        </Form.Group>
                        </Col>
                        <Col xs={8}>
                        <Form.Group controlId="formGridDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={desc} onChange={onDescChange.bind(this)}/>
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group className="grid">
                        <Form.Label><h4>Select Machines to Display</h4></Form.Label>
                        <div>
                            <DataGrid
                            dataSource={sales}
                            showBorders={true}
                            onSelectionChanged={onSelectionChanged}
                            >
                            <Selection
                                mode="multiple"
                                selectAllMode='allPages'
                                showCheckBoxesMode='always'
                            />
                            <FilterRow visible={true} />
                            <Paging defaultPageSize={10} />

                            <Column dataField="eth_src" caption="MAC Address"/>
                            <Column dataField="ip_src" caption="IPV4"/>
                            <Column dataField="data_len" caption="Message Length"/>
                            <Column dataField="data_stream" caption="Packet Size"/>
                            </DataGrid>
                        </div>
                    </Form.Group>
                    <div className="lowerButtons">
                        <Button variant="outline-dark" className="cancel" onClick={() => {setVisible(!visible)}}><h4>Cancel</h4></Button>
                        <Button variant="outline-success" type="submit" onClick={() => {
                            props.addGroup(name, color, desc, machines);
                            setVisible(!visible);
                            setName("");
                            setDesc("");
                            setColor("#FFF")
                            setMachines([]);
                        }}><h2>Apply</h2></Button>
                    </div>
                    </Form>
                </div> : null }
            </CSSTransitionGroup>
        </div>
    )
}

export default AddGroup;