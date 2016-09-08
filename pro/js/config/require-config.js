"use strict";

/**
 * Created by HIRO on 2016/9/7.
 */
requirejs.config({
    baseUrl: "/easyjob/pro/js",
    shim: {
        "semantic": {
            deps: ["jquery"]
        },
        "login": {
            deps: ["jquery", "semantic", "react", "reactDOM"]
        },
        "gittest": {
            deps: ["jquery", "semantic"]
        }
    },
    paths: {
        "login": "view/login.view",
        "gittest": "view/gittest.view",

        "jquery": "vender/jquery/jquery-3.1.0.min",
        "semantic": "vender/semantic/semantic.min",
        "react": "vender/react/react.min",
        "reactDOM": "vender/react/react-dom.min"
    },
    urlArgs: "v=201609071150"
});