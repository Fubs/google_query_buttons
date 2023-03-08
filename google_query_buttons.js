// ==UserScript==
// @name       	Modify Google Search Buttons
// @description buttons to quickly append stackoverflow, github, etc. to google search
// @author      - Max Behling
// @include     /^https:\/\/(?:ipv4|ipv6|www)\.google\.(?:[a-z\.]+)\/search\?(?:.+&)?q=[^&]+(?:&.+)?$/
// @exclude     /^https:\/\/(?:ipv4|ipv6|www)\.google\.(?:[a-z\.]+)\/search\?(?:.+&)?tbm=lcl(?:&.+)?$/
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
    'use strict'

    window.addEventListener('load', () => {
        addRedditButton('...reddit', appendRedditFn)
        addStackOverflowButton('...stackoverflow', appendStackOverflowFn)
        addYoutubeButton('...youtube', appendYoutubeFn)
        addGithubButton('...github', appendGithubFn)
    })

    //add button objects
    function addRedditButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: 'absolute',
            bottom: '84%',
            left: '60%',
            'z-index': 2147483647
        }

        let button = document.createElement('button'),
            btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }
    function addStackOverflowButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: 'absolute',
            bottom: '84%',
            left: '65.5%',
            'z-index': 2147483647
        }

        let button = document.createElement('button'),
            btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }
    function addYoutubeButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: 'absolute',
            bottom: '84%',
            left: '75.2%',
            'z-index': 2147483647
        }

        let button = document.createElement('button'),
            btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }
    function addGithubButton(text, onclick, cssObj) {
        cssObj = cssObj || {
            position: 'absolute',
            bottom: '84%',
            left: '82%',
            'z-index': 2147483647
        }

        let button = document.createElement('button'),
            btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }


    //url modifier functions
    function appendRedditFn() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.q; //value = x for url google.com/search?q=x
        if (!value.endsWith(" reddit")){
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + value + '%20reddit';
            window.location.href = newurl;
        }

    }
    function appendStackOverflowFn() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.q;
        if (!value.endsWith(" stackoverflow")){
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + value + '%20stackoverflow';
            window.location.href = newurl;
        }
    }
    function appendYoutubeFn() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.q;
        if (!value.endsWith(" youtube")){
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + value + '%20youtube';
            window.location.href = newurl;
        }
    }
    function appendGithubFn() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.q;
        if (!value.endsWith(" github")){
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + value + '%20github';
            window.location.href = newurl;
        }
    }





}())
