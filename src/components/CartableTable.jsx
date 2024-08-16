import React from 'react';
import styled from 'styled-components';
// import useData from '../hooks/useData';
import { Link } from 'react-router-dom';
import tasks from "../data/tasks"

const CartableTable = () => {

    // const data = useData()
    const data = tasks;

    return ( data ? (
        <Cartable>
            <div className="table-responsive">
            <table className="table table-hover" style={{textAlign: 'center'}}>
                <thead className="thead-dark ">
                    <tr>
                        <Th scope="col">ردیف</Th>
                        <Th scope="col">عنوان نامه</Th>
                        <Th scope="col"> سازمان</Th>
                        <Th scope="col">سمت</Th>
                        <Th scope="col">کد پرسنلی</Th>
                        <Th scope="col">تاریخ ارسال </Th>
                        <Th scope="col">پاراف</Th>
                        <Th scope="col">عملیات</Th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((task, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <Td>{task.taskTitle}</Td>
                                                <Td>{task.portalOrganization}</Td>
                                                <Td>{task.jobPost}</Td>
                                                <Td>{task.senderEmployeeId}</Td>
                                                <Td>{task.sendDate}</Td>
                                                <Td>{task.taskComment}</Td>
                                                <Td><Link to={`task/${task.taskId}`} className="btn btn-primary">اقدام</Link></Td>
                                            </tr>
                    ))}
                </tbody>
            </table>
            </div>

        </Cartable>
        ) : 
        <p>Loading...</p>
    );
};

const Cartable = styled.div`
    font-size: 14px;
`;

const Th = styled.th`
    vertical-align: middle !important;
`;

const Td = styled.td`
    vertical-align: middle !important;
`;

export default CartableTable;