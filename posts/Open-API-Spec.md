---
author: Edwin Lim
title: OpenAPI 3.1 Spec
date: 2022-07-05
description: I created an OpenAPI 3.1 specification document in YAML.
tags:
 - api
 - yaml
 - openapi 
---

# OpenAPI 3.1 Spec

***A Note --*** I created an OpenAPI 3.1 specification for the **New York City 311 Public API**. This structured format enables the use of industry API documentation tools; such as, parsers, auto-generators, data validators, test suites, and more.


<div class="spacer-3"></div>


```yaml

openapi: 3.1.0
info:
  title: NYC 311 Public API - Edwin Lim
  version: '1.0'
  description: >-
    The **NYC 311 Public API** is a RESTful web service published by the New
    York City government. This web service offers the latest updates on the
    city’s many 311 resources such as:


    - 311 Service Requests

    - Garbage Collection

    - Parking

    - Weather Alerts

    - Knowledge Articles

    - and more


    This documentation is aimed to help developers integrate this data into
    their applications. The NYC 311 Public API is available to the general
    public for free through online signup at https://api-portal.nyc.gov. 
  summary: New York City 311 services and data
  contact:
    name: Edwin
    email: edwinyjlim@gmail.com
servers:
  - url: 'https://api.nyc.gov/public/api'
    description: Base URL
paths:
  /GetCalendar:
    get:
      summary: /GetCalendar
      tags: []
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    days:
                      - today_id: '20220704'
                        items:
                          - exceptionName: Independence Day 2022
                            details: >-
                              Alternate side parking and meters are suspended
                              for Independence Day.
                            status: SUSPENDED
                            type: Alternate Side Parking
                          - exceptionName: Independence Day 2022
                            details: >-
                              Trash, recycling, and compost collections are
                              suspended for Independence Day.
                            status: SUSPENDED
                            type: Collections
                          - exceptionName: Summer 2022
                            details: Public schools are not in session.
                            status: NOT IN SESSION
                            type: Schools
                      - today_id: '20220705'
                        items:
                          - exceptionName: ASP Reform Ending 7/5 - 7/8/22
                            details: >-
                              Alternate side parking and meters are in effect.
                              ASP Reform Rules ended as of July 5. Follow the
                              rules as posted on ASP signs.
                            status: IN EFFECT
                            type: Alternate Side Parking
                          - details: >-
                              Trash and recycling collections are on schedule.
                              Compost collections in participating neighborhoods
                              are also on schedule.
                            status: ON SCHEDULE
                            type: Collections
                          - exceptionName: Summer 2022
                            details: Public schools are not in session.
                            status: NOT IN SESSION
                            type: Schools
                properties:
                  days:
                    type: array
                    description: 'Detailed list of calendar day objects. '
                    items:
                      type: object
                      properties:
                        today_id:
                          type: string
                          description: >-
                            The id of a calendar day in YYYYMMDD format. E.g.
                            07/04/2022 is 20220704
                        items:
                          type: array
                          description: >-
                            A list of New York City service updates for a
                            particular calendar day.
                          items:
                            type: object
                            properties:
                              exceptionName:
                                type: string
                                description: >-
                                  The title of the update issued by a New York
                                  City service.
                              details:
                                type: string
                                description: >-
                                  The description of the update issued by a New
                                  York City service.
                              status:
                                type: string
                                description: >-
                                  The status of the update issued by a New York
                                  City service. E.g. “IN EFFECT” “SUSPENDED”
                                  “NOT IN SESSION”
                              type:
                                type: string
                                description: The type of New York City service.
              examples:
                example-1:
                  value:
                    days:
                      - today_id: '20220704'
                        items:
                          - exceptionName: Independence Day 2022
                            details: >-
                              Alternate side parking and meters are suspended
                              for Independence Day.
                            status: SUSPENDED
                            type: Alternate Side Parking
                          - exceptionName: Independence Day 2022
                            details: >-
                              Trash, recycling, and compost collections are
                              suspended for Independence Day.
                            status: SUSPENDED
                            type: Collections
                          - exceptionName: Summer 2022
                            details: Public schools are not in session.
                            status: NOT IN SESSION
                            type: Schools
                      - today_id: '20220705'
                        items:
                          - exceptionName: ASP Reform Ending 7/5 - 7/8/22
                            details: >-
                              Alternate side parking and meters are in effect.
                              ASP Reform Rules ended as of July 5. Follow the
                              rules as posted on ASP signs.
                            status: IN EFFECT
                            type: Alternate Side Parking
                          - details: >-
                              Trash and recycling collections are on schedule.
                              Compost collections in participating neighborhoods
                              are also on schedule.
                            status: ON SCHEDULE
                            type: Collections
                          - exceptionName: Summer 2022
                            details: Public schools are not in session.
                            status: NOT IN SESSION
                            type: Schools
      operationId: get-GetCalendar
      description: >-
        Get the daily status for Street Parking, Garbage Collection and Public
        Schools in New York City for a specified date range. 
      x-internal: false
      parameters:
        - schema:
            type: string
            example: 07/04/2022
          in: query
          name: fromdate
          description: >-
            The date of the first day in the specified date range. Use the
            format MM/DD/YYYY.
          required: true
        - schema:
            type: string
            example: 07/05/2022
          in: query
          name: todate
          description: >-
            The date of the final day in the specified date range. Use the
            format MM/DD/YYYY.
          required: true
  /GetCategory:
    parameters: []
    get:
      summary: /GetCategory
      operationId: get-GetCategory
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                x-examples:
                  example-1:
                    - Name: Courts & Law
                      CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-3'
                      CategoryId: 311-3
                      SubCategory:
                        - Name: Courts & Law
                          CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-35'
                          CategoryId: 311-35
                          ParentCategoryId: 311-3
                        - Name: Jails & Inmates
                          CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-34'
                          CategoryId: 311-34
                          ParentCategoryId: 311-3
                          SubCategory:
                            - Name: Arrests
                              CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-97'
                              CategoryId: 311-97
                              ParentCategoryId: 311-34
                              SubCategory: []
                            - Name: Inmates
                              CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-98'
                              CategoryId: 311-98
                              ParentCategoryId: 311-34
                              SubCategory: []
                            - Name: Jails & Detention Centers
                              CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-99'
                              CategoryId: 311-99
                              ParentCategoryId: 311-34
                              SubCategory: []
                            - Name: Probation & Parole
                              CategoryURL: 'https://portal.311.nyc.gov/category/?id=311-100'
                              CategoryId: 311-100
                              ParentCategoryId: 311-34
                              SubCategory: []
                items:
                  type: object
                  properties:
                    Name:
                      type: string
                      description: The name of the NYC 311 category.
                    CategoryURL:
                      type: string
                      description: A URL to the category’s 311 webpage.
                    CategoryId:
                      type: string
                      description: The id of the category.
                    SubCategory:
                      type: array
                      description: 'A list of subcategories nested under the category. '
                      items:
                        type: object
                        properties:
                          Name:
                            type: string
                            description: The name of the category.
                          CategoryURL:
                            type: string
                            description: A URL to the category’s 311 webpage.
                          CategoryId:
                            type: string
                            description: The id of the category.
                          ParentCategoryId:
                            type: string
                            description: The id of the parent category.
                          SubCategory:
                            type: array
                            items:
                              type: object
                              properties:
                                Name:
                                  type: string
                                CategoryURL:
                                  type: string
                                CategoryId:
                                  type: string
                                ParentCategoryId:
                                  type: string
                                SubCategory:
                                  type: array
                                  items:
                                    type: object
              examples:
                example-1:
                  value:
                    - Name: string
                      CategoryURL: string
                      CategoryId: string
                      SubCategory:
                        - Name: string
                          CategoryURL: string
                          CategoryId: string
                          ParentCategoryId: string
                          SubCategory:
                            - Name: string
                              CategoryURL: string
                              CategoryId: string
                              ParentCategoryId: string
                              SubCategory:
                                - {}
      description: >-
        Get all the categories and subcategories from the New York City 311
        platform.
  /GetContent:
    parameters: []
    get:
      summary: /GetContent
      operationId: get-GetContent
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    KnowledgeArticle:
                      - ArticlePublicNumber: KA-02030
                        Title: Curbside Composting
                        Description: Learn about compost collection in New York City.
                        TotalTitle: 330
                        TotalContent: 106
                        TotalWeight: 436
                        Section:
                          - Name: NYC Today Collections Status Banner
                            Content: content
                            ContentAction: []
                          - Name: Sign Up for Curbside Composting
                            Content: content
                            ContentAction: []
                          - Name: Collection Schedule
                            Content: content
                            ContentAction: []
                          - Name: Service Areas
                            Content: content
                            ContentAction: []
                          - Name: Compost Bins
                            Content: content
                            ContentAction: []
                          - Name: Accepted Items
                            Content: content
                            ContentAction: []
                          - Name: Resources
                            Content: content
                            ContentAction: []
                          - Name: Sanitation Holidays
                            Content: contnet
                            ContentAction: []
                      - ArticlePublicNumber: KA-02031
                        Title: Composting Site Permit
                        Description: >-
                          Apply for a permit for a landscaper or tree service
                          company to dispose of yard waste and buy compost.
                        TotalTitle: 330
                        TotalContent: 102
                        TotalWeight: 432
                        Section:
                          - Name: Composting Site Permit
                            Content: content
                            ContentAction:
                              - Name: Missed Trash or Recycling Collection
                                Agency: Department of Sanitation
                                Problem: Missed Collection
                properties:
                  KnowledgeArticle:
                    type: array
                    description: List of published 311 articles.
                    items:
                      type: object
                      properties:
                        ArticlePublicNumber:
                          type: string
                          description: The unique identifier for the published article.
                        Title:
                          type: string
                          description: The title of the article.
                        Description:
                          type: string
                          description: A short description of the article.
                        TotalTitle:
                          type: integer
                          description: >-
                            The calculated score of how well the SearchText
                            matched the article’s title.
                        TotalContent:
                          type: integer
                          description: >-
                            The calculated score of how well the SearchText
                            matched the article’s contents.
                        TotalWeight:
                          type: integer
                          description: >-
                            The total weighted score calculated by summing
                            together KnowledgeArticle.TotalTitle and
                            KnowledgeArticle.TotalContent.
                        Section:
                          type: array
                          description: >-
                            A list of the sections that separate the contents
                            within the article.
                          items:
                            type: object
                            properties:
                              Name:
                                type: string
                                description: The title of the article’s section.
                              Content:
                                type: string
                                description: >-
                                  The full contents of the article’s section in
                                  HTML format.
                              ContentAction:
                                type: array
                                description: >-
                                  A list of problems and agencies relevant to
                                  the contents of the article’s section.
                                items:
                                  type: object
                                  properties:
                                    Name:
                                      type: string
                                      description: The relevant city agency or department.
                                    Agency:
                                      type: string
                                      description: >-
                                        The action that needs to be taken with
                                        the city agency.
                                    Problem:
                                      type: string
                                      description: A description of the issue.
              examples:
                example-1:
                  value:
                    KnowledgeArticle:
                      - ArticlePublicNumber: KA-02030
                        Title: Curbside Composting
                        Description: Learn about compost collection in New York City.
                        TotalTitle: 330
                        TotalContent: 106
                        TotalWeight: 436
                        Section:
                          - Name: NYC Today Collections Status Banner
                            Content: >-
                              <style type='text/css'>.divTable {
                                              display: table;
                                              width: 100%;
                                              margin-bottom: 15px;
                              }

                              .divTableRow {
                                              display: table-row;
                              }

                              .divTableCell3, .divTableHead {
                                              border: 0px solid #cccccc;
                                              display: table-cell;
                                              padding: 6px 12px;
                                              background-color: #FFF200;
                                              color: black;
                                              font-weight: bold;
                                              text-align: center;
                              }

                              .divTableCell4, .divTableHead {
                                              border: 1px solid #cccccc;
                                              display: table-cell;
                                              padding: 12px 12px;
                                              background-color: #eeeeee;
                              }

                              .divTableBody {
                                              display: table-row-group;
                              }</style><div class='divTable'><div
                              class='divTableBody'><div class='divTableRow'><div
                              class='divTableCell3'>Today&#39;s&nbsp;Status</div></div><div
                              class='divTableRow'><div
                              class='divTableCell4'><p><u><a
                              href='https://portal.311.nyc.gov/#feedsContainer'>Find
                              out if collections are on schedule, delayed, or
                              suspended.</a></u></p></div></div></div></div><div
                              style='background:#eee;border:1px solid
                              #ccc;padding:5px 10px;
                              margin-bottom:15px;'><p><em><strong>Need something
                              else?</strong></em></p><ul><li><a class='kalink'
                              target='_blank'
                              href='https://portal.311.nyc.gov/article/?kanumber=KA-01788'>Missed
                              Trash, Recycling, or Compost
                              Collection</a></li></ul></div><p>The Curbside
                              Composting program collects food scraps,
                              food-soiled paper, and yard waste and
                              turns&nbsp;it into compost or renewable
                              energy.</p><p>This service is voluntary and
                              available for residential buildings in selected
                              neighborhoods. If you&rsquo;re interested in
                              receiving composting, you must&nbsp;<a
                              class='externallink' target='_blank'
                              href='https://www.nyc.gov/curbsidecomposting'>sign
                              up</a>, even if you received the service in the
                              past.</p><p>Curbside Composting will expand to
                              more areas on a rolling basis based on the number
                              of signups in each neighborhood.</p><p>Until
                              service begins in your area, you
                              can:</p><ul><li>Put your food scraps, food-soiled
                              paper, and yard waste in the trash following
                              normal <a class='kalink' target='_blank'
                              href='https://portal.311.nyc.gov/article/?kanumber=KA-02086'>residential
                              trash rules</a></li><li>Take food waste to
                              a&nbsp;<a class='externallink' target='_blank'
                              href='https://www1.nyc.gov/assets/dsny/site/services/food-scraps-and-yard-waste-page/nyc-food-scrap-drop-off-locations'>food
                              scrap drop-off site</a></li><li><a
                              class='externallink' target='_blank'
                              href='https://www.makecompost.nyc/makecompost'>Compost
                              at home</a></li></ul>
                            ContentAction: []
                          - Name: Sign Up for Curbside Composting
                            Content: >-
                              <p>You can sign up for Curbside Composting online
                              or by phone.</p><p>After you sign up, the
                              Department of Sanitation (DSNY) will let you know
                              if you&#39;re in an eligible neighborhood and
                              notify you when service will start in your
                              area.</p><p>If you don&#39;t live in an area where
                              Curbside Composting is offered yet, DSNY will let
                              you know if the service will expand to your area.
                              DSNY wants to hear from everyone interested in
                              Curbside Composting as it helps to make the case
                              to expand this service to more
                              neighborhoods.</p><p><strong>Online</strong></p><p><a
                              class='externallink' target='_blank'
                              href='https://dsny.force.com/curbsidecomposting/s/'>Sign
                              up for Curbside Composting.</a></p><p><strong>By
                              Phone</strong></p><p>Call 311 for
                              assistance.</p><p>&nbsp;</p><p>&nbsp;</p><p>[62074
                              24/7]</p>
                            ContentAction: []
                          - Name: Collection Schedule
                            Content: >-
                              <p>The Curbside Composting collection schedule for
                              your home is based on your
                              address.</p><p>Suspensions may occur for a City
                              holiday or during a snowstorm.</p><p><a
                              class='externallink' target='_blank'
                              href='https://on.nyc.gov/CompostingDay'>Look up
                              the curbside composting schedule for a specific
                              address.</a></p><p><strong>Set Out
                              Rules</strong></p><p>Place your brown bin
                              curbside&nbsp;between 4 PM and midnight the
                              evening before your scheduled
                              pickup.</p><ul><li>If your pickup is before 4 PM,
                              you must retrieve your brown bin by 9
                              PM.</li><li>If your pickup is after 4 PM, you must
                              retrieve your brown bin&nbsp;by 9 AM the following
                              morning.</li></ul>
                            ContentAction: []
                          - Name: Service Areas
                            Content: >-
                              <p>Currently, only Community Boards that had
                              previously received Curbside Composting are
                              eligible for service, but not all of these
                              neighborhoods will receive it immediately. Service
                              will resume based on the number of signups and the
                              density of the neighborhood.</p><p>If you
                              don&rsquo;t live in a participating Community
                              Board, you can still sign up to express interest
                              in receiving the service in the future.</p><p>You
                              can look up the Community Board for your address
                              on the <a class='kalink' target='_blank'
                              href='https://portal.311.nyc.gov/article/?kanumber=KA-01785'>Community
                              Boards</a> page.</p><p><strong>Current Service
                              Areas</strong></p><ul><li>Bronx Community Board 8
                              (Kingsbridge, Riverdale)</li><li>Brooklyn
                              Community Board 1 (Williamsburg,
                              Greenpoint)</li><li>Brooklyn Community Board 2
                              (DUMBO, Downtown Brooklyn, Fort Greene, Clinton
                              Hill, Brooklyn Heights)</li><li>Brooklyn Community
                              Board 6 (Red Hook, Gowanus, Carroll Gardens, Park
                              Slope)</li><li>Brooklyn Community Board 7 (Sunset
                              Park, Industry City, Windsor Terrace, South
                              Slope)</li><li>Manhattan Community Board 6 (Stuy
                              Town &amp; Peter Cooper Village, Midtown East,
                              Murray Hill)</li><li>Manhattan Community Board 7
                              (Manhattan Valley, Upper West Side, Lincoln
                              Square)</li></ul><p>If your Community Board is
                              receiving the service and you signed up, DSNY will
                              confirm your&nbsp;information and notify you of
                              the date that Curbside Composting will begin for
                              your building.</p>
                            ContentAction: []
                          - Name: Compost Bins
                            Content: >-
                              <p>Participants in Curbside Composting can only
                              use brown outdoor composting bins issued by the
                              Department of Sanitation (DSNY) to throw out their
                              food and yard waste.</p><p>If you do not already
                              have a brown bin, you can request one when you
                              sign up, and it will be delivered before your
                              service begins. Participating buildings will be
                              given brown bins before service starts if they no
                              longer have a bin.</p><p><strong>Bin Liners and
                              Bags</strong></p><p>You must use bin liners or
                              bags in your brown bin.</p><p>To line the brown
                              bin, you can use a:</p><ul><li>Clear, untinted
                              plastic liner or bag</li><li>Paper
                              bag</li><li>Certified compostable liner with
                              BPI-USCC logo (Biodegradable Products Institute -
                              US Composting Council)</li></ul><p>You cannot use
                              small plastic shopping bags or black plastic bags
                              to line the bin.</p><p>To line your indoor kitchen
                              container, you can use:</p><ul><li>Small shopping
                              bags</li><li>Newspaper</li><li>Brown paper
                              bags</li><li>Small certified compostable
                              bags</li></ul><p><strong>Replacement
                              Bins</strong></p><p>If your brown bin is lost or
                              has been damaged or stolen, you can request a new
                              one.</p><p>If you qualify to receive a replacement
                              bin, you may need to pick it up from one of the
                              bin distribution locations. The pick-up location
                              will be provided after your request has been
                              reviewed.</p><p><a class='externallink'
                              target='_blank'
                              href='https://dsny.force.com/curbsidecomposting/s/bin-request'>Request
                              a replacement brown bin.</a></p>
                            ContentAction: []
                          - Name: Accepted Items
                            Content: >-
                              <p><span style='font-size:20px;'><strong>Items
                              Accepted</strong></span></p><p><strong>Food
                              Waste</strong></p><p>You can put food waste in
                              your brown compost bin, including:</p><ul><li>Food
                              scraps</li><li>Coffee grounds and tea
                              bags</li><li>Shells (seafood, nut, and
                              egg)</li><li>Bones</li><li>Spoiled and expired
                              food</li><li>Food-soiled paper (napkins, towels,
                              uncoated plates, bags, trays, or
                              boxes)</li></ul><p><strong>Yard
                              Waste</strong></p><p>You can put small amounts of
                              yard waste in your brown composting bin, such
                              as:</p><ul><li>Leaves</li><li>Grass</li><li>Small
                              twigs and branches</li><li>House plants and
                              flowers</li><li>Hay bales</li></ul><p>If your yard
                              waste can&rsquo;t fit in the bin with the lid
                              closed, or to save room in the bin for food waste,
                              you can:</p><ul><li>Put it in a rigid unlined
                              container labeled &ldquo;Yard
                              Waste&rdquo;</li><li>Put it in a paper lawn and
                              leaf bag</li><li>Tie it into bundles 2 feet by 4
                              feet or smaller</li></ul><p>Do not use plastic
                              bags. Yard waste set out in plastic bags will be
                              collected as trash.</p><p><span
                              style='font-size:20px;'><strong>Items Not
                              Accepted</strong></span></p><p>You can&rsquo;t put
                              any of the following items in the brown organics
                              bin:</p><ul><li><strong>Trash</strong>,
                              including<ul><li>Diapers and hygienic
                              products</li><li>Animal waste or kitty
                              litter</li><li>Wrappers and packaging</li><li>Foam
                              products</li></ul></li><li><strong>Recyclables</strong>,
                              including<ul><li>Metal</li><li>Glass</li><li>Plastic</li><li>Beverage
                              cartons</li><li>Clean recyclable
                              paper</li><li>Cardboard</li></ul></li></ul>
                            ContentAction: []
                          - Name: Resources
                            Content: >-
                              <p>You can get bin decals, brochures, guides, and
                              stickers showing what items to put in your brown
                              bin.</p><p><a class='externallink' target='_blank'
                              href='https://nyc.gov/sanitationmaterials'>Download
                              or request Department of Sanitation
                              materials.</a></p>
                            ContentAction: []
                          - Name: Sanitation Holidays
                            Content: >-
                              <p>In general, there is no collection on
                              sanitation holidays, but that is subject to
                              change. You can check back near the date of the
                              holiday to confirm the collection
                              schedule.</p><p>Usually:</p><ul><li>If a holiday
                              occurs on your trash or compost collection day,
                              put your items out after 4 PM that day for
                              collection beginning the next day.</li><li>If a
                              holiday occurs on your recycling collection day,
                              put your items out after 4 PM the day before your
                              next scheduled recycling collection
                              day.</li></ul><p><strong>2022&nbsp;Sanitation
                              Holidays</strong></p><style type='text/css'>.tg 
                              {border-collapse:collapse;border-spacing:0;margin-bottom:
                              20px;border-style:solid;border-width:1px;border-color:black;}

                              .tg td{padding:10px
                              5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}

                              .tg th{padding:10px
                              5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
                                
                              .tg
                              .header{background-color:#4472C4;font-size:14px;font-weight:bold;text-align:
                              center;color:#ffffff;border-color:#000000;vertical-align:top;
                              border-width:1px;}

                              .tg
                              .cell1{background-color:#B4C6E7;font-size:14px;color:#000000;text-align:
                              center; border-color:#000000}

                              .tg
                              .cell2{background-color:#D9E2F3;font-size:14px;color:#000000;text-align:
                              center; border-color:#000000}</style><table
                              class='tg'><tbody><tr><th
                              class='header'>Date</th><th
                              class='header'>Holiday</th></tr><tr><td
                              class='cell1'>January 1 (Saturday)</td><td
                              class='cell1'>New Year&#39;s Day</td></tr><tr><td
                              class='cell2'>January 17 (Monday)</td><td
                              class='cell2'>Martin Luther King Jr.
                              Day</td></tr><tr><td class='cell1'>February 12
                              (Saturday)</td><td class='cell1'>Lincoln&#39;s
                              Birthday</td></tr><tr><td class='cell2'>February
                              21 (Monday)</td><td class='cell2'>Washington&#39;s
                              Birthday (Presidents&#39; Day)</td></tr><tr><td
                              class='cell1'>May 30 (Monday)</td><td
                              class='cell1'>Memorial Day</td></tr><tr><td
                              class='cell2'>June 20 (Monday)</td><td
                              class='cell2'>Juneteenth
                              (Observed)</td></tr><tr><td class='cell1'>July 4
                              (Monday)</td><td class='cell1'>Independence
                              Day</td></tr><tr><td class='cell2'>September 5
                              (Monday)</td><td class='cell2'>Labor
                              Day</td></tr><tr><td class='cell1'>October 10
                              (Monday)</td><td class='cell1'>Italian Heritage
                              Day/Indigenous Peoples&#39; Day</td></tr><tr><td
                              class='cell2'>November 8 (Tuesday)</td><td
                              class='cell2'>Election Day</td></tr><tr><td
                              class='cell1'>November 11 (Friday)</td><td
                              class='cell1'>Veterans Day</td></tr><tr><td
                              class='cell2'>November 24 (Thursday)</td><td
                              class='cell2'>Thanksgiving</td></tr><tr><td
                              class='cell1'>December 26 (Monday)</td><td
                              class='cell1'>Christmas
                              (Observed)</td></tr></tbody></table>
                            ContentAction: []
                      - ArticlePublicNumber: KA-02031
                        Title: Composting Site Permit
                        Description: >-
                          Apply for a permit for a landscaper or tree service
                          company to dispose of yard waste and buy compost.
                        TotalTitle: 330
                        TotalContent: 102
                        TotalWeight: 432
                        Section:
                          - Name: Composting Site Permit
                            Content: >-
                              <p>If you are a landscaper or tree service
                              company, you can apply for a Composting Site
                              Permit to discard yard waste and purchase finished
                              compost. The permit is a plastic, wallet-sized
                              card that states the account and permit
                              numbers.</p><p>The Department of Sanitation
                              operates a yard waste composting site at the
                              Staten Island Compost Facility. This site receives
                              leaf and yard waste from landscapers registered
                              with the Composting Site Permit Program.</p><p><a
                              class='externallink' target='_blank'
                              href='https://www1.nyc.gov/assets/dsny/site/services/food-scraps-and-yard-waste-page/commercial-landscapers'>Learn
                              more about getting a Composting Site
                              Permit.</a></p>
                            ContentAction:
                              - Name: Missed Trash or Recycling Collection
                                Agency: Department of Sanitation
                                Problem: Missed Collection
      description: >-
        Get all relevant articles and content from New York City’s 311 website
        using text search. 
      parameters:
        - schema:
            type: string
            example: composting
          in: query
          name: SearchText
          required: true
          description: >-
            The relevant text you want to search for. No numbers or special
            characters are permitted.
  /GetServiceRequest:
    parameters: []
    get:
      summary: /GetServiceRequest
      operationId: get-GetServiceReuqest
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    SRNumber: 311-10935540
                    Agency: Department of Sanitation
                    Problem: Missed Collection
                    ProblemDetails: Compost
                    AdditionalDetails: N/A
                    ResolutionActionUpdatedDate: '2022-07-08T13:02:55'
                    Status: '614110003'
                    DateTimeSubmitted: '2022-07-07T14:54:11'
                    ResolutionAction: >-
                      The Department of Sanitation investigated this complaint
                      and found no condition at the location.
                    Address:
                      Borough: BROOKLYN
                      FullAddress: '336 3 STREET, BROOKLYN, NY, 11215'
                properties:
                  SRNumber:
                    type: string
                    description: The id of the Service Request.
                  Agency:
                    type: string
                    description: The city agency relevant to the Service Request.
                  Problem:
                    type: string
                    description: The issue category of the Service Request.
                  ProblemDetails:
                    type: string
                    description: The issue subcategory of the Service Request.
                  AdditionalDetails:
                    type: string
                    description: A description of the Service Request.
                  Status:
                    type: string
                    description: |-
                      A status code of the Service Request.

                      614110001: Open

                      614110002: In Progress

                      614110000: Cancel

                      614110003: Closed
                  DateTimeSubmitted:
                    type: string
                    description: >-
                      The date and time of when the Service Request was created
                      in the format YYYY-MM-DD"T"HH:MM:SS.
                  SLARemainingDays:
                    type: string
                    description: >-
                      The number of days left to resolve the open Service
                      Request in accordance with NYC 311’s Service-Level
                      Agreement.
                  ResolutionAction:
                    type: string
                    description: >-
                      A description of the issue resolution when the Service
                      Request closed.
                  ResolutionActionUpdatedDate:
                    type: string
                    description: >-
                      The date and time of when the Service Request closed in
                      the format YYYY-MM-DD"T"HH:MM:SS.
                  Address:
                    type: object
                    description: The location of interest reported by the Service Request.
                    properties:
                      Borough:
                        type: string
                        description: The New York City borough of interest.
                      FullAddress:
                        type: string
                        description: The street address of interest.
              examples:
                example-1:
                  value:
                    SRNumber: 311-10935582
                    Agency: Department of Housing Preservation and Development
                    Problem: Unsanitary Condition
                    ProblemDetails: Garbage/Recycling Storage
                    AdditionalDetails: Missing or Inadequate Cans/Lid
                    Status: '614110002'
                    DateTimeSubmitted: '2022-07-07T14:50:17'
                    Address:
                      Borough: MANHATTAN
                      FullAddress: >-
                        435 FORT WASHINGTON AVENUE, MANHATTAN (NEW YORK), NY,
                        10033
                example-2:
                  value:
                    SRNumber: 311-10935540
                    Agency: Department of Sanitation
                    Problem: Missed Collection
                    ProblemDetails: Compost
                    AdditionalDetails: N/A
                    ResolutionActionUpdatedDate: '2022-07-08T13:02:55'
                    Status: '614110003'
                    DateTimeSubmitted: '2022-07-07T14:54:11'
                    ResolutionAction: >-
                      The Department of Sanitation investigated this complaint
                      and found no condition at the location.
                    Address:
                      Borough: BROOKLYN
                      FullAddress: '336 3 STREET, BROOKLYN, NY, 11215'
                example-3:
                  value:
                    SRNumber: 311-10935466
                    Agency: Department of Environmental Protection
                    Problem: Noise
                    ProblemDetails: Jackhammer
                    AdditionalDetails: N/A
                    Status: '614110002'
                    DateTimeSubmitted: '2022-07-07T14:51:35'
                    SLARemainingDays: '7'
                    Address:
                      Borough: BROOKLYN
                      FullAddress: '128 PROSPECT STREET, BROOKLYN, NY, 11201'
      description: >-
        Get the latest information and status of a submitted 311 Service
        Request. All data that has no privacy concern are retrievable.
      parameters:
        - schema:
            type: string
            example: 311-10935582
          in: query
          name: srnumber
          description: >-
            The unique identifier of a Service Request. A srnumber is generated
            for every submitted Service Request.
          required: true
  /GetServiceRequestList:
    parameters: []
    post:
      summary: /GetServiceRequestList
      operationId: post-GetServiceRequestList
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    SRResponses:
                      - SRNumber: 311-10935540
                        Agency: Department of Sanitation
                        Problem: Missed Collection
                        ProblemDetails: Compost
                        AdditionalDetails: N/A
                        ResolutionActionUpdatedDate: '2022-07-08T13:02:55'
                        Status: '614110003'
                        DateTimeSubmitted: '2022-07-07T14:54:11'
                        ResolutionAction: >-
                          The Department of Sanitation investigated this
                          complaint and found no condition at the location.
                        Address:
                          Borough: BROOKLYN
                          FullAddress: '336 3 STREET, BROOKLYN, NY, 11215'
                      - SRNumber: 311-10935466
                        Agency: Department of Environmental Protection
                        Problem: Noise
                        ProblemDetails: Jackhammer
                        AdditionalDetails: N/A
                        Status: '614110002'
                        DateTimeSubmitted: '2022-07-07T14:51:35'
                        SLARemainingDays: '7'
                        Address:
                          Borough: BROOKLYN
                          FullAddress: '128 PROSPECT STREET, BROOKLYN, NY, 11201'
                      - SRNumber: 311-10935582
                        Agency: Department of Housing Preservation and Development
                        Problem: Unsanitary Condition
                        ProblemDetails: Garbage/Recycling Storage
                        AdditionalDetails: Missing or Inadequate Cans/Lid
                        Status: '614110002'
                        DateTimeSubmitted: '2022-07-07T14:50:17'
                        Address:
                          Borough: MANHATTAN
                          FullAddress: >-
                            435 FORT WASHINGTON AVENUE, MANHATTAN (NEW YORK),
                            NY, 10033
                properties:
                  SRResponses:
                    type: array
                    description: A list of Service Requests that match the SRNumbers.
                    items:
                      type: object
                      properties:
                        SRNumber:
                          type: string
                          description: The id of the Service Request.
                        Agency:
                          type: string
                          description: The city agency relevant to the Service Request.
                        Problem:
                          type: string
                          description: The topic category of the Service Request.
                        ProblemDetails:
                          type: string
                          description: The subcategory of the Service Request.
                        AdditionalDetails:
                          type: string
                          description: A description of the Service Request.
                        Status:
                          type: string
                          description: |-
                            A status code of the Service Request.

                            614110001: Open

                            614110002: In Progress

                            614110000: Cancel

                            614110003: Closed
                        DateTimeSubmitted:
                          type: string
                          description: >-
                            The date and time of when the Service Request was
                            created in the format YYYY-MM-DD"T"HH:MM:SS.
                        SLARemainingDays:
                          type: string
                          description: >-
                            The number of days left to resolve the open Service
                            Request in accordance with NYC 311’s Service-Level
                            Agreement.
                        ResolutionAction:
                          type: string
                          description: >-
                            A description of the issue resolution when the
                            Service Request closed.
                        ResolutionActionUpdatedDate:
                          type: string
                          description: >-
                            The date and time of when the Service Request closed
                            in the format YYYY-MM-DD"T"HH:MM:SS.
                        Address:
                          type: object
                          description: >-
                            The location of interest reported by the Service
                            Request.
                          properties:
                            Borough:
                              type: string
                              description: The New York City borough of interest.
                            FullAddress:
                              type: string
                              description: The street address of interest.
              examples:
                example-1:
                  value:
                    SRResponses:
                      - SRNumber: 311-10935540
                        Agency: Department of Sanitation
                        Problem: Missed Collection
                        ProblemDetails: Compost
                        AdditionalDetails: N/A
                        ResolutionActionUpdatedDate: '2022-07-08T13:02:55'
                        Status: '614110003'
                        DateTimeSubmitted: '2022-07-07T14:54:11'
                        ResolutionAction: >-
                          The Department of Sanitation investigated this
                          complaint and found no condition at the location.
                        Address:
                          Borough: BROOKLYN
                          FullAddress: '336 3 STREET, BROOKLYN, NY, 11215'
                      - SRNumber: 311-10935466
                        Agency: Department of Environmental Protection
                        Problem: Noise
                        ProblemDetails: Jackhammer
                        AdditionalDetails: N/A
                        Status: '614110002'
                        DateTimeSubmitted: '2022-07-07T14:51:35'
                        SLARemainingDays: '7'
                        Address:
                          Borough: BROOKLYN
                          FullAddress: '128 PROSPECT STREET, BROOKLYN, NY, 11201'
                      - SRNumber: 311-10935582
                        Agency: Department of Housing Preservation and Development
                        Problem: Unsanitary Condition
                        ProblemDetails: Garbage/Recycling Storage
                        AdditionalDetails: Missing or Inadequate Cans/Lid
                        Status: '614110002'
                        DateTimeSubmitted: '2022-07-07T14:50:17'
                        Address:
                          Borough: MANHATTAN
                          FullAddress: >-
                            435 FORT WASHINGTON AVENUE, MANHATTAN (NEW YORK),
                            NY, 10033
      description: >-
        Retrieve the latest information and statuses for multiple 311 Service
        Requests with one request.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                SRNumbers:
                  type: array
                  items:
                    type: string
              x-examples:
                example-1:
                  SRNumbers:
                    - 311-10935582
                    - 311-10935466
                    - 311-10935540
            examples:
              example-1:
                value:
                  SRNumbers:
                    - 311-10935582
                    - 311-10935466
                    - 311-10935540
  /Status/CodeBlue:
    get:
      summary: /Status/CodeBlue
      tags: []
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    inEffect: false
                properties:
                  inEffect:
                    type: boolean
                    description: Indicates whether Code Blue is in effect.
              examples:
                example-1:
                  value:
                    inEffect: false
      operationId: get-Status-CodeBlue
      description: >-
        Get the status of Code Blue — a weather emergency issued when outside
        temperature drops below 32 degrees Farenheight between 8 p.m. and 4 a.m.
        No one who is homeless and seeking shelter in New York City during Code
        Blue will be denied.
    parameters: []
  /Status/FireHydrant:
    parameters: []
    get:
      summary: /Status/FireHydrant
      operationId: get-Status-FireHydrant
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    inEffect: false
                properties:
                  inEffect:
                    type: boolean
                    description: Indicates whether a Fire Hydrant emergency is in effect.
              examples:
                example-1:
                  value:
                    inEffect: true
      description: Get the status of a Fire Hydrant emergency.
  /Status/SnowOnSidewalk:
    get:
      summary: /Status/SnowOnSidewalk
      tags: []
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    inEffect: false
                properties:
                  inEffect:
                    type: boolean
                    description: >-
                      Indicates whether a Snow on Sidewalk emergency is in
                      effect.
              examples:
                example-1:
                  value:
                    inEffect: false
      operationId: get-Status-SnowOnSidewalk
      description: Get the status of a Snow On Sidewalk emergency.
    parameters: []
  /Status/SnowOnStreet:
    get:
      summary: /Status/SnowOnStreet
      tags: []
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                x-examples:
                  example-1:
                    inEffect: false
                properties:
                  inEffect:
                    type: boolean
                    description: Indicates whether a Snow on Street emergency is in effect.
              examples:
                example-1:
                  value:
                    inEffect: false
      operationId: get-Status-SnowOnStreet
      description: Get the status of a Snow On Street emergency.
    parameters: []
components:
  schemas: {}
  securitySchemes:
    '{API Key}':
      name: Ocp-Apim-Subscription-Key
      type: apiKey
      in: header
      description: >-
        All requests must use a valid API Key in order to successfully call the
        NYC 311 Public API. To generate an API Key, please reate and login to
        your NYC API Developers Portal profile at https://api-portal.nyc.gov.



```