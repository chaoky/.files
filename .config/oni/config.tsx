
import * as React from "react"
import * as Oni from "oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as
    "oni.hideMenu": "hidden", // Hide top bar menu
    "sidebar.enabled"           : true // sidebar ui is gone
    "sidebar.default.open"      : true, // the side bar collapse 
    "learning.enabled"          : true, // Turn off learning pane
    "achievements.enabled"      : true, // Turn off achievements tracking / UX
    "ui.colorscheme": "nord",

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    //"oni.loadInitVim": false,
    //"editor.fontSize": "12px",
    //"editor.fontFamily": "Monaco",

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
}
