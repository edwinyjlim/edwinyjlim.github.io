---
title: API Documentation
date: 2022-07-06
description: I wrote documentation for New York City's 311 Public API.
postContainerSize: md
sidebar:
  - {name: 'NYC 311', link: '#nyc-311'}
  - {name: 'API Overview', link: '#api-overview'}
  - {name: 'API Limits', link: '#api-limits', sublevel: 1}
  - {name: 'API Version', link: '#api-version', sublevel: 1}
  - {name: 'Base URL', link: '#base-url', sublevel: 1}
  - {name: 'Requests & Methods', link: '#requests-and-methods', sublevel: 1}
  - {name: 'Responses & Status Codes', link: '#responses-and-status-codes', sublevel: 1}
  - {name: 'Authentication', link: '#authentication', sublevel: 1}
  - {name: 'Quick Start Guide', link: '#quick-start-guide', sublevel: 1}
  - {name: 'API Reference', link: '#api-reference'}
  - {name: 'Calendar', link: '#calendar', sublevel: 1}
  - {name: 'Categories', link: '#categories', sublevel: 1}
  - {name: 'Content', link: '#content', sublevel: 1}
  - {name: 'Service Requests', link: '#service-requests', sublevel: 1}
  - {name: 'Statuses', link: '#statuses', sublevel: 1}


tags:
  - api
  - coding examples
  - data schema
  - reference docs
  - guides
---

# NYC 311 Public API Documentation

