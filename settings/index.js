
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
    icon : "Done",
    primary : "vipzone"
    },
    {
    icon : "Done",
    primary : "c2pinvitations"
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
    primary : "electricity2"
    },
    {
    icon : "Catering", 
    primary : "catering"
    },
    {
    icon : "Done",
    primary : "vipzone"
    },
    {
    icon : "Done",
    primary : "c2pinvitations"
    },
    {
    icon : "Ids",
    primary : "ids"
    },
    {
    icon : "Catalogue",
    primary : "profile"
}]

const networkingBenefits =    [{
    icon : "Space", 
    primary : "space4"
    },
    {
    icon : "Furniture",
    primary : "furniture3"
    },
    {
    icon : "Electricity", 
    primary : "electricity2"
    },
    {
    icon : "Catering", 
    primary : "catering"
    },
    {
    icon : "Done",
    primary : "vipzone"
    },
    {
    icon : "Done",
    primary : "c2pinvitations"
    },
    {
    icon : "Ids",
    primary : "ids"
    },
    {
    icon : "Catalogue",
    primary : "profile"
    }]


const mininetworkingBenefits =    [{
    icon : "Space", 
    primary : "space3"
    },
    {
    icon : "Furniture",
    primary : "furniture2"
    },
    {
    icon : "Electricity", 
    primary : "electricity2"
    },
    {
    icon : "Catering", 
    primary : "catering"
    },
    {
    icon : "Done",
    primary : "vipzone"
    },
    {
    icon : "Done",
    primary : "c2pinvitations"
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
    allowedGroupIds : [428, 429, 430, 431, 432],
    boothStyleMapping: {
        428: "light",
        429: "standard",
        430: "hot",
        431: "superHot",
        432: "ultra",
        433: "grand",
        434: "stage",
        439: "stage", //stage B
        440: "stage", //stage D

        436: "networking",
        438: "networking", //mini networking
        435: "boothSold", //last minute / buffer
        437: "boothSold", //test
    
    },
    benefits: {
        428: standardBenefits,
        429: standardBenefits,
        430: standardBenefits,
        431: standardBenefits,
        432: standardBenefits,
        433: premiumBenefits,
        434: stageBenefits,
        439: openStageBenefits,
        440: openStageBenefits,
        436: networkingBenefits,
        438: mininetworkingBenefits
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
        proxy: "https://api.eventjuicer.workers.dev?url=",
        // api : "http://eventjuicer-api.test/v1/public/hosts/targiehandlu.pl",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
        fingerprint: {
            apiKey: "DX6tMYsW74dcjf3JGHcg",
            subdomain: "metrics."
        },
        recaptcha: {
            apiKey: "6LcevZEoAAAAAGRoMZIAiOmQJUzo9dAPjjNo9LBZ"
        }
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
            2627, 2628, 2629, 2626, 2624, 2625, //STD
            2637, 2635, 2636, 2634, 2633, 2632, 2631, //HOT
            2638, 2639, 2641, 2642, 2645, 2644, 2643, //SH
            2652, 2651, 2647, 2648, 2650, 2646, //ULTRA
            2664, 2659, 2660, 2661, 2663, 2676, //GRAND
            2655, //MINI N
            2682, 2683, 2684, //STAGE
        ],
    },

    bookingmap : {
        ...bookingmapShared,
        wrapperProps: {
            label: "exhibitors.map.title",
            secondaryLabel: "exhibitors.map.opensales"
        },
        disabledTicketIds : [
            2706, 2665, 2717, 2718, 2627, 2628, 2629, 2626, 2624, //STD
            2630, 2668, 2673, 2632, 2633, 2634, 2637, 2636, 2635, //HOT
            2640, 2670, 2667, 2641, 2642, 2638, 2645, 2644, 2643,  //SH
            2649, 2674, 2666, 2650, 2651, 2647, 2648, 2652, //ULTRA
            2662, 2672, 2669, //GRAND
            2677, //MINI N
            2653, 2656, 2681, //STAGE
        ],
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2024-01-10", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2024-02-02", name: "qualification", icon:  "Assessment" },
            {date: "2024-02-05", name: "public-voting", icon:  "Public" },
            // {date: "2020-10-26", name: "jury-voting", icon:  "HowToVote" },
            {date: "2024-02-16", name: "results", icon:  "Mic", active: false },
            {date: "2024-02-19", name: "formal", icon:  "Settings", active: false }

        ]

    },

    workshopstimeline: {

        baseLabel: "workshops.timeline",

        items : [
            {date: "2024-03-04", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2024-03-08", name: "submissions-closed", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2024-03-12", name: "qualification", icon:  "Assessment" },
            {date: "2024-03-15", name: "workshop-details", icon:  "Settings" },
            {date: "2024-03-21", name: "attendees", icon:  "Public" },

        ]

    },


    workshops: {

        apply: {
            disabled: 1,
            disabledTreshold: 75
        },

        schedule: {

            wrapperProps: {
                label: "workshops.schedule.title",
                secondaryLabel: "workshops.schedule.description"
            },
            times : {
    
                // 15+10+10 = 35!!!
                // 
                '11:00': 'presentation',
                '11:45': 'presentation',
                '12:30': 'presentation',
                '13:15': 'presentation',
                '14:00': 'presentation',
                '14:45': 'presentation',
                '15:30': 'presentation',
                // '15:45': 'presentation'
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
                {name: "presentation_title", required: true},
                // {name: "presentation_description", required: true}
            ],
            
            start: [
                'presenter',
                'presentation_title', 


            ],

            ticket_id : 2679,
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
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1681427181/teh23_photos/workshops/eTargi_06042023_fot_Joanna_Nowicka_1019.jpg", cols: 3},
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
        og_template: "template_teh25_spkr",




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
                // {name: "bio", required: true},  
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
                //  'presentation_title', 
                // 'presentation_description',
                'presentation_category',

            ],

            ticket_id : 2675,
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
            ticket_id : 2678,
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
                name: 'general',
                items: [
                  {name: 'home', to: '/'},
                //   {name: 'speaking', to: '/speaking'},
                ]
            },

            {
              name: 'visitors',
              items: [
                {name: 'visit', to: '/visit'},
                // {name: 'vote', to: '/vote'},
                {name: 'schedule', to: '/schedule'},
                {name: 'workshops', to: '/workshops'},
                {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'offers', to: '/offers'}
              ]
            },
            {
              name: 'exhibitors',
              items: [
                {name: 'exhibit', to: '/exhibit'},
                // {name: 'premium', to: '/premium'},
                // {name: 'sample-visitors', to: '/sample-visitors'},
                // {name: 'exhibitors', to: '/exhibitors'},
                // {name: 'premium-services', to: '/premium'},
                // {name: 'faq', to: '/faq'},
              ]
            }


  
        ]
    },

    premium : {

        ticketgroups : [441],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png'

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
        ogTemplate: "template_teh25_exhibitor_",
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
            ticket_id : 2678,
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
        event_name : '25. Targi eHandlu',
        event_name_short: "TeH",
        event_location : 'EXPO XXI Warszawa, Prądzyńskiego 12/14',
        event_date : '11.04.2024',
        event_hours : '10:00-17:00',

    },

   
    footer : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Wojtas',
                position : 'Account Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1697114443/targiehandlu_people_kw.jpg',
                phone: '+48 535 801 021',
                email: 'karolina.wojtas@targiehandlu.pl',
                chatlio : true
            },
          
        ],

        iconStyle : "black",
        primaryStyle: null,
        secondaryStyle: null,
      //  iconStyle: "heroIcon",
        links : [
            {label: "exhibitors.agreement.title", href : "/legal-2023-11-09"},
            {label: "visitors.legal.title", href : "/legal/visitors"},
            {label: "visitors.legal-gdpr.title", href : "/legal/visitors-data"},
        ]
    },

    appbar : {
        profile: ["logout"],
        links: [
            {label: "common.menu.visitors.visit", color: "primary",  href: "/visit", as: "/visit", variant: "contained"}
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