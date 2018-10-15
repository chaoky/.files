"use strict";
exports.__esModule = true;
exports.activate = function (oni) {
    console.log("config activated");
    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", function () { return console.log("Control+Enter was pressed"); });
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")
};
exports.deactivate = function (oni) {
    console.log("config deactivated");
};
exports.configuration = {
    //add custom config here, such as
    "oni.hideMenu": "hidden",
    "sidebar.default.open": false,
    "sidebar.enabled": false,
    "learning.enabled": false,
    "achievements.enabled": false,
    "ui.colorscheme": "nord",
    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    //"oni.loadInitVim": false,
    //"editor.fontSize": "12px",
    //"editor.fontFamily": "Monaco",
    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto"
};
