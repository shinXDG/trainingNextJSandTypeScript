import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Modal, Input, Space, DatePicker } from 'antd';
const ComponentStaff = (infor) => {
    const [name_staff, setNameStaff] = useState('')
    const [sdt_staff, setSDTStaff] = useState('')
    const [email_staff, setEmailStaff] = useState('')
    const [birthday_staff, setBirthdayStaff] = useState('')
    const [visibleEdit, setVisibleEdit] = useState(false)
    const handleVisibleEdit = () => {
        setVisibleEdit(true)
    }
    const handleOk = () => {
        setVisibleEdit(false)
    }
    const handleCancel = () => {
        setVisibleEdit(false)
    }
    function onChangeDay(date, dateString) {
        setBirthdayStaff(dateString)
    }
    return (
        <>
            <Modal title="Sửa thông tin sinh viên" visible={visibleEdit} onOk={handleOk} onCancel={handleCancel}>
                <p>Tên nhân viên</p>
                <Input placeholder="Nhập tên nhân viên" onChange={(e) => { setNameStaff(e.target.value) }} />
                <p>Số điện thoại</p><Input placeholder="Nhập số điện thoại" onChange={(e) => { setSDTStaff(e.target.value) }} />
                <p>Email</p><Input placeholder="Nhập email" onChange={(e) => { setEmailStaff(e.target.value) }} />
                <p>Ngày sinh</p>
                <Space direction="vertical">
                    <DatePicker onChange={onChangeDay} />
                </Space>
            </Modal>
            <Link href={`/staff/${encodeURIComponent(infor.id)}`}>
                <tr>
                    <td>1</td>
                    <td>Trần Văn Định</td>
                    <td>0912270312</td>
                    <td>dinh123@gmail.com</td>
                    <td>01/05/2000</td>
                    <td >
                        <Button
                            type="primary"
                            onClick={(e) => {
                                handleVisibleEdit()
                                e.preventDefault()
                            }}>Sửa thông tin
                        </Button>
                        <Button style={{ backgroundColor: '#D93D2B', marginLeft: '5px' }}
                            onClick={() => { }}>Xóa
                        </Button>
                    </td>
                </tr>
            </Link>
        </>

    )
}

export default ComponentStaff;