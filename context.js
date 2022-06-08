// #region  H E A D E R
// <copyright file="context.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common React Component Template
 *      Module:   Modules (./context.js)
 *      Project:  MicroCODE Common Code
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     June 2022
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
 *      This module implements the MicroCODE's Common React Component Template.
 *      This file is copied to start all MicroCODE React Component files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      ---------------------
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
 *  02-Jun-2022   TJM-MCODE  {0001}    New module for common reusable React Components.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

const TIMEOUT_MSEC = 3000;
const MINIMUM_OPENING_DEPOSIT = 100;

// App routing control...
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

// App Context holding User information
const UserContext = React.createContext(null);

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  C O M P O N E N T – P U B L I C

/**
 * Card() – a common App 'Card' definitions for all derived Components.
 *
 * @api public
 *
 * @param {type} props component properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Card(props);
 *
 */
function Card(props)
{
    // valid PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...

    // #region  P R I V A T E   F U N C T I O N S

    /*
     * bootstrapCard() - builds a Bootstrap Card Class name from passed properties.
     */
    function bootstrapCard()
    {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <div className={bootstrapCard()} style={{maxWidth: "18rem"}}>

            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>

        </div>
    );
}

/**
 * BankCard() – a common App 'Bank Card' that can handle all the functions of our 'Bad Bank'.
 *
 * Every 'BankCard' is made up of a combination of these fields:
 *
 *      o Username
 *      o Email
 *      o Password
 *      o Deposit Amount
 *      o Withdraw Amount
 *      o Balance Display
 *      o Submit Button
 *      o Result Display
 *
 * 'All Data' (Accounts Display) and 'About' are the only exceptions.
 *
 * @api public
 *
 * @param {type} props component properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      BankCard(props);
 *
 */
function BankCard(props)
{
    // initialize STATE and define accessors...
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState(0);

    // access CONTEXT for reference...
    const ctx = React.useContext(UserContext);

    // validate PROPS input(s)
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    if (!validate(balance, 'balance')) return;
    if (balance < MINIMUM_OPENING_DEPOSIT) return;
    ctx.users.push({name, email, password, balance});
    setShow(false);

    // #region  P R I V A T E   F U N C T I O N S

    /*
     * bootstrapCard() - builds a Bootstrap Card Class name from passed properties.
     */
    function bootstrapCard(error)
    {
        if (error)
        {
            const bg = ' bg-warning';  // yellow alert, can't access account
        }
        else
        {
            const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        }
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    };

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output
    if (!ctx.UserLogged)
    {
        return (
            <div className={bootstrapCard()} style={{maxWidth: "18rem"}}>

                <div className="card-header">{props.header}</div>

                <div className="card-body">
                    {props.title && (<h5 className="card-title">{props.title}</h5>)}
                    {props.text && (<p className="card-text">{props.text}</p>)}
                    {props.body}
                    {props.status && (<div id='createStatus'>{props.status}</div>)}
                </div>

            </div>
        );
    }

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <div className={bootstrapCard()} style={{maxWidth: "18rem"}}>

            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>

        </div>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

if (typeof module !== 'undefined')
{
    module.exports = {Context};
}

// #endregion

// #endregion
// #endregion