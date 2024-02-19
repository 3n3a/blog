---
title: "ServiceNow - Prep for CSA Certification"
date: 2024-02-19 10:15
draft: false
authors: enk
tags: [servicenow, cheatsheet, cloud, certification]
---

Collection of information I use to study for the CSA certification.

<!--truncate-->

## The Exam

Listing of which topics appear to what percentage in the exam:

| Domain | Topics / Subtopics | Percent |
| --- | --- | --- |
| 1 |**Platform Overview and Navigation**<ul><li><span>ServiceNow Platform overview</span></li><li><span>Platform capabilities and services</span></li><li><span>The ServiceNow Instance</span></li><li><span>Next Experience Unified Navigation</span></li></ul>| 7% |
|2|**Instance Configuration**<ul><li><span>Installing applications and plugins</span></li><li><span>Personalizing/customizing the instance</span></li><li><span>Common user interfaces in the Platform</span></li></ul>| 11% |
|3|**Configuring Applications for Collaboration**<ul><li><span>Lists, Filters, and Tags</span></li><li><span>List and Form anatomy </span></li><li><span>Form Configuration</span></li><li><span>Form templates and saving options</span></li><li><span>Advanced Form Configuration</span></li><li><span>Task Management</span></li><li><span>Visual Task Boards (VTBs)</span></li><li><span>Reporting, Dashboards, and Performance Analytics</span></li><li><span>Notifications</span></li></ul>|20%|
|4|**Self Service & Automation**<ul><li><span>Knowledge Management&nbsp;</span></li><li><span>Service Catalog&nbsp;</span></li><li><span>Flow Designer&nbsp;</span></li><li><span>Virtual Agent</span></li></ul>|20%|
|5|**Database Management**<ul><li><span>Data Schema</span></li><li><span>Application/Access Control&nbsp;</span></li><li><span>Importing Data&nbsp;</span></li><li><span>CMDB and CSDM</span></li></ul>|27%|
|6|**Data Migration and Integration**<ul><li><span>UI Policies </span></li><li><span>Business Rules </span></li><li><span>System update sets </span></li><li><span>Scripting in ServiceNow</span></li></ul>|15%|

## Topics

### Platform Overview and Navigation

