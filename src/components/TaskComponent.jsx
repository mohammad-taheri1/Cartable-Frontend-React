import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const TaskComponent = ({ task }) => {
    const showAlert = (content = "") => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>{content}</p>,
            footer: 'داشبورد نسخه آزمایشی',
             
          }) 
    }
    return (
        <TaskCard>
            <h4>
                عنوان نامه : 
                <TaskTitle>{task.taskTitle}</TaskTitle>
            </h4>
            <SenderSpan>مشخصات ارسال کننده :</SenderSpan>
            <div className="row">
                <div className="col-md-3">
                    <SenderSpan1> تاریخ ارسال :</SenderSpan1>
                    <SenderSpan2>{task.sendDate}</SenderSpan2>
                </div>
                <div className="col-md-2">
                    <SenderSpan1>کد پرسنلی :</SenderSpan1>
                    <SenderSpan2>{task.senderEmployeeId}</SenderSpan2>
                </div>
                <div className="col-md-5">
                    <SenderSpan1>سازمان :</SenderSpan1>
                    <SenderSpan2>{task.portalOrganization}</SenderSpan2>
                </div>
                <div className="col-md-2">
                    <SenderSpan1>سمت :</SenderSpan1>
                    <SenderSpan2>{task.jobPost}</SenderSpan2>
                </div>
            </div>
            <br />
            <p>
                متن پاراف : {task.taskComment}
                
            </p>
            <ButtonPanel>
                <button onClick={() => showAlert(task.taskTitle)} className='btn btn-sm btn-success '>{task.taskTitle}</button>
                <button onClick={() => showAlert("ارجاع/تخصیص")} className='btn btn-sm btn-success'>ارجاع/تخصیص</button>
                <button onClick={() => showAlert("افزودن پی نوشت")} className='btn btn-sm btn-success'>افزودن پی نوشت</button>
            </ButtonPanel>
        </TaskCard>
    );
};

const TaskCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 95%;
`;

const SenderSpan = styled.div`
    line-height: 3;
`;

const TaskTitle = styled.span`
    padding: 0 16px;
    color: #007bff;
`;

const SenderSpan1 = styled.span`
font-size: 14px;
    color: gray;
`;

const SenderSpan2 = styled.span`
font-size: 14px;
    padding: 0 8px;
`;

const ButtonPanel = styled.div`
    display: flex;
    flex-direction: row-reverse;
    & > button {
        margin-right: 8px;
    }
`;



export default TaskComponent;