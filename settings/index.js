
const standardBenefits =    [{
    icon : "Space", 
    primary : "space"
    },
    {
    icon : "Furniture",
    primary : "furniture"
    },
    {
    icon : "Electricity", 
    primary : "electricity"
    },
    {
    icon : "Catering", 
    primary : "catering"
    },
    {
    icon : "Ids",
    primary : "ids"
    },
    {
    icon : "Catalogue",
    primary : "profile"
    }]

const premiumBenefits =    [{
    icon : "Space", 
    primary : "space2"
    },
    {
    icon : "Furniture",
    primary : "furniture2"
    },
    {
    icon : "Electricity", 
    primary : "electricity"
    },
    {
    icon : "Catering", 
    primary : "catering"
    },
    {
    icon : "Ids",
    primary : "ids"
    },
    {
    icon : "Catalogue",
    primary : "profile"
}]


 const stageBenefits =   [
    {
        icon : "Done", 
        primary : "screen"
    },
    {
        icon : "Done", 
        primary : "presentation"
    },
    {
        icon : "Done", 
        primary : "stage"
    },
    {
        icon : "Done", 
        primary : "decoration"
    },

    {
        icon : "Done", 
        primary : "video"
    },

]


const openStageBenefits =   [
    {
        icon : "Done", 
        primary : "screen"
    },
    {
        icon : "Done", 
        primary : "presentation"
    },
    {
        icon : "Done", 
        primary : "stage"
    },


    {
        icon : "Done", 
        primary : "video"
    },
]


const bookingmapShared = {

    height : 400,
    steps : [
        "choose_booth",
        "confirm",
        "pay",
        "access"
    ],
    disabledTicketIds : [],
    allowedGroupIds : [385,386,367,388,389],
    boothStyleMapping: {
        414: "light",
        415: "standard",
        416: "hot",
        417: "superHot",
        418: "ultra",
        419: "grand",
        420: "stage",
        425: "stage", //stage B
        426: "stage", //stage D

        422: "networking",
        424: "networking", //mini networking
        421: "boothSold", //last minute / buffer
        423: "boothSold", //test
    
    },
    benefits: {
        415: standardBenefits,
        416: standardBenefits,
        417: standardBenefits,
        418: standardBenefits,
        419: premiumBenefits,
        420: stageBenefits,
        425: openStageBenefits,
        426: openStageBenefits
    },
    api : "https://stoiska.targiehandlu.pl/preorder",
    ecommerce: "ecommerce",
    show_recent_purchases: 1,

}


