import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { putUpdateUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleUpdateUsersFromModal } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job)
        if (res && res.updatedAt) {
            handleUpdateUsersFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose()
            toast.success('Update user succeed!')
        }
        console.log(res)
    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name)
        }
    }, [dataUserEdit])

    // console.log(dataUserEdit)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit A User</Modal.Title>
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
                    <Button variant="primary" onClick={handleEditUser}>
                        Cofirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditUser
