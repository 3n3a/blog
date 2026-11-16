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

### Platform Overview and Navigation / Instance Configuration

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

### Configuring Applications for Collaboration
#### Lists, Filters, and Tags

| Term | Description |
| --- | --- |
| _List Column Context Menu_ | Actions: Export data, Quick Reports, configure |
| _Creating Filter_ | Condition builder (clicky) / Natural Language Query (type text to "AI") |
| _Filter Conditions_ | Alias: Breadcrumbs; Parts: Field, Value, Operator |
| _List interface_ | Parts: title bar, filters, breadcrumbs, columns of data; Double click on field: edit data inline |
| _Create a favorite. Ways_ | drag breadcrumbs of filter to favorites tab / drag a record to favorties tab / click star button next to application / module |
| _List versions_ | v3, v2 |
| _Role: List layout_ | personalize_list |
| _List field_ | Has "List field context menu" |
| _List title menu_ | Show, Refresh List, Create Favorite |
| _Types of Context Menus_ | List column context menu, form context menu |
| _Create new view_ | right click header column "Configure > List Layout" |
| _All Configuration Items_ | Configuration > Base items > All |
| _Searching for Rows_ | Wildcard character in header search field |
| _Save a filter_ | Name it, set visibility (group, person, everyone), save |
| _Select multiple values_ | Shift + Up / Down Arrow / Shift + click and drag |
| _Personalized List_ | Indicator: small green dot |
| _Column in List_ | Represents a field |

#### Form Configuration / templates and saving options

| Term | Description |
| --- | --- |
| _Form Layout_ | Hide or show fields in view |
| _Update_ | updates and closes form |
| _Submit_ | Visible when create new record; Create and close form |
| _Save_ | Updates existing record, keeps form open |
| _Form Designer_ | Options on field: Handle, Remove, Edit; GUI Configure Forms; Add field: Field Navigator |
| _Create record, stay open_ | Copy indident, insert & stay |
| _Record Producer_ | Form that adds record to system table |
| _Delegated Development_ | For non-admins to develops apps |
| _Template Bar_ | Select diff. template to apply to form |
| _Activity_ | Read-only record created, record created, updated |
| _Activity Stream_ | Shown for a task under "Notes" |
| _Function Fields_ | arithmetics, coalesce concatenation and length |
| _Configure Forms: Roles_ | amdin, personalize_form |
| _Group related fiels_ | Sections |

#### Task Management  / Visual Task Boards (VTBs)

| Term | Description |
| --- | --- |
| _ "All > Service Desk > My Work"_ | Task Types: Requests, Security Cases, Visual Task Board Tasks, Change Requests, Incidents, Knowledge Base Submissions; Active tasks assigned to myself |
| _"My Groups Work"_ | Work Assigned to my group |
| _Visual Task Boards_ | Manage task by drap drop, identify process bottelnecks, track activity in one place. Collaboration tool; Types: Flexible, Guided, Freeform |
| _Task_ | Record, assigned to user, completed by user. Quicker resolution time, repeatable process, minimize human error. |
| _Owner of VTB_ | Rights to: create, edit, delete sorting criteria |
| _Inactivity Monitors_ | Notifies users for tasks when untouched for time |
| _SLA Definition Sequence_ | Start, Pause, Stop |
| _Task SLA Table_ | task_sla |
| _SLM abbrev._ | Service Level Management; SLAs, OLAs and Underpinning Contracts |
| _Assignment Rules_ | Automatically assigns tasks to users / groups. Create under "System Policy > Rules > Assignment" |
| _Service Level Agreement (SLA)_ | Track amount of time task open, ensure tasks complted on time |
| _Comments_ | Visible by all users |
| _SLA Type field_ | Types include SLA, OLA, UC in Field "Type" |
| _SLA Enginge PRoperties_ | SErvice Level MAnagement > Properties > SLA Engine |


#### Reporting, Dashboards, and Performance Analytics

