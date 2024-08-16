import React from 'react';
import styled from 'styled-components';

const SubTaskCommentsTable = ({ comments }) => {
    return (
        comments.length ? (
            <div className="table-responsive">
                <table className="table table-hover" style={{textAlign: 'center'}}>
                    <thead className="thead-dark ">
                        <tr>
                            <Th scope="col">ردیف</Th>
                            <Th scope="col"> متن پی نوشت</Th>
                            <Th scope="col">ایجاد کننده</Th>
                            <Th scope="col">تاریخ ایجاد</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <Td>{comment.content}</Td>
                                                    <Td>{comment.creator}</Td>
                                                    <Td>{comment.Date}</Td>
                                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : 
        <NoDataParagrapg>هیچ پی نوشتی برای این گردش ثبت نشده است</NoDataParagrapg>
    );
};

const Th = styled.th`
    vertical-align: middle !important;
`;

const Td = styled.td`
    vertical-align: middle !important;
`;

const NoDataParagrapg = styled.p`
    color: #ec920b;
`;

export default SubTaskCommentsTable;