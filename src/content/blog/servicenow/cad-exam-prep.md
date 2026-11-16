---
title: "ServiceNow - Prep for CAD Certification"
date: 2025-07-01 10:15
draft: false
authors: enk
tags: [servicenow, cheatsheet, cloud, certification]
---

Collection of information I use to study for the CAD certification.

<!--truncate-->

## The Exam

Listing of which topics appear to what percentage in the exam:

| Domain | Topics / Subtopics | Percent |
| --- | --- | --- |
| 1 | **Designing and Creating an Application**<ul><li>Determine if an application is a good fit with ServiceNow</li><li>Design and implement a data model</li><li>Create modules</li><li>Use Application scope</li></ul> | 20% |
| 2 | **Application User Interface&nbsp;**<ul><li>Create, design, and customize forms&nbsp;</li><li>Add/Remove fields from forms and tables&nbsp;</li><li>Write, test, and debug client-side scripts for desktop&nbsp;</li><li>Write, test, and debug server-side scripts&nbsp;</li><li>Use a Record Producer as an application's UI&nbsp;</li></ul> | 20% |
| 3 | **Security and Restricting Access&nbsp;**<ul><li>Restrict access to applications and application modules&nbsp;</li><li>Manually and automatically create, test, and debug Access Controls&nbsp;</li><li>Use GlideSystem methods to script security&nbsp;</li><li>Use Application Scope to protect application artifacts</li></ul> | 20% |
| 4 | **Application Automation&nbsp;**<ul><li>Write, test, and debug Workflow and Flow Designer&nbsp;</li><li>Create and use Application Properties&nbsp;</li><li>Create Events, Scheduled Script Executions (Scheduled Jobs), and Utils (application) Script Includes&nbsp;</li><li>Send and receive email&nbsp;</li><li>Design and create homepages and reports</li></ul> | 20% |
| 5 | **Working with External Data&nbsp;**<ul><li>Import data in CSV or Excel format&nbsp;</li><li>Integrate to, including testing and debugging, an external data source using REST</li></ul> | 10% |
| 6 | **Managing Applications&nbsp;**<ul><li>Download and install applications&nbsp;</li><li>Use Delegated Development to manage source code and code review&nbsp;</li><li>Use the ServiceNow Git integration to manage source code</li></ul> | 10% |

## Topics

### Designing and Creating an Application

**Determine if an application is a good fit for ServiceNow**

_Good fit_

> If an application has one of those characteristics it is (usually) a good fit for the ServiceNow Platform.

* Simple forms
* Task management
* Request fulfillment
* Excel driven processes
* Repeatable processes
* 3rd party integrations
* Orchestration of multiple systems
* Single experience from functions in multiple systems
* Web and Mobile access to the same apps and data simultaneously

_Bad fit_

* Unstructed data
* Unrepeatable processes
* Requires graphics processing
* Streaming audio or video
* Highly customized UI

---

**Anatomy of application**

Visual representation of the different components and applications consists of:

![](/img/servicenow/anatomy_application.png)

--- 

**Creating application**

Menu: System Applications > Studio > (Click on "Create Application")
Other Option: System Applications > My Company Applications > (Click on "Create new")

_Guided Application Creator / Guided App Creator_

Guides you through the creation process of a Scoped Application. 

_Roles_

Roles allowing to use Guided App Creator

* sn_g_app_creator.app_creator: Allows to create applications with private scope
* sn_g_app_creator.global: Allows to create applications in global scope

_System Properties_

* sn_g_app_creator.allow_global: Allows all users with `sn_g_app_creator.app_creator` role to creat applications in the global scope

_Panes_

* Info Pane
    * Application Details
        * Name: Your applications name
        * Description: Your applications description
        * Advanced Settings:
            * Scoped: Private scope (namespace) for your code
            * Global: "Bucket" for custom code in Global scope (namespace)
        * Scope: Unique identifier for the application, limited to 18 characters (Value is automatically populated)
    * Roles
        * Roles: select an existing role to restrict access to an application. Only users with the role can access the application.
        * Or use "Creat new Role" to create a new role for the application
    * Application Formats
        * Mobile: Supports users who work from mobile device
        * Classic: Supports users who work via lists and forms
