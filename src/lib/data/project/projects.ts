export type Project = {
    title: string;
    icon: string;
    description: string;
    techStack: string[];
    role: string;
    tags: string[];
}

type Tech = {
    name: string,
    link: string
}

export const projects: Project[] = [

    {
        title: 'Centralized Billing Platform',
        icon: "/icons/dollar-sign.svg",
        description: "The Centralized Billing Platform is a tool built to minimize revenue loss and reduce the quote to cash timeline. Centered around the robust workflow controls of the M-Files document management system, this project enabled a standardized approach to the Accounts Receivable process and provided crucial analytics via a Power BI dashboard.",
        techStack: [
            "M-Files",
            "REST API",
            "Microsoft Dynamics",
            "Angular Web Framework",
            "Power BI",
            "SQL Server"
        ],
        role: "Architect and Developer",
        tags: [
            "Featured",
            "Microsoft",
            "Analytics",
            "SQL",
            "Integrations",
            "Document Control"
        ]
    },

    {
        title: 'Accounts Payable Automation',
        icon: "/icons/hand-money.svg",
        description: "Tool used to automate and standardize the way clients are paid. Integrating with the Solomon (Microsoft Dynamics SL) ERP allows for seamless routing of PO approval to the correct individual. Streamlining the approval of POs has reduced operational delays and allowed for greater global standardization.",
        techStack: [
            "M-Files",
            "Solomon 7",
            "SQL Server"
        ],
        role: "Architect and Project Manager",
        tags: [
            "SQL",
            "Integrations",
            "Document Control"
        ]
    },

    {
        title: "Digital Job Package",
        icon: "/icons/folder-open.svg",
        description: "Paper documents were leading to liability, revenue loss, and safety concerns. Digital Job Package is a set of technology working in sync to ensure that documents are assigned, tracked, and archived. Non-technical field users are able to use Microsoft's OneDrive on their phone, tablet, or PC thanks to an integration between our custom interface and the Office 365 Graph API.",
        techStack: [
            "Custom Software Application",
            "Microsoft 365 Graph API",
            "SharePoint",
            "OneDrive",
            "M-Files",
            "Microsoft Dynamics"
        ],
        role: "Architect",
        tags: [
            "Microsoft",
            "Custom Applications",
            "Document Control",
            "Integrations",
            "Featured"
        ]
    },

    {
        title: "Centralized Operations Platform",
        icon: "/icons/business-management.svg",
        description: "Developed for an international company with offices all over the globe, the Centralized Operations Platform is a way to standardize how service is sold, delivered, and billed. It provides invaluable detail into how the business operates at a grand scale as well as down to the individual service provider.",
        techStack: [
            "Custom Software Application",
            "Microsoft Dynamics"
        ],
        role: "Architect",
        tags: [
            "Microsoft",
            "SQL",
            "Custom Applications",
            "Featured"
        ]
    },

    {
        title: "SharePoint Migration",
        icon: "/icons/collapse-all-arrow.svg",
        description: "Migration of a collection of operationally-relevant SharePoint sites to SharePoint Online from Sharepoint 2007 and 2013.",
        techStack: [
            "SharePoint",
            "Powell Manager",
            "ShareGate"
        ],
        role: "Project Manager",
        tags: [
            "Microsoft",
            "Configuration"
        ]
    },

    {
        title: "Customer Support Architecture",
        icon: "/icons/customer-service.svg",
        description: "Working with the Product Development and Support teams of a large PC manufacturer, I outlined and implemented a support architecture for how customer service should be handled.",
        techStack: [
            "Microsoft Dynamics",
            "Custom Web Applications",
        ],
        role: "Architect and Project Manager",
        tags: [
            "Microsoft",
            "Configuration"
        ]
    },

    {
        title: "Product Onboarding Software",
        icon: "/icons/person-profile.svg",
        description: "Software for onboarding users after the purchase of a new PC. The onboarding process involves user training, support details, and product upsales.",
        techStack: [
            "Custom Software Application",
            "Google Analytics"
        ],
        role: "UX Consultant",
        tags: [
            "Analytics",
            "Custom Applications"
        ]
    },

    {
        title: "Driver GPS Tracking",
        icon: "/icons/gps.svg",
        description: "To meet new national regulations, drivers are required to provide GPS records and digital logs of their hours, location, and cargo. We utilized an off-the-shelf solution and trained the drivers on how to use it.",
        techStack: [
            "GPS Tracking & Logging Software"
        ],
        role: "Project Manager",
        tags: [
            "Configurations"
        ]
    },

    {
        title: "Equipment Maintenance Automation",
        icon: "/icons/web-software.svg",
        description: "The maintenance platform is a custom configuration of an ERP designed for industrial maintenance & inventory tracking. It has the capability of forming predictive maintenance requests and ensuring all responsible parties are informed.",
        techStack: [
            "SQL Server",
            "REST API",
            "Equipment Maintenance Software"
        ],
        role: "Project Manager",
        tags: [
            "Configurations",
            "Integrations",
            "SQL"
        ]
    },

    {
        title: "Receiving Yard Operations Platform",
        icon: "/icons/warehousing.svg",
        description: "Developed by a 3rd party software vendor, the Receiving Yard Operations platform provided scheduling, tracking, and control of a crowded oil shipping yard.",
        techStack: [
            "Custom Software Application",
            "SQL Server"
        ],
        role: "Project Manager",
        tags: [
            "Custom Applications",
            "SQL"
        ]
    },

    {
        title: "Shipment Tracking Platform",
        icon: "/icons/cargo-container-crane.svg",
        description: "What initially began as a proof of concept using the Microsoft Power Platform quickly became a valuable tool for managing shipping and receiving request between departments. This PowerApps application handles requests, tracks tanker usage, and exports revenue details.",
        techStack: [
            "PowerApps",
            "Power BI",
            "Power Flow"
        ],
        role: "Developer",
        tags: [
            "Custom Applications",
            "Microsoft",
            "Analytics"
        ]
    },

    {
        title: "Sales & Production Dashboard",
        icon: "/icons/column-chart.svg",
        description: "Using data exported from an AS/400 database, the Sales & Production dashboard calculates details used by various departments to measure KPIs.",
        techStack: [
            "Microsoft Excel",
            "IBM AS/400",

        ],
        role: "Developer",
        tags: [
            "Analytics",
            "Microsoft"
        ]
    },

    {
        title: "Search Engine Optimization & Marketing Controls",
        icon: "/icons/area-chart.svg",
        description: "Modifications to a company website designed to increase visibility and drive revenue. Highlights include an extensive PPC campaign, SEO content, and a recorded line for tracking sales. After making these changes, the website quickly became the primary source of leads.",
        techStack: [
            "Custom CMS",
            "PPC Advertising",
            "Google Analytics"
        ],
        role: "Project Manager",
        tags: [
            "Configurations",
            "Analytics"
        ]
    },

    {
        title: "Project Management Platform",
        icon: "/icons/woman-female.svg",
        description: "The Project Management platform enabled a previously paper process to go digital. Using the QuickBase application framework, this platform has been configured to support a full suite of project management solutions including a CMS, expense tracking, and KPI dashboards.",
        techStack: [
            "Quickbase"
        ],
        role: "Project Manager and Architect",
        tags: [
            "Configurations",
            "Analytics"
        ]
    },

    {
        title: "Voice Over IP Communications",
        icon: "/icons/phone-square.svg",
        description: "Implemented for a company with locations spread across Texas, this VoIP solution increased lead retention by streamlining the call transfer process from one location to another.",
        techStack: [
            "Ring Central"
        ],
        role: "Project Manager",
        tags: [
            "Configurations",
            "Analytics"
        ]
    },

    {
        title: "Remote Internet Service Infrastructure",
        icon: "/icons/wifi-line.svg",
        description: "Overcame networking limitations caused by minimal infrastructure in remote locations.",
        techStack: [
            "Verizon Mobile Network Equipment"
        ],
        role: "Project Manager",
        tags: [
            "Configurations"
        ]
    },

    {
        title: "AIS System Configuration",
        icon: "/icons/road-map.svg",
        description: "API Integration with the AIS network to track the incoming vessels of clients. When the vessel of a client enters the region, sales staff are alerted so that they can reach out and offer services.",
        techStack: [
            "Vessel Tracker",
            "Quickbase"
        ],
        role: "Project Manager and Developer",
        tags: [
            "Configurations",
            "Integrations"
        ]
    }

]