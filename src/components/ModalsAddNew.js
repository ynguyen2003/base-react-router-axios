import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { postCreateUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModalAddNew = (props) => {
    const { show, handleClose, handleUpdateUsers } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleSave = async () => {
        let res = await postCreateUser(name, job)
        if (res && res.id) {
            handleClose()
            setName('')
            setJob('')
            toast.success("A User Is Created Success")
            handleUpdateUsers({first_name: name, id: res.id})
            //success
        } else {
            //error
            toast.error("An error...")
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Job</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={job}
                                    onChange={(event) => setJob(event.target.value)}
                                    placeholder="Job" />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddNew
