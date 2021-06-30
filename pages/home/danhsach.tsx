import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactDOM from 'react-dom';
import Router from 'next/router'
import { Button, Modal, Input, Space, DatePicker } from 'antd';
import ComponentStaff from '../staff/ComponentStaff'

interface Staff {
    name: string,
    sdt: number,
    email: string,
    birthday: any,
}

export default function DanhSach() {
    const[name_staff,setNameStaff]= useState('')
    const[sdt_staff,setSDTStaff]= useState('')
    const[email_staff,setEmailStaff]= useState('')
    const[birthday_staff,setBirthdayStaff]= useState('')

    //similar to componentDidMounth and componentDidUpdate
    useEffect(() => {
        //using API 

    })
    const [staff, setStaff] = useState({})
    const [visibleAdd, setVisibleAdd] = useState(false)
    const handleVisibleAdd = () => {
        setVisibleAdd(true)
    }
    const handleOk = () => {
        setVisibleAdd(false)
    }
    const handleCancel = () => {
        setVisibleAdd(false)
    }
    function onChangeDay(date, dateString) {
        setBirthdayStaff(dateString)
    }
    return (
        <div>

            <Modal title="Thêm nhân viên" visible={visibleAdd} onOk={handleOk} onCancel={handleCancel}>
            <p>Tên nhân viên</p>
                <Input placeholder="Nhập tên nhân viên"  onChange={(e) => { setNameStaff(e.target.value) }}/>
                <p>Số điện thoại</p><Input placeholder="Nhập số điện thoại" onChange={(e) => { setSDTStaff(e.target.value) }} />
                <p>Email</p><Input placeholder="Nhập email" onChange={(e) => { setEmailStaff(e.target.value) }} />
                <p>Ngày sinh</p>
                <Space direction="vertical">
                    <DatePicker onChange={onChangeDay} />
                </Space>
            </Modal>
            <h2 style={{textAlign:"center"}}>Danh sách nhân viên</h2>
            <Button type="primary" onClick={handleVisibleAdd}>Thêm nhân viên</Button>
            <div style={{ display: "flex" }}>
                <table style={{ margin: "auto" }} border="1" width="1000px">
                    <thead>
                        <tr>
                            <th>Mã nhân viên</th>
                            <th>Tên nhân viên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Ngày sinh</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ComponentStaff />
                        <ComponentStaff />
                    </tbody>
                </table>
            </div>

        </div>
    )
}