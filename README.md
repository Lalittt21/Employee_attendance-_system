# Employee Attendance and Leave Management System

A comprehensive HR management system built with Angular 17 that manages employee attendance tracking and leave request workflows.

## Features

### 1. **Dashboard**
- Real-time metrics display:
  - Total employees count
  - Today's attendance summary (Present/Absent)
  - Pending leave requests
  - Approved leaves
  - Attendance rate percentage
- Quick action buttons for easy navigation

### 2. **Employee Management**
- View complete employee list with details:
  - Employee ID, Name, Position
  - Department, Email, Phone
  - Date of Joining
- Employee CRUD operations (Add, Edit, Delete)
- Responsive table display

### 3. **Attendance Tracking**
- Mark daily attendance for employees
- Filter attendance records by date
- View today's attendance summary
- Support for Present/Absent status
- Historical attendance records

### 4. **Leave Management**
- **Leave Request**: Employees can apply for leave with:
  - Leave type selection (Annual, Sick, Casual, Maternity, Paternity)
  - Start and end date selection
  - Reason for leave
  - Status tracking (Pending/Approved/Rejected)

- **Leave Approval**: HR module to:
  - View all pending leave requests
  - Approve or reject requests
  - Filter by status (Pending, Approved, Rejected)
  - View request details

### 5. **User Interface**
- Responsive design that works on desktop, tablet, and mobile
- Gradient-based modern styling
- Intuitive navigation with navbar and sidenav
- Status badges for visual indicators
- Form validation for data integrity

## Technology Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Language**: TypeScript 5.0+
- **Styling**: Pure CSS (No Framework)
- **State Management**: RxJS Observables
- **Build Tool**: Angular CLI 17+

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── navbar/
│   │   ├── sidenav/
│   │   ├── employee-list/
│   │   ├── attendance-tracker/
│   │   ├── leave-request/
│   │   └── leave-approval/
│   ├── services/
│   │   ├── employee.service.ts
│   │   ├── attendance.service.ts
│   │   ├── leave.service.ts
│   │   └── mock-data.service.ts
│   ├── models/
│   │   ├── employee.model.ts
│   │   ├── attendance.model.ts
│   │   └── leave.model.ts
│   ├── app.component.ts
│   ├── app.routing.ts
│   └── app.config.ts
├── styles.css
├── main.ts
└── index.html
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Lalittt21/Employee_attendance-_system.git
cd employee-attendance-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
ng serve
# or
npm start
```

4. **Open in browser**
Navigate to `http://localhost:4200/`

## Usage Guide

### Dashboard
- View all metrics at a glance
- Use quick action buttons to navigate to different sections
- Metrics update in real-time

### Employee Management
- View all employees in the employee list
- Click the "+ Add Employee" button to create new employees
- Edit employee details (functionality ready)
- Delete employees if needed

### Attendance Tracking
- Select an employee from the dropdown
- Choose attendance date (defaults to today)
- Select status (Present/Absent)
- Click "Mark Attendance" to record
- View today's attendance summary
- Filter historical records by date

### Leave Request
- Select employee from dropdown
- Choose leave type from predefined options
- Select start and end dates
- Provide reason for leave
- Submit request
- View your leave request history

### Leave Approval (HR)
- View all leave requests with filters
- See statistics: Pending, Approved, Rejected counts
- Filter by status to view specific requests
- Approve pending requests
- Reject pending requests with confirmation

## Mock Data

The system comes with mock data pre-loaded:
- **6 Employees** across different departments
- **10 Attendance Records** for past 3 days
- **5 Leave Requests** in various statuses

All data is stored in memory using a BehaviorSubject service.

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Home page with metrics |
| `/dashboard` | Dashboard | Dashboard page |
| `/employees` | EmployeeList | Employee management |
| `/attendance` | AttendanceTracker | Mark attendance |
| `/leave-request` | LeaveRequest | Apply for leave |
| `/leave-approval` | LeaveApproval | Approve/Reject leaves |

## Build for Production
```bash
ng build --configuration production
```

## Features Implemented

✅ Employee Management  
✅ Attendance Tracking  
✅ Leave Request System  
✅ Leave Approval Workflow  
✅ Dashboard with Analytics  
✅ Responsive Design  
✅ Mock Data Service  
✅ Observable-based Services  
✅ Form Validation  
✅ Status Filtering  
✅ Standalone Components  
✅ Custom CSS Styling  

## Future Enhancements

- [ ] Backend API integration
- [ ] Authentication & Authorization
- [ ] Email notifications
- [ ] Attendance reports
- [ ] Leave balance tracking
- [ ] Export to Excel/PDF

## License

MIT License

## Author

Developed with ❤️ for HR Management

## Tech Stack
- **Framework**: Angular 17+
- **Language**: TypeScript
- **UI Library**: Angular Material (for responsive design)
- **Backend**: Mock REST API using JSON Server
- **Tools**: Node.js, Angular CLI, VS Code

## Project Structure
```
employee-attendance-system
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── employee-list
│   │   │   ├── attendance-tracker
│   │   │   ├── leave-request
│   │   │   ├── leave-approval
│   │   │   ├── dashboard
│   │   │   ├── navbar
│   │   │   └── sidenav
│   │   ├── services
│   │   ├── models
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routing.ts
│   │   └── app.config.ts
│   ├── assets
│   ├── styles.css
│   ├── main.ts
│   └── index.html
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Lalittt21/Employee_attendance-_system.git
   cd Employee_attendance-_system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/` in your browser to view the application.

## Usage
- **Employee List**: View all employees and perform CRUD operations.
- **Attendance Tracker**: Mark attendance for the day.
- **Leave Request**: Submit leave requests with necessary details.
- **Leave Approval**: HR can approve or reject leave requests.
- **Dashboard**: View key metrics and summaries.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.