| Term | Description |
| --- | --- |
| _Flows_ | Autoamte businesslogic for process / application |
| _Report Designer Tab: Data_ | Report Name, Source Type, and table / data source |
| _Report Designer Tab: Type_ | Report visualisation format |
| _Report Designer Tab: Configure_ | Define report grouping (Group By); aggregate field values --> standard deviation calculations, select fields |
| _Report Designer Tab: Style_ | colors, title, chart properties, color schmee |
| _Report Designer Action: Sharing_ | Default: Shared w/ report creator; Sharing Options: Publish, Export to PDF, Add to dashbaord, Schedule, Share |
| _Multidimensional Charts_ | Heatmap, Bubble, Multi-level pivot table |
| _Dashboards Landing Page_ | Navigate via this to "Dashboard System Health" |
| _PCI Configuration Controls score_ | Dashboard shows compliant security checks score |
| _KPI Signals Application_ | Considers behavior to signal variation |
| _Anti-signal_ | Let's know workflow under control |
| _Responsive Dashboards_ | Users Widgets & Reports and Performance Analystics visualisation sharing |
| _Time Series charts_ | Area, Column, Line, Spline, Step Line |
| _Bar Charts_ | Bar, Historgram, Horizontal Bar, Pareto |
| _Score Charts_ | Dial, Single Score, Speedometer |
| _Pies and Donuts Charts_ | Donut, Pie, Semi donut |
| _How to open Reporting_ | View/Run application (menu), Context menu column header list view |
| _Create Chart from List View (Context Menu)_ | Bar Chart, Pie Chart |
| _Menu List Reports_ | "Reports > View/Run" |
| _Recommended Way to Share Report_ | Action "Share" |

#### Notifications

| Term | Description |
| --- | --- |
| _Subscriptions_ |  Allos users to manage notifiations, set in system settings |
| _Notification Trigger_ | System Event |
| _Notifications_ | Found undeR: System Notification > Email > Notifications |
| _Notifications Tab: When to send_ | Condition on which to send  |
| _Notifications Tab: What will it contain_ | allows overriding html, Select variables from record, apply template |
| _Notifications Tab: Who will receive_ | Target for notification |
| _Inbound Email Action Types_ | Changes system table, reply to email, override agent acapacity for agents |
| _Notification Types_ | Email, Meeting Invitation, SMS |


### Self Service & Automation
#### Knowledge Management 
#### Service Catalog 
#### Flow Designer 

| Term | Description |
| --- | --- |
| _Flow Designer_ | automate business logic, Replacement for Workflow Editor |
| _Spokes in ServicENow Core_ | Aks for approval, Creat Record, Delete Record |
| _When to user Flow Designer_ | When Version higher than Jakarta, when starting from scratch w/ development |
| _Flow Trigger_ | Schedule (DAte, DAily, Weekly), Record, Application (SLA Task, Inbound email, MetricBase, Service Catalog) |
| _Complex Objects_ | TEmpalte can be saved to user in in/output in steps and actions |
| _Process Automation Designer_ | Processed document --> Automated Designs; Different Interface in Kanban / Playbook Style |
| _Flow Designer Roles_ | flow_operator, action_designer, flow_designer |

#### Virtual Agent

| Term | Description |
| --- | --- |
| _Virtual AGent_ | Automated chatting agent in service portal, common tasks, get info, make decisions |
| _CApabilites_ | Answering FAQ, Provide how to, perform diagnosis |
| _Acessible Content_ | Knowledge Bases, Service Catalog, System REcords |
| _Issue Auto Resolution_  | Intercept and help resolve submitted incidents |
| _Link Unfurling_ | Preview for TExts-Links, Videos, Images; Deactivate: By updating system property com.glide.cs.enable_link_unfurling to false. |
| _Interfaces_ | Service Portal, iOS, Android |
| _Third Party Messaging Support_ | Workplace (Google), MS Teams, Slack |

#### Data Schema

| Term | Description |
| --- | --- |
| _Schema Map_ | Visualisation of relationships between tables; From "Tables & Columns" menu accessed; Roles: personalize_dictionary, admin |
| _Field Settings / Attributes for Table_ | All > System Definition > Tables & Columns |
| _Dictionary (System Dictionary)_ | Details tables, fields in system; Navigate: All > System Definition > Dictionary | 
| _Dictionary override_ | Override for field on inherited table (child), than on parent table; field dependencies, read-only status of field |
| _One-to-many relationship_ | Field in table references record other table |
| _Core Tables_ | Type: parent, child, base |
| _Record Number configuration_ | All > System Definition > Number Maintenance |
| _Create new table (Moduels)_ | Tables & Columns / Tables; Creates Default Modules: table label / plural table label |
| _Many-to-many relationship_ | bi-directional relationship between tables, related records visible from both tables in related list |
| _Dot-walking_ | In Platform UI: Green with plus sign |
| _Transaction Log_ | System Logs > Transactions |
| _Exempt from upgrade_ | Record altered from base, by customer |
| _List Search: Starts with_ | `<value>%` |
| _Data Policy_ | Rule forces data consistency |
| _Start import set_ | System Import Sets > Load Data |
| _Table Relation Types_ | Extension, One-to-many, Many-to-many |
| _Prefix Custom Tables (Global Scope)_ | `u_` |
| _CRUD abbrev._ | Create, REad, Update, Delete |
| _Reference Lookup Icon_ | Identifes reference fields, opens pop-up |
| _Diff. Label extended Table_ | All > System Definition > Language File |
| _sys\_id_ | 32-character length, globally unique identifier |

