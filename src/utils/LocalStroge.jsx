const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare sales report",
        "description": "Compile and submit Q1 sales performance report",
        "date": "2025-09-20",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Follow up with client regarding new proposal",
        "date": "2025-09-22",
        "category": "Client Relations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Attend weekly strategy alignment meeting",
        "date": "2025-09-25",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "System update",
        "description": "Update company CRM to latest version",
        "date": "2025-09-21",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Data backup",
        "description": "Perform weekly server data backup",
        "date": "2025-09-23",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug fixes",
        "description": "Resolve reported bugs in ticketing system",
        "date": "2025-09-26",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Market research",
        "description": "Research competitor products and pricing",
        "date": "2025-09-19",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Survey analysis",
        "description": "Analyze customer satisfaction survey results",
        "date": "2025-09-24",
        "category": "Analytics",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Social media campaign",
        "description": "Launch autumn product awareness campaign",
        "date": "2025-09-28",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Content draft",
        "description": "Write draft for October newsletter",
        "date": "2025-09-30",
        "category": "Content",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO review",
        "description": "Check website SEO for ranking improvements",
        "date": "2025-09-27",
        "category": "SEO",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Invoice processing",
        "description": "Process pending vendor invoices",
        "date": "2025-09-21",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Budget forecast",
        "description": "Prepare Q4 budget forecast",
        "date": "2025-09-29",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Tax review",
        "description": "Review compliance for tax filing",
        "date": "2025-09-18",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
    let employees =JSON.parse(localStorage.getItem("employees"))
    let admin = JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}


} 