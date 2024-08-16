import React, { useState } from 'react';
import styled from 'styled-components';
import SubTaskCommentsTable from './SubTaskCommentsTable';
import SubTaskOperationsTable from './SubTaskOperationsTable';

const SubTaskComponent = ({ task, subTask, index }) => {
    const [showOperations, setShowOperations] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const toggleShowOperations = () => {
        setShowComments(false);
        setShowOperations(q => !q);
    }

    const toggleShowComments = () => {
        setShowOperations(false);
        setShowComments(q => !q);
    }

    return (
        <SubTaskRow>
            <SubTaskInfo>
                <span> ردیف : {index}</span>
                <span> تاریخ : {subTask.subTaskDate}</span>
            </SubTaskInfo>
            <SubTaskCard>
                <h6>
                    عنوان گردش : {subTask.subTaskTitle}
                </h6>
                
                <h6> تخصیص یافته به : {subTask.assigne}  </h6>
                <SubTaskButtonPanel>
                    <button className="btn btn-primary" onClick={toggleShowOperations}>
                        <span>شرح اقدامات</span>
                        <span>({subTask.operations.length} مورد)</span>    
                    </button>
                    <button className="btn btn-primary" onClick={toggleShowComments}>
                        <span>پی نوشت ها</span>
                        <span>({subTask.comments.length} مورد)</span>    
                    </button>
                </SubTaskButtonPanel>
                <TablesPanel>
                    {showOperations && <SubTaskOperationsTable operations={subTask.operations} />}
                    {showComments && <SubTaskCommentsTable comments={subTask.comments} />}
                </TablesPanel>
            </SubTaskCard>
        </SubTaskRow>
    );
};

const SubTaskRow = styled.div`
    display: flex;
    width: 95%;
    padding: 0;
    margin: 1rem;
`;

const SubTaskInfo = styled.div`
    width: 20%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-right: 2px solid rgba(0, 0, 0, 0.562);
    padding:0.5rem 1rem;
    margin: 1rem 0 1rem 1rem;
    height: fit-content;
    line-height: 1.3;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;


const SubTaskCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 1rem 1rem 0;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const SubTaskButtonPanel = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
        margin: 2rem 8px 0 8px;
        width: 50%;
        span {
            font-size: 14px;
            &:last-child {
                font-size: 12px;
                margin-right: 6px;
            }
        }
    }
`;

const TablesPanel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export default SubTaskComponent;