#### Application/Access Control

| Term | Description |
| --- | --- |
| _System Address Filters_ | Configure to which emails communication allowed |
| _Elevated Roles_ | Only in current sessions, select security_admin in elevate roles |
| _Certificate based authentication methods_ | Common Access Card (CAC), Personal Identity Verification (PIV) |
| _Preferred Methods of Role Management_ | User in Group, Roles to group |
| _ACL Rule Permissions Configuration Options_ | Roles / Scripting who gets access / Conditions |
| _Access control processing oder_ | In what order ACL evaluated |
| _Role inhertiance_ | A Role Instance inherits all child-roles from role |
| _Create Role_ | All > User Administration > Roles |
| _Modules for Security_ | High Security Settings, Security, Access control |
| _Assignment Rules_ | All > System Policy > Rules > Assignment |
| _User Authentication Methods_ | LDAP, SSO, Local DB |
| _Assignment Lookup Rules_ | Type of assignment roles, only for incidents |
| _Scope_ | Encapsules applications, identifies and restricts access to files and data | 
| _Create Assignment Lookup Rule_ | All > System Policy > Rules > Assignment Lookup Rules |
| _contextual security_ | System security type, every level in SN Object hierarchy, control tables and fields | 

#### Importing Data

| Term | Description |
| --- | --- |
| _Transform Map_ | Relationships between fields in an import set to field in system table |
| _Transform Map: Rules_ | Defines how data converted before saving |
| _Data Source: Options_ | LDAP, JDBC |
| _Import File Types_ | Excel, XML, CSV |
| _Roles: Mange Import Sets_ | import_admin, admin |
| _Import Set: Fiedl_ | Can be mapped to multiple in target table |
| _Automatic Mappin gUitlity_ | All field in source and target match |
| _Coalesce Field_ | Updates record with this field name & value, otherwise new; when more than one --> first one |
| _Mapping assist utility_ | Not all field names match on source / target |
| _ACL_ | Field (or table) fully inaccessible to users without certain role / permission |

#### CMDB and CSDM

| Term | Description |
| --- | --- |
| _Key Tables in CMDB_ | Base CI (cmdb), Configuration Item (cmdb_ci), CI Relationship (cmdb_rel_ci) |
| _Dependency Views_ | Visualize CIs and relationships; Navigate: Depencency Views > View Map |
| _CSDM abbrev._ | Commo Service Data Model,; Standard terms and definitions, best practive cmdb data modeling, OOB cmdb core tables |
| _Benefits CMDB_ | Locating failed cahnges, assoc to incidents; impact analysis of proposed changes; assess problem trends pertaining to cis; manage incidents affecting cis |
| _Service Mapping_ | Discovers and models relationships between CIs, automatically fills into cmdb |
| _LDAP abbrev._ | Lightweight Directory Access Protocol |
| _Approach overlay service maps onto cmdb_ | Top-down |
| _Create suggested relationships_ | All > configuration > Relationships > Suggested Relationships |
| _CMDB Components_ | Dependency Views, Business Services, Processes |
| _CI Types_ | Tangible, intangible |
| _Testing CMDB Content_ | Quick start tests |
| _Manage CI Classes_ | All > Configuration > CI Class Manager |
| _MID abbrev_ | Management, Instrumentation, Discovery |
| _Discovery_ | finds devices and applications --> updates cmdb |

### Data Migration and Integration
#### UI Policies
#### Business Rules
#### System update sets
#### Scripting in ServiceNow

## Links

* [ServiceNow CSA Exam Prep - Table](https://service-now.tiiny.site/)
* [ServiceNow CSA Exam Blueprint](https://nowlearning.servicenow.com/lxp/en/credentials/certified-system-administrator-mainline-exam-blueprint?id=kb_article_view&sysparm_article=KB0011554)
