export const data = [
    
    {
        name:'MixMax',
        card_holder:'Syed',
        owner_id : 1,
        budget_name:'Softwate subscription',
        spent: {
            value:2000,
            currency:'SGD'
        },
        availble_to_spend: {
            value:5000,
            currency:'SGD'
        },
        card_type: 'Subscription',
        expire: '9 Feb',
        limit: 100,
        status: 'active'
        },
        {
            name:'Apple Dev Licance',
            card_holder:'Ragesh',
            owner_id : 2,
            budget_name:'Sales singapore',
            spent: {
                value:3500,
                currency:'SGD'
            },
            availble_to_spend: {
                value:10000,
                currency:'SGD'
            },
            card_type: 'Burner',
            expire: '9 Feb',
            limit: 100,
            status: 'active'
            },
    {
    name:'Motion',
    card_holder:'Shaik Basha',
    owner_id : 3,
        budget_name:'Development',
        spent: {
            value:500,
            currency:'SGD'
        },
        availble_to_spend: {
            value:500,
            currency:'SGD'
        },
        card_type: 'Burner',
        expire: '19 oct',
        limit: 1000,
        status: 'active'
        },

        {
            name:'MixMax',
            card_holder:'Prakash',
            owner_id : 4,
            budget_name:'Sales singapore',
            spent: {
                value:300,
                currency:'SGD'
            },
            availble_to_spend: {
                value:1000,
                currency:'SGD'
            },
            card_type: 'Subscription',
            expire: '5 jan',
            limit: 100,
            status: 'active'
            },
            {
                name:'Yes Bank',
                card_holder:'Ravi',
                owner_id : 4,
                budget_name:'Developer',
                spent: {
                    value:800,
                    currency:'SGD'
                },
                availble_to_spend: {
                    value:2000,
                    currency:'SGD'
                },
                card_type: 'Burner',
                expire: '29 may',
                limit: 100,
                status: 'active'
                },


                {
                    name:'ICICI',
                    card_holder:'Pavan Kalyan',
                    owner_id : 1,
                    budget_name:'Softwate subscription',
                    spent: {
                        value:2000,
                        currency:'SGD'
                    },
                    availble_to_spend: {
                        value:5000,
                        currency:'SGD'
                    },
                    card_type: 'Subscription',
                    expire: '9 Feb',
                    limit: 100,
                    status: 'active'
                    },
                    {
                        name:'Apple Dev Licance',
                        card_holder:'Prabas',
                        owner_id : 2,
                        budget_name:'Sales singapore',
                        spent: {
                            value:3500,
                            currency:'SGD'
                        },
                        availble_to_spend: {
                            value:10000,
                            currency:'SGD'
                        },
                        card_type: 'Burner',
                        expire: '9 Feb',
                        limit: 100,
                        status: 'active'
                        },
                {
                name:'Motion',
                card_holder:'Arjun',
                owner_id : 3,
                    budget_name:'Sales india',
                    spent: {
                        value:500,
                        currency:'SGD'
                    },
                    availble_to_spend: {
                        value:800,
                        currency:'SGD'
                    },
                    card_type: 'Burner',
                    expire: '19 oct',
                    limit: 1000,
                    status: 'active'
                    },
            
                    {
                        name:'HDFC',
                        card_holder:'Prakash',
                        owner_id : 4,
                        budget_name:'Sales singapore',
                        spent: {
                            value:300,
                            currency:'SGD'
                        },
                        availble_to_spend: {
                            value:1000,
                            currency:'SGD'
                        },
                        card_type: 'Subscription',
                        expire: '5 jan',
                        limit: 100,
                        status: 'active'
                        },
                        {
                            name:'Axis',
                            card_holder:'Arjun Reddy',
                            owner_id : 2,
                            budget_name:'Marketing',
                            spent: {
                                value:1800,
                                currency:'SGD'
                            },
                            availble_to_spend: {
                                value:2000,
                                currency:'SGD'
                            },
                            card_type: 'Burner',
                            expire: '29 may',
                            limit: 100,
                            status: 'active'
                            },
            
]

export const userData = data.filter(x=>x.owner_id ===1);