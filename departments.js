'use strict';
const departments = [
    {
        id: '01',
        name: 'General Management',
        description: 'Responsible for the management of the company',
        created_at: Date.now(),
        updated_at: Date.now(),
        users: [
            {
                id: '01.01',
                username: 'Elliot',
            },
            {
                id: '01.02',
                username: 'Eric',
            },
            {
                id: '01.03',
                username: 'Eddy',
            },
            {
                id: '01.04',
                username: 'Edgar',
            },
            {
                id: '01.05',
                username: 'Earl',
            }
        ],
    },
    {
        id: '02',
        name: 'Marketing',
        description: 'Responsible for increasing the company market share',
        created_at: Date.now(),
        updated_at: Date.now(),
        users: [
            {
                id: '02.01',
                username: 'Dirk',
            },
            {
                id: '02.02',
                username: 'Derek',
            },
            {
                id: '02.03',
                username: 'Daniel',
            },
            {
                id: '02.04',
                username: 'David',
            },
            {
                id: '02.05',
                username: 'Donald',
            }
        ],
    },
    {
        id: '03',
        name: 'Sales',
        description: 'Responsible for product distribution',
        created_at: Date.now(),
        updated_at: Date.now(),
        users: [
            {
                id: '03.01',
                username: 'Jack',
            },
            {
                id: '03.02',
                username: 'Jason',
            },
            {
                id: '03.03',
                username: 'John',
            },
            {
                id: '03.04',
                username: 'Joshua',
            },
            {
                id: '03.05',
                username: 'Jesse',
            }
        ],
    },
    {
        id: '04',
        name: 'Human Resource',
        description: 'Responsible for staff recruitment and training',
        created_at: Date.now(),
        updated_at: Date.now(),
        users: [
            {
                id: '04.01',
                username: 'Kevin',
            },
            {
                id: '04.02',
                username: 'Kurt',
            },
            {
                id: '04.03',
                username: 'Kyle',
            },
            {
                id: '04.04',
                username: 'Kenny',
            },
            {
                id: '04.05',
                username: 'Ken',
            }
        ],
    },
    {
        id: '05',
        name: 'Purchase',
        description: 'Responsible for the timely and efficient acquisition of all goods and services needed by the organization',
        created_at: Date.now(),
        updated_at: Date.now(),
        users: [
            {
                id: '05.01',
                username: 'Travis',
            },
            {
                id: '05.02',
                username: 'Tyler',
            },
            {
                id: '05.03',
                username: 'Timmy',
            },
            {
                id: '05.04',
                username: 'Tommy',
            },
            {
                id: '05.05',
                username: 'Thomas',
            }
        ],
    }
];

module.exports = departments;