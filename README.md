# adapt-TextGraphicCombo
This component displays text and a graphic. 
In contrast to a combination of adapt-contrib-text and adapt-contrib-graphic, the column width of the text and graphic is not fixed. On mobile, the two column layout collapses into a single layout. 

## Installation
To install the component with the [Adapt CLI](https://github.com/adaptlearning/adapt-cli), run the following from the command line:  
`adapt install adapt-textGraphicCombo`

Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
`"adapt-textGraphicCombo": "*"`  
Then running the command:  
`adapt install`  
(This second method will reinstall all plug-ins listed in *adapt.json*.)  

Use the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager) to use this component in the Adapt authoring tool.

## Settings Overview
A properly formatted JSON is available in *example.json*

### Define the text area
"textAreaTitle": "Text Area Title displayed on Desktop",   
"textMobileTitle": "Text Area Title displayed on mobile",     
"textAreaBody": "Text Area body text ...",     

### Define the position of the text and graphic
"_textAreaLayout": "right",   
Your options are "left" or "right"

"_textColumn": 70,   
"_graphicColumn": 30,  
Column width in percent (0 - 100). Both values must add up to 100!  