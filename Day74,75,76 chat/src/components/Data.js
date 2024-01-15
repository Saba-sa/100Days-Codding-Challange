const Data=[
    {
        id:1,
        name:'Saba Ali',
        email: "sabaly3201@gmail.com",
        phone: '03552734234',
        relation: 'sister',
        timeOfActive:"MON Jan 03 2024",
        messages:[
            {
                id:1,
                text:"hello how are you?",
                timeOfSending:2002,
                replies:[
                    {
                        id:1,
                        text:"hi",
                        timeOfSending:'Fri Jan 05 2023',
                    
                    },  {
                        id:2,
                        text:"hello how are you?",
                        timeOfSending:'Fri Jan 05 2023',
                    }      
                ]
            },
            {
                id:2,
                text:"What are you doing?",
                timeOfSending:'Thus Jan 04 2024',
                replies:[]
            },
            {
                id:3,
                text:"say someting",
                timeOfSending:'Fri Jan 05 2024',
                replies:[]

            },

        ]
    },
    {
        id:2,
        name:'Ayesha Khan',
        timeOfActive:'Fri Jan 05 2022',
        messages:[
            {
                id:1,
                text:"AOA where are you?",
                timeOfSending:'Sat Jan 06 2024',
                replies:[]

            },
            {
                id:2,
                text:"hello how are you",
                timeOfSending:'Fri Jan 03 2023',
                replies:[]

            },
            {
                id:3,
                text:"Hey..",
                timeOfSending:'Sun Jan 05 2024',
                replies:[]

            },
        ]
    },
    {
        id:3,
        name:'Alina Khan',
        timeOfActive:'Sun Dec 05 2023',
        messages:[
            {
                id:1,
                text:"AOA where are you?",
                timeOfSending:'Sat Jan 06 2024',
                replies:[]

            },
            {
                id:2,
                text:"hello how are you",
                timeOfSending:'Fri Jan 03 2023',
                replies:[]

            },
            {
                id:3,
                text:"Bye..",
                timeOfSending:'Sun Jan 05 2024',
                replies:[]

            },
        ]
    }
]

export default Data;