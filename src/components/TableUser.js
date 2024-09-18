import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserServices';
import ReactPaginate from 'react-paginate'
import ModalAddNew from './ModalsAddNew';
import ModalEditUser from './ModalEditUser';


const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState([])
    const [totalPages, setTotalPages] = useState([])

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false)
    const [dataUserEdit, setDataUserEdit] = useState({})

    const handleClose = () => {
        setIsShowModalAddNew(false)
        setIsShowModalEditUser(false)
    }

    const handleUpdateUsers = (users) => {
        setListUsers([users, ...listUsers])
    }
    const handleEditUser = (user) => {
        setDataUserEdit(user)
        setIsShowModalEditUser(true)
    }

    useEffect(() => {
        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);

        if (res && res.data) {
            setTotalUsers(res.total)
            setListUsers(res.data)
            setTotalPages(res.total_pages)
        }
    }

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1)
    }

    return (
        <>
            <div className='my-3 add-new'>
                <span><h3>List User</h3></span>
                <button className='btn btn-success'
                    onClick={() => setIsShowModalAddNew(true)}>Add new User</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <tr key={`user-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    <button className='btn btn-warning'
                                        onClick={() => handleEditUser(item)}>
                                        Edit
                                    </button>
                                    <button className='btn btn-danger mx-3'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

            <ModalAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateUsers={handleUpdateUsers}
            />

            <ModalEditUser
                show={isShowModalEditUser}
                dataUserEdit={dataUserEdit}
                handleClose={handleClose}
            />
        </>
    )
}

export default TableUsers