* Data Pane
    * Creating Tables
        * You can select an existing table or create a new table
    * Creating a new Table
        * Upload spreadsheet: Use a .XLSX spreadsheet to add fields to a table
        * Extend a table: Start from an existing ServiceNow table and add fields
        * Create table from scratch: Define table fields
            * Manage Access: Grant access to tables by role and set role permissions
* Design Pane
    * Here you can adjust the prefilled values which will be created into Application Menu and Module(s)

---

**Design and implement a data model**

Menu: System Definition > Tables 

_Creating a table_

Described in this document are the licensing limitations when creating custom tables: [ServiceNow - Custom Table Guide](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide.pdf)

_Creating a table (Default Fields)_

ServiceNow automatically adds the following fields when a table is created:

![](/img/servicenow/sn_auto_created_fields.png)

_Creating a table (Configuration Options)_

When creating a table you have the following options:

* `Extensible`: Can table be extended? (Used in child table, in field "Extends table")
* `Extends table`: When table should extend from other table (e.g. task, cmdb_ci)
* `Create access controls`: If checked will create access controls (ACLs). This **must** be selected for **Scoped Applications**
* `User role`: Creates a role to access table
* `Create module`: Creates Module
* `Create mobile module`: Creates Module for Mobile
* `Add module to menu`: Add to existing Menu "point", or create new
* `New menu name`: If "create new" selected you can enter a new menu name here

_Extend or not?_

| Criteria | Extend |
| --- | --- |
| A table exists with fields similar to what is needed | Yes |
| No similar table exists | No |
| Table will contain sample or seeded data that is used only for reference by the application | No |
| The scripts and workflow for an existing table are useful for the application | Yes |
| You prefer to script the application logic yourself and not inherit logic | No |
| You want to use the approval workflow activities (must extend the Task table for all approval activities except the User Approval activity) | Yes |

> **Conclusion**: If a developer creates a new table from scratch they have complete control over the table's columns and the business logic. For example for reference data to associate to in another table, or for processes that are dissimilar from pre-existing tables and business logic contained on those tables.

---

**Create modules**

They can be automatically created when a table is created (see above). Or manually with more configuration options as described below.

_Application Menu vs. Module_

![](/img/servicenow/app_store_learnv2_buildneedit_xanadu_needitapp_images_ni_niappmenu.png)

_Configuration Options_

When creating a module you have the following options:

* `Title`: Module name
* `Application menu`: Under which application module appears
* `Order`: In increments of 100's defines order of Modules underneath Application menu
* `Hint`: Shown to user when hovered over module
* `Roles`: Restrict module access to specified roles
* `Active`: Defines whether module appears in "All" menu
* `Override application menu roles`: Roles here grant access to users who are not authorized to access the application menu
* `Link Type`: Type of link for module. _Separator_ is used to create "Application menu" in "All" Menu.
* `Table`: Name of table this module is part of
* `View name`: Specifies the view in which module opens
* `Filter`: Used for lists. Speficies filter.

