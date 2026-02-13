import { data } from './data.js';
 
const option = {
    responsive: true,
    plugins:{
        legend:{
            position: 'top',
        },
        title:{
            display:true,
            text:'Activity of the week'
        }
    }
};

const config = {
    type: 'line',
    data: data,
    options: option
};

