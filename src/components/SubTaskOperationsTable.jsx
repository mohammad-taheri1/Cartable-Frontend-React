import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SubTaskOperationsTable = ({ operations }) => {
  const showAlert = (content = "") => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>{content}</p>,
      footer: "داشبورد نسخه آزمایشی",
    });
  };

  return operations.length ? (
    <div className="table-responsive">
      <table className="table table-hover" style={{ textAlign: "center" }}>
        <thead className="thead-dark ">
          <tr>
            <Th scope="col">ردیف</Th>
            <Th scope="col"> نوع اقدام</Th>
            <Th scope="col">تاریخ</Th>
            <Th scope="col">اقدام</Th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <Td>{operation.Type}</Td>
              <Td>{operation.Date}</Td>
              <Td>
                <button onClick={() => showAlert(operation.Type)} className="btn btn-primary">مشاهده جزئیات</button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <NoDataParagrapg>هیچ اقدامی برای این گردش ثبت نشده است</NoDataParagrapg>
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

export default SubTaskOperationsTable;
