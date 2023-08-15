// const express = require("express");
// const { google } = require('googleapis');

// require("dotenv").config();
// const file_path = process.env.FILE_PATH;
// const save_in_sheets = async(req) => {

//     // Format data into rows
//     const rows = [req.body.name, req.body.phone, req.body.email, req.body.address, req.body.income, req.body.savings];

//     const auth = new google.auth.GoogleAuth({ keyFile: file_path, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });

//     const auth_client_object = await auth.getClient();

//     const spreadsheetId = process.env.SPREADHSEET_ID;
//     const sheetName = 'Data'; // changed the name as per your choice

//     const google_sheets_instance = google.sheets({
//         version: 'v4',
//         auth: auth_client_object
//     })

//     await google_sheets_instance.spreadsheets.values.append({ // append nd update features are there
//         auth,
//         spreadsheetId,
//         range: "Data!A2:F2", // Specify the range where data will be appended
//         valueInputOption: "USER_ENTERED",
//         resource: {
//             values: [rows],
//         }
//     });
//     console.log("The data is added in the new row of google sheet!!");

// };

// module.exports = save_in_sheets;