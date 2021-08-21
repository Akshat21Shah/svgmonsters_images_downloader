# svgmonsters_images_downloader

svgmonsters-Image Downloader Mini Project (CDN)

Link where the web-application is hosted:
Here you can see the live hosting of the application.

https://svgmonsters.000webhostapp.com/


Website to fetch images:

- This website publishes API endpoints to create SVG images on the fly:-
https://pixelencounter.com/Api/SvgMonsters

Task :
Simple frontend task: (VUE.js / REACT.js + download button on UI)

- Create a single page which fetches/generates images from the endpoint mentioned above
- Display 20 images at a time on the page
- Create a download button per image, which if clicked opens a popup to download the specific image

Framework used:

- The Progressive JavaScript Framework of VUE.JS

- VUE JS framework provides installation or usage of VUE framework in multiple ways.
- Using CDN, npm or CLI.

Method used:

- We have used here CDN method to implement the web-application here.

Benefits of using CDN method:

- CDN methods of using VUE JS are best for standalone/single page applications.
- Using CDN method we donot need to donwload & install the whole framwork locally.

Library used:

- axios CDN : Axios is a promise-based HTTP client for node.js and the browser.
              It uses XMLHttpRequestes to fetch the data from the mentioned URL's i.e. API's.
              Supports hte promise API.
              Here we have used Axios to fetch the images from the mentioned URL using GET method.

Directory:

Github Repository:-
|-  svgmonsters
    |-  index.html
    |-  style.css
    |-  app.js
|-  README.md

Usage:

- As we have used the CDN method we can use the application directly just by
  downloading the zip file from github or cloning/fetching the repository mentioned.
- After downloading the file, need to open the index.html file from respective folder
  into a browser.
- The application will load 20 images having a button/image for donwloading that particular
  image on the local machine.
- After cliking on the donwload button the application will ask for the confirmation to donwload
  the image,
  if you click ok, then the particular image will get donwloaded into your local machine
  into downloads folder of the user,
  else pressed cancel it will show an alert message mentioning "You pressed cancel, so image is
  not being donwloaded !!" press ok.

  (Note: We need to do all this thing via keelping internet ON, if the internet is down the
  application would not be able to fetch the images/data from the given URL and also styling get affected
  as some links and styles are mentioned and linked.)

Working:

index.html:
- Basic HTMl  with base code including the links, local file mapping and usage of vue js functions
  with HTML for dynamically popluating the images and button.

style.css:
- Used for improving the looks of the UI by giving some paddings, margins, giving colors to buttons
  , giving border to the image for reprensation of the website in much better way. Used for styling
  the UI.

app.js:
- Here we have  reated the VUE application and mapped/mount it to the front-end.
- We have also written multiple funtcions one for loading the images asyncrounously by fetching
  the image from URL and other,
- For fetching partilcar image using GET method in AXIOS, and downloading the same using after getting
  USER's confirmation and saving it on local machine.

Here as the page is loaded, page on-load function is written which is called around 20 times using the
vue's for loop's as we need to fetch and show 20 different images on the UI & while calling the function
every time a number is passed to the function which acts as the seed id in the URL and fetches the particular
image and show's it in iamge tag mentioned in the HTML file.
While another function is called whenever user clicks the download button which also passes the current integer
which acts a seed id in the URL and using the axios function the particular image is fetch using GET method and
downloaded and also stored in the local machine after getting user's confirmation. Image is downloaded and saved
in the png format. Multiple formats are available such as png, jpeg, svg+xml, webp as pixelencounter api have multiple
attibutes which can be passed if doesnt passed then it consider the default attributes.

CORS error solved:
pixelencounter api doesnt support CORS, so we need to solve that error on the client side i.e. on our side.
That particular error can be solved using multiple ways using POSTman, CORS.bridged, CORS herokuapp, header file and many.
The method used by me is using https://CORS.bridged.cc .So using which we can also have access to Non-CORS API's/websites/URLS.
I also another solution which of using the cors-anywhere.herokuapp.com by giving temporary access to IP. CORS Anywhere
is a NodeJS proxy which adds CORS headers to the proxied request. But it's a temporary solution.
Teh permanent solution is achieved using the https://CORS.bridged.cc method.
