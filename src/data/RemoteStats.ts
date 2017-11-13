let remoteStats = Array<Object>();

remoteStats.push({
    id : 1,
    title : 'Automotive sector - 2016 vs 2017',
    data : [
        [
            {label: 'May 2016', value: '20000'},
            {label: 'May 2017', value: '20000'}
        ],
        [
            {label: 'Jun 2016', value: '24000'},
            {label: 'Jun 2017', value: '25000'}
        ],
        [
            {label: 'Jul 2016', value: '30000'},
            {label: 'Jul 2017', value: '20000'}
        ],
    ],
    type : '3d'
});

remoteStats.push({
    id : 2,
    title : 'Automotive sector - size by year',
    data : [
        {label: '2014', value: '20000'},
        {label: '2015', value: '22000'},
        {label: '2016', value: '17000'},
        {label: '2017', value: '41000'}
    ],
    type : '2d'
});


export default remoteStats;