| Term | Description |
| --- | --- |
| _Predictive Intelligence_ | Machine Learning, determine field values during creation |
| _Fred Luddy_ | Founder ServiceNow |
| _History Tab_ | Quickest way navigate back to recently viewed |
| _Submit_ | Creates record and closes form |
| _Configuration > Suggested Relationships_ | Create new relationship Role Menu (CMDB / CI Class) |
| _System Settings_ | Personalization of user interface |
| _Application Platform-as-a-Service (aPaas)_ | Cloud computing model of Servicenow |
| _Platform interfaces_ | Now Platform User Interface / Next Experience Unified Navigation, ServiceNow Mobile Apps / Now Mobile App, Service Portal / ESC |
| _Self-Service users_ | Users without assigned role permissions |
| _User Presence_ | Help improve collaborative effort. Shows currently online users on record. |
| _Connect Chat_ | Real time messaging tool, appears in "Banner Frame" |
| _User Menu Options_ | Elevate Roles, Logout, Impersonate User |
| _Incident > create new_ | Incident => application; create new => module |
| _Global Search_ | Used to search whole instance |
| _Continuous Integration and Continuous Delivery (CICD) Spokebatch install_ | Install multiple applications, application customizations or plugins at once |
| _Onboarding Component, first Login_ | When first login to Instance shown Onboarding |
| _Variable Types_ | Name for types of "form" / input element in SN |
| _Banner Frame Elements_ | Global Search, User Menu, Help Icon, Contextual App Pill | 
| _report_publisher_ | Role required to publish reports |
| _sys_user_ | db name for user table |
| _user menu > impersonate_ | to impersonate user |
| _Localization framework plugin_ | Requried to translate content to multiple languages |
| _Process Automation Designer_ | Create "cross-enterprise" workflows, single unified process |
| _Insert / Update Differences_ | Insert/Submit creates new record, update saves existing, both close form upon clicking |
| _Main Screen Elements in "All Menus"_ | All (Applications & Modules), History, Navigation Filter, Favorites |
| _Reporting Incident on Service Portal_ | "Can We Help You?" Category in Service Catalog |
| _Workflow Type in Now Platform_ | Employee, Customer, Information Technology (IT) |
| _Now Mobile App OSs_ | Apple iOS, Google Android |
| _Icon to mark as favorite_ | Star |
| _Welcome Page_ | Customized message at login |
| _Rule Selector for one field on record | table.field |
| _Next Experience UI_ | New Design released in San Diego |
| _Guided Setup indicator -> empty circle_ | Task not yet started |
| _ITIL abbrev._ | Information Technology Infrastructure Library |
| _New Record, Form open_ | Insert and Stay |
| _Interact with SN, Primary Way (Since Rome)_ | Now Platform UI |
| _Prevent Users from creating Homepages_ | com.glideapp.home.deprecate_homepages = true |
| _HI abbrev._ | Hosted Instance |
| _Role for Helpdesk Technician_ | itil |
| _Content Frame_ | Main screen where homepages, dashboards, forms, list of records |
| _SN Applications Workflow types_ | IT Workflows, Employee Workflows, Customer Workflows, Creator Workflows |
| _Main Elements SN UI (Backend / Platform)_ | Application Navigator, Content Frame, Banner Frame |
| _Group_ | A set of users, share roles, sub-groups |
| _SN Support & Data Centers Count_ | 10 Support Centers & 10 Data Centers
| _Automatic Notification for Partners when earning badges_ | false |
| _Navigation filter_ | Name of application navigator search box |
| _Reference field type_ | Displays record of other tables |
| _Replacement for mobile onboarding app (depr. San Diego)_ | Now mobile app for hr service delivery |
| _Email Digest_ | Single Email summary of activity |
| _History Tab_ | Default last 30 entries, not showing UI Pages / non-standard interfaces, in "application navigator" (ui position) |
| _Now Support_ | Mobile application for customer support (not customizable) |
| _ITSM abbrev._ | Information Technology Service Management |
| _Architecture of Now Platform_ | Multi-instance architecture |
| _Mobile Studio_ | Create, manage, modify applets for SN Mobile |
| _Searching in SN_ | Usage of wildcard character (\*), Global Search allows Bool Operators (need to be ALL CAPS) |
| _Self-Service Appl._ | Available to all users |
| _Now creators_ | Get skills, earn badges; Levels: Pro, Legend, Star |
| _Clicking on Logo_ | Returns Home |
| _Flushing Cache (Admin)_ | By typing cache.do in the navigation filter |
| _Management of Hosted Instances, upgrades etc._ | The Now Support (HI) (formerly known as HI Service Portal) |
| _Role_ | Set of permissions |
| _Best practices Assignment Rules / Predictive Intelligence_ | Setting an Assignment group and User based on Category and Subcategory. / Setting a User based on Category and Subcategory. / Setting an Assignment group and User based on the short description. / Setting an Assignment group based on Category and Subcategory. |
| _UI Policy vs. Data Policy_ | A Data Policy runs on both Client and Server side |

### Instance Configuration
#### Installing applications and plugins
#### Personalizing/customizing the instance
#### Common user interfaces in the Platform

### Configuring Applications for Collaboration
#### Lists, Filters, and Tags
#### List and Form anatomy
#### Form Configuration
#### Form templates and saving options
#### Advanced Form Configuration
#### Task Management
#### Visual Task Boards (VTBs)
#### Reporting, Dashboards, and Performance Analytics
#### Notifications

### Self Service & Automation
#### Knowledge Management 
#### Service Catalog 
#### Flow Designer 
#### Virtual Agent

### Database Management
#### Data Schema
#### Application/Access Control 
#### Importing Data 
#### CMDB and CSDM

### Data Migration and Integration
#### UI Policies
#### Business Rules
#### System update sets
#### Scripting in ServiceNow

## Links

* [ServiceNow CSA Exam Prep - Table](https://service-now.tiiny.site/)
* [ServiceNow CSA Exam Blueprint](https://nowlearning.servicenow.com/lxp/en/credentials/certified-system-administrator-mainline-exam-blueprint?id=kb_article_view&sysparm_article=KB0011554)
