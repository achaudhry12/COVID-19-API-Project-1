# Lord of the Rings Application

### **Application Description:**

A website that displays a dropdown menu or a fill in text box where you can either select different specifications to find a certain vehicle, but you can also access the specifications of a certain vechile by typing in the vin #.

### **API:**

The One API - https://the-one-api.dev/

### **API Snippet:**

`GET https://the-one-api.dev/v2/book`

``{
    "docs": [
        {
            "_id": "5cf5805fb53e011a64671582",
            "name": "The Fellowship Of The Ring"
        },
        {
            "_id": "5cf58077b53e011a64671583",
            "name": "The Two Towers"
        },
        {
            "_id": "5cf58080b53e011a64671584",
            "name": "The Return Of The King"
        }
    ],
    "total": 3,
    "limit": 1000,
    "offset": 0,
    "page": 1,
    "pages": 1
}``
    
`GET https://the-one-api.dev/v2/book/5cf58080b53e011a64671584/chapter`

``{
    "docs": [
        {
            "_id": "5cdc25d5bc17e929cf246217",
            "bookName": "The Return Of The King",
            "chapterName": " The Passing of the Grey Company "
        },
        {
            "_id": "5cdc25d5bc17e929cf246218",
            "bookName": "The Return Of The King",
            "chapterName": " The Muster of Rohan "
        },
        {
            "_id": "5cdc25d5bc17e929cf246219",
            "bookName": "The Return Of The King",
            "chapterName": " Minas Tirith "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621a",
            "bookName": "The Return Of The King",
            "chapterName": " The Ride of the Rohirrim "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621b",
            "bookName": "The Return Of The King",
            "chapterName": " The Battle of the Pelennor Fields "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621c",
            "bookName": "The Return Of The King",
            "chapterName": " The Pyre of Denethor "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621d",
            "bookName": "The Return Of The King",
            "chapterName": " The Siege of Gondor "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621e",
            "bookName": "The Return Of The King",
            "chapterName": " The Houses of Healing "
        },
        {
            "_id": "5cdc25d5bc17e929cf24621f",
            "bookName": "The Return Of The King",
            "chapterName": " The Last Debate "
        },
        {
            "_id": "5cdc25d5bc17e929cf246220",
            "bookName": "The Return Of The King",
            "chapterName": " The Black Gate Opens "
        },
        {
            "_id": "5cdc25d5bc17e929cf246221",
            "bookName": "The Return Of The King",
            "chapterName": " The Tower of Cirith Ungol "
        },
        {
            "_id": "5cdc25d5bc17e929cf246222",
            "bookName": "The Return Of The King",
            "chapterName": " The Land of Shadow "
        },
        {
            "_id": "5cdc25d5bc17e929cf246223",
            "bookName": "The Return Of The King",
            "chapterName": " Mount Doom "
        },
        {
            "_id": "5cdc25d5bc17e929cf246224",
            "bookName": "The Return Of The King",
            "chapterName": " The Field of Cormallen "
        },
        {
            "_id": "5cdc25d5bc17e929cf246225",
            "bookName": "The Return Of The King",
            "chapterName": " Many Partings "
        },
        {
            "_id": "5cdc25d5bc17e929cf246226",
            "bookName": "The Return Of The King",
            "chapterName": " The Steward and the King "
        },
        {
            "_id": "5cdc25d5bc17e929cf246227",
            "bookName": "The Return Of The King",
            "chapterName": " Homeward Bound "
        },
        {
            "_id": "5cdc25d5bc17e929cf246228",
            "bookName": "The Return Of The King",
            "chapterName": " The Grey Havens "
        },
        {
            "_id": "5cdc25d5bc17e929cf246229",
            "bookName": "The Return Of The King",
            "chapterName": " The Scouring of the Shire "
        }
    ],
    "total": 19,
    "limit": 1000,
    "offset": 0,
    "page": 1,
    "pages": 1
}``


### **Wireframe:**

![image](https://user-images.githubusercontent.com/82814499/115266077-df686000-a105-11eb-9ed3-734cc61843cb.png)

### **MVP:**

- Need a drop down menu that can acess every model, color, manufacturer, trim, etc
- Need a input area to help supplement a secondary input of a VIN number
- From the vechile vin # the application should be able to figure out what the vehicle's matching image is and as well as other statistics about it.
- Be able to pull up multiple results from a select choice of specs
- Use responsive design by implementing media queries
- Use flexbox to help organzie webpage

### **Post-MVP:**

- Add another API!
- Make more media queries
- Add cool animations
- Add filters?

### **Goals:**

- The goal at the end of April 19th is to have all the JS and HTML done and finalized (if there is time add another API!)

- The goal at the end of April 20th is to have all the CSS styling put on there and make the website look nice

- The goal at the end of April 21st is to help refine the site more, add media queries to enable more flexiblity across displays, go through entire code, debug if necessary

### **Priority Matrix:**

![image](https://user-images.githubusercontent.com/82814499/115259627-0d4aa600-a100-11eb-956d-08c0cda78fc9.png)

### **Timeframes:**

Becasue of family plans my overall time frame for this project has been reduced down to just until Wednesday night. Due to this my timeframe is going to be very tight.


|  **Monday April 19**  |  **TASKS**  |
| ---                 | ---       |
| 9:15AM - 12:00AM      |     Rework my project proposal    |    
| 12:00PM - 12:30PM     |     Get approval for project / meeting with Steve    |
| 12:30PM - 1:30PM      |     LUNCH BREAK    |    
| 1:30PM - 2:00PM       |     Create all raw documents necessary, create HTML boiler plate and connect together index.html, style.css, app.js and the API key and partner token    |
| 2:00PM - 2:30PM       |     Create header, body and footer tags. Add divs and inputs within to enter vin number. Drop down menu for the make, model, year, etc.    |    
| 2:30PM - 3:00PM       |     Review HTML / BREAK    |
| 3:00PM - 3:30PM       |     Create and interactive drop down menu that asks for vehicle parameters such as make, model, year, etc. Along side make an alternative method for an input box for your VIN #    |    
| 3:30PM - 4:30PM       |     Implement proper tags, form eventhandlers, DOM manipulation, creeating dynamic image and header tags to display API information, delete previous tags    |
| 4:30PM - 5:00PM       |     Review JS / BREAK    |    
| 5:00PM - 5:30PM       |     Basic CSS manipulation, background colors, font size / family, colors and text styles(italics/bold)    |

|  **Tuesday April 20**  |  **TASKS**  |
| ---                 | ---       |
| 9:15AM - 12:00AM      |         |    
| 12:00PM - 12:30PM     |         |
| 12:30PM - 1:30PM      |     LUNCH BREAK    |    
| 1:30PM - 2:00PM       |         |
| 2:00PM - 2:30PM       |         |    
| 2:30PM - 3:00PM       |         |
| 3:00PM - 3:30PM       |         |    
| 3:30PM - 4:30PM       |         |
| 4:30PM - 5:00PM       |         |    
| 5:00PM - 5:30PM       |         |

|  **Wednesday April 21**  |  **TASKS**  |
| ---                 | ---       |
| 9:15AM - 12:00AM      |         |    
| 12:00PM - 12:30PM     |         |
| 12:30PM - 1:30PM      |     LUNCH BREAK    |    
| 1:30PM - 2:00PM       |         |
| 2:00PM - 2:30PM       |         |    
| 2:30PM - 3:00PM       |         |
| 3:00PM - 3:30PM       |         |    
| 3:30PM - 4:30PM       |         |
| 4:30PM - 5:00PM       |         |    
| 5:00PM - 5:30PM       |         |

