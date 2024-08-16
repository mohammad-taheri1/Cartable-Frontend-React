const subTasks = [
    {
        SubTaskId: 3,
        taskId: 1,
        subTaskTitle: 'برون سپاری پرونده قضایی',
        subTaskDate: '1400/12/08',
        assigne: '  رحمان شیخ الاسلام',
        operations:[],
        comments: [
            {
                content: 'با توجه به ابعاد پرونده، نسبت به جذب وکیل باسابقه اقدام شود',
                creator: ' محمود الماسی',
                Date: '1400/10/09',
            }
        ],
    },
    {
        SubTaskId: 2,
        taskId: 3,
        subTaskTitle: 'تاییدیه دریافت انبار',
        subTaskDate: '1400/10/13',
        assigne: ' جلال مسعودی',
        operations:[ ],
        comments: [],
    },
    {
        SubTaskId: 2,
        taskId: 1,
        subTaskTitle: 'موافقت با درخواست تشکیل پرونده قضایی',
        subTaskDate: '1400/11/16',
        assigne: ' علی جلالی',
        operations:[
            {
                Type: 'استعلام از حراست کل',
                Date: '1400/11/18',
            },
            {
                Type: 'تشکیل جلسه هیئت مدیره',
                Date: '1400/11/20',
            },
            {
                Type: 'امضای صورتجلسه موافقت هیئت مدیره',
                Date: '1400/11/20',
            }
        ],
        comments: [],
    },
    {
        SubTaskId: 1,
        taskId: 1,
        subTaskTitle: 'ارجاع به دفتر مدیرعامل  ',
        subTaskDate: '1400/11/13',
        assigne: ' محمد طاهری',
        operations:[],
        comments: [],
    }
]

export default subTasks;