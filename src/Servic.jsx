import React from 'react'

 function Servic() {


    var myservices=["web Application" ,"Mobile Application" ,"Content Writing"]
    return (
        <>
        <h1>SERVICES COMPONENT</h1>
        <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>

        <ul>
            <li>{ myservices[0] }</li>
            <li>{ myservices[1] }</li>
            <li>{ myservices[2] }</li>
        </ul>  
        </>
    )
}

export default Servic
