import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import SubTaskComponent from '../components/SubTaskComponent';
import TaskComponent from '../components/TaskComponent';
import tasks from "../data/tasks"
import subTasks from "../data/subTasks"

const Task = () => {
    const param = useParams();

    const task = tasks.filter(q => q.taskId === parseInt(param.id));

    const filteredSubTasks = subTasks
        .filter(q => q.taskId === parseInt(param.id))
        .sort((a,b) => b.SubTaskId - a.SubTaskId );

    const data = {
        task,
        filteredSubTasks
    }

    return (
        <div className='col-md-10 p-0'>
            <div className='tasks-content'>
                <div className='tasks-titlebar'>
                    <h4>
                        مشاهده گردش کار نامه وارده
                    </h4>
                    <h3>
                        <Link to="/" className="btn btn-primary">بازگشت به صفحه کارتابل</Link>
                    </h3>
                </div>
                {
                    (data && data.task) ? (
                        <TaskComponent task={data.task[0]}/>
                    ) : <h3>Loading...</h3>
                }  

                <Divider>
                    <h6>گردش ها به ترتیب جدیدترین</h6>
                    <hr />
                </Divider>
                {
                    (data && data.filteredSubTasks && data.filteredSubTasks.length) ? (
                        data.filteredSubTasks.map((subTask, index) => 
                        <SubTaskComponent 
                            key={subTask.SubTaskId} 
                            task={data.task[0]} 
                            subTask={subTask} 
                            index={index+1}
                        />)
                    ) : 
                    (data && data.filteredSubTasks) ? (
                        <EmptyTaskCard>
                           <h5> هیچ گردش کاری برای این نامه ثبت نشده است</h5>
                        </EmptyTaskCard>
                    ) :
                    (<h3>Loading...</h3>)
                }
            </div>
        </div>
    );
};

const Divider = styled.div`
    color: #ec920b;
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.2rem ;
`;

const EmptyTaskCard = styled.div`
    padding: 1rem;
    color: #ec920b;
`;

export default Task;