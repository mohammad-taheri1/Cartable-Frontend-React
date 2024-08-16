import axios from 'axios';
import { useState, useEffect } from 'react';

const useData = (url='http://localhost:3333/tasks') => {
    const [data, setData] = useState(null);

    useEffect(() => {
         axios.get(url)
         .then(response => setData(response.data))
         .catch(err => console.log(err))
    }, [url]);

    return data;
};

export default useData;