const settings =  {
    
  
    system : {
        ogTemplate: "",
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://api.eventjuicer.com/proxy?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26pretty%26key%3DSHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm',    
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl",
        proxy: "",
        // api : "http://eventjuicer-api.test/v1/public/hosts/targiehandlu.pl",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },


   
   
    exhibitor_registration: {

        wrapperProps: {
            label : "ecommerce.regform.title",
            secondaryLabel: null,
            dense: false,
            first: true
        },

        path_to_regform: "exhibitor_registration.regform",

        regform: {
            wrapperProps: {},
            legend: "exhibitor.regform.legend",
            baseLabel: "exhibitor",
            fields : [
            {name: "email", required: true},
            {name: "fname", required: true},
            {name: "lname", required: true},
            {name: "phone", required: true},

            {name: "cname", required: true},
            {name: "nip", required: true},

            {name: "accept", required: true, type: "confirm"}
            ],
            start : [],
            email_template : "pl-exhibitor-registration",
            right: null,
        }
        
    },

    
    schedule: {
        times : {

            // 15+10+10 = 35!!!
            // 
            // '10:25': 'presentation',
            '10:40': 'presentation',
            '11:15': 'presentation',
            '11:50': 'presentation',
            '12:15': 'break_25',
            '12:40': 'presentation',
            '13:15': 'presentation',
            '13:40': 'break_25',
            '14:05': 'presentation',
            '14:40': 'presentation',
            '15:05': 'break_25',
            '15:30': 'presentation',
            '16:05': 'presentation'
          }, 
          venues : {
            A: { company_id: 0 },
            B: { company_id: 0 },
            C: { company_id: 0 },
            D: { company_id: 0 },
            // E: { company_id: 0 },
            // F: { company_id: 0 },
          },
        //   minimized : ["B", "E"],
          venueStyle : "red",
    },



    heroExpo : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/q_auto,f_auto/v1534454501/video_presenter_blak.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto/v1534542530/poster_presenter_blak.jpg",
        overlay : "black",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description",
        showable: ["date", "hours", "location"],
        orientation : "v",
        primaryStyle: "heroPrimary",
        secondaryStyle: "heroSecondary",
        iconStyle: "heroIcon"

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto,q_auto//v1579000835/visit.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto,q_auto/v1579000835/exhibit.jpg',
          label: 'common.exhibitor',
          width: '50%',
          target : "/exhibit"
        },
        ]
    },

    ecommerce: {
        sort: "end", 
        show_start: true,
        show_end: true
    },

    bookingmap_top30 : {
        ...bookingmapShared,
        wrapperProps: {
            label: "exhibitors.map.comeback.title",
            secondaryLabel: "exhibitors.map.comeback.description"
        },
        disabledTicketIds : [
            2484, 2485, 2486, 2483, 2481, 2482, //STD
            2489, 2490, 2491, 2494, 2493, 2492, 2488, //HOT
            2498, 2499, 2495, 2502, 2501, 2500, 2496, //SH
            2507, 2508, 2504, 2505, 2509, 2503, //ULTRA
            2520, 2521, 2517, 2516, 2518, 2533, //GRAND
            2512, //MINI N
            2539, 2540, 2541, //STAGE
        ],
    },

    bookingmap : {
        ...bookingmapShared,
        wrapperProps: {
            label: "exhibitors.map.title",
            secondaryLabel: "exhibitors.map.opensales"
        },
        disabledTicketIds : [
            2563, 2522, //STD
            2487, 2525, 2530, //HOT
            2497, 2524, 2527, //SH
            2506, 2523, 2531, //ULTRA
            2519, 2526, 2529, //GRAND
            2534, //MINI N
            2510, 2513, 2538, //STAGE
        ],
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2022-11-21", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2023-01-23", name: "qualification", icon:  "Assessment" },
            {date: "2023-01-25", name: "public-voting", icon:  "Public" },
            // {date: "2020-10-26", name: "jury-voting", icon:  "HowToVote" },
            {date: "2023-02-10", name: "results", icon:  "Mic", active: false },
            {date: "2023-02-17", name: "formal", icon:  "Settings", active: false }

        ]

    },



    workshops: {

        apply: {
            disabled: 0
        },

        schedule: {

            wrapperProps: {
                label: "workshops.schedule.title",
                secondaryLabel: "workshops.schedule.description"
            },
            times : {
    
                // 15+10+10 = 35!!!
                // 
                // '10:25': 'presentation',
                '11:15': 'presentation',
                '12:00': 'presentation',
                '12:45': 'presentation',
                '13:30': 'presentation',
                '14:15': 'presentation',
                '15:00': 'presentation',
                '15:45': 'presentation'
              }, 
              venues : {
                W1: { company_id: 0 },
                W2: { company_id: 0 },
                W3: { company_id: 0 },
              },
            //   minimized : ["B", "E"],
              venueStyle : "red",
        },
    

       registration: {
            wrapperProps: {
                label: "workshops.form.title",
                // secondaryLabel: ""
            },
            
            baseLabel: "workshops",
            fields: [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "phone", required: true},
                {name: "presenter", required: true},  
                // {name: "bio", required: true},  
                // {name: "profile_linkedin", required: true},  
                {name: "presentation_title", required: false},
                // {name: "presentation_description", required: true}
            ],
            
            start: [
                'presenter',
                "profile_linkedin",
                'presentation_title', 


            ],

            ticket_id : 2328,
            email_template : "pl-workshops-application",
       },


       update: {
            wrapperProps: {
            label: "workshops.update.title",
            // secondaryLabel: ""
            },
            legend: "",
            baseLabel: "workshops",
            fields: [
            {name: "presentation_title", required: true},
            {name: "presentation_description", required: true, long: true },
            {name: "presenter", required: true},
            {name: "position", required: true},
            {name: "logotype", required: true},
            {name: "avatar", required: true},
            {name: "bio", long: true, required: true},

            ],

            start: [],

       },


       faq: {
            baseLabel: "workshops.faq",
            items: [
                { label: 'cost' },
                { label: 'offering' },
                { label: 'participation' },
                { label: 'toolset' }
            ]
        },

        faq_participant: {
            baseLabel: "workshops.participants.faq",
            items: [
                { label: 'formula' },
                { label: 'application' },
                { label: 'cost' },
                { label: 'vip' }
            ]
        },

       photostream : {

        wrapperProps: {
            label : "workshops.gallery.title"
        },

        overlay: "red",

        cols: 12,

        items : [
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1668147180/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_0552.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1669103280/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_NET-0384.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1668147190/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_0541.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1668147181/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_0892.jpg", cols: 3},
          
        ]
        },

        benefits : {

            label: "workshops.steps.title",
            baseLabel: "workshops.steps",

            items: [

                {
                    icon : "FaSearch",
                    label :  'costam1',
                },
            
                {
                    icon : "FaPoll",
                    label : 'costam2'
                },
            
                {
                    icon : "FaTrophy",
                    label : 'costam3'
                }
    
            ]
        }, 

    },



    speakers : {

        wrapperProps:{
            label: "presenters.list_featured",
            secondaryLabel: "presenters.list_description"
        },
        og_template: "template_teh23_spkr",




        callforpapers: {

            wrapperProps: {
                label: "presenters.form.title",
                // secondaryLabel: ""
            },
            
            baseLabel: "presenters",
            fields: [
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "phone", required: true},
                {name: "presenter", required: true},  
                {name: "bio", required: true},  
                {name: "profile_linkedin", required: true},  
                {
                  name: "presentation_category", 
                  required: true,
                  options : "categories"
                },
                {name: "presentation_title", required: false},
                // {name: "presentation_description", required: true}
            ],
            
              start: [
                'presenter',
                "profile_linkedin",
                 'presentation_title', 
                // 'presentation_description',
                'presentation_category',

            ],

            ticket_id : 2324,
            email_template : "pl-presenters-application",

        },

        callforpapers_update: {

            wrapperProps: {
                label: "presenters.update.title",
                // secondaryLabel: ""
            },
            legend: "",
            baseLabel: "presenters",
            fields: [
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true, long: true },
                {name: "presenter", required: true},
                {name: "position", required: true},
                {name: "logotype", required: true},
                {name: "avatar", required: true},
                {name: "bio", long: true, required: true},
               
            ],
            
              start: [],

    
        },


        cfpfaq: {
            baseLabel: "cfp.faq",
            items: [
                {label: 'exhibitor-status'},
                {label: 'fee',},
                { label: 'submission-limits' },
                { label: 'co-presenter' },
                { label: 'ranking' },
                { label: 'fair-play' },
                {label: 'stage',},
            ]
        },

        benefits : {

            label: "presenters.steps.title",
            baseLabel: "presenters.steps",

            items: [

                {
                    icon : "FaSearch",
                    label :  'start',
                },
            
                {
                    icon : "FaPoll",
                    label : 'mentoring'
                },
            
                {
                    icon : "FaTrophy",
                    label : 'presentation'
                }
    
            ]
        }, 
    },




   
    




    vips : {

        register: {

            label: "vips.register.description",

            allowed: {

                TEH23_Media: {},
                marketerplus: {
                    company: "marketerpluspl",
                    customLabel:  "vips.register.partners.marketerplus"
                },
             
            },


            data : { important: 1 },
            template : "pl-vip-registration",
            email_template : "pl-vip-registration",
            wrapperProps: {
                label : "vips.register.title",
                secondaryLabel: "vips.register.description",
                first : true
            },
            fields : [
                // {name: "referral", required: true},
                {name: "email", required: true},
                {name: "fname", required: true},
                {name: "lname", required: true},
                {name: "cname2", required: true},
                {name: "position", required: true},
                {name: "phone", required: true}
              ],
            start : [],
            ticket_id : 2327,
            right : "/lanyard.jpg",
           
        },

        benefits : {

            label: "vips.benefits.title",
     //       secondaryLabel: "vips.benefits.description",
            baseLabel: "vips.benefits",
            typography: "subtitle",
            dense: true,
            
            items: [

                {   
                    icon : "FaFastForward",
                    label : 'fastentry'
                },
            
                {   
                    icon : "FaChair",
                    label : 'seats'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'vipzone'
                }
            ]
        },


    },

    

    ui : {

        menuItems : [
           
            // {
            //     name: 'virtual',
            //     items: [
            //       {name: 'register', to: '/virtual'},
            //       {name: 'schedule', to: '/schedule'},
            //       {name: 'speakers', to: '/speakers'},
            //     ]
            // },


            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                // {name: 'vote', to: '/vote'},
                // {name: 'schedule', to: '/schedule'},
                // {name: 'workshops', to: '/workshops'},
                {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'offers', to: '/offers'}
              ]
            },
            {
              name: 'exhibitors',
              items: [
                {name: 'exhibit', to: '/exhibit'},
                // {name: 'sample-visitors', to: '/sample-visitors'},
                {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'premium-services', to: '/premium'},
                // {name: 'faq', to: '/faq'},
              ]
            },

            {
                name: 'general',
                items: [
                  {name: 'home', to: '/'},
                ]
            }
  
        ]
    },

    premium : {

        ticketgroups : [331]

    },


    exhibitors : {
        faq: {

            wrapperProps: {
                label: "exhibitors.faq.name"
            },
            baseLabel: "exhibitors.faq.become",
            showTitle: false,
            items: [
              {
                label: 'included_services',
                important: true,
                buttons: [],
              },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'additional_paid_services',
              },
              { label: 'payment' },
              { label: 'onboarding' },
              { label: 'resignation' },
              { label: 'promo_benefits' },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'public_profile',
              },
            ]
        },
        ogTemplate: "template_teh19_exhibitor_",
        benefits : {
            baseLabel: "exhibitors.benefits",
            items: [
                {
                    icon : "FaHandshake",
                    label :  'outreach',
                },
                {   
                    icon : "FaComments",
                    label : 'feedback'
                },
                {   
                    icon : "FaSmile",
                    label : 'organizer'
                },
                {   
                    icon : "FaPiggyBank",
                    label : 'all_inclusive'
                },
                {
                    icon : "FaLink",
                    label : 'meet_clients'
                },
                {
                    icon : "FaLightbulb",
                    label : 'inspiration'
                }
            ]
        }
    },

    visitor : {

        register: {

            wrapperProps: {
                label : "visitors.register",
            },
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "nip", required: false},
              {name: "phone", required: true}
            ],
            start : ['email', 'fname'],
            ticket_id : 2535,
            email_template : "pl-visitors-registration",
            right : "/lanyard.jpg",

        },

        benefits : {

            baseLabel: "visitors.benefits",

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
        ]
        },
      
    },
    
    common : {

        organizer_name : 'Infoguru Sp. z o.o.',
        organizer_address : 'POLAND, Poznań, Truskawiecka 13',
        organizer_regno : 'VAT ID 7811883511',
        event_name : '24. Targi eHandlu',
        event_name_short: "TeH",
        event_location : 'EXPO XXI Warszawa, Prądzyńskiego 12/14',
        event_date : '27.10.2023',
        event_hours : '10:00-17:00',

    },


    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Michalak',
                position : 'Relationship Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg',
                phone: '+48 721 945 134',
                email: 'karolina.michalak@targiehandlu.pl',
                chatlio : true
            },
          
          ]
    },

   
    footer : {
        iconStyle : "black",
        primaryStyle: null,
        secondaryStyle: null,
      //  iconStyle: "heroIcon",
        links : [
            {label: "exhibitors.agreement.title", href : "/legal-2023-04-18"},
            {label: "visitors.legal.title", href : "/legal/visitors"},
            {label: "visitors.legal-gdpr.title", href : "/legal/visitors-data"},
        ]
    },

    appbar : {
        profile: ["logout"],
        links: [
            // {label: "common.menu.visitors.visit", color: "primary",  href: "/visit", as: "/visit", variant: "contained"}
        ],
    },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        overlay: "red",

        cols: 12,

        items : [
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999866/www/speaking/witold_wrodarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999863/www/speaking/robert_stolarczyk.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999861/www/speaking/sempai.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/jakub_gierszynski.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/dominik_cison.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999860/www/speaking/felix_hubner.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999857/www/speaking/ireneusz_klimczak.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/freshworks.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999855/www/speaking/openstage.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999854/www/speaking/lead360.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999852/www/speaking/damian_wiszowaty.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1598999851/www/speaking/artur_jablonski.jpg", cols: 3}
        ]
    },

  
   

    covid19 : {

        visitors : {

            label: "covid19.visitors.title",
            secondaryLabel: "covid19.visitors.description",
            baseLabel: "covid19.visitors.rules",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "Accepted",
                    label :  'accepted',
                },
            
                {
                    icon : "Invited",
                    label : 'invited'
                },
            
                {
                    icon : "Digital",
                    label : 'no-on-site-regdesk'
                }
    
            ]
        }, 

        exhibitors : {

            label: "covid19.exhibitors.title",
            secondaryLabel: "covid19.exhibitors.description",
            baseLabel: "covid19.exhibitors.rules",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "Reps",
                    label :  'reps',
                },
            
                {
                    icon : "Banned",
                    label : 'noleaflets'
                },
            
                {
                    icon : "People",
                    label : 'exclusive'
                }

            ]
        },
        
        presenters : {

            label: "covid19.presenters.title",
            secondaryLabel: "covid19.presenters.description",
            baseLabel: "covid19.presenters.rules",
            typography: "subtitle",
            dense: true,
            
            items: [

                {
                    icon: "Audience",
                    label: 'audience-limit',
                },
            
                {
                    icon: "Live",
                    label: 'streaming'
                },
            
                // {
                //     icon: "FaTrophy",
                //     label: 'presentation'
                // }

            ]
        },
    },
   
    
};

        

 export default settings