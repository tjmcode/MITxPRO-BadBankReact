// #region  H E A D E R
// <copyright file="alldata.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Bad Bank React All Data
 *      Module:   Modules (./alldata.js)
 *      Project:  MicroCODE Bad Bank React App
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
 *      This module implements the MicroCODE's Bad Bank React Login.
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
 *  02-Jun-2022   TJM-MCODE  {0001}    New module implementing the Bad Bank Context Display (All Data).
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

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  C O M P O N E N T – P U B L I C

/**
 * AllData() – returns all data from our Bad Bank Accounts.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      AllData();
 *
 */
function AllData()
{
    // valid PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...
    const ctx = React.useContext(UserContext);

    // #region  P R I V A T E   F U N C T I O N S
    const buildContextList = () =>
    {
        const accountArray = [];

        for (var i in ctx)
        {
            for (var j in ctx[i])
            {
                if (ctx[i][j])
                {
                    // pick up the Users array, skipping "users" tag (which is not an array)
                    accountArray.push(<li className="list-group-item">{simplifyText(JSON.stringify(ctx[i][j]))}</li>);
                }
            }
        }

        return accountArray;
    };

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <ul className="list-group">
            <li className="list-group-item active">App Context (Accounts)</li>
            {buildContextList()}
        </ul>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

if (typeof module !== 'undefined')
{
    module.exports = {AllData};
}

// #endregion

// #endregion
// #endregion