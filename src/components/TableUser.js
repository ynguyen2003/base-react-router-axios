import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserServices';
import ReactPaginate from 'react-paginate'
import ModalAddNew from './ModalsAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModalConfirm';
import _, { debounce } from 'lodash'
import './Table.scss'


const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState([])
    const [totalPages, setTotalPages] = useState([])

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)

    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false)
    const [dataUserEdit, setDataUserEdit] = useState({})

    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataUserDelete, setDataUserDelete] = useState({})

    const [sortBy, setSortBy] = useState("asc")
    const [sortField, setSortField] = useState("id")

    const [keyword, setKeyword] = useState("")

    const handleClose = () => {
        setIsShowModalAddNew(false)
        setIsShowModalEditUser(false)
        setIsShowModalDelete(false)
    }

    const handleUpdateUsers = (users) => {
        setListUsers([users, ...listUsers])
    }

    const handleUpdateUsersFromModal = (user) => {
        let cloneListUser = _.cloneDeep(listUsers)
        let index = listUsers.findIndex(item => item.id === user.id)
        cloneListUser[index].first_name = user.first_name
        setListUsers(cloneListUser)
    }

    const handleEditUser = (user) => {
        setDataUserEdit(user)
        setIsShowModalEditUser(true)
    }

    const handleDeleteUser = (user) => {
        setIsShowModalDelete(true)
        setDataUserDelete(user)
    }

    const handleDeleteUserFromModal = (user) => {
        let cloneListUser = _.cloneDeep(listUsers)
        cloneListUser = cloneListUser.filter(item => item.id !== user.id)
        setListUsers(cloneListUser)
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListUser = _.cloneDeep(listUsers)
        cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy]);
        setListUsers(cloneListUser)
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

    const handleSearch = debounce((event) => {
        let term = event.target.value;
        if (term) {
            let cloneListUser = _.cloneDeep(listUsers)
            cloneListUser = cloneListUser.filter(item => item.email.includes(term))
            setListUsers(cloneListUser)
        } else {
            getUsers(1)
        }
    }, 500)

    return (
        <>
            <div className='col-4 my-3'>
                <input
                    className='form-control'
                    placeholder='Search by email'
                    // value={keyword}
                    onChange={(event) => handleSearch(event)}
                />
            </div>
            <div className='my-3 add-new'>
                <span><h3>List User</h3></span>
                <button className='btn btn-success'
                    onClick={() => setIsShowModalAddNew(true)}>Add new User</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <div className='sort-header'>
                                <span>ID</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort("asc", "id")}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort("desc", "id")}
                                    ></i>
                                </span>
                            </div>

                        </th>
                        <th >Email</th>
                        <th >
                            <div className='sort-header'>
                                <span>Name</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort("asc", "first_name")}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort("desc", "first_name")}
                                    ></i>
                                </span>
                            </div>
                        </th>
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
                                <td>
                                    <button className='btn btn-warning'
                                        onClick={() => handleEditUser(item)}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(item)}
                                        className='btn btn-danger mx-3'
                                    >
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
                handleUpdateUsersFromModal={handleUpdateUsersFromModal}
            />

            <ModalConfirm
                handleClose={handleClose}
                show={isShowModalDelete}
                dataUserDelete={dataUserDelete}
                handleDeleteUserFromModal={handleDeleteUserFromModal}
            />
        </>
    )
}

export default TableUsers