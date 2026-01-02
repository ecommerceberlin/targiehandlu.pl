
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
    // {
    //     icon : "Done", 
    //     primary : "stage"
    // },
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
    // {
    //     icon : "Done", 
    //     primary : "stage"
    // },


    {
        icon : "Done", 
        primary : "video"
    },
]


const bookingmapShared = {

    height : 400,
    // steps : [
    //     "choose_booth",
    //     "confirm",
    //     "pay",
    //     "access"
    // ],
    disabledTicketIds : [],
    // allowedGroupIds : [515, 514, 513, 512, 511],
    boothStyleMapping: {
        516: "light",
        530: "standard",
        529: "hot",
        528: "superHot",
        527: "ultra",
        526: "grand",
        525: "stage",
        520: "stage", //stage B
        532: "stage", //stage D
        519: "stage", //stage C

        523: "networking",
        506: "networking", //mini networking
        524: "boothSold", //last minute / buffer
        506: "boothSold", //test
    
    },
    benefits: {
        530: standardBenefits,
        529: standardBenefits,
        528: standardBenefits,
        527: standardBenefits,
        512: standardBenefits,
        526: premiumBenefits,
        525: stageBenefits,
        519: openStageBenefits,
        532: stageBenefits,
        520: openStageBenefits,
        523: networkingBenefits,
        506: mininetworkingBenefits
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
        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&key=SHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm',    
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl",
        // proxy: "https://api.eventjuicer.workers.dev?url=",
        // api : "http://eventjuicer-api.test/v1/public/hosts/targiehandlu.pl",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register",
        service_api : "https://api.eventjuicer.com/v1/services",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
        fingerprint: {
            apiKey: "OWW4rlCshv8k9OqaljFK",
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
            {name: "cname2", required: true},
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
            '10:30': 'presentation',
            '11:05': 'presentation',
            '11:40': 'presentation',
            '12:05': 'break_25',
            '12:30': 'presentation',
            '13:05': 'presentation',
            '13:30': 'break_25',
            '13:55': 'presentation',
            '14:30': 'presentation',
            '14:55': 'break_25',
            '15:20': 'presentation',
            '15:55': 'presentation'
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
            3393, 3394, 3395, 3392, 3390, 3391, //STD
            3398, 3399, 3400, 3403, 3402, 3401, 3397, //HOT
            3406, 3407, 3404, 3410, 3409, 3408, 3405, //SH
            3415, 3416, 3412, 3413, 3417, 3411, //ULTRA
            3428, 3429, 3425, 3424, 3426, //GRAND
            3419, //N
            3449, 3448, 3447, 3495, //STAGE
        ],
    },

    bookingmap : {
        ...bookingmapShared,
        wrapperProps: {
            label: "exhibitors.map.title",
            secondaryLabel: "exhibitors.map.opensales"
        },
        disabledTicketIds : [
            3430, 3483, //STD
            3396, 3433, 3438, 3398, 3399, 3400, 3403, //HOT
            3471, 3435, 3432, 3406, 3407, 3404, 3410, //SH
            3414, 3431, 3493, 3415, 3416, 3412, //ULTRA
            3427, 3434, 3428, 3429, //GRAND
            3498, //N
            3418, 3421, 3494, 3446, //STAGE
        ],
    },

    cfptimeline: {

        baseLabel: "cfp.timeline",

        items : [
            {date: "2025-01-21", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            // {date: "2024-02-02", name: "qualification", icon:  "Assessment" },
            {date: "2025-02-14", name: "jury-voting", icon:  "HowToVote" },
            {date: "2025-02-17", name: "public-voting", icon:  "Public" },
            {date: "2025-02-27", name: "results", icon:  "Mic", active: false },
            // {date: "2024-02-19", name: "formal", icon:  "Settings", active: false }

        ]

    },

    workshopstimeline: {

        baseLabel: "workshops.timeline",

        items : [
            {date: "2025-03-10", name: "submissions", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2025-03-14", name: "submissions-closed", icon:  "NoteAdd", dotColor: 'primary', active: true },
            {date: "2025-03-17", name: "qualification", icon:  "Assessment" },
            {date: "2025-03-20", name: "workshop-details", icon:  "Settings" },
            {date: "2025-03-24", name: "attendees", icon:  "Public" },

        ]

    },


    workshops: {

        apply: {
            disabled: 0,
            disabledTreshold: 120
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

            ticket_id : 3109,
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
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1681427181/teh23_photos/workshops/eTargi_06042023_fot_Joanna_Nowicka_1019.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1681426942/teh23_photos/workshops/eTargi_06042023_fot_Joanna_Nowicka_1017.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1681427092/teh23_photos/workshops/eTargi_06042023_fot_Joanna_Nowicka_1041.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1681552919/teh23_photos/vip_zone/Targi-eHandlu-2023-palej-pl-DSC06414_.jpg", cols: 3},

            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1713383643/teh25_photos/workshops/eHandel_11042024_fot-Joanna-Nowicka_01048.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1713349001/teh25_photos/workshops/1209-PLJ09646-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1698889800/teh24_photos/vip_zone/eHandel_27102023_fot_Joanna_Nowicka_NET-0969.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1698890024/teh24_photos/workshops/eHandel_27102023_fot_Joanna_Nowicka_NET-0964.jpg", cols: 3},

            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1668147180/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_0552.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1669103280/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_NET-0384.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1681427181/teh23_photos/workshops/eTargi_06042023_fot_Joanna_Nowicka_1019.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/c_fit/v1668147181/teh22_photos/vip_zone/eHandel_27102022_fot_Joanna_Nowicka_0892.jpg", cols: 3},
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
        og_template: "template_teh27_spkr",




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

            ticket_id : 3057,
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
                {label: 'stages',},
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

            // {
            //   name: 'visitors',
            //   items: [
            //     {name: 'visit', to: '/visit'},
            //     // {name: 'vote', to: '/vote'},
            //     {name: 'schedule', to: '/schedule'},
            //     {name: 'workshops', to: '/workshops'},
            //     {name: 'exhibitors', to: '/exhibitors'},
            // //     // {name: 'offers', to: '/offers'}
            //   ]
            // },
            // {
            //   name: 'exhibitors',
            //   items: [
            //     {name: 'exhibit', to: '/exhibit'},
            //     {name: 'premium', to: '/premium'},
            //     // {name: 'sample-visitors', to: '/sample-visitors'},
            //     // {name: 'exhibitors', to: '/exhibitors'},
            //     // {name: 'premium-services', to: '/premium'},
            //     // {name: 'faq', to: '/faq'},
            //   ]
            // }


  
        ]
    },

    premium : {

        ticketgroups : [503],
        soldout: 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1684149426/Website/PREMIUM%20SERVICES/sold-out.png'

    },


    exhibitors : {
        disableMeetups: false,
        meetupApplicationURL: "https://ecwe.pl/people/exhibitors",
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
              { label: 'payment' },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'additional_paid_services',
              },
              { label: 'onboarding' },
            //   { label: 'resignation' },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'public_profile',
              },
              { label: 'promo_benefits' },
            ]
        },
        ogTemplate: "template_teh27_exhibitor_",
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
            ticket_id : 3060,
            email_template : "pl-visitors-registration",
            right : "/lanyard.jpg",

        },

        waitinglist: {

            wrapperProps: {
                label : "visitors.waitinglist",
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
            ticket_id : 3370,
            // email_template : "pl-visitors-registration",
            // right : "/lanyard.jpg",

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
        event_name : 'E-commerce Warsaw Expo (Targi eHandlu)',
        event_name_short: "TeH",
        event_location : 'EXPO XXI Warszawa, Prądzyńskiego 12/14',
        event_date : '23.04.2026',
        event_hours : '09:00-17:00',

    },

   
    footer : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Patrycja Chojnicka',
                position : 'Account Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1767370283/people_pc_rlhbog.jpg',
                phone: '+48 535 801 021',
                email: 'hello@ecommercewarsaw.com',
                chatlio : true
            },
          
        ],

        iconStyle : "black",
        primaryStyle: null,
        secondaryStyle: null,
      //  iconStyle: "heroIcon",
        links : [
            {label: "exhibitors.agreement.title", href : "/legal-2025-11-04"},
            {label: "visitors.legal.title", href : "/legal/visitors"},
            {label: "visitors.legal-gdpr.title", href : "/legal/visitors-data"},
        ]
    },

    // appbar : {
    //     profile: ["logout"],
    //     links: [
    //         {label: "common.menu.visitors.visit", color: "primary",  href: "/visit", as: "/visit", variant: "contained"}
    //     ],
    // },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        overlay: "red",

        cols: 12,

        items : [
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713348899/teh25_photos/michal_burda/1187-_AOG8896-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713308228/teh25_photos/adcookie/1000-_AOG8770-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713308657/teh25_photos/stages/1052-_AOG8815-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713384471/teh25_photos/oskar_lipinski/eHandel_11042024_fot-Joanna-Nowicka_01201.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713299485/teh25_photos/trusted_shops/0483-_AOG8532-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713382583/teh25_photos/lukasz_plutecki/eHandel_11042024_fot-Joanna-Nowicka_00906.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713308244/teh25_photos/adcookie/1005-_AOG8774-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713307466/teh25_photos/sebastian_horoszko/0916-_AOG8719-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713302193/teh25_photos/pawel_kubiak/0630-_AOG8569-eventshooters-eventshooters-TEH2024.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713371030/teh25_photos/stages/eHandel_11042024_fot-Joanna-Nowicka_00354.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713371835/teh25_photos/piotr_markiewicz/eHandel_11042024_fot-Joanna-Nowicka_00501_Easy-Resize.com.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1713309688/teh25_photos/stages/1105-_AOG8845-eventshooters-eventshooters-TEH2024.jpg", cols: 3}

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