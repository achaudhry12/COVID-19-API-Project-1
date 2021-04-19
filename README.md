# Automotive Specification Application

### Application Description:

1. Displays image of vehicle

2. Displays specfications such as:
- Year
- Make
- Model
- Engine
- Manufacturer
- Trim
- Transmission

### API:

Vehicle API – CarMD
https://www.carmd.com/api/vehicle-api/#

VIN Decoder API: CarMD VIN Decoder API web service works on all vehicles sold in the US since 1996. It provides information on the year, make, model, and engine on the provided VIN. Additional information such as Manufacturer, Trim, and Transmission is also available.The feature is free up to 25 uses per month.
https://www.carmd.com/api/free-vin-decoder-carmd-api/

Car Image API: CarMD Vehicle Image API works on all vehicles sold in the US since 1996. It provides images for vehicles when provided the VIN. The vehicle image api is free for users whose request rates fall below 25 uses / month.
https://www.carmd.com/car-image-api/

### API Snippet:

`{
  "content-type":"application/json",
  "authorization":"M2UyNzgzNzQtYjExNy00YTE0LTk1NDItY2ZhZTljM2NkNjU3",
  "partner-token":"97737668c9244379b1eb58bebef1ae8b"
}`                           



### Wireframes



### MVP

- Need a drop down menu that can acess every model, color, manufacturer, trim, etc
- Need a input area to help supplemnt a secondary input of a VIN number
- From these data points the website should be able to figure out what the vehicle's matching image is and as well as other statistics about it.
- Use responsive design by implementing media queries

### Post-MVP

- Add another API!

### Goals

The goal at the end of April 19th is to have all the JS and HTML done and finalized (if there is time add another API!)

The goal at the end of April 20th is to have all the CSS styling put on there and make the website look nice

The goal at the end of April 21st is to help refine the site more, add media queries to enable more flexiblity across displays, go through entire code, debug if necessary

### Priority Matrix

![image](https://user-images.githubusercontent.com/82814499/115259627-0d4aa600-a100-11eb-956d-08c0cda78fc9.png)

### Timeframes

Becasue of family plans my overall time frame for this project has been reduced down to just until Wednesday night. Due to this my timeframe is going to be very tight.

Monday April 19

- 9:15AM - 11:30AM = Rework my project proposal
- 11:30AM - 12:30PM = Get approval for project / meeting with Steve
- 12:30PM - 1:30PM = LUNCH BREAK
- 1:30PM - 2:00PM = Create all raw documents necessary, create HTML boiler plate and connect together index.html, style.css, app.js and the API key and partner token
- 2:00PM - 2:30PM = Create header, body and footer tags. Add divs and inputs within to enter vin number. Drop down menu for the make, model, year, etc. 
- 2:30PM - 3:00PM = Review HTML / BREAK
- 3:00PM - 3:30PM = Create and interactive drop down menu that asks for vehicle parameters such as make, model, year, etc. Along side make an alternative method for an input box for your VIN #
- 3:30PM - 4:30PM = Implement proper tags, form eventhandlers, DOM manipulation, creeating dynamic image and header tags to display API information, delete previous tags
- 4:30PM - 5:00PM = Review JS / BREAK
- 5:00PM - 5:30PM = Basic CSS manipulation, background colors, font size / family, colors and text styles(italics/bold)