[ServiceNow Product Documentation - Module Link Types](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/administer/auto-test-framework/reference/test-steps-app-navigator-category.html#r_ModuleLinkTypes)

---

**Use Application scope**

The first decision in a _development process_ according to best practice should be whether to put the application in a private scope or global scope

_Private Scope_

* Default behavior
* Private application scope
* Only applications in same scope have full access to create, modfiy and remove or run application data
* can use source control (git / company registry)
* can use delegated development (for non-admin users)

_Global Scope_

* Can **not** integrate with source control
* Can **not** use delegated development

Only create **if**:
* ... application has to delete global data
* ... application needs change appplication access settings on multiple default tables to function
* ... application needs access to APIs only available in global scope. Creating a _globally scoped passthrough script_ (bypass measure by passing functions calls to Global-only APIs) would not meet this requirement.

### Application User Interface

**Create, design, and customize forms**

To customize form views you have multiple options:

_Form Layout_

![](/img/servicenow/2025-07-01_16h54_08.png)

* [1] Add Field: Click Arrow to the right to add a Field to the current View [3] and current Section [4]
* [1] Remove Field: Click Arrow to the left to remove a Field from current View and current Section
* [4] Add Section: Click on "New..."
* [2] Create new Field: Fill out and create a new Field on the table (automatically added to form and first section) 

_Form Designer_

![](/img/servicenow/2025-07-01_16h58_38.png)

* [1] Current Table
* [2] Current View
* [3] Create new Section
* [4] Remove Field from Section and View
* [5] Drag onto Section to add existing Field
* [6] Drag Field Type onto Section to create a new field (change name by clicking on Settings icon)

_Form Builder_

![](/img/servicenow/2025-07-01_17h03_32.png)

* [1] Current Table
* [2] Current View
* [3] Create new Section
* [4] Drag onto Section to add existing Field
* [5] Click to open popup, to create new field on table
* [6] Click "Delete Field" to remove from Section

**Write, test, and debug client-side scripts for desktop**

* Open the Browser Console and Inspect Script, Debug

**Write, test, and debug server-side scripts**

* Debug Log: `System Diagnostics > Debug Log`
    * displays gs.debug(), gs.info(), gs.print() and gs.log() statements as well as server logging information 
* Debug Business Rule: `System Diagnostics > Debug Business Rule`
    * messages indicate which business rules are being run and when they are started (==>), finished (<==), or skipped (===)
* Debug Security Rules: `System Security > Debug Security Rules`
* Stop Debugging: `System Security > Stop Debugging`
    * disables all debugging processes


**Use a Record Producer as an application's UI**

Record producers use the Catalog Item user interface to create records in application-specific tables.

_Creating a record producer from Table_

* Configure a table, under related links
* Click on "Add to Service Catalog"

![](/img/servicenow/2025-07-01_17h10_59.png)

This opens a popup from which you can select fields to create a record producer for this table's records.

_Poplate record producer data and redirect users_

![](/img/servicenow/2025-06-27_04-26-07-7e7fa70529bdec183392b6d61ef5343e.png)

### Security and Restricting Access

**Restrict access to applications and application modules**

* Application Menu:
  * Go to System Definition → Application Menus or Studio → Application Explorer → Navigation → Application Menus → [Your App].
  * Click Edit roles and assign only the roles permitted to view the application. Users without those roles won’t see it  ￼.
* Application Module:
  * Navigate to System Definition → Modules or via Studio → Application Explorer → Navigation → Modules → [Module].
  * In the Visibility (roles) field, add the roles that should have access. Users without those won’t see the module (

**Manually and automatically create, test, and debug Access Controls**

* Create ACLs
  * Manually
    * With the `security_admin` role you can elevate yourself
    * Now create ACLs
  * Automatically
    * When creating a table you can select a checkbox and ACLs are created
* Test ACLs
  * Impersonate as User and access a table / record / field
  * Or use "Access Analyzer"
  * Or use "Debug Security Rules" Module
* Debug ACLs
  * Same as above

_Debug Security Rules Output_

| Icon | Description |
| --- | --- |
| A green checkmark (Green checkmark‎) | Indicates the table or field passed the criteria. |
| A red x icon (Red x icon)	| Indicates the table or field did not pass. |
| An empty gray circle icon (Grey circle icon‎) | Indicates the ACL evaluation did not need to be performed. |
| A blue checkmark, x, or empty circle | Indicates that the ACL was taken from a cached result of a previous ACL check. The icons mean the same as the above. |

_ACL Execution Order_

* From most specific (field), to most generic (record)
  * If a user fails a table ACL rule, the user is denied access to all fields in the table, even if the user passes a field ACL rule.
  * If a user passes a table ACL rule, but fails a field ACL rule, the user cannot access the field described by the field ACL rule
* Order in General: Table evaluated first, then field
* Order in ACL: Roles, Condition, Script

**Use GlideSystem methods to script security**

Important methods:

* Server-Side: GlideSystem (gs)
  * getUser()
  * getUserID()
  * getUserName()
  * hasRole()
  * isLoggedIn()
  * isInteractive()
  * getSession()

**Other Scripted Security Methods**

_The client-side GlideUser (g_user) API has these methods:_

* hasRole()
* hasRoleExactly()
* hasRoleFromList()
* hasRoles()

The client-side API methods can be used in any client-side script, such as Client Scripts and UI Policy scripts. Client-side security is the easiest security to break. Do not depend on client-side scripts to secure sensitive data.

_The server-side GlideSystem (gs) API has these methods:_

* getUser()
* getUserID()
* getUserName()
* hasRole()
* isLoggedIn()
* isInteractive()
* getSession()

_The server-side GlideElement API has methods to check whether a user's role allows them to access the associated GlideRecord(s):_

* canCreate()
* canRead()
* canWrite()

**Use Application Scope to protect application artifacts**

_Application design and runtime_

* JavaScript Mode: Configurable which JavaScript version the scope supports (ES2021 / ES5)
* Runtime Access Tracking: 
    * None: Automatically accept all requests for cross-scope resources, without logging
    * Tracking: Automatically accept all requests for cross-scope resources, with logging
    * Enforcing: Manual authorization by an administrator for cross-scope requests, with logging
* Restrict Table Choices: Restrict which cross scope tables can be seen by the application

> **Important**: After installation, the system no longer tracks new runtime access requests. Only during development.

Runtime access requests / grants are stored in related list "Cross-scope privilege"

_Table design and runtime_

Records:
* Accessible from: All application scopes / this application scope only
* Can read: 
    * required for all other options to be available
    * Allow other applications to read from this table
    * if this + accessible from --> Other Applications can create Business Rules
* Can write
    * Allow other applications to write values to this table
* Can create
    * Allow script object from other applications to create records on this table
* Can delete
    * Allow script object from other applications to delete records from this table
* Allow access to this table via web services: 
    * Allow inbound webservice queries on this table. User still needs correct permissions. Even without checkbox.

Configuration:
* Allow configuration: 
    * Accessible from needs to be set to "All application scopes"
    * Allows applications in other scopes to create the following on this table:
        * Business Rules
        * UI Actions
        * Client Scripts
        * Add fields (extended fields are in different scope)

_Script protection policy_

You can protect your script with the following options:
* None: Allow other application developers to customize your script
* Read-only: Allow other application developers read-only access
* Protected: Prevent other application developers from access and customization

> **Important**: This is only enforced on instances where application not developed, and for Store-Apps. For all others you can just remove the Protection Policy.


### Application Automation

**Write, test, and debug Workflow and Flow Designer**

Flow Designer enables process owners to automate work by building multi-step flows from reusable components without having to code. Workflows handle business process automation with drag-and-drop functionality, while Flow Designer provides a modern no-code approach for creating automated processes with actions, triggers, and data flow management.

**Create and use Application Properties**

Application properties are used to set application parameters and change application behavior dynamically. These are configuration settings that allow developers to create customizable variables for applications, enabling runtime behavior modifications without code changes.

* Flow-Designer: Testing a flow which modifies data has no option of rollback.

**Create Events, Scheduled Script Executions (Scheduled Jobs), and Utils (application) Script Includes**

Events trigger automated responses to system changes. Scheduled jobs operate in the background via worker and execute scripts at predetermined times or intervals. Script Includes contain reusable server-side JavaScript functions that can be called from other scripts throughout the application.

* Events: Register Event, generate event, handle event
* Event Handlers: Email Notification, Script Action (Script executed when event)
* Schedule Script Execution: Available Classes are GlideRecord and GlideSystem (of course more). But no current object

**Send and receive email**

Applications can process incoming email and send notifications ServiceNow Developers. This involves configuring email notifications, creating inbound email actions to process incoming messages, and using notification records to send automated emails based on system events.

![](/img/servicenow/inbound-action-processing.png)

* Inbound Email
    * In Script has these options: current, email, event
    * Inbound email flows take priority over scripts
    * User matching:
        * By email address
        * if no user found -> 
    * Inbound Action
        * if from untrusted domain, or user not matched impersonates guest user
        * if user locked out inbound action fails
        * otherwise if user exists impersonates that user
    * Email will be moved to Junk Folder if
        * Email ignored: If an email is ignored, it will be sent to the junk folder.
        * Email not in Trusted Domains: If the email domain is not added in the Trusted Domains field in Email Properties.
        * Inbound email action: If the message is ignored by an inbound email action.
        * SPAM protection: If the email headers have "X-ServiceNow-Spam-Flag:YES", it indicates the email may be spam.
        * Email Filters: Enabling the email filter plugin brings filters like Ignore header, Ignore sender, Ignore subject, and Move to Junk.
        * Email sender passed: This sender, along with the user being locked out or inactive, can cause emails to end up in the Junk folder.
* Outbound Email
    * triggered by event
    * triggered by condition on table
    * weight - only email with highest weight is sent if
        * .. they have same target table and recipients
    * default weight = 0 (email always sent if condition met)

**Design and create homepages and reports**

Homepages provide customized dashboards with widgets and performance analytics for users. Reports generate data visualizations and summaries from ServiceNow tables, allowing for scheduled distribution and real-time monitoring of application metrics and KPIs.

* Gauge: Visualization component on homepage


### Working with External Data

**Import data in CSV or Excel format** 

* Use the "Load Data" module
* This creates a System Import Set
* You can then use Transform Maps to map imported columns to preexisting columns in servicenow tables

> If the fields in import and target table are the same (or at least some) you can use "Auto map matching fields" on Table Transform Map related links. This will create mapping records for all the fields withe the same names.

**Integrate to, including testing and debugging, an external data source using REST**

1. Create REST Message (Base) and Endpoint (URL)
2. Create Request action: Like another action in Workflow Studio but specifically for REST Messages
3. Create Data Source in Module: `All > System Import Sets > Administration > Data Sources` from type RESt
4. Configure Data Source options like parsing and data xpath

> Or more modern would be to use a "Data Stream" action, which is essentiall the same :)

_Testing_

Either manually

or with ATF

* has no Test-Step limit

### Managing Applications

**Download and install applications**

Applications can be retrieved:
* ... from the Store
* ... from Company Registry
* ... via Update Set

_Store_

1. Entitle in Store
2. Install in Application Manager

_Company Registry_

1. Go to "My Company Applications"
2. Install a specific version

_Update Set_

1. Retrieve / upload update set
2. Apply

**Use Delegated Development to manage source code and code review**

_Delegated Development_

Add developers (non-admins) or groups which can develop and/or deploy the application. 

> **Important**: Developer permissions are available only for scoped apps, not global apps.

These granular permission can be defined for each developer/group:

Developer Permissions
* Delete Application: Allows deletion of scoped applications.
* Source Control: Grants full access to source control.
* All File Types: Access to all application file types, similar to admin role with limitations.
* Playbooks: Access to create processes in the Playbooks design environment.
* Integrations: Access to web service APIs and Integration Hub.
* Reporting: Access to reports and scheduled reports.
* Notifications: Manage automatic email notifications.
* Decision Tables: Create decision logic with multiple rules.
* Mobile Builders: Access to mobile app builders.
* UI Builder: Create pages for experiences.
* Workflow: Access to Workflow Editor and Activity Creator.
* Service Catalog: Manage catalog-related file types.
* Service Portal: Access to Service Portal tools.
* Workflow Studio: Create flows and actions.
* Tables & Forms: Manage model and layout file types.
* Manage ACLs & Roles: Access to security-related file types.
* Allow Scripting: Write access to script fields.
* Manage Collaborators: Invite and manage users/groups.
* Delegated Admin: Access to all delegated development permissions.

Deployment Permissions
* Upgrade App: Permission to upgrade installed applications.
* Publish To Update Set: Publish applications to update sets.
* Publish To App Store: Publish applications to ServiceNow Store.
* Manage Update Set: Manage local and retrieved update sets.
* Publish To App Repo: Publish applications to the application repository.
* Submit for Deployment: Submit applications for review and deployment.

_Team Development_

Allows paralell programming with git-like source control between multiple servicenow instances. You develop on subprod-instances and push to a parent instance.

There Team Development administrators have the option to require peer review before changes applied. 

**Use the ServiceNow Git integration to manage source code**

Allows developers to store source code and configuration records of an application in a git repository. On a git server.

* Actions possible in servicenow and on git-server: Create Branch
* Store local changes for later use: Stash

### Coding

**Angular.js**

_``ng-if`` vs. ``ng-show``_

1. `ng-if` will remove elements from DOM. This means that all your handlers or anything else attached to those elements will be lost. For example, if you bound a click handler to one of child elements, when `ng-if` evaluates to false, that element will be removed from DOM and your click handler will not work any more, even after `ng-if` later evaluates to true and displays the element. You will need to reattach the handler.
2. `ng-show`/`ng-hide` does not remove the elements from DOM. It uses CSS styles to hide/show elements (note: you might need to add your own classes). This way your handlers that were attached to children will not be lost.

[Source](https://stackoverflow.com/questions/21869283/when-to-favor-`ng-if`-vs-`ng-show`-`ng-hide`)

## Links

* [Exam Blueprint - CAD Certification](https://learning.servicenow.com/lxp/en/credentials/certified-application-developer-mainline-exam-blueprint?id=kb_article_view&sysparm_article=KB0011498)
*  [ServiceNow Developer - Professional Developer Guide for the Now Platform](https://developer.servicenow.com/dev.do#!/guides/yokohama/now-platform/pro-dev-guide/pro-dev-intro)
* [ServiceNow Developer - Create the NeedIt Application and Application Files](https://developer.servicenow.com/dev.do#!/learn/courses/xanadu/app_store_learnv2_buildneedit_xanadu_build_the_needit_application/app_store_learnv2_buildneedit_xanadu_create_the_needit_application_and_application_files/app_store_learnv2_buildneedit_xanadu_build_the_needit_application_objectives)
* [ServiceNow Developer - Build my first application](https://developer.servicenow.com/dev.do#!/learn/courses/washingtondc/app_store_learnv2_buildmyfirstapp_washingtondc_build_my_first_application)
* [ServiceNow Product Documentation - Select user experiences in Guided Application Creator](https://www.servicenow.com/docs/bundle/washingtondc-application-development/page/build/guided-app-creator/task/gac-select-ux.html)
* [ServiceNow Community - Understanding Application Scope](https://www.servicenow.com/community/developer-articles/understanding-application-scope-on-the-now-platform-whitepaper/ta-p/2326214)
* [ServiceNow - Custom Table Guide](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide.pdf)
* [ServiceNow - Data Encryption Whitepaper](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-data-encryption-with-servicenow.pdf)
* [ServiceNow Product Documentation - Exploring Access Control List](https://www.servicenow.com/docs/bundle/vancouver-platform-security/page/administer/contextual-security/concept/exploring-access-control-list.html)
* [ServiceNow Product Documentation - ACL rule types](https://www.servicenow.com/docs/bundle/xanadu-platform-security/page/administer/contextual-security/concept/acl-rule-types.html)
* [ServiceNow Developer - Securing Applications against unauthorized access](https://developer.servicenow.com/dev.do#!/learn/learning-plans/xanadu/new_to_servicenow/app_store_learnv2_securingapps_xanadu_scripting_security)
* [ServiceNow Product Documentation - Javascript engine feature support](https://www.servicenow.com/docs/csh?topicname=javascript-engine-feature-support.html&version=latest)
* [ServiceNow Product Documentation - Application access settings](https://www.servicenow.com/docs/csh?topicname=c_ApplicationAccessSettings.html&version=latest)
* [ServiceNow Product Documentation - Script protection policy](https://www.servicenow.com/docs/csh?topicname=c_ScriptProtectionPolicy.html&version=latest)
* [ServiceNow Product Documentation - Access enforcement for ServiceNow Store apps](https://www.servicenow.com/docs/csh?topicname=c_SubscriptionEnforcement.html&version=latest)
* [ServiceNow Support - Email Notification -WEight ](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0829694)
* [ServiceNow Product Documentation - Matching Email to Existing User](https://www.servicenow.com/docs/csh?topicname=r_MatchingEmailToExistingUsers.html&version=latest)
* [ServiceNow Support - Inbound Email moved to Junk Folder](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0744905)
* [ServiceNow Product Documentation - Team Development - Code Review](https://www.servicenow.com/docs/csh?topicname=c_CodeReview.html&version=latest)
* [ServiceNow Product Documentation - Developer and deployment permissions](https://www.servicenow.com/docs/csh?topicname=developer-permissions.html&version=latest)
* [ServiceNow Developer - What is Source Control](https://developer.servicenow.com/dev.do#!/learn/learning-plans/yokohama/new_to_servicenow/app_store_learnv2_devenvironment_yokohama_what_is_source_control)
* [ServiceNow Product Documentation - Create a REST (Integration Hub) Data Source](https://www.servicenow.com/docs/csh?topicname=create-rest-type-data-source.html&version=latest)
