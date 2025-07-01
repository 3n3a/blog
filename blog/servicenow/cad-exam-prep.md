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

### Application Automation

### Working with External Data

### Managing Applications

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