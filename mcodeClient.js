// <copyright file="mcodeClient.js" company="MicroCODE Incorporated">Copyright © 2021 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>

/*
 *      Title:    MicroCODE Common Client Function Library
 *      Module:   modules (MicroCODE:mcodeClient.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     January 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript Client/Front-End functions.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *
 *      VIDEOS:
 *      -------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  27-Jan-2022   TJM-MCODE  {0001}    New module for common reusable Javascript UI/Client functions.
 *  05-Mar-2022   TJM-MCODE  {0002}    Documentation updates.
 *  04-May-0222   TJM-MCODE  {0003}    Corrected 'month' in timeStamp.
 *
 *
 *
 */
"use strict";

/**
 * timestamp() -- function to generate timestamp string: YYYY-MM-DD HH:MM:SS.mmm.
 * @returns  {String} "YYYY-MM-DD HH:MM:SS.mmm".
 * @api public
 */
function timeStamp()
{
    let now = new Date();
    let month = Number(now.getMonth()) + 1;  // {0003}
    return (
        now.getFullYear() +
        "-" +
        month +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes() +
        ":" +
        now.getSeconds() +
        "." +
        now.getMilliseconds()
    );
};

/**
 * Strips a string of BRACES, BRACKETS, QUOTES, etc.
 *
 * @param {string} textToSimplify the string to be simplified to data
 * @returns {string} the simplified text
 * @api public
 */
function simplifyText(textToSimplify)
{
    let simplifiedText = "";

    for (let i = 0; i < textToSimplify.length; i++)
    {
        switch (textToSimplify[i])
        {
            case '{':
            case '}':
            case '[':
            case ']':
            case '"':
                break;
            case ':':
                simplifiedText += textToSimplify[i];
                simplifiedText += ' ';
                break;
            case ',':
                simplifiedText += textToSimplify[i];
                simplifiedText += ' ';
                break;
            default:
                simplifiedText += textToSimplify[i];
                break;
        }
    }

    return simplifiedText;
};

/**
 * Converts an array of text items into a BOOTSTRAP CARD LIST.
 *
 * @param {array} arrayToListify the array to be convert to a HTML List.
 * @returns {string} the HTML List code.
 * @api public
 */
function listifyArray(arrayToListify)
{
    let listifiedText = "";

    arrayToListify.forEach(element =>
    {
        // convert array element to text, simplify for display, and add to LIST...
        listifiedText += '<li class="list-group-item">' + simplifyText(JSON.stringify(element)) + '</li>';
    });

    return listifiedText;
};

/**
 * Converts an array of text items into a BOOTSTRAP CARD LIST - JSX code.
 *
 * @param {array} arrayToListify the array to be convert to a HTML List.
 * @returns {string} the HTML List code.
 * @api public
 */
function listifyArrayJSX(arrayToListify)
{
    let listifiedText = "";

    listifiedText += '<ul className="list-group">';

    arrayToListify.forEach(element =>
    {
        // convert array element to text, simplify for display, and add to LIST...
        listifiedText += '<li className="list-group-item">' + simplifyText(JSON.stringify(element)) + '</li>';
    });

    listifiedText += '</ul>';

    return listifiedText;
};

// #region  F U N C T I O N - E X P O R T S

if (typeof module !== 'undefined')
{
    module.exports = {timeStamp, simplifyText, listifyArray};
}

// #endregion