***A NOTE*** New York City’s developer documentation (https://api-portal.nyc.gov) is currently unusable. It suffers from several typos, blank sections, conflicting information, dead links, no data schemas, and no examples.Through trial and error, I experimented with the 311 Public API enough to fill in the gaps and offer improvements. 

<div class="divider"></div>

## <a name="nyc-311"></a> NYC 311

NYC 311 is central hub for New York City’s municipal services and non-emergency issues reported by the community.  It can be accessed by telephone at 3-1-1 and by web at [https://portal.311.nyc.gov/](https://portal.311.nyc.gov/).

## <a name="api-overview"></a> API Overview

The **NYC 311 Public API** is a RESTful web service published by the New York City government. This web service offers the latest updates on the city’s many 311 resources which include:

- 311 Service Requests
- Garbage Collection
- Parking
- Weather Alerts
- Knowledge Articles
- and more It can be  a special telephone number

This documentation is aimed to help developers integrate this data into their applications. The **NYC 311 Public API** is available to the general public through online signup at [https://api-portal.nyc.gov](https://api-portal.nyc.gov). 

## <a name="api-limits"></a> API Limits

All API is restricted to a daily rate limit for requests. If your application requires an increased API rate limit, you must apply for a special API key.

## <a name="api-version"></a> API Version

The **NYC 311 Public API** is currently on version 1.0. 

## <a name="base-url"></a> Base URL

The **NYC 311 Public API** endpoints are accessed through the base URL.

```plaintext
https://api.nyc.gov/public/api
```

## <a name="requests-and-methods"></a> Requests & Methods

The **NYC 311 Public API** is built upon REST principles. **GET** and **POST** are currently the only request methods supported. Every request requires a valid API Key for authentication. 

## <a name="responses-and-status-codes"></a> Responses & Status Codes

All responses are returned in the **JSON** format. Each response will have an HTTP status code and a potential error message. 

**200 OK —** Everything went smoothly. Success.

```json
{ "data": "..." }
```

**400 Bad Service Request —** The request and its parameters may be missing or incorrectly formatted.

```json
{
  "Error": {
    "Code": "BadRequest",
    "Message": "Invalid Parameter: from date is greater than to date"
  }
}
```

**401 Access Denied —** The provided API Key are not authorized to make the request.

```json
{
    "statusCode": 401,
    "message": "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."
}
```

**404 Not Found —** The requested endpoint is not recognized.

```json
{
    "statusCode": 404,
    "message": "Resource not found"
}
```

**500 Internal Service Error —** The server cannot process the request.

```json
{
  "Error": {
    "Code": "InternalServerError",
    "Message": "No MediaTypeFormatter is available to read an object of type 'Object' from content with media type 'application/octet-stream'."
  }
}
```

## <a name="authentication"></a> Authentication

All requests must have a valid API Key ****in order to successfully call the **NYC 311 Public API**. Login to the **NYC API Developers Portal** at [https://api-portal.nyc.gov](https://api-portal.nyc.gov) to obtain an API Key.

Pass the API Key to the field `Ocp-Apim-Subscription-Key` in the HTTP request header.

**Request Header Example**

```bash
GET https://api.nyc.gov/public/api/Status/CodeBlue HTTP/1.1
Ocp-Apim-Subscription-Key: {API Key}
```

## <a name="quick-start-guide"></a> Quick Start Guide

Get a quick start and connect to the **NYC 311 Public API** by completing the following steps.

1. Create a profile and login to the **NYC API Developers Portal** at [https://api-portal.nyc.gov](https://api-portal.nyc.gov).
    
    <details open>
      <summary> Screenshot with annotations in <b style="color: red">red</b>.
      </summary>
      <img src="/img/quickStartGuideStep1.png" style="width: 80%">
    </details>      

2. Click *Products* at the top of the page.
    
    <details >
      <summary> Screenshot with annotations in <b style="color: red">red</b>.
      </summary>
      <img src="/img/quickStartGuideStep2.png" style="width: 80%">
    </details>  
        
3. Select the *NYC 311 Public Developers* product.
    
    <details >
      <summary> Screenshot with annotations in <b style="color: red">red</b>.
      </summary>
      <img src="/img/quickStartGuideStep3.png" style="width: 80%">
    </details>  
        
4. Type the name of your application and click the *Subscribe* button.
    
    <details>
      <summary> Screenshot with annotations in <b style="color: red">red</b>.
      </summary>
      <img src="/img/quickStartGuideStep4.png" style="width: 80%">
    </details>
        
5. Click *Profile* at the tope of the page and find the new API Key under the section *Subscriptions.* It may take a few minutes for the API Key to be generated.

    <details >
      <summary> Screenshot with annotations in <b style="color: red">red</b>.
      </summary>
      <img src="/img/quickStartGuideStep1.png" style="width: 80%">
    </details>  

        
6. Pass the API Key to the field <code>Ocp-Apim-Subscription-Key</code> in the header of the HTTP request.

7. Make API requests! 


**Request Examples**

---
   
  - **cURL**
        
    ```bash
      curl --location --request GET "https://api.nyc.gov/public/api/Status/CodeBlue" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
        
  - **Javascript - Node.js**
        
    ```jsx
      var request = require('request');
      var options = {
        'method': 'GET',
        'url': 'https://api.nyc.gov/public/api/Status/CodeBlue',
        'headers': {
          'Ocp-Apim-Subscription-Key': '{API Key}'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
    ```
        
  - **Python - Requests**
        
    ```jsx
      import requests
      
      url = "https://api.nyc.gov/public/api/Status/CodeBlue"
      
      payload={}
      headers = {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
      
      response = requests.request("GET", url, headers=headers, data=payload)
      
      print(response.text)
    ```
        

---

## <a name="api-reference"></a> API Reference

- [Calendar](#calendar)
- [Categories](#categories)
- [Content](#content)
- [Service Requests](#service-requests)
- [Statuses](#statuses)

## <a name="calendar"></a> Calendar

The daily calendar updates regarding New York City Street Parking, Garbage Collection, and Public Schools.

<div class="spacer-2"></div>


### <b class="text-p-color">GET</b> /GetCalendar

Get the daily status for Street Parking, Garbage Collection and Public Schools in New York City for a specified date range. 


<div class="spacer-2"></div>

**Request Query Parameters**

---


| **field name**    | **required** | **type** | **examples** | **description**  |
| ----------------- | ------------ | --- | --- | --- |
| fromdate | true | string | 07/04/2022 | The date of the first day in the specified date range. Use the format MM/DD/YYYY. |
| todate | true | string | 07/05/2022 | The date of the final day in the specified date range. Use the format MM/DD/YYYY. |

*NOTE: A single request can only return a maximum of 90 days worth of data. The date range is also inclusive.

<div class="spacer-2"></div>


**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/GetCalendar?fromdate=07/04/2022&todate=07/05/2022" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/GetCalendar?fromdate=07/04/2022&todate=07/05/2022',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/GetCalendar?fromdate=07/04/2022&todate=07/05/2022"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```


<div class="spacer-2"></div>


**Response Schema**

---

**days** *array*

Detailed list of calendar day objects. 

> **days.today_id** *integer*

> The id of a calendar day in YYYYMMDD format. E.g. 07/04/2022 is 20220704

> **days.items** *array*

> A list of New York City service updates for a particular calendar day.

>> **days.items.exceptionName** *string*

>> The title of the update issued by a New York City service.

>> **days.items.details** *string*

>> The description of the update issued by a New York City service.

>> **days.items.status** *string*

>> The status of the update issued by a New York City service. E.g. “IN EFFECT” “SUSPENDED” “NOT IN SESSION”

>> **days.items.type** *string*

>> The type of New York City service.


<div class="spacer-2"></div>

**Response Examples**

---

```json
//  ...?fromdate=07/04/2022&todate=07/05/2022
// 200 OK Response 

{
    "days": [
        {
            "today_id": "20220704",
            "items": [
                {
                    "exceptionName": "Independence Day 2022",
                    "details": "Alternate side parking and meters are suspended for Independence Day.",
                    "status": "SUSPENDED",
                    "type": "Alternate Side Parking"
                },
                {
                    "exceptionName": "Independence Day 2022",
                    "details": "Trash, recycling, and compost collections are suspended for Independence Day.",
                    "status": "SUSPENDED",
                    "type": "Collections"
                },
                {
                    "exceptionName": "Summer 2022",
                    "details": "Public schools are not in session.",
                    "status": "NOT IN SESSION",
                    "type": "Schools"
                }
            ]
        },
        {
            "today_id": "20220705",
            "items": [
                {
                    "exceptionName": "ASP Reform Ending 7/5 - 7/8/22",
                    "details": "Alternate side parking and meters are in effect. ASP Reform Rules ended as of July 5. Follow the rules as posted on ASP signs.",
                    "status": "IN EFFECT",
                    "type": "Alternate Side Parking"
                },
                {
                    "details": "Trash and recycling collections are on schedule. Compost collections in participating neighborhoods are also on schedule.",
                    "status": "ON SCHEDULE",
                    "type": "Collections"
                },
                {
                    "exceptionName": "Summer 2022",
                    "details": "Public schools are not in session.",
                    "status": "NOT IN SESSION",
                    "type": "Schools"
                }
            ]
        }
    ]
}
```

## <a name="categories"></a> Categories

The categories of the New York City 311 contents.

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /GetCategory

Get all the categories and subcategories from the New York City 311 platform.

<div class="spacer-2"></div>

**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/GetCategory" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/GetCategory',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/GetCategory"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>


**Response Schema**

---

**Name** *string*

The name of the NYC 311 category.

**CategoryURL** *string*

A URL to the category’s 311 webpage.

**CategoryId** *string*

The id of the category.

**SubCategory** *array*

A list of subcategories nested under the category. 

> **SubCategory.Name** *string*

> The name of the category.

> **SubCategory.CategoryURL** *string*

> A URL to the category’s 311 webpage.

> **SubCategory.Id** *string*

> The id of the category.

> **SubCategory.ParentCategoryId** *string*

> The id of the parent category.

> **SubCategory.SubCategory** *array*

> A list of subcategories nested under the category. 

>>>**SubCategory.SubCategory.SubCategory…** *can continue nesting*

<div class="spacer-2"></div>

**Response Examples**

---

```json
// 200 OK Response

[
    //...
    {
        "Name": "Courts & Law",
        "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-3",
        "CategoryId": "311-3",
        "SubCategory": [
            {
                "Name": "Courts & Law",
                "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-35",
                "CategoryId": "311-35",
                "ParentCategoryId": "311-3"
            },
            {
                "Name": "Jails & Inmates",
                "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-34",
                "CategoryId": "311-34",
                "ParentCategoryId": "311-3",
                "SubCategory": [
                    {
                        "Name": "Arrests",
                        "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-97",
                        "CategoryId": "311-97",
                        "ParentCategoryId": "311-34",
                        "SubCategory": []
                    },
                    {
                        "Name": "Inmates",
                        "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-98",
                        "CategoryId": "311-98",
                        "ParentCategoryId": "311-34",
                        "SubCategory": []
                    },
                    {
                        "Name": "Jails & Detention Centers",
                        "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-99",
                        "CategoryId": "311-99",
                        "ParentCategoryId": "311-34",
                        "SubCategory": []
                    },
                    {
                        "Name": "Probation & Parole",
                        "CategoryURL": "https://portal.311.nyc.gov/category/?id=311-100",
                        "CategoryId": "311-100",
                        "ParentCategoryId": "311-34",
                        "SubCategory": []
                    }
                ]
            }
        ]
    },
   //...
]
```

## <a name="content"></a> Content

Find all content from knowledge articles published on New York City’s 311 website. 

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /GetContent

Get all relevant content from New York City’s 311 website using text search. 

<div class="spacer-2"></div>

**Request Query Parameters**

---

| field name | required | type | examples | description  |
| --- | --- | --- | --- | --- |
| SearchText | true | string | “composting”, “special education”, “parks and recreation” | The relevant text you want to search for. No numbers or special characters are permitted. |

**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/GetContent?SearchText=composting" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/GetContent?SearchText=composting',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/GetContent?SearchText=composting"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    

**Response Schema**

---

**KnowledgeArticle** array

List of published 311 articles.

> **KnowledgeArticle.ArticlePublicNumber** *string*

> The unique identifier for the published article.

> **KnowledgeArticle.Title** *string*

> The title of the article.

> **KnowledgeArticle.Description** *string*

> A short description of the article.

> **KnowledgeArticle.TotalTitle** *integer*

> The calculated score of how well the SearchText matched the article’s title.

> **KnowledgeArticle.TotalContent** *integer*

> The calculated score of how well the SearchText matched the article’s contents.

> **KnowledgeArticle.TotalWeight** *integer*

> The total weighted score calculated by summing together KnowledgeArticle.TotalTitle and KnowledgeArticle.TotalContent.

> **KnowledgeArticle.Section** *array*

> A list of the sections that separate the contents within the article.

>> **KnowledgeArticle.Section.Name** *string*

>> The title of the article’s section.

>> **KnowledgeArticle.Section.Content** *string*

>> The full contents of the article’s section in HTML format.

>> **KnowledgeArticle.Section.ContentAction** *array*

>> A list of problems and agencies relevant to the contents of the article’s section.

>>> **KnowledgeArticle.Section.ContentAction.Agency** *string*

>>> The relevant city agency or department.

>>> **KnowledgeArticle.Section.ContentAction.Name** *string*

>>> The action that needs to be taken with the city agency.

>>> **KnowledgeArticle.Section.ContentAction.Problem** *string*

>>> A description of the issue.

<div class="spacer-2"></div>

**Response Examples**

---

```json
// ...?SearchText=composting
// 200 OK Response

{
    "KnowledgeArticle": [
        {
            "ArticlePublicNumber": "KA-02030",
            "Title": "Curbside Composting",
            "Description": "Learn about compost collection in New York City.",
            "TotalTitle": 330,
            "TotalContent": 106,
            "TotalWeight": 436,
            "Section": [
                {
                    "Name": "NYC Today Collections Status Banner",
                    "Content": "<style type='text/css'>.divTable {\n                display: table;\n                width: 100%;\n                margin-bottom: 15px;\n}\n.divTableRow {\n                display: table-row;\n}\n.divTableCell3, .divTableHead {\n                border: 0px solid #cccccc;\n                display: table-cell;\n                padding: 6px 12px;\n                background-color: #FFF200;\n                color: black;\n                font-weight: bold;\n                text-align: center;\n}\n.divTableCell4, .divTableHead {\n                border: 1px solid #cccccc;\n                display: table-cell;\n                padding: 12px 12px;\n                background-color: #eeeeee;\n}\n.divTableBody {\n                display: table-row-group;\n}</style><div class='divTable'><div class='divTableBody'><div class='divTableRow'><div class='divTableCell3'>Today&#39;s&nbsp;Status</div></div><div class='divTableRow'><div class='divTableCell4'><p><u><a href='https://portal.311.nyc.gov/#feedsContainer'>Find out if collections are on schedule, delayed, or suspended.</a></u></p></div></div></div></div><div style='background:#eee;border:1px solid #ccc;padding:5px 10px; margin-bottom:15px;'><p><em><strong>Need something else?</strong></em></p><ul><li><a class='kalink' target='_blank' href='https://portal.311.nyc.gov/article/?kanumber=KA-01788'>Missed Trash, Recycling, or Compost Collection</a></li></ul></div><p>The Curbside Composting program collects food scraps, food-soiled paper, and yard waste and turns&nbsp;it into compost or renewable energy.</p><p>This service is voluntary and available for residential buildings in selected neighborhoods. If you&rsquo;re interested in receiving composting, you must&nbsp;<a class='externallink' target='_blank' href='https://www.nyc.gov/curbsidecomposting'>sign up</a>, even if you received the service in the past.</p><p>Curbside Composting will expand to more areas on a rolling basis based on the number of signups in each neighborhood.</p><p>Until service begins in your area, you can:</p><ul><li>Put your food scraps, food-soiled paper, and yard waste in the trash following normal <a class='kalink' target='_blank' href='https://portal.311.nyc.gov/article/?kanumber=KA-02086'>residential trash rules</a></li><li>Take food waste to a&nbsp;<a class='externallink' target='_blank' href='https://www1.nyc.gov/assets/dsny/site/services/food-scraps-and-yard-waste-page/nyc-food-scrap-drop-off-locations'>food scrap drop-off site</a></li><li><a class='externallink' target='_blank' href='https://www.makecompost.nyc/makecompost'>Compost at home</a></li></ul>",
                    "ContentAction": []
                },
                {
                    "Name": "Sign Up for Curbside Composting",
                    "Content": "<p>You can sign up for Curbside Composting online or by phone.</p><p>After you sign up, the Department of Sanitation (DSNY) will let you know if you&#39;re in an eligible neighborhood and notify you when service will start in your area.</p><p>If you don&#39;t live in an area where Curbside Composting is offered yet, DSNY will let you know if the service will expand to your area. DSNY wants to hear from everyone interested in Curbside Composting as it helps to make the case to expand this service to more neighborhoods.</p><p><strong>Online</strong></p><p><a class='externallink' target='_blank' href='https://dsny.force.com/curbsidecomposting/s/'>Sign up for Curbside Composting.</a></p><p><strong>By Phone</strong></p><p>Call 311 for assistance.</p><p>&nbsp;</p><p>&nbsp;</p><p>[62074 24/7]</p>",
                    "ContentAction": []
                },
                {
                    "Name": "Collection Schedule",
                    "Content": "<p>The Curbside Composting collection schedule for your home is based on your address.</p><p>Suspensions may occur for a City holiday or during a snowstorm.</p><p><a class='externallink' target='_blank' href='https://on.nyc.gov/CompostingDay'>Look up the curbside composting schedule for a specific address.</a></p><p><strong>Set Out Rules</strong></p><p>Place your brown bin curbside&nbsp;between 4 PM and midnight the evening before your scheduled pickup.</p><ul><li>If your pickup is before 4 PM, you must retrieve your brown bin by 9 PM.</li><li>If your pickup is after 4 PM, you must retrieve your brown bin&nbsp;by 9 AM the following morning.</li></ul>",
                    "ContentAction": []
                },
                {
                    "Name": "Service Areas",
                    "Content": "<p>Currently, only Community Boards that had previously received Curbside Composting are eligible for service, but not all of these neighborhoods will receive it immediately. Service will resume based on the number of signups and the density of the neighborhood.</p><p>If you don&rsquo;t live in a participating Community Board, you can still sign up to express interest in receiving the service in the future.</p><p>You can look up the Community Board for your address on the <a class='kalink' target='_blank' href='https://portal.311.nyc.gov/article/?kanumber=KA-01785'>Community Boards</a> page.</p><p><strong>Current Service Areas</strong></p><ul><li>Bronx Community Board 8 (Kingsbridge, Riverdale)</li><li>Brooklyn Community Board 1 (Williamsburg, Greenpoint)</li><li>Brooklyn Community Board 2 (DUMBO, Downtown Brooklyn, Fort Greene, Clinton Hill, Brooklyn Heights)</li><li>Brooklyn Community Board 6 (Red Hook, Gowanus, Carroll Gardens, Park Slope)</li><li>Brooklyn Community Board 7 (Sunset Park, Industry City, Windsor Terrace, South Slope)</li><li>Manhattan Community Board 6 (Stuy Town &amp; Peter Cooper Village, Midtown East, Murray Hill)</li><li>Manhattan Community Board 7 (Manhattan Valley, Upper West Side, Lincoln Square)</li></ul><p>If your Community Board is receiving the service and you signed up, DSNY will confirm your&nbsp;information and notify you of the date that Curbside Composting will begin for your building.</p>",
                    "ContentAction": []
                },
                {
                    "Name": "Compost Bins",
                    "Content": "<p>Participants in Curbside Composting can only use brown outdoor composting bins issued by the Department of Sanitation (DSNY) to throw out their food and yard waste.</p><p>If you do not already have a brown bin, you can request one when you sign up, and it will be delivered before your service begins. Participating buildings will be given brown bins before service starts if they no longer have a bin.</p><p><strong>Bin Liners and Bags</strong></p><p>You must use bin liners or bags in your brown bin.</p><p>To line the brown bin, you can use a:</p><ul><li>Clear, untinted plastic liner or bag</li><li>Paper bag</li><li>Certified compostable liner with BPI-USCC logo (Biodegradable Products Institute - US Composting Council)</li></ul><p>You cannot use small plastic shopping bags or black plastic bags to line the bin.</p><p>To line your indoor kitchen container, you can use:</p><ul><li>Small shopping bags</li><li>Newspaper</li><li>Brown paper bags</li><li>Small certified compostable bags</li></ul><p><strong>Replacement Bins</strong></p><p>If your brown bin is lost or has been damaged or stolen, you can request a new one.</p><p>If you qualify to receive a replacement bin, you may need to pick it up from one of the bin distribution locations. The pick-up location will be provided after your request has been reviewed.</p><p><a class='externallink' target='_blank' href='https://dsny.force.com/curbsidecomposting/s/bin-request'>Request a replacement brown bin.</a></p>",
                    "ContentAction": []
                },
                {
                    "Name": "Accepted Items",
                    "Content": "<p><span style='font-size:20px;'><strong>Items Accepted</strong></span></p><p><strong>Food Waste</strong></p><p>You can put food waste in your brown compost bin, including:</p><ul><li>Food scraps</li><li>Coffee grounds and tea bags</li><li>Shells (seafood, nut, and egg)</li><li>Bones</li><li>Spoiled and expired food</li><li>Food-soiled paper (napkins, towels, uncoated plates, bags, trays, or boxes)</li></ul><p><strong>Yard Waste</strong></p><p>You can put small amounts of yard waste in your brown composting bin, such as:</p><ul><li>Leaves</li><li>Grass</li><li>Small twigs and branches</li><li>House plants and flowers</li><li>Hay bales</li></ul><p>If your yard waste can&rsquo;t fit in the bin with the lid closed, or to save room in the bin for food waste, you can:</p><ul><li>Put it in a rigid unlined container labeled &ldquo;Yard Waste&rdquo;</li><li>Put it in a paper lawn and leaf bag</li><li>Tie it into bundles 2 feet by 4 feet or smaller</li></ul><p>Do not use plastic bags. Yard waste set out in plastic bags will be collected as trash.</p><p><span style='font-size:20px;'><strong>Items Not Accepted</strong></span></p><p>You can&rsquo;t put any of the following items in the brown organics bin:</p><ul><li><strong>Trash</strong>, including<ul><li>Diapers and hygienic products</li><li>Animal waste or kitty litter</li><li>Wrappers and packaging</li><li>Foam products</li></ul></li><li><strong>Recyclables</strong>, including<ul><li>Metal</li><li>Glass</li><li>Plastic</li><li>Beverage cartons</li><li>Clean recyclable paper</li><li>Cardboard</li></ul></li></ul>",
                    "ContentAction": []
                },
                {
                    "Name": "Resources",
                    "Content": "<p>You can get bin decals, brochures, guides, and stickers showing what items to put in your brown bin.</p><p><a class='externallink' target='_blank' href='https://nyc.gov/sanitationmaterials'>Download or request Department of Sanitation materials.</a></p>",
                    "ContentAction": []
                },
                {
                    "Name": "Sanitation Holidays",
                    "Content": "<p>In general, there is no collection on sanitation holidays, but that is subject to change. You can check back near the date of the holiday to confirm the collection schedule.</p><p>Usually:</p><ul><li>If a holiday occurs on your trash or compost collection day, put your items out after 4 PM that day for collection beginning the next day.</li><li>If a holiday occurs on your recycling collection day, put your items out after 4 PM the day before your next scheduled recycling collection day.</li></ul><p><strong>2022&nbsp;Sanitation Holidays</strong></p><style type='text/css'>.tg  {border-collapse:collapse;border-spacing:0;margin-bottom: 20px;border-style:solid;border-width:1px;border-color:black;}\n.tg td{padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n  \n.tg .header{background-color:#4472C4;font-size:14px;font-weight:bold;text-align: center;color:#ffffff;border-color:#000000;vertical-align:top; border-width:1px;}\n.tg .cell1{background-color:#B4C6E7;font-size:14px;color:#000000;text-align: center; border-color:#000000}\n.tg .cell2{background-color:#D9E2F3;font-size:14px;color:#000000;text-align: center; border-color:#000000}</style><table class='tg'><tbody><tr><th class='header'>Date</th><th class='header'>Holiday</th></tr><tr><td class='cell1'>January 1 (Saturday)</td><td class='cell1'>New Year&#39;s Day</td></tr><tr><td class='cell2'>January 17 (Monday)</td><td class='cell2'>Martin Luther King Jr. Day</td></tr><tr><td class='cell1'>February 12 (Saturday)</td><td class='cell1'>Lincoln&#39;s Birthday</td></tr><tr><td class='cell2'>February 21 (Monday)</td><td class='cell2'>Washington&#39;s Birthday (Presidents&#39; Day)</td></tr><tr><td class='cell1'>May 30 (Monday)</td><td class='cell1'>Memorial Day</td></tr><tr><td class='cell2'>June 20 (Monday)</td><td class='cell2'>Juneteenth (Observed)</td></tr><tr><td class='cell1'>July 4 (Monday)</td><td class='cell1'>Independence Day</td></tr><tr><td class='cell2'>September 5 (Monday)</td><td class='cell2'>Labor Day</td></tr><tr><td class='cell1'>October 10 (Monday)</td><td class='cell1'>Italian Heritage Day/Indigenous Peoples&#39; Day</td></tr><tr><td class='cell2'>November 8 (Tuesday)</td><td class='cell2'>Election Day</td></tr><tr><td class='cell1'>November 11 (Friday)</td><td class='cell1'>Veterans Day</td></tr><tr><td class='cell2'>November 24 (Thursday)</td><td class='cell2'>Thanksgiving</td></tr><tr><td class='cell1'>December 26 (Monday)</td><td class='cell1'>Christmas (Observed)</td></tr></tbody></table>",
                    "ContentAction": []
                }
            ]
        },
        {
            "ArticlePublicNumber": "KA-02031",
            "Title": "Composting Site Permit",
            "Description": "Apply for a permit for a landscaper or tree service company to dispose of yard waste and buy compost.",
            "TotalTitle": 330,
            "TotalContent": 102,
            "TotalWeight": 432,
            "Section": [
                {
                    "Name": "Composting Site Permit",
                    "Content": "<p>If you are a landscaper or tree service company, you can apply for a Composting Site Permit to discard yard waste and purchase finished compost. The permit is a plastic, wallet-sized card that states the account and permit numbers.</p><p>The Department of Sanitation operates a yard waste composting site at the Staten Island Compost Facility. This site receives leaf and yard waste from landscapers registered with the Composting Site Permit Program.</p><p><a class='externallink' target='_blank' href='https://www1.nyc.gov/assets/dsny/site/services/food-scraps-and-yard-waste-page/commercial-landscapers'>Learn more about getting a Composting Site Permit.</a></p>",
                    "ContentAction": []
                }
            ]
        },
        //... 
    ]
}
```

## <a name="service-requests"></a> Service Requests

Service Requests are the 311 reports submitted by the general public. They can be created and issued through phone or online. A Service Request can be about any one of New York City’s categories such as Noise, Garbage, Education, Transportation, etc. Recent Service Requests can be seen here: [https://portal.311.nyc.gov/check-status/](https://portal.311.nyc.gov/check-status/). 

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /GetServiceRequest

Get the latest information and status of a submitted 311 Service Request. All data that has no privacy concern are retrievable.

<div class="spacer-2"></div>

**Request Query Parameters**

---

| field name | required | type | examples | description  |
| --- | --- | --- | --- | --- |
| srnumber | true | string | 311-10935582 | The unique identifier of a Service Request. A srnumber is generated for every submitted Service Request. |


<div class="spacer-2"></div>


**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/GetServiceRequestList?srnumber=311-10935582" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/GetServiceRequestList?srnumber=311-10935582',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/GetServiceRequestList?srnumber=311-10935582"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    

<div class="spacer-2"></div>

**Response Schema**

---

**SRNumber** *string*

The id of the Service Request.

**Agency** *string*

The city agency relevant to the Service Request.

**Problem** *string*

The issue category of the Service Request.

**ProblemDetails** *string*

The issue subcategory of the Service Request.

**AdditionalDetails** *string*

A description of the Service Request.

**Status** *string*

A status code of the Service Request.

614110001: Open

614110002: In Progress

614110000: Cancel

614110003: Closed

**DateTimeSubmitted** *string*

The date and time of when the Service Request was created in the format `YYYY-MM-DD"T"HH:MM:SS`.

**SLARemainingDays** *string*

The number of days left to resolve the open Service Request in accordance with NYC 311’s Service-Level Agreement.

**ResolutionAction** *string*

A description of the issue resolution when the Service Request closed.

**ResolutionActionUpdatedDate** *string*

The date and time of when the Service Request closed in the format `YYYY-MM-DD"T"HH:MM:SS`.

**Address** *object*

The location of interest reported by the Service Request.

> **Address.Borough** *string*

> The New York City borough of interest.

> **Address.FullAddress** *string*

> The street address of interest.

<div class="spacer-2"></div>

**Response Examples**

---

```json
// ...?srnumber=311-10935582
// 200 OK Response

{
    "SRNumber": "311-10935582",
    "Agency": "Department of Housing Preservation and Development",
    "Problem": "Unsanitary Condition",
    "ProblemDetails": "Garbage/Recycling Storage",
    "AdditionalDetails": "Missing or Inadequate Cans/Lid",
    "Status": "614110002",
    "DateTimeSubmitted": "2022-07-07T14:50:17",
    "Address": {
        "Borough": "MANHATTAN",
        "FullAddress": "435 FORT WASHINGTON AVENUE, MANHATTAN (NEW YORK), NY, 10033"
    }
}
```

<div class="spacer-2"></div>


### <b class="text-p-color">POST</b> /GetServiceRequestList

Retrieve the latest information and statuses for multiple 311 Service Requests with one request.

<div class="spacer-2"></div>

**Request Body Parameters**

---

| field name | required | type | examples | description  |
| --- | --- | --- | --- | --- |
| SRNumbers | true | array | [”311-10935582”, “311-10935466”, “311-10935540”] | An array of multiple Service Request ids. |

<div class="spacer-2"></div>

```json
// pass into the request body

{ "SRNumbers": ["311-10935582", "311-10935466", "311-10935540"] }
```

<div class="spacer-2"></div>

**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request POST "https://api.nyc.gov/public/api/GetServiceRequestList" --header "Ocp-Apim-Subscription-Key: {API Key}" --header "Content-Type: application/json" --data-raw "{SRNumbers: ['311-10935582', '311-10935466', '311-1093554df0']}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.nyc.gov/public/api/GetServiceRequestList',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      },
      'body': {
    		'SRNumbers': ['311-10935582', '311-10935466', '311-1093554df0']
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/GetServiceRequestList"
    
    payload={
      'SRNumbers': ['311-10935582', '311-10935466', '311-1093554df0']
    }
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("POST", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>


**Response Schema**

---

**SRResponses** *array*

A list of Service Requests that match the SRNumbers.

> **SRResponses.SRNumber** *string*

> The id of the Service Request.

> **SRResponses.Agency** *string*

> The city agency relevant to the Service Request.

> **SRResponses.Problem** *string*

> The topic category of the Service Request.

> **SRResponses.ProblemDetails** *string*

> The subcategory of the Service Request.

> **SRResponses.AdditionalDetails** *string*

> A description of the Service Request.

> **SRResponses.Status** *string*

> A status code of the Service Request.

> 614110001: Open

> 614110002: In Progress

> 614110000: Cancel

> 614110003: Closed

> **SRResponses.DateTimeSubmitted** *string*

> The date and time of when the Service Request was created in the format `YYYY-MM-DD"T"HH:MM:SS`.

> **SRResponses.SLARemainingDays** *string*

> The number of days left to resolve the open Service Request in accordance with NYC 311’s Service-Level Agreement.

> **SRResponses.ResolutionAction** *string*

> A description of the issue resolution when the Service Request closed.

> **SRResponses.ResolutionActionUpdatedDate** *string*

> The date and time of when the Service Request closed in the format `YYYY-MM-DD"T"HH:MM:SS`.

> **SRResponses.Address** *object*

> The location of interest reported by the Service Request.

>> **SRResponses.Address.Borough** *string*

>> The New York City borough of interest.

>> **SRResponses.Address.FullAddress** *string*

>> The street address of interest.

<div class="spacer-2"></div>

**Response Example**

---

```json
// Request Body { SRNumbers: ["311-10935582", "311-10935466", "311-10935540"] }
// 200 OK Response

{
    "SRResponses": [
        {
            "SRNumber": "311-10935540",
            "Agency": "Department of Sanitation",
            "Problem": "Missed Collection",
            "ProblemDetails": "Compost",
            "AdditionalDetails": "N/A",
            "ResolutionActionUpdatedDate": "2022-07-08T13:02:55",
            "Status": "614110003",
            "DateTimeSubmitted": "2022-07-07T14:54:11",
            "ResolutionAction": "The Department of Sanitation investigated this complaint and found no condition at the location.",
            "Address": {
                "Borough": "BROOKLYN",
                "FullAddress": "336 3 STREET, BROOKLYN, NY, 11215"
            }
        },
        {
            "SRNumber": "311-10935466",
            "Agency": "Department of Environmental Protection",
            "Problem": "Noise",
            "ProblemDetails": "Jackhammer",
            "AdditionalDetails": "N/A",
            "Status": "614110002",
            "DateTimeSubmitted": "2022-07-07T14:51:35",
            "SLARemainingDays": "7",
            "Address": {
                "Borough": "BROOKLYN",
                "FullAddress": "128 PROSPECT STREET, BROOKLYN, NY, 11201"
            }
        },
        {
            "SRNumber": "311-10935582",
            "Agency": "Department of Housing Preservation and Development",
            "Problem": "Unsanitary Condition",
            "ProblemDetails": "Garbage/Recycling Storage",
            "AdditionalDetails": "Missing or Inadequate Cans/Lid",
            "Status": "614110002",
            "DateTimeSubmitted": "2022-07-07T14:50:17",
            "Address": {
                "Borough": "MANHATTAN",
                "FullAddress": "435 FORT WASHINGTON AVENUE, MANHATTAN (NEW YORK), NY, 10033"
            }
        }
    ]
}
```

<div class="spacer-2"></div>


## <a name="statuses"></a> Statuses

The statuses of New York City’s weather emergencies.

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /Status/CodeBlue

Get the status of Code Blue — a weather emergency issued when outside temperature drops below 32 degrees Farenheight between 8 p.m. and 4 a.m. No one who is homeless and seeking shelter in New York City during Code Blue will be denied.

<div class="spacer-2"></div>


**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/Status/CodeBlue" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/Status/CodeBlue',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/Status/CodeBlue"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>

**Response Schema**

---

**inEffect** *boolean*

Indicates whether Code Blue is in effect.

<div class="spacer-2"></div>

**Response Examples**

---

```json
// 200 OK Response

{ "inEffect": false }
```

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /Status/FireHydrant

Get the status of a Fire Hydrant emergency.

<div class="spacer-2"></div>


**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/Status/FireHydrant" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/Status/FireHydrant',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/Status/FireHydrant"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>

**Response Schema**

---

**inEffect** *boolean*

Indicates whether a Fire Hydrant emergency is in effect.

<div class="spacer-2"></div>

**Response Examples**

---

```json
// 200 OK Response

{ "inEffect": false }
```

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /Status/SnowOnSidewalk

Get the status of a Snow On Sidewalk emergency.

<div class="spacer-2"></div>

**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/Status/SnowOnSidewalk" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/Status/SnowOnSidewalk',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/Status/SnowOnSidewalk"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>

**Response Schema**

---

**inEffect** *boolean*

Indicates whether a Snow on Sidewalk emergency is in effect.

<div class="spacer-2"></div>


**Response Examples**

---

```json
// 200 OK Response

{ "inEffect": false }
```

<div class="spacer-2"></div>

### <b class="text-p-color">GET</b> /Status/SnowOnStreet

Get the status of a Snow On Street emergency.

<div class="spacer-2"></div>

**Request Examples**

---

- cURL
    
    ```bash
    curl --location --request GET "https://api.nyc.gov/public/api/Status/SnowOnStreet" --header "Ocp-Apim-Subscription-Key: {API Key}"
    ```
    
- Javascript - Node.js
    
    ```jsx
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://api.nyc.gov/public/api/Status/SnowOnStreet',
      'headers': {
        'Ocp-Apim-Subscription-Key': '{API Key}'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```
    
- Python - Requests
    
    ```jsx
    import requests
    
    url = "https://api.nyc.gov/public/api/Status/SnowOnStreet"
    
    payload={}
    headers = {
      'Ocp-Apim-Subscription-Key': '{API Key}'
    }
    
    response = requests.request("GET", url, headers=headers, data=payload)
    
    print(response.text)
    ```
    
<div class="spacer-2"></div>

**Response Schema**

---

**inEffect** *boolean*

Indicates whether a Snow on Street emergency is in effect.

<div class="spacer-2"></div>

**Response Examples**

---

```json
// 200 OK Response

{ "inEffect": false }
```

<div class="spacer-2"></div>
