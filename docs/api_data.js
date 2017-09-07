define({ api: [
  {
    "type": "post",
    "url": "/v1/accounts?type=:type",
    "title": "Create Account",
    "group": "Account",
    "name": "Create_Account",
    "version": "1.0.0",
    "description": "<p>Create account. If type=self, registered account and user will require validation from Brightergy Personnel</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "account",
            "optional": false,
            "description": "<p>accout data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>user data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccount:\n{\n    \"name\" : \"Brightergy Backend\",\n    \"shippingStreet\" : \"1617 Main St\",\n    \"shippingState\" : \"MO\",\n    \"shippingPostalCode\" : \"64108\",\n    \"shippingCountry\" : \"US\",\n    \"shippingCity\" : \"Kansas City\",\n    \"billingStreet\" : \"1617 Main St # Street3\",\n    \"billingState\" : \"MO\",\n    \"billingPostalCode\" : \"64108\",\n    \"billingCountry\" : \"US\",\n    \"billingCity\" : \"Kansas City\",\n    \"cname\" : \"aleksei1\",\n    \"tickerSymbol\" : null,\n    \"dunsNumber\" : null,\n    \"webSite\" : null,\n    \"phone\" : \"8168660567\",\n    \"email\" : \"AdamAdmin@brightergy.com\",\n    \"sfdcAccountId\" : \"001M000000dhnyWIAQ\",\n    \"__v\" : 0,\n    \"billingAddress\" : \"1617 Main Street\\n3rd Floor\\nKansas City, MO 64108\",\n    \"shippingAddress\" : \"1617 Main Street\\nKansas City, MO 64108\",\n    \"awsAssetsKeyPrefix\" : \"CzosLKynCRHPHBv80nZP3mpp\"\n}\nuser:\n{\n    \"firstName\": \"aleksei\",\n    \"lastName\": \"Pylyp\",\n    \"email\": \"aleksei.pylyp1@brightergy.com\",\n    \"emailUser\": \"aleksei.pylyp\",\n    \"emailDomain\": \"brightergy.com\",\n    \"password\": \"Brightergy1\",\n    \"role\": \"Admin\",\n    \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n    \"profilePictureUrl\" : \"/components/company-panel/assets/img/icon_SF_large.png\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created object data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135e074f09ccc06d5be3d2\",\n        \"name\":\"Parkway\",\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHTEdpX1cyR1JpakU\",\n        \"__v\":0,\n        \"shippingStreet\":\"\",\n        \"shippingState\":\"\",\n        \"shippingPostalCode\":\"\",\n        \"shippingCountry\":\"\",\n        \"shippingCity\":\"\",\n        \"shippingAddress\":null,\n        \"billingStreet\":\"\",\n        \"billingState\":\"\",\n        \"billingPostalCode\":\"\",\n        \"billingCountry\":\"\",\n        \"billingCity\":\"\",\n        \"billingAddress\":null,\n        \"cname\":null,\n        \"tickerSymbol\":null,\n        \"dunsNumber\":null,\n        \"webSite\":\"https://parkway.brightergy.com/\",\n        \"phone\":\"8168660555\",\n        \"email\":\"AdamAdmin@brightergy.com\",\n        \"sfdcAccountId\":\"001L000000U2ZQIIA3\",\n        \"gDriveUserFolderId\":\"0BwW4a4uizniHbFlOWmlzZzJwaEk\",\n        \"awsAssetsFolderName\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001L000000U2ZQIIA3\",\n        \"id\":\"54135e074f09ccc06d5be3d2\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts?type=:type"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/accounts/createwithsf",
    "title": "Create Account With SF",
    "group": "Account",
    "name": "Create_Account_With_SF",
    "version": "1.0.0",
    "description": "<p>Create account with Salesforce</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "account",
            "optional": false,
            "description": "<p>account data</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>user data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccount:\n{\n    \"name\" : \"Brightergy Backend\",\n    \"shippingStreet\" : \"1617 Main St\",\n    \"shippingState\" : \"MO\",\n    \"shippingPostalCode\" : \"64108\",\n    \"shippingCountry\" : \"US\",\n    \"shippingCity\" : \"Kansas City\",\n    \"billingStreet\" : \"1617 Main St # Street3\",\n    \"billingState\" : \"MO\",\n    \"billingPostalCode\" : \"64108\",\n    \"billingCountry\" : \"US\",\n    \"billingCity\" : \"Kansas City\",\n    \"cname\" : \"BrightergyBackend\",\n    \"tickerSymbol\" : null,\n    \"dunsNumber\" : null,\n    \"webSite\" : null,\n    \"phone\" : \"8168660567\",\n    \"email\" : \"AdamAdmin@brightergy.com\",\n    \"__v\" : 0,\n    \"billingAddress\" : \"1617 Main Street\\n3rd Floor\\nKansas City, MO 64108\",\n    \"shippingAddress\" : \"1617 Main Street\\nKansas City, MO 64108\",\n    \"awsAssetsKeyPrefix\" : \"CzosLKynCRHPHBv80nZP3mpp\"\n}\nuser:\n{\n    \"firstName\": \"aleksei\",\n    \"lastName\": \"Pylyp\",\n    \"email\": \"aleksei.pylyp@brightergy.com\",\n    \"emailUser\": \"aleksei.pylyp\",\n    \"emailDomain\": \"brightergy.com\",\n    \"password\": \"Brightergy1\",\n    \"role\": \"Admin\",\n    \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n    \"profilePictureUrl\" : \"/components/company-panel/assets/img/icon_SF_large.png\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created account object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135e074f09ccc06d5be3d2\",\n        \"name\":\"Parkway\",\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHTEdpX1cyR1JpakU\",\n        \"__v\":0,\n        \"shippingStreet\":\"\",\n        \"shippingState\":\"\",\n        \"shippingPostalCode\":\"\",\n        \"shippingCountry\":\"\",\n        \"shippingCity\":\"\",\n        \"shippingAddress\":null,\n        \"billingStreet\":\"\",\n        \"billingState\":\"\",\n        \"billingPostalCode\":\"\",\n        \"billingCountry\":\"\",\n        \"billingCity\":\"\",\n        \"billingAddress\":null,\n        \"cname\":null,\n        \"tickerSymbol\":null,\n        \"dunsNumber\":null,\n        \"webSite\":\"https://parkway.brightergy.com/\",\n        \"phone\":\"8168660555\",\n        \"email\":\"AdamAdmin@brightergy.com\",\n        \"sfdcAccountId\":\"001L000000U2ZQIIA3\",\n        \"gDriveUserFolderId\":\"0BwW4a4uizniHbFlOWmlzZzJwaEk\",\n        \"awsAssetsFolderName\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001L000000U2ZQIIA3\",\n        \"id\":\"54135e074f09ccc06d5be3d2\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/createwithsf"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/accounts/lead/:sfLeadId?apikey=sfapikey",
    "title": "Delete Account with matched SF Lead Id",
    "group": "Account",
    "name": "Delete_Account",
    "version": "1.0.0",
    "description": "<p>Remove account with matched SF Lead Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nsfLeadId : 00QL000000DTV6VMAX\napikey : 1111111\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/lead/:sfLeadId?apikey=sfapikey"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/accounts/:accountId/assets/:assetId",
    "title": "Delete Account Assets",
    "group": "Account",
    "name": "Delete_Account_Assets",
    "version": "1.0.0",
    "description": "<p>Remove account assets by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccountId : 54135e074f09ccc06d5be3d2\nassetId : assets_14163080760412\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId/assets/:assetId"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/accounts/:accountId/assets?searchKey=:searchKey&limit=:limit",
    "title": "Get Account Assets",
    "group": "Account",
    "name": "Get_Account_Assets",
    "version": "1.0.0",
    "description": "<p>Retrieves the All account assets. When the research key is specified,  it retrieves the associated account assets including search name.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccountId : 54135e074f09ccc06d5be3d2\nsearchKey : spacing\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>list of account assets</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId/assets?searchKey=:searchKey&limit=:limit"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/accounts?searchKey=:searchKey&limit=:limit",
    "title": "Get Accounts",
    "group": "Account",
    "name": "Get_Accounts",
    "version": "1.0.0",
    "description": "<p>Retrieves the account list. when searchKey is all_data, retrieves the all data.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Account objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135e074f09ccc06d5be3d2\",\n        \"name\":\"Parkway\",\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHTEdpX1cyR1JpakU\",\n        \"__v\":0,\n        \"shippingStreet\":\"\",\n        \"shippingState\":\"\",\n        \"shippingPostalCode\":\"\",\n        \"shippingCountry\":\"\",\n        \"shippingCity\":\"\",\n        \"shippingAddress\":null,\n        \"billingStreet\":\"\",\n        \"billingState\":\"\",\n        \"billingPostalCode\":\"\",\n        \"billingCountry\":\"\",\n        \"billingCity\":\"\",\n        \"billingAddress\":null,\n        \"cname\":null,\n        \"tickerSymbol\":null,\n        \"dunsNumber\":null,\n        \"webSite\":\"https://parkway.brightergy.com/\",\n        \"phone\":\"8168660555\",\n        \"email\":\"AdamAdmin@brightergy.com\",\n        \"sfdcAccountId\":\"001L000000U2ZQIIA3\",\n        \"gDriveUserFolderId\":\"0BwW4a4uizniHbFlOWmlzZzJwaEk\",\n        \"awsAssetsFolderName\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001L000000U2ZQIIA3\",\n        \"id\":\"54135e074f09ccc06d5be3d2\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts?searchKey=:searchKey&limit=:limit"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/accounts/:accountId/users",
    "title": "Get Users by Account Id",
    "group": "Account",
    "name": "Get_Users_by_Account_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the users by account Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccountId : 54135e074f09ccc06d5be3d2\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    },{\n        \"_id\":\"5429d0ba89c1849502287d5c\",\n        \"firstName\":\"Emmanuel\",\n        \"lastName\":\"Admin\",\n        \"email\":\"emmanuel.ekochuone@brightergy.com\",\n        \"emailUser\":\"emmanuel.ekochuone\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":4,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000Q65ZBIAZ\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\",\"DataSense\",\"BrighterSavings\",\"Verified Savings\",\"Load Response\",\n                \"Utility Manager\",\"Programs & Projects\",\"ENERGY STAR Portfolio Manager\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":\"5429d13f89c1849502287d5d\",\n        \"role\":\"Admin\",\n        \"enphaseUserId\":\"4d7a59344d5445300a\",\n        \"socialToken\":null,\n        \"phone\":\"1-800-856-3256\",\n        \"middleName\":\"\",\n        \"name\":\"Emmanuel Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000Q65ZBIAZ\",\n        \"id\":\"5429d0ba89c1849502287d5c\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId/users"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/accounts/:accountId/assets/load",
    "title": "Load Account Assets From AWS",
    "group": "Account",
    "name": "Load_Account_Assets_From_AWS",
    "version": "1.0.0",
    "description": "<p>Load the account assets from AWS to redis</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccountId : 54135e074f09ccc06d5be3d2\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId/assets/load"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/accounts/lead/:sfLeadId?apikey=sfapikey",
    "title": "Set Account and User sfdc Id by lead Id",
    "group": "Account",
    "name": "Set_Account_and_User_sfdc_Id_by_lead_Id",
    "version": "1.0.0",
    "description": "<p>Remove account with matched SF Lead Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nsfLeadId : 00QL000000DTV6VMAX\napikey : 1111111\naccountId: 111\ncontactId: 222\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/lead/:sfLeadId?apikey=sfapikey"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/accounts/:accountId",
    "title": "Update Account",
    "group": "Account",
    "name": "Update_Account",
    "version": "1.0.0",
    "description": "<p>Edit account data. API can accept only changed fields.However id and sfdcAccountId are mandatory. <br/>Following fields can&#39;t be updated: <br/>     awsAssetsKeyPrefix <br/>     appEntities <br/>     sfdcAccountId <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "account",
            "optional": false,
            "description": "<p>account data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n account:\n{\n    \"name\" : \"Parkway C-2 School District updated\",\n    \"cname\" : \"parkwayschools\",\n    \"tickerSymbol\" : null,\n    \"dunsNumber\" : null,\n    \"webSite\" : \"http://parkway.brightergy.com\",\n    \"phone\" : \"1111111111\",\n    \"email\" : \"AdamAdmin@brightergy.com\",\n    \"sfdcAccountId\" : \"001C0000013iMilIAE\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated account object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135e074f09ccc06d5be3d2\",\n        \"name\":\"Parkway\",\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHTEdpX1cyR1JpakU\",\n        \"__v\":0,\n        \"shippingStreet\":\"\",\n        \"shippingState\":\"\",\n        \"shippingPostalCode\":\"\",\n        \"shippingCountry\":\"\",\n        \"shippingCity\":\"\",\n        \"shippingAddress\":null,\n        \"billingStreet\":\"\",\n        \"billingState\":\"\",\n        \"billingPostalCode\":\"\",\n        \"billingCountry\":\"\",\n        \"billingCity\":\"\",\n        \"billingAddress\":null,\n        \"cname\":null,\n        \"tickerSymbol\":null,\n        \"dunsNumber\":null,\n        \"webSite\":\"https://parkway.brightergy.com/\",\n        \"phone\":\"8168660555\",\n        \"email\":\"AdamAdmin@brightergy.com\",\n        \"sfdcAccountId\":\"001L000000U2ZQIIA3\",\n        \"gDriveUserFolderId\":\"0BwW4a4uizniHbFlOWmlzZzJwaEk\",\n        \"awsAssetsFolderName\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001L000000U2ZQIIA3\",\n        \"id\":\"54135e074f09ccc06d5be3d2\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/accounts/:accountId/assets",
    "title": "Upload Account Assets",
    "group": "Account",
    "name": "Upload_Account_Assets",
    "version": "1.0.0",
    "description": "<p>Upload account asset.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "accountId",
            "optional": false,
            "description": "<p>account Id</p>"
          },
          {
            "group": "Parameter",
            "type": "File Object",
            "field": "assetsFile",
            "optional": false,
            "description": "<p>asset file data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>uploaded assets data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/:accountId/assets"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/accounts/verifycname/:accountCname",
    "title": "Verify Account CNAME",
    "group": "Account",
    "name": "Verify_Account_CNAME",
    "version": "1.0.0",
    "description": "<p>Check if the given account CName is vaild</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccountCname : parkway\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>true(vaild),false(invalid)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":true\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/accounts/verifycname/:accountCname"
      }
    ],
    "filename": "server/general/routes/apis/account-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards/export/:dashboardId",
    "title": "Export Dashboard",
    "group": "Analyze_Dashboard",
    "name": "Export_analyze_dashboard",
    "version": "1.0.0",
    "description": "<p>Export analyze dashboard into pdf format</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 54683fa4f48ee7140096618d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": \"exportedResourceUrl: http://example.com/url\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/export/:dashboardId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards/export/widget/:widgetId",
    "title": "Export Widget",
    "group": "Analyze_Widget",
    "name": "Export_analyze_widget",
    "version": "1.0.0",
    "description": "<p>Export analyze widget in csv/pdf format</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 54683fa4f48ee7140096618d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": \"exportedResourceUrl: http://example.com/url\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/export/widget/:widgetId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/general/assets/:assetId",
    "title": "Delete General Assets",
    "group": "Assets",
    "name": "Delete_General_Assets",
    "version": "1.0.0",
    "description": "<p>Remove general assets by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nassetId : assets_14164770890876\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/general/assets/:assetId"
      }
    ],
    "filename": "server/general/routes/apis/assets-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/general/assets?searchKey=:searchKey&limit=:limit",
    "title": "Get General Assets",
    "group": "Assets",
    "name": "Get_General_Assets",
    "version": "1.0.0",
    "description": "<p>Retrieves the All general assets. When the research key is specified,  it retrieves the associated general assets including search name. searchKey is mandatory.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nfileNameMask : Chrysanthemum\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>list of general assets</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/general/assets?searchKey=:searchKey&limit=:limit"
      }
    ],
    "filename": "server/general/routes/apis/assets-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/general/assets",
    "title": "Upload General Assets",
    "group": "Assets",
    "name": "Upload_General_Assets",
    "version": "1.0.0",
    "description": "<p>Upload general assets to AWS</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "field": "assetsFile",
            "optional": false,
            "description": "<p>asset data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>uploaded assets data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/general/assets"
      }
    ],
    "filename": "server/general/routes/apis/assets-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/collection/nodes",
    "title": "Get Devices",
    "group": "Collection",
    "name": "Get_Devices",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of devices</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Device Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"5421ab10885c2846dcce9d3e\",\n        \"name\":\"Envoy\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/collection/nodes"
      }
    ],
    "filename": "server/general/routes/apis/collection-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/collection/auth?company=enphase",
    "title": "Get Enphase Auth URL",
    "group": "Collection",
    "name": "Get_Enphase_Auth_URL",
    "version": "1.0.0",
    "description": "<p>Retrieves the enphase auth URL of currently logged in user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>enphase auth url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": \"https://enlighten.enphaseenergy.com/app_user_auth/\n            new?app_id=1409611230371&redirect=http://brightergy.com/users/enphase/auth\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/collection/auth?company=enphase"
      }
    ],
    "filename": "server/general/routes/apis/collection-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/collection/scopes/:scopeId/nodes?company=enphase",
    "title": "Get Enphase Inventory",
    "group": "Collection",
    "name": "Get_Enphase_Inventory",
    "version": "1.0.0",
    "description": "<p>Retrieves the the inventory list of Enphase System by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n   scopeId : 38377\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>inventory list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"system_id\":38377,\n        \"envoys\":[{\n            \"sn\":\"121035340955\"\n        }],\n        \"inverters\":[{\n            \"sn\":\"121106540268\",\n            \"model\":\"M210\"\n        },{\n            \"sn\":\"121106540291\",\n            \"model\":\"M210\"\n        }]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/collection/scopes/:scopeId/nodes?company=enphase"
      }
    ],
    "filename": "server/general/routes/apis/collection-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/collection/scopes",
    "title": "Get Manufactures or Enphase systems",
    "group": "Collection",
    "name": "Get_Manufactures_or_Enphase_systems",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of manufactures. when company query equals ehphase,  it retrieves the list of enphase systems of logged in user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Manufacture Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"5421ab08885c2846dcce9d3d\",\n        \"name\":\"Enphase\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/collection/scopes"
      }
    ],
    "filename": "server/general/routes/apis/collection-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets",
    "title": "Create Widget",
    "group": "Dashboard",
    "name": "Create_Analyze_Widget",
    "version": "1.0.0",
    "description": "<p>Create Analyze widget <br/>Following fields can&#39;t be inserted: <br/>     segments <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>WidgetObject</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\n{\n    \"type\" : \"Pie\",\n    \"title\" : \"Test Pie\",\n    \"metric\" : \"545906edded7ea0f0079840e\",\n    \"compareMetric\" : null,\n    \"groupDimension\" : \"--Custom--\",\n    \"customGroupDimension\" : {\n        \"groupBySegment\" : true,\n        \"definedGroups\" : [\n            {\n                \"segmentId\" : \"54cb1e77d52879320ab88a03\",\n                \"expandedNodes\" : [],\n                \"isExpanded\" : false,\n                \"treedata\" : [],\n                \"tagBindings\" : [\n                    {\n                        \"tagType\" : \"Node\",\n                        \"id\" : \"5458b22379e7b60e00b1133a\"\n                    }\n                ],\n                \"name\" : \"Custom Group A\"\n            }\n        ]\n    }\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>widget object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"54637911dfcbe62000a7ede0\",\n     \"type\": \"Equivalencies\",\n     \"title\": \"Cars Removed\",\n     \"creator\": \"54135f90c6ab7c241e28095e\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 1,\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"endDate\": null,\n     \"startDate\": null,\n     \"singlePointAggregation\": [],\n     \"compareAsBar\": false,\n     \"compareMetric\": null,\n     \"metric\": {\n         \"_id\": \"545906edded7ea0f0079840e\",\n         \"tagType\": \"Metric\",\n         \"name\": \"Energy (kWh)\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54135f90c6ab7c241e28095e\",\n         \"__v\": 4,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54135f90c6ab7c241e28095e\"\n             }\n         ],\n         \"appEntities\": [\n             {\n                 \"appName\": \"Dashboard\",\n                 \"id\": \"54a2bc6560f7f44000e5959d\"\n             }\n         ],\n         \"children\": [],\n         \"parents\": [\n             {\n                 \"id\": \"5458b22379e7b60e00b1133a\",\n                 \"tagType\": \"Node\"\n             }\n         ],\n         \"summaryMethod\": \"Total\",\n         \"formula\": null,\n         \"metricID\": \"Pac\",\n         \"metricType\": \"Calculated\",\n         \"metric\": \"Standard\",\n         \"rate\": null,\n         \"sensorTarget\": null,\n         \"timezone\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [],\n         \"utilityProvider\": null,\n         \"nonProfit\": null,\n         \"taxID\": null,\n         \"address\": null,\n         \"street\": null,\n         \"state\": null,\n         \"postalCode\": null,\n         \"country\": null,\n         \"city\": null\n     },\n     \"showAllTime\": false,\n     \"greenhousePounds\": false,\n     \"co2Pounds\": false,\n     \"greenhouseKilograms\": false,\n     \"co2Kilograms\": false,\n     \"equivType\": \"Cars Removed\",\n     \"orientation\": \"vertical\",\n     \"showUpTo\": null,\n     \"imageUrl\": null,\n     \"drillDown\": null,\n     \"displayedColumns\": [],\n     \"rowsPerTable\": null,\n     \"lastConnected\": null,\n     \"boilerplateLocation\": null,\n     \"boilerplateCommissioning\": null,\n     \"boilerplateSystemPower\": null,\n     \"boilerplateType\": null,\n     \"pivotDimension\": null,\n     \"groupDimension\" : \"--Custom--\",\n     \"customGroupDimension\" : {\n         \"groupBySegment\" : true,\n         \"definedGroups\" : [\n             {\n                 \"segmentId\" : \"54cb1e77d52879320ab88a03\",\n                 \"_id\" : \"54e343abfbd0138d08c87b0a\",\n                 \"expandedNodes\" : [],\n                 \"isExpanded\" : false,\n                 \"treedata\" : [],\n                 \"tagBindings\" : [\n                     {\n                         \"tagType\" : \"Node\",\n                         \"id\" : \"5458b22379e7b60e00b1133a\"\n                     }\n                 ],\n                 \"name\" : \"Custom Group A\"\n             }\n         ]\n     },\n     \"collapsed\": false,\n     \"titleShow\": false\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments",
    "title": "Create Analyze Widget Segment",
    "group": "Dashboard",
    "name": "Create_Analyze_Widget_Segment",
    "version": "1.0.0",
    "description": "<p>Create new segment to widget</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Segments object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : \"5457e1990c5a5d2700affe77\"\nwidgetId : \"5458ae05fe540a120074c205\"\nbody\n[{\n    \"name\" : \"test segment\",\n    \"tagBindings\" :[{\n        \"tagType\":\"Scope\",\n        \"id\":\"543824c07174d62c1acad525\"\n    }]\n}]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Saved Dashboard Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"5458ae05fe540a120074c205\",\n     \"type\": \"Timeline\",\n     \"title\": \"Timeline widget 1\",\n     \"creator\": \"54135f90c6ab7c241e28095e\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 7,\n     \"segments\": [\n         {\n             \"tagBindings\": [\n                 {\n                     \"tagType\": \"Scope\",\n                     \"id\": \"543824c07174d62c1acad525\"\n                 }\n             ],\n             \"name\": \"test segment\",\n             \"id\": \"54ca5f234aa35750070558fd\"\n         }\n     ],\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"endDate\": null,\n     \"startDate\": null,\n     \"singlePointAggregation\": [\n         {\n             \"function\": \"Min\",\n             \"title\": \"Min_title\"\n         },\n         {\n             \"function\": \"Total\"\n         }\n     ],\n     \"compareAsBar\": false,\n     \"compareMetric\": null,\n     \"metric\": {\n         \"_id\": \"545906ddded7ea0f0079840c\",\n         \"tagType\": \"Metric\",\n         \"name\": \"Power (kW)\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54135f90c6ab7c241e28095e\",\n         \"__v\": 0,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54135f90c6ab7c241e28095e\"\n             }\n         ],\n         \"appEntities\": [],\n         \"children\": [],\n         \"parents\": [\n             {\n                 \"id\": \"5458b22379e7b60e00b1133a\",\n                 \"tagType\": \"Node\"\n             }\n         ],\n         \"summaryMethod\": \"Average\",\n         \"formula\": null,\n         \"metricID\": \"Pac\",\n         \"metricType\": \"Datafeed\",\n         \"metric\": \"Standard\",\n         \"rate\": null,\n         \"sensorTarget\": null,\n         \"timezone\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [],\n         \"utilityProvider\": null,\n         \"nonProfit\": null,\n         \"taxID\": null,\n         \"address\": null,\n         \"street\": null,\n         \"state\": null,\n         \"postalCode\": null,\n         \"country\": null,\n         \"city\": null\n     },\n     \"compareLabel\": null,\n     \"label\": null,\n     \"summaryMethod\": null,\n     \"showAllTime\": false,\n     \"greenhousePounds\": false,\n     \"co2Pounds\": false,\n     \"greenhouseKilograms\": false,\n     \"co2Kilograms\": false,\n     \"equivType\": null,\n     \"orientation\": null,\n     \"showUpTo\": null,\n     \"imageUrl\": null,\n     \"drillDown\": null,\n     \"displayedColumns\": [],\n     \"rowsPerTable\": null,\n     \"lastConnected\": null,\n     \"boilerplateLocation\": null,\n     \"boilerplateCommissioning\": null,\n     \"boilerplateSystemPower\": null,\n     \"boilerplateType\": null,\n     \"pivotDimension\": null,\n     \"groupDimension\": null,\n     \"collapsed\": false,\n     \"titleShow\": true\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards",
    "title": "Create Dashboard",
    "group": "Dashboard",
    "name": "Create_Dashboard",
    "version": "1.0.0",
    "description": "<p>Create dashboard. <br/>Following fields can&#39;t be inserted: <br/>     segments <br/>     awsAssetsKeyPrefix <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Dashboard data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{ \n    \"title\" : \"Water Bill\",\n    \"collections\" : [ \"bills\" ],\n    \"startDate\" : \"2014-10-01T15:00:15.493Z\",\n    \"endDate\" : \"2014-11-01T16:00:15.493Z\",\n    \"layout\" : { \"selectedStyle\" : 2, \"widgets\" : { \"column0\" : [], \"column1\" : [] } } \n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Dashboard object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"54b4f41679fc46d01f9f50fe\",\n     \"title\": \"Water Bill\",\n     \"startDate\": \"2014-10-01T15:00:15.493Z\",\n     \"endDate\": \"2015-01-13T10:31:50.055Z\",\n     \"creator\": \"2014-11-01T16:00:15.493Z\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 1,\n     \"isViewerTime\": false,\n     \"default\": false,\n     \"segments\": [],\n     \"subDay\": null,\n     \"isPrivate\": false,\n     \"isRealTimeDateRange\": false,\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"awsAssetsKeyPrefix\": \"UnOBGdnAqhCd\",\n     \"widgets\": [],\n     \"collections\": [\n         \"bills\"\n     ],\n     \"layout\": {\n         \"selectedStyle\": 2,\n         \"widgets\": {\n             \"column0\": [],\n             \"column1\": []\n         },\n         \"includePrimary\": false\n     }\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments",
    "title": "Create Analyze Segment",
    "group": "Dashboard",
    "name": "Create_Segment",
    "version": "1.0.0",
    "description": "<p>Create new segment to dashboard</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Segments object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : \"5461363bdfef7c4800146f4b\"\nbody\n[{\n    \"name\" : \"test segment\",\n    \"tagBindings\" :[{\n        \"tagType\":\"Scope\",\n        \"id\":\"543824c07174d62c1acad525\"\n    }]\n}]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Saved Dashboard Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\": \"5413612ad37f4ab56f1fb175\",\n        \"title\": \"Yakov First Dashboard\",\n        \"startDate\": \"2014-07-09T00:00:00.000Z\",\n        \"endDate\": \"2014-08-13T00:00:00.000Z\",\n        \"creator\": \"54135cb4cde72bc019ff39bd\",\n        \"creatorRole\": \"BP\",\n        \"__v\": 99,\n        \"segments\": [{\n            \"tags\" : [{\n                \"_id\" : \"543824bd7174d62c1acad50f\",\n                \"tagType\" : \"Facility\",\n                \"name\" : \"Barretts Elementary\",\n                \"creatorRole\" : \"BP\",\n                \"creator\" : \"54133e8fd361774c1696f265\",\n                \"__v\" : 0,\n                \"usersWithAccess\" : [{\n                    \"id\" : \"54133e8fd361774c1696f265\"\n                }, \n                {\n                    \"id\" : \"54135ec74f09ccc06d5be3d6\"\n                }],\n                \"appEntities\" : [{\n                    \"id\" : \"5413af68b1c838ea73500109\",\n                    \"appName\" : \"Presentation\"\n                }],\n                \"children\" : [{\n                    \"id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\"\n                }, \n                {\n                    \"id\" : \"543824be7174d62c1acad517\",\n                    \"tagType\" : \"Scope\"\n                }],\n                \"parents\" : [],\n                \"formula\" : null,\n                \"metricID\" : null,\n                \"metricType\" : null,\n                \"metric\" : null,\n                \"sensorTarget\" : null,\n                \"enphaseUserId\" : null,\n                \"endDate\" : null,\n                \"weatherStation\" : null,\n                \"longitude\" : null,\n                \"latitude\" : null,\n                \"webAddress\" : null,\n                \"interval\" : null,\n                \"destination\" : null,\n                \"accessMethod\" : null,\n                \"deviceID\" : null,\n                \"device\" : null,\n                \"manufacturer\" : null,\n                \"utilityAccounts\" : [\"6655\"],\n                \"utilityProvider\" : \"Ameren\",\n                \"nonProfit\" : true,\n                \"taxID\" : \"78\",\n                \"street\" : \"\",\n                \"state\" : \"\",\n                \"postalCode\" : \"\",\n                \"country\" : \"\",\n                \"city\" : \"\",\n                \"childTags\" : [{\n                    \"_id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\",\n                    \"name\" : \"Sunny WebBox\",\n                    \"creatorRole\" : \"BP\",\n                    \"creator\" : \"54133e8fd361774c1696f265\",\n                    \"__v\" : 0,\n                    \"usersWithAccess\" : [{\n                        \"id\" : \"54133e8fd361774c1696f265\"\n                    }],\n                    \"appEntities\" : [{\n                        \"id\" : \"5429d13f89c1849502287d5d\",\n                        \"appName\" : \"Presentation\"\n                    }],\n                    \"children\" : [{\n                        \"id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\"\n                    }],\n                    \"parents\" : [{\n                        \"id\" : \"543824bd7174d62c1acad50f\",\n                        \"tagType\" : \"Facility\"\n                    }],\n                    \"formula\" : null,\n                    \"metricID\" : null,\n                    \"metricType\" : null,\n                    \"metric\" : null,\n                    \"sensorTarget\" : null,\n                    \"enphaseUserId\" : null,\n                    \"endDate\" : null,\n                    \"weatherStation\" : \"--Use NOAA--\",\n                    \"longitude\" : -36.5678,\n                    \"latitude\" : 94.1234,\n                    \"webAddress\" : \"http://google.com\",\n                    \"interval\" : \"Daily\",\n                    \"destination\" : \"127.0.0.1\",\n                    \"accessMethod\" : \"Push to FTP\",\n                    \"deviceID\" : \"wb150115159\",\n                    \"device\" : \"Sunny WebBox\",\n                    \"manufacturer\" : \"manufacturerA\",\n                    \"utilityAccounts\" : [],\n                    \"utilityProvider\" : null,\n                    \"nonProfit\" : null,\n                    \"taxID\" : null,\n                    \"street\" : null,\n                    \"state\" : null,\n                    \"postalCode\" : null,\n                    \"country\" : null,\n                    \"city\" : null,\n                    \"childTags\" : [{\n                        \"_id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\",\n                        \"name\" : \"Inverter A\",\n                        \"creatorRole\" : \"BP\",\n                        \"creator\" : \"54133e8fd361774c1696f265\",\n                        \"__v\" : 0,\n                        \"usersWithAccess\" : [{\n                            \"id\" : \"54133e8fd361774c1696f265\"\n                        }],\n                        \"appEntities\" : [],\n                        \"children\" : [{\n                            \"id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\"\n                        }],\n                        \"parents\" : [{\n                            \"id\" : \"543824bd7174d62c1acad510\",\n                            \"tagType\" : \"Scope\"\n                        }],\n                        \"formula\" : null,\n                        \"metricID\" : null,\n                        \"metricType\" : null,\n                        \"metric\" : null,\n                        \"sensorTarget\" : \"sss\",\n                        \"enphaseUserId\" : null,\n                        \"endDate\" : null,\n                        \"weatherStation\" : \"--Use NOAA--\",\n                        \"longitude\" : -36.5678,\n                        \"latitude\" : 94.1234,\n                        \"webAddress\" : null,\n                        \"interval\" : \"Daily\",\n                        \"destination\" : null,\n                        \"accessMethod\" : null,\n                        \"deviceID\" : \"WR7KU009:2002112282\",\n                        \"device\" : \"Sunny WebBox\",\n                        \"manufacturer\" : \"manufacturerA\",\n                        \"utilityAccounts\" : [],\n                        \"utilityProvider\" : null,\n                        \"nonProfit\" : null,\n                        \"taxID\" : null,\n                        \"street\" : null,\n                        \"state\" : null,\n                        \"postalCode\" : null,\n                        \"country\" : null,\n                        \"city\" : null,\n                        \"childTags\" : [{\n                            \"_id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\",\n                            \"name\" : \"Watts (Power)\",\n                            \"creatorRole\" : \"BP\",\n                            \"creator\" : \"54133e8fd361774c1696f265\",\n                            \"__v\" : 0,\n                            \"usersWithAccess\" : [{\n                                \"id\" : \"54133e8fd361774c1696f265\"\n                            }],\n                            \"appEntities\" : [],\n                            \"children\" : [],\n                            \"parents\" : [{\n                                \"id\" : \"543824be7174d62c1acad511\",\n                                \"tagType\" : \"Sensor\"\n                            }],\n                            \"formula\" : null,\n                            \"metricID\" : \"Pac\",\n                            \"metricType\" : \"Datafeed\",\n                            \"metric\" : \"Standard\",\n                            \"sensorTarget\" : null,\n                            \"enphaseUserId\" : null,\n                            \"endDate\" : null,\n                            \"weatherStation\" : null,\n                            \"longitude\" : null,\n                            \"latitude\" : null,\n                            \"webAddress\" : null,\n                            \"interval\" : null,\n                            \"destination\" : null,\n                            \"accessMethod\" : null,\n                            \"deviceID\" : null,\n                            \"device\" : null,\n                            \"manufacturer\" : null,\n                            \"utilityAccounts\" : [],\n                            \"utilityProvider\" : null,\n                            \"nonProfit\" : null,\n                            \"taxID\" : null,\n                            \"street\" : null,\n                            \"state\" : null,\n                            \"postalCode\" : null,\n                            \"country\" : null,\n                            \"city\" : null\n                        }]\n                    }],\n                }],\n            }],\n            \"name\" : \"Untitled Segment\"\n        }],\n        \"compareEndDate\": \"2013-08-13T00:00:00.000Z\",\n        \"compareStartDate\": \"2013-07-09T00:00:00.000Z\",\n        \"widgets\": [{\n            \"widget\": {\n                \"_id\": \"5413692b8dee97ac707b38dc\",\n                \"type\": \"Bar\",\n                \"title\": \"Bar Sample\",\n                \"metric\": null,\n                \"creatorRole\": \"BP\",\n                \"__v\": 0,\n                \"compareMetric\": null,\n                \"greenhouseKilograms\": false,\n                \"co2Kilograms\": false,\n                \"equivType\": null,\n                \"orientation\": null,\n                \"showUpTo\": null,\n                \"imageUrl\": null,\n                \"drillDown\": null,\n                \"displayedColumns\": [],\n                \"rowsPerTable\": null,\n                \"pivotDimension\": \"hour\",\n                \"groupDimension\": \"month\",\n                \"titleShow\": true\n            }\n        }, {\n            \"widget\": {\n                \"_id\": \"541b137fa90e8de146a10c0d\",\n                \"type\": \"Pie\",\n                \"title\": \"001test PieWidget\",\n                \"metric\": null,\n                \"creatorRole\": \"BP\",\n                \"__v\": 0,\n                \"compareMetric\": null,\n                \"greenhouseKilograms\": false,\n                \"co2Kilograms\": false,\n                \"equivType\": null,\n                \"orientation\": null,\n                \"showUpTo\": null,\n                \"imageUrl\": null,\n                \"drillDown\": null,\n                \"displayedColumns\": [],\n                \"rowsPerTable\": null,\n                \"pivotDimension\": null,\n                \"groupDimension\": \"day\",\n                \"titleShow\": true\n            }\n        }],\n        \"gDriveAssetsFolderId\": \"0BwW4a4uizniHZHVXWGhJX3lEcDA\",\n        \"collections\": [\"Yakov First Collection\"],\n        \"layout\": {\n            \"selectedStyle\": 2,\n            \"widgets\": []\n        }\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId",
    "title": "Delete Widget",
    "group": "Dashboard",
    "name": "Delete_analyze_widget",
    "version": "1.0.0",
    "description": "<p>Remove the anyalyze widget from dashboard</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461ff1251d2f91500187462\nwidgetId : 54683fa4f48ee7140096618d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": \"OK\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId",
    "title": "Delete Dashbaord",
    "group": "Dashboard",
    "name": "Delete_dashboard",
    "version": "1.0.0",
    "description": "<p>Remove dashboard by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 54638f77dfcbe62000a7ee0c\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards?searchKey=:searchKey",
    "title": "Get All Dashboards",
    "group": "Dashboard",
    "name": "GetDashboardList",
    "version": "1.0.0",
    "description": "<p>Retrieves the dashboard data of currently logged in user.  when searchKey is specified instead of all_data, it retrieves the list  of the dashboards matching the collection title.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nsearchKey : PV Solar Power Plant\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>list of dashboards</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\": \"5413612ad37f4ab56f1fb175\",\n        \"title\": \"Yakov First Dashboard\",\n        \"startDate\": \"2014-07-09T00:00:00.000Z\",\n        \"endDate\": \"2014-08-13T00:00:00.000Z\",\n        \"creator\": \"54135cb4cde72bc019ff39bd\",\n        \"creatorRole\": \"BP\",\n        \"__v\": 99,\n        \"segments\": [{\n            \"tags\" : [{\n                \"_id\" : \"543824bd7174d62c1acad50f\",\n                \"tagType\" : \"Facility\",\n                \"name\" : \"Barretts Elementary\",\n                \"creatorRole\" : \"BP\",\n                \"creator\" : \"54133e8fd361774c1696f265\",\n                \"__v\" : 0,\n                \"usersWithAccess\" : [{\n                    \"id\" : \"54133e8fd361774c1696f265\"\n                }],\n                \"appEntities\" : [{\n                    \"id\" : \"5413af68b1c838ea73500109\",\n                    \"appName\" : \"Presentation\"\n                }],\n                \"children\" : [{\n                    \"id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\"\n                }, \n                {\n                    \"id\" : \"543824be7174d62c1acad517\",\n                    \"tagType\" : \"Scope\"\n                }],\n                \"parents\" : [],\n                \"formula\" : null,\n                \"metricID\" : null,\n                \"metricType\" : null,\n                \"metric\" : null,\n                \"sensorTarget\" : null,\n                \"enphaseUserId\" : null,\n                \"endDate\" : null,\n                \"weatherStation\" : null,\n                \"longitude\" : null,\n                \"latitude\" : null,\n                \"webAddress\" : null,\n                \"interval\" : null,\n                \"destination\" : null,\n                \"accessMethod\" : null,\n                \"deviceID\" : null,\n                \"device\" : null,\n                \"manufacturer\" : null,\n                \"utilityAccounts\" : [\"6655\"],\n                \"utilityProvider\" : \"Ameren\",\n                \"nonProfit\" : true,\n                \"taxID\" : \"78\",\n                \"street\" : \"\",\n                \"state\" : \"\",\n                \"postalCode\" : \"\",\n                \"country\" : \"\",\n                \"city\" : \"\",\n                \"childTags\" : [{\n                    \"_id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\",\n                    \"name\" : \"Sunny WebBox\",\n                    \"creatorRole\" : \"BP\",\n                    \"creator\" : \"54133e8fd361774c1696f265\",\n                    \"__v\" : 0,\n                    \"usersWithAccess\" : [{\n                        \"id\" : \"54133e8fd361774c1696f265\"\n                    }],\n                    \"appEntities\" : [{\n                        \"id\" : \"5429d13f89c1849502287d5d\",\n                        \"appName\" : \"Presentation\"\n                    }],\n                    \"children\" : [{\n                        \"id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\"\n                    }],\n                    \"parents\" : [{\n                        \"id\" : \"543824bd7174d62c1acad50f\",\n                        \"tagType\" : \"Facility\"\n                    }],\n                    \"formula\" : null,\n                    \"metricID\" : null,\n                    \"metricType\" : null,\n                    \"metric\" : null,\n                    \"sensorTarget\" : null,\n                    \"enphaseUserId\" : null,\n                    \"endDate\" : null,\n                    \"weatherStation\" : \"--Use NOAA--\",\n                    \"longitude\" : -36.5678,\n                    \"latitude\" : 94.1234,\n                    \"webAddress\" : \"http://google.com\",\n                    \"interval\" : \"Daily\",\n                    \"destination\" : \"127.0.0.1\",\n                    \"accessMethod\" : \"Push to FTP\",\n                    \"deviceID\" : \"wb150115159\",\n                    \"device\" : \"Sunny WebBox\",\n                    \"manufacturer\" : \"manufacturerA\",\n                    \"utilityAccounts\" : [],\n                    \"utilityProvider\" : null,\n                    \"nonProfit\" : null,\n                    \"taxID\" : null,\n                    \"street\" : null,\n                    \"state\" : null,\n                    \"postalCode\" : null,\n                    \"country\" : null,\n                    \"city\" : null,\n                    \"childTags\" : [{\n                        \"_id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\",\n                        \"name\" : \"Inverter A\",\n                        \"creatorRole\" : \"BP\",\n                        \"creator\" : \"54133e8fd361774c1696f265\",\n                        \"__v\" : 0,\n                        \"usersWithAccess\" : [{\n                            \"id\" : \"54133e8fd361774c1696f265\"\n                        }],\n                        \"appEntities\" : [],\n                        \"children\" : [{\n                            \"id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\"\n                        }],\n                        \"parents\" : [{\n                            \"id\" : \"543824bd7174d62c1acad510\",\n                            \"tagType\" : \"Scope\"\n                        }],\n                        \"formula\" : null,\n                        \"metricID\" : null,\n                        \"metricType\" : null,\n                        \"metric\" : null,\n                        \"sensorTarget\" : \"sss\",\n                        \"enphaseUserId\" : null,\n                        \"endDate\" : null,\n                        \"weatherStation\" : \"--Use NOAA--\",\n                        \"longitude\" : -36.5678,\n                        \"latitude\" : 94.1234,\n                        \"webAddress\" : null,\n                        \"interval\" : \"Daily\",\n                        \"destination\" : null,\n                        \"accessMethod\" : null,\n                        \"deviceID\" : \"WR7KU009:2002112282\",\n                        \"device\" : \"Sunny WebBox\",\n                        \"manufacturer\" : \"manufacturerA\",\n                        \"utilityAccounts\" : [],\n                        \"utilityProvider\" : null,\n                        \"nonProfit\" : null,\n                        \"taxID\" : null,\n                        \"street\" : null,\n                        \"state\" : null,\n                        \"postalCode\" : null,\n                        \"country\" : null,\n                        \"city\" : null,\n                        \"childTags\" : [{\n                            \"_id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\",\n                            \"name\" : \"Watts (Power)\",\n                            \"creatorRole\" : \"BP\",\n                            \"creator\" : \"54133e8fd361774c1696f265\",\n                            \"__v\" : 0,\n                            \"usersWithAccess\" : [{\n                                \"id\" : \"54133e8fd361774c1696f265\"\n                            }],\n                            \"appEntities\" : [],\n                            \"children\" : [],\n                            \"parents\" : [{\n                                \"id\" : \"543824be7174d62c1acad511\",\n                                \"tagType\" : \"Sensor\"\n                            }],\n                            \"formula\" : null,\n                            \"metricID\" : \"Pac\",\n                            \"metricType\" : \"Datafeed\",\n                            \"metric\" : \"Standard\",\n                            \"sensorTarget\" : null,\n                            \"enphaseUserId\" : null,\n                            \"endDate\" : null,\n                            \"weatherStation\" : null,\n                            \"longitude\" : null,\n                            \"latitude\" : null,\n                            \"webAddress\" : null,\n                            \"interval\" : null,\n                            \"destination\" : null,\n                            \"accessMethod\" : null,\n                            \"deviceID\" : null,\n                            \"device\" : null,\n                            \"manufacturer\" : null,\n                            \"utilityAccounts\" : [],\n                            \"utilityProvider\" : null,\n                            \"nonProfit\" : null,\n                            \"taxID\" : null,\n                            \"street\" : null,\n                            \"state\" : null,\n                            \"postalCode\" : null,\n                            \"country\" : null,\n                            \"city\" : null\n                        }]\n                    }],\n                }],\n            }],\n            \"name\" : \"Untitled Segment\"\n        }],\n        \"compareEndDate\": \"2013-08-13T00:00:00.000Z\",\n        \"compareStartDate\": \"2013-07-09T00:00:00.000Z\",\n        \"widgets\": [{\n            \"widget\": \"5413692b8dee97ac707b38dc\"\n        }, {\n            \"widget\": \"541b137fa90e8de146a10c0d\"\n        }],\n        \"gDriveAssetsFolderId\": \"0BwW4a4uizniHZHVXWGhJX3lEcDA\",\n        \"collections\": [\"Yakov First Collection\"],\n        \"layout\": {\n            \"selectedStyle\": 2,\n            \"widgets\": []\n        }\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error Code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error example",
          "content": "Error example\n{\n    \"success\": 0,\n    \"message\": \"INCORRECT_SESSION\"\n}\n",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards?searchKey=:searchKey"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId",
    "title": "Get Analyze Widget",
    "group": "Dashboard",
    "name": "Get_Analyze_Widget_By_widget_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the analyze widget by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 54637d58dfcbe62000a7ede2\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Widget Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\":\"541b1350a90e8de146a10c0c\",\n        \"type\":\"Timeline\",\n        \"title\":\"001test PieWidget\",\n        \"metric\":{Tag Object},\n        \"creatorRole\":\"BP\",\n        \"__v\":0,\n        \"compareMetric\":null,\n        \"greenhousePounds\":false,\n        \"co2Pounds\":false,\n        \"greenhouseKilograms\":false,\n        \"co2Kilograms\":false,\n        \"equivType\":null,\n        \"orientation\":null,\n        \"showUpTo\":null,\n        \"imageUrl\":null,\n        \"drillDown\":null,\n        \"displayedColumns\":[],\n        \"rowsPerTable\":null,\n        \"pivotDimension\":null,\n        \"groupDimension\" : \"--Custom--\",\n        \"customGroupDimension\" : {\n            \"groupBySegment\" : true,\n            \"definedGroups\" : [\n                {\n                    \"segmentId\" : \"54cb1e77d52879320ab88a03\",\n                    \"_id\" : \"54e343abfbd0138d08c87b0a\",\n                    \"expandedNodes\" : [],\n                    \"isExpanded\" : false,\n                    \"treedata\" : [],\n                    \"tagBindings\" : [\n                        {\n                            \"tagType\" : \"Node\",\n                            \"id\" : \"5458b22379e7b60e00b1133a\"\n                        }\n                    ],\n                    \"name\" : \"Custom Group A\"\n                }\n            ]\n        },\n        \"titleShow\":true\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/collections",
    "title": "Get Analyze collections all",
    "group": "Dashboard",
    "name": "Get_Analyze_collections_all",
    "version": "1.0.0",
    "description": "<p>Retrieves analyze collections all</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>collections array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"collections\":[\n            \"PV Solar Power Plant\",\n            \"Liberty Lofts - Energy Profile\",\n            \"Temp\",\n            \"Default Dashboards\"\n        ]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/collections"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/widgetdata",
    "title": "Get Widget data",
    "group": "Dashboard",
    "name": "Get_Analyze_widget_data",
    "version": "1.0.0",
    "description": "<p>Retrieves the single analyze widget data</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461ff0951d2f91500187461\nwidgetId : 54a181e52f23471700ad36b5\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>widget object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": [\n     {\n         \"54a181e52f23471700ad36b5\": {\n             \"primaryDateRange\": [\n                 {\n                     \"Barretts\": [\n                         {\n                             \"primaryMetric\": {\n                                 \"data\": [\n                                     {\n                                         \"date\": \"2014-12-14T07:00:00.000Z\",\n                                         \"label\": \"7:00am, December 14, 2014\",\n                                         \"value\": 0.035355294333333336\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:00:00.000Z\",\n                                         \"label\": \"8:00am, December 14, 2014\",\n                                         \"value\": 0.82955170075\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:00:00.000Z\",\n                                         \"label\": \"9:00am, December 14, 2014\",\n                                         \"value\": 2.82181741975\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:00:00.000Z\",\n                                         \"label\": \"10:00am, December 14, 2014\",\n                                         \"value\": 10.63946701175\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:00:00.000Z\",\n                                         \"label\": \"11:00am, December 14, 2014\",\n                                         \"value\": 12.885142976000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:00:00.000Z\",\n                                         \"label\": \"12:00pm, December 14, 2014\",\n                                         \"value\": 12.653024191499998\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:00:00.000Z\",\n                                         \"label\": \"1:00pm, December 14, 2014\",\n                                         \"value\": 10.8597185925\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:00:00.000Z\",\n                                         \"label\": \"2:00pm, December 14, 2014\",\n                                         \"value\": 7.63117252825\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:00:00.000Z\",\n                                         \"label\": \"3:00pm, December 14, 2014\",\n                                         \"value\": 2.38960019925\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:00:00.000Z\",\n                                         \"label\": \"4:00pm, December 14, 2014\",\n                                         \"value\": 0.256675404\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T17:00:00.000Z\",\n                                         \"label\": \"5:00pm, December 14, 2014\",\n                                         \"value\": 0\n                                     }\n                                 ],\n                                 \"singlePointAggregation\": [\n                                     {\n                                         \"title\": \"Average example\",\n                                         \"value\": 5.545593210734848,\n                                         \"function\": \"Average\"\n                                     }\n                                 ]\n                             }\n                         },\n                         {\n                             \"compareMetric\": {\n                                 \"data\": [\n                                     {\n                                         \"date\": \"2014-12-14T07:15:41.000Z\",\n                                         \"label\": \"7:15am, December 14, 2014\",\n                                         \"value\": 0\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T07:30:41.000Z\",\n                                         \"label\": \"7:30am, December 14, 2014\",\n                                         \"value\": 0.0050714720000000005\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T07:45:41.000Z\",\n                                         \"label\": \"7:45am, December 14, 2014\",\n                                         \"value\": 0.100994411\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:00:41.000Z\",\n                                         \"label\": \"8:00am, December 14, 2014\",\n                                         \"value\": 0.333690421\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:15:42.000Z\",\n                                         \"label\": \"8:15am, December 14, 2014\",\n                                         \"value\": 0.718482923\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:30:42.000Z\",\n                                         \"label\": \"8:30am, December 14, 2014\",\n                                         \"value\": 0.965657895\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:45:42.000Z\",\n                                         \"label\": \"8:45am, December 14, 2014\",\n                                         \"value\": 1.3003755639999999\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:00:42.000Z\",\n                                         \"label\": \"9:00am, December 14, 2014\",\n                                         \"value\": 1.815084459\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:15:43.000Z\",\n                                         \"label\": \"9:15am, December 14, 2014\",\n                                         \"value\": 2.460345521\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:30:43.000Z\",\n                                         \"label\": \"9:30am, December 14, 2014\",\n                                         \"value\": 2.960433628\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:45:43.000Z\",\n                                         \"label\": \"9:45am, December 14, 2014\",\n                                         \"value\": 4.051406071\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:00:43.000Z\",\n                                         \"label\": \"10:00am, December 14, 2014\",\n                                         \"value\": 10.142638432\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:15:42.000Z\",\n                                         \"label\": \"10:15am, December 14, 2014\",\n                                         \"value\": 8.41999597\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:30:42.000Z\",\n                                         \"label\": \"10:30am, December 14, 2014\",\n                                         \"value\": 11.730888512\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:45:42.000Z\",\n                                         \"label\": \"10:45am, December 14, 2014\",\n                                         \"value\": 12.264345132999999\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:00:43.000Z\",\n                                         \"label\": \"11:00am, December 14, 2014\",\n                                         \"value\": 12.628809577000002\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:15:44.000Z\",\n                                         \"label\": \"11:15am, December 14, 2014\",\n                                         \"value\": 12.869318348\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:30:44.000Z\",\n                                         \"label\": \"11:30am, December 14, 2014\",\n                                         \"value\": 12.988208675\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:45:44.000Z\",\n                                         \"label\": \"11:45am, December 14, 2014\",\n                                         \"value\": 13.054235304\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:00:44.000Z\",\n                                         \"label\": \"12:00pm, December 14, 2014\",\n                                         \"value\": 12.959375000000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:15:44.000Z\",\n                                         \"label\": \"12:15pm, December 14, 2014\",\n                                         \"value\": 12.83659292\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:30:44.000Z\",\n                                         \"label\": \"12:30pm, December 14, 2014\",\n                                         \"value\": 12.616718289000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:45:44.000Z\",\n                                         \"label\": \"12:45pm, December 14, 2014\",\n                                         \"value\": 12.199410557\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:00:44.000Z\",\n                                         \"label\": \"1:00pm, December 14, 2014\",\n                                         \"value\": 11.712823009000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:15:44.000Z\",\n                                         \"label\": \"1:15pm, December 14, 2014\",\n                                         \"value\": 11.237452414\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:30:44.000Z\",\n                                         \"label\": \"1:30pm, December 14, 2014\",\n                                         \"value\": 10.608511615\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:45:44.000Z\",\n                                         \"label\": \"1:45pm, December 14, 2014\",\n                                         \"value\": 9.880087332\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:00:44.000Z\",\n                                         \"label\": \"2:00pm, December 14, 2014\",\n                                         \"value\": 9.046362595\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:15:44.000Z\",\n                                         \"label\": \"2:15pm, December 14, 2014\",\n                                         \"value\": 8.118497668\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:30:44.000Z\",\n                                         \"label\": \"2:30pm, December 14, 2014\",\n                                         \"value\": 7.243792793000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:45:44.000Z\",\n                                         \"label\": \"2:45pm, December 14, 2014\",\n                                         \"value\": 6.116037057000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:00:44.000Z\",\n                                         \"label\": \"3:00pm, December 14, 2014\",\n                                         \"value\": 4.760526786\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:15:44.000Z\",\n                                         \"label\": \"3:15pm, December 14, 2014\",\n                                         \"value\": 2.765839621\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:30:44.000Z\",\n                                         \"label\": \"3:30pm, December 14, 2014\",\n                                         \"value\": 1.142946903\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:45:44.000Z\",\n                                         \"label\": \"3:45pm, December 14, 2014\",\n                                         \"value\": 0.8890874870000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:00:44.000Z\",\n                                         \"label\": \"4:00pm, December 14, 2014\",\n                                         \"value\": 0.605746919\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:15:44.000Z\",\n                                         \"label\": \"4:15pm, December 14, 2014\",\n                                         \"value\": 0.32342423600000003\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:30:44.000Z\",\n                                         \"label\": \"4:30pm, December 14, 2014\",\n                                         \"value\": 0.096825104\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:45:44.000Z\",\n                                         \"label\": \"4:45pm, December 14, 2014\",\n                                         \"value\": 0.000705357\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T17:00:44.000Z\",\n                                         \"label\": \"5:00pm, December 14, 2014\",\n                                         \"value\": 0\n                                     }\n                                 ],\n                                 \"singlePointAggregation\": [\n                                     {\n                                         \"title\": \"Average example\",\n                                         \"value\": 6.099268649449999,\n                                         \"function\": \"Average\"\n                                     }\n                                 ]\n                             }\n                         }\n                     ]\n                 }\n             ],\n             \"compareDateRange\": [\n                 {\n                     \"Barretts\": [\n                         {\n                             \"primaryMetric\": {\n                                 \"data\": [],\n                                 \"singlePointAggregation\": []\n                             }\n                         },\n                         {\n                             \"compareMetric\": {\n                                 \"data\": [],\n                                 \"singlePointAggregation\": []\n                             }\n                         }\n                     ]\n                 }\n             ]\n         }\n     }\n ]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/widgetdata"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets",
    "title": "Get Widgets",
    "group": "Dashboard",
    "name": "Get_Analyze_widgets",
    "version": "1.0.0",
    "description": "<p>Get Analyze Widgets Graph Datas</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461fee651d2f9150018745f\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Widget Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": [\n     {\n         \"54a181e52f23471700ad36b5\": {\n             \"primaryDateRange\": [\n                 {\n                     \"Barretts\": [\n                         {\n                             \"primaryMetric\": {\n                                 \"data\": [\n                                     {\n                                         \"date\": \"2014-12-14T07:00:00.000Z\",\n                                         \"label\": \"7:00am, December 14, 2014\",\n                                         \"value\": 0.035355294333333336\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:00:00.000Z\",\n                                         \"label\": \"8:00am, December 14, 2014\",\n                                         \"value\": 0.82955170075\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:00:00.000Z\",\n                                         \"label\": \"9:00am, December 14, 2014\",\n                                         \"value\": 2.82181741975\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:00:00.000Z\",\n                                         \"label\": \"10:00am, December 14, 2014\",\n                                         \"value\": 10.63946701175\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:00:00.000Z\",\n                                         \"label\": \"11:00am, December 14, 2014\",\n                                         \"value\": 12.885142976000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:00:00.000Z\",\n                                         \"label\": \"12:00pm, December 14, 2014\",\n                                         \"value\": 12.653024191499998\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:00:00.000Z\",\n                                         \"label\": \"1:00pm, December 14, 2014\",\n                                         \"value\": 10.8597185925\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:00:00.000Z\",\n                                         \"label\": \"2:00pm, December 14, 2014\",\n                                         \"value\": 7.63117252825\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:00:00.000Z\",\n                                         \"label\": \"3:00pm, December 14, 2014\",\n                                         \"value\": 2.38960019925\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:00:00.000Z\",\n                                         \"label\": \"4:00pm, December 14, 2014\",\n                                         \"value\": 0.256675404\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T17:00:00.000Z\",\n                                         \"label\": \"5:00pm, December 14, 2014\",\n                                         \"value\": 0\n                                     }\n                                 ],\n                                 \"singlePointAggregation\": [\n                                     {\n                                         \"title\": \"Average example\",\n                                         \"value\": 5.545593210734848,\n                                         \"function\": \"Average\"\n                                     }\n                                 ]\n                             }\n                         },\n                         {\n                             \"compareMetric\": {\n                                 \"data\": [\n                                     {\n                                         \"date\": \"2014-12-14T07:15:41.000Z\",\n                                         \"label\": \"7:15am, December 14, 2014\",\n                                         \"value\": 0\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T07:30:41.000Z\",\n                                         \"label\": \"7:30am, December 14, 2014\",\n                                         \"value\": 0.0050714720000000005\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T07:45:41.000Z\",\n                                         \"label\": \"7:45am, December 14, 2014\",\n                                         \"value\": 0.100994411\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:00:41.000Z\",\n                                         \"label\": \"8:00am, December 14, 2014\",\n                                         \"value\": 0.333690421\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:15:42.000Z\",\n                                         \"label\": \"8:15am, December 14, 2014\",\n                                         \"value\": 0.718482923\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:30:42.000Z\",\n                                         \"label\": \"8:30am, December 14, 2014\",\n                                         \"value\": 0.965657895\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T08:45:42.000Z\",\n                                         \"label\": \"8:45am, December 14, 2014\",\n                                         \"value\": 1.3003755639999999\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:00:42.000Z\",\n                                         \"label\": \"9:00am, December 14, 2014\",\n                                         \"value\": 1.815084459\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:15:43.000Z\",\n                                         \"label\": \"9:15am, December 14, 2014\",\n                                         \"value\": 2.460345521\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:30:43.000Z\",\n                                         \"label\": \"9:30am, December 14, 2014\",\n                                         \"value\": 2.960433628\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T09:45:43.000Z\",\n                                         \"label\": \"9:45am, December 14, 2014\",\n                                         \"value\": 4.051406071\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:00:43.000Z\",\n                                         \"label\": \"10:00am, December 14, 2014\",\n                                         \"value\": 10.142638432\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:15:42.000Z\",\n                                         \"label\": \"10:15am, December 14, 2014\",\n                                         \"value\": 8.41999597\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:30:42.000Z\",\n                                         \"label\": \"10:30am, December 14, 2014\",\n                                         \"value\": 11.730888512\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T10:45:42.000Z\",\n                                         \"label\": \"10:45am, December 14, 2014\",\n                                         \"value\": 12.264345132999999\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:00:43.000Z\",\n                                         \"label\": \"11:00am, December 14, 2014\",\n                                         \"value\": 12.628809577000002\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:15:44.000Z\",\n                                         \"label\": \"11:15am, December 14, 2014\",\n                                         \"value\": 12.869318348\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:30:44.000Z\",\n                                         \"label\": \"11:30am, December 14, 2014\",\n                                         \"value\": 12.988208675\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T11:45:44.000Z\",\n                                         \"label\": \"11:45am, December 14, 2014\",\n                                         \"value\": 13.054235304\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:00:44.000Z\",\n                                         \"label\": \"12:00pm, December 14, 2014\",\n                                         \"value\": 12.959375000000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:15:44.000Z\",\n                                         \"label\": \"12:15pm, December 14, 2014\",\n                                         \"value\": 12.83659292\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:30:44.000Z\",\n                                         \"label\": \"12:30pm, December 14, 2014\",\n                                         \"value\": 12.616718289000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T12:45:44.000Z\",\n                                         \"label\": \"12:45pm, December 14, 2014\",\n                                         \"value\": 12.199410557\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:00:44.000Z\",\n                                         \"label\": \"1:00pm, December 14, 2014\",\n                                         \"value\": 11.712823009000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:15:44.000Z\",\n                                         \"label\": \"1:15pm, December 14, 2014\",\n                                         \"value\": 11.237452414\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:30:44.000Z\",\n                                         \"label\": \"1:30pm, December 14, 2014\",\n                                         \"value\": 10.608511615\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T13:45:44.000Z\",\n                                         \"label\": \"1:45pm, December 14, 2014\",\n                                         \"value\": 9.880087332\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:00:44.000Z\",\n                                         \"label\": \"2:00pm, December 14, 2014\",\n                                         \"value\": 9.046362595\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:15:44.000Z\",\n                                         \"label\": \"2:15pm, December 14, 2014\",\n                                         \"value\": 8.118497668\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:30:44.000Z\",\n                                         \"label\": \"2:30pm, December 14, 2014\",\n                                         \"value\": 7.243792793000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T14:45:44.000Z\",\n                                         \"label\": \"2:45pm, December 14, 2014\",\n                                         \"value\": 6.116037057000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:00:44.000Z\",\n                                         \"label\": \"3:00pm, December 14, 2014\",\n                                         \"value\": 4.760526786\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:15:44.000Z\",\n                                         \"label\": \"3:15pm, December 14, 2014\",\n                                         \"value\": 2.765839621\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:30:44.000Z\",\n                                         \"label\": \"3:30pm, December 14, 2014\",\n                                         \"value\": 1.142946903\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T15:45:44.000Z\",\n                                         \"label\": \"3:45pm, December 14, 2014\",\n                                         \"value\": 0.8890874870000001\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:00:44.000Z\",\n                                         \"label\": \"4:00pm, December 14, 2014\",\n                                         \"value\": 0.605746919\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:15:44.000Z\",\n                                         \"label\": \"4:15pm, December 14, 2014\",\n                                         \"value\": 0.32342423600000003\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:30:44.000Z\",\n                                         \"label\": \"4:30pm, December 14, 2014\",\n                                         \"value\": 0.096825104\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T16:45:44.000Z\",\n                                         \"label\": \"4:45pm, December 14, 2014\",\n                                         \"value\": 0.000705357\n                                     },\n                                     {\n                                         \"date\": \"2014-12-14T17:00:44.000Z\",\n                                         \"label\": \"5:00pm, December 14, 2014\",\n                                         \"value\": 0\n                                     }\n                                 ],\n                                 \"singlePointAggregation\": [\n                                     {\n                                         \"title\": \"Average example\",\n                                         \"value\": 6.099268649449999,\n                                         \"function\": \"Average\"\n                                     }\n                                 ]\n                             }\n                         }\n                     ]\n                 }\n             ],\n             \"compareDateRange\": [\n                 {\n                     \"Barretts\": [\n                         {\n                             \"primaryMetric\": {\n                                 \"data\": [],\n                                 \"singlePointAggregation\": []\n                             }\n                         },\n                         {\n                             \"compareMetric\": {\n                                 \"data\": [],\n                                 \"singlePointAggregation\": []\n                             }\n                         }\n                     ]\n                 }\n             ]\n         }\n     }\n ]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/:dashboardId/tags/segments/:segmentId",
    "title": "Get Analyze Segment by Id",
    "group": "Dashboard",
    "name": "Get_Segment_by_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the segment by segment Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461ff1251d2f91500187462\nsegmentId : 54683f86f48ee7140096618c\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>segment data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success exmple",
          "content": "Success exmple\n{\n    \"success\": 1,\n    \"message\": {\n        \"name\": \"aleksei Segment\",\n        \"id\": \"543824bd7174d62c1acad54f\",\n        \"tags\": [{\n            \"_id\": \"543824be7174d62c1acad517\",\n            \"tagType\": \"Scope\",\n            \"name\": \"Enphase Scope\",\n            \"creatorRole\": \"BP\",\n            \"creator\": \"54133e8fd361774c1696f265\",\n            \"__v\": 0,\n            \"usersWithAccess\": [{\n                \"id\": \"54133e8fd361774c1696f265\"\n            }],\n            \"appEntities\": [{\n                \"id\": \"5429d13f89c1849502287d5d\",\n                \"appName\": \"Presentation\"\n            }],\n            \"children\": [{\n                \"id\": \"543824be7174d62c1acad518\",\n                \"tagType\": \"Sensor\"\n            }],\n            \"parents\": [{\n                \"id\": \"543824bd7174d62c1acad50f\",\n                \"tagType\": \"Facility\"\n            }],\n            \"formula\": null,\n            \"metricID\": null,\n            \"metricType\": null,\n            \"metric\": null,\n            \"sensorTarget\": null,\n            \"enphaseUserId\": \"4d7a59344d446b790a\",\n            \"endDate\": null,\n            \"weatherStation\": \"--Use NOAA--\",\n            \"longitude\": 90,\n            \"latitude\": 78,\n            \"webAddress\": null,\n            \"interval\": \"Hourly\",\n            \"destination\": \"rtf\",\n            \"accessMethod\": \"Push to FTP\",\n            \"deviceID\": \"121315008457\",\n            \"device\": \"Envoy\",\n            \"manufacturer\": \"Enphase\",\n            \"utilityAccounts\": [],\n            \"utilityProvider\": null,\n            \"nonProfit\": null,\n            \"taxID\": null,\n            \"street\": null,\n            \"state\": null,\n            \"postalCode\": null,\n            \"country\": null,\n            \"city\": null,\n            \"childTags\": [{\n                \"_id\": \"543824be7174d62c1acad51a\",\n                \"tagType\": \"Sensor\",\n                \"name\": \"Enphase Sensor\",\n                \"creatorRole\": \"BP\",\n                \"creator\": \"54133e8fd361774c1696f265\",\n                \"__v\": 0,\n                \"usersWithAccess\": [{\n                    \"id\": \"54133e8fd361774c1696f265\"\n                }],\n                \"appEntities\": [],\n                \"children\": [],\n                \"parents\": [{\n                    \"id\": \"543824be7174d62c1acad517\",\n                    \"tagType\": \"Scope\"\n                }],\n                \"formula\": null,\n                \"metricID\": null,\n                \"metricType\": null,\n                \"metric\": null,\n                \"sensorTarget\": \"rft\",\n                \"enphaseUserId\": null,\n                \"endDate\": null,\n                \"weatherStation\": \"--Use NOAA--\",\n                \"longitude\": 90,\n                \"latitude\": 78,\n                \"webAddress\": null,\n                \"interval\": \"Hourly\",\n                \"destination\": null,\n                \"accessMethod\": null,\n                \"deviceID\": \"121315008457\",\n                \"device\": \"Envoy\",\n                \"manufacturer\": \"Enphase\",\n                \"utilityAccounts\": [],\n                \"utilityProvider\": null,\n                \"nonProfit\": null,\n                \"taxID\": null,\n                \"street\": null,\n                \"state\": null,\n                \"postalCode\": null,\n                \"country\": null,\n                \"city\": null,\n                \"childTags\": []\n            }, {\n                \"_id\": \"543824be7174d62c1acad519\",\n                \"tagType\": \"Sensor\",\n                \"name\": \"Enphase Sensor\",\n                \"creatorRole\": \"BP\",\n                \"creator\": \"54133e8fd361774c1696f265\",\n                \"__v\": 0,\n                \"usersWithAccess\": [{\n                    \"id\": \"54133e8fd361774c1696f265\"\n                }],\n                \"appEntities\": [],\n                \"children\": [],\n                \"parents\": [{\n                    \"id\": \"543824be7174d62c1acad517\",\n                    \"tagType\": \"Scope\"\n                }],\n                \"formula\": null,\n                \"metricID\": null,\n                \"metricType\": null,\n                \"metric\": null,\n                \"sensorTarget\": \"rft\",\n                \"enphaseUserId\": null,\n                \"endDate\": null,\n                \"weatherStation\": \"--Use NOAA--\",\n                \"longitude\": 90,\n                \"latitude\": 78,\n                \"webAddress\": null,\n                \"interval\": \"Hourly\",\n                \"destination\": null,\n                \"accessMethod\": null,\n                \"deviceID\": \"121315008457\",\n                \"device\": \"Envoy\",\n                \"manufacturer\": \"Enphase\",\n                \"utilityAccounts\": [],\n                \"utilityProvider\": null,\n                \"nonProfit\": null,\n                \"taxID\": null,\n                \"street\": null,\n                \"state\": null,\n                \"postalCode\": null,\n                \"country\": null,\n                \"city\": null\n            }]\n        }]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/:dashboardId/tags/segments/:segmentId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments",
    "title": "Get Analyze Segments list",
    "group": "Dashboard",
    "name": "Get_Segments_list",
    "version": "1.0.0",
    "description": "<p>Retrieves the segments data of dashboard</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461ff1251d2f91500187462\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Segments list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"name\":\"Untitled Segment\",\n        \"id\":\"543824bd7174d62c1acad53f\",\n        \"tags\":[{\n            \"_id\":\"543824bf7174d62c1acad51f\",\n            \"tagType\":\"Sensor\",\n            \"name\":\"Sensor_script_0\",\n            \"creatorRole\":\"BP\",\n            \"creator\":\"54133e8fd361774c1696f265\",\n            \"__v\":0,\n            \"usersWithAccess\":[{\"id\":\"54133e8fd361774c1696f265\"}],\n            \"appEntities\":[{\n                \"id\":\"5425d6a19c676a3d08cb477d\",\n                \"appName\":\"Dashboard\"\n            }],\n            \"children\":[{\n                \"id\":\"543824bf7174d62c1acad520\",\n                \"tagType\":\"Metric\"\n            }],\n            \"parents\":[{\n                \"id\":\"543824bf7174d62c1acad51e\",\n                \"tagType\":\"Scope\"\n            }],\n            \"formula\":null,\n            \"metricID\":null,\n            \"metricType\":null,\n            \"metric\":null,\n            \"sensorTarget\":\"sss\",\n            \"enphaseUserId\":null,\n            \"endDate\":null,\n            \"weatherStation\":\"--Use NOAA--\",\n            \"longitude\":-36.5678,\n            \"latitude\":94.1234,\n            \"webAddress\":null,\n            \"interval\":\"Daily\",\n            \"destination\":null,\n            \"accessMethod\":null,\n            \"deviceID\":\"WR7KU010:2002106325\",\n            \"device\":\"Envoy\",\n            \"manufacturer\":\"Enphase\",\n            \"utilityAccounts\":[],\n            \"utilityProvider\":null,\n            \"nonProfit\":null,\n            \"taxID\":null,\n            \"street\":null,\n            \"state\":null,\n            \"postalCode\":null,\n            \"country\":null,\n            \"city\":null,\n            \"childTags\":[{\n                \"_id\":\"543824bf7174d62c1acad520\",\n                \"tagType\":\"Metric\",\n                \"name\":\"Watts (Power)\",\n                \"creatorRole\":\"BP\",\n                \"creator\":\"54133e8fd361774c1696f265\",\n                \"__v\":0,\n                \"usersWithAccess\":[{\n                    \"id\":\"54133e8fd361774c1696f265\"\n                }],\n                \"appEntities\":[],\n                \"children\":[],\n                \"parents\":[{\n                    \"id\":\"543824bf7174d62c1acad51f\",\n                    \"tagType\":\"Sensor\"\n                }],\n                \"formula\":null,\n                \"metricID\":\"Pac\",\n                \"metricType\":\"Datafeed\",\n                \"metric\":\"Standard\",\n                \"sensorTarget\":null,\n                \"enphaseUserId\":null,\n                \"endDate\":null,\n                \"weatherStation\":null,\n                \"longitude\":null,\n                \"latitude\":null,\n                \"webAddress\":null,\n                \"interval\":null,\n                \"destination\":null,\n                \"accessMethod\":null,\n                \"deviceID\":null,\n                \"device\":null,\n                \"manufacturer\":null,\n                \"utilityAccounts\":[],\n                \"utilityProvider\":null,\n                \"nonProfit\":null,\n                \"taxID\":null,\n                \"street\":null,\n                \"state\":null,\n                \"postalCode\":null,\n                \"country\":null,\n                \"city\":null,\n                \"childTags\":[]\n            }]\n        },{\n            \"_id\":\"543824be7174d62c1acad517\",\n            \"tagType\":\"Scope\",\n            \"name\":\"Enphase Scope\",\n            \"creatorRole\":\"BP\",\n            \"creator\":\"54133e8fd361774c1696f265\",\n            \"__v\":0,\n            \"usersWithAccess\":[{\"id\":\"54133e8fd361774c1696f265\"}],\n            \"appEntities\":[{\n                \"id\":\"5429d13f89c1849502287d5d\",\n                \"appName\":\"Presentation\"\n            },{\n                \"id\":\"5413612ad37f4ab56f1fb175\",\n                \"appName\":\"Dashboard\"\n            }],\n            \"children\":[{\n                \"id\":\"543824be7174d62c1acad518\",\n                \"tagType\":\"Sensor\"\n            }],\n            \"parents\":[{\n                \"id\":\"543824bd7174d62c1acad50f\",\n                \"tagType\":\"Facility\"\n            }],\n            \"formula\":null,\n            \"metricID\":null,\n            \"metricType\":null,\n            \"metric\":null,\n            \"sensorTarget\":null,\n            \"enphaseUserId\":\"4d7a59344d446b790a\",\n            \"endDate\":null,\n            \"weatherStation\":\"--Use NOAA--\",\n            \"longitude\":90,\n            \"latitude\":78,\n            \"webAddress\":null,\n            \"interval\":\"Hourly\",\n            \"destination\":\"rtf\",\n            \"accessMethod\":\"Push to FTP\",\n            \"deviceID\":\"121315008457\",\n            \"device\":\"Envoy\",\n            \"manufacturer\":\"Enphase\",\n            \"utilityAccounts\":[],\n            \"utilityProvider\":null,\n            \"nonProfit\":null,\n            \"taxID\":null,\n            \"street\":null,\n            \"state\":null,\n            \"postalCode\":null,\n            \"country\":null,\n            \"city\":null,\n            \"childTags\":[{\n                \"_id\":\"543824be7174d62c1acad51a\",\n                \"tagType\":\"Sensor\",\n                \"name\":\"Enphase Sensor\",\n                \"creatorRole\":\"BP\",\n                \"creator\":\"54133e8fd361774c1696f265\",\n                \"__v\":0,\n                \"usersWithAccess\":[{\n                    \"id\":\"54133e8fd361774c1696f265\"\n                }],\n                \"appEntities\":[],\n                \"children\":[],\n                \"parents\":[{\n                    \"id\":\"543824be7174d62c1acad517\",\n                    \"tagType\":\"Scope\"\n                }],\n                \"formula\":null,\n                \"metricID\":null,\n                \"metricType\":null,\n                \"metric\":null,\n                \"sensorTarget\":\"rft\",\n                \"enphaseUserId\":null,\n                \"endDate\":null,\n                \"weatherStation\":\"--Use NOAA--\",\n                \"longitude\":90,\n                \"latitude\":78,\n                \"webAddress\":null,\n                \"interval\":\"Hourly\",\n                \"destination\":null,\n                \"accessMethod\":null,\n                \"deviceID\":\"121315008457\",\n                \"device\":\"Envoy\",\n                \"manufacturer\":\"Enphase\",\n                \"utilityAccounts\":[],\n                \"utilityProvider\":null,\n                \"nonProfit\":null,\n                \"taxID\":null,\n                \"street\":null,\n                \"state\":null,\n                \"postalCode\":null,\n                \"country\":null,\n                \"city\":null,\n                \"childTags\":[]\n            }]\n        }]\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId",
    "title": "Get Dashboard By Id",
    "group": "Dashboard",
    "name": "Get_dashboard_by_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the dashboard data by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461363bdfef7c4800146f4b\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>dashboard data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\": \"5413612ad37f4ab56f1fb175\",\n        \"title\": \"Yakov First Dashboard\",\n        \"startDate\": \"2014-07-09T00:00:00.000Z\",\n        \"endDate\": \"2014-08-13T00:00:00.000Z\",\n        \"creator\": \"54135cb4cde72bc019ff39bd\",\n        \"creatorRole\": \"BP\",\n        \"__v\": 99,\n        \"segments\": [{\n            \"tags\" : [{\n                \"_id\" : \"543824bd7174d62c1acad50f\",\n                \"tagType\" : \"Facility\",\n                \"name\" : \"Barretts Elementary\",\n                \"creatorRole\" : \"BP\",\n                \"creator\" : \"54133e8fd361774c1696f265\",\n                \"__v\" : 0,\n                \"usersWithAccess\" : [{\n                    \"id\" : \"54133e8fd361774c1696f265\"\n                }, \n                {\n                    \"id\" : \"54135ec74f09ccc06d5be3d6\"\n                }, \n                {\n                    \"id\" : \"5429d0ba89c1849502287d5c\"\n                }],\n                \"appEntities\" : [{\n                    \"id\" : \"5413af68b1c838ea73500109\",\n                    \"appName\" : \"Presentation\"\n                }],\n                \"children\" : [{\n                    \"id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\"\n                }, \n                {\n                    \"id\" : \"543824be7174d62c1acad517\",\n                    \"tagType\" : \"Scope\"\n                }],\n                \"parents\" : [],\n                \"formula\" : null,\n                \"metricID\" : null,\n                \"metricType\" : null,\n                \"metric\" : null,\n                \"sensorTarget\" : null,\n                \"enphaseUserId\" : null,\n                \"endDate\" : null,\n                \"weatherStation\" : null,\n                \"longitude\" : null,\n                \"latitude\" : null,\n                \"webAddress\" : null,\n                \"interval\" : null,\n                \"destination\" : null,\n                \"accessMethod\" : null,\n                \"deviceID\" : null,\n                \"device\" : null,\n                \"manufacturer\" : null,\n                \"utilityAccounts\" : [\"6655\"],\n                \"utilityProvider\" : \"Ameren\",\n                \"nonProfit\" : true,\n                \"taxID\" : \"78\",\n                \"street\" : \"\",\n                \"state\" : \"\",\n                \"postalCode\" : \"\",\n                \"country\" : \"\",\n                \"city\" : \"\",\n                \"childTags\" : [{\n                    \"_id\" : \"543824bd7174d62c1acad510\",\n                    \"tagType\" : \"Scope\",\n                    \"name\" : \"Sunny WebBox\",\n                    \"creatorRole\" : \"BP\",\n                    \"creator\" : \"54133e8fd361774c1696f265\",\n                    \"__v\" : 0,\n                    \"usersWithAccess\" : [{\n                        \"id\" : \"54133e8fd361774c1696f265\"\n                    }],\n                    \"appEntities\" : [{\n                        \"id\" : \"5429d13f89c1849502287d5d\",\n                        \"appName\" : \"Presentation\"\n                    }],\n                    \"children\" : [{\n                        \"id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\"\n                    }],\n                    \"parents\" : [{\n                        \"id\" : \"543824bd7174d62c1acad50f\",\n                        \"tagType\" : \"Facility\"\n                    }],\n                    \"formula\" : null,\n                    \"metricID\" : null,\n                    \"metricType\" : null,\n                    \"metric\" : null,\n                    \"sensorTarget\" : null,\n                    \"enphaseUserId\" : null,\n                    \"endDate\" : null,\n                    \"weatherStation\" : \"--Use NOAA--\",\n                    \"longitude\" : -36.5678,\n                    \"latitude\" : 94.1234,\n                    \"webAddress\" : \"http://google.com\",\n                    \"interval\" : \"Daily\",\n                    \"destination\" : \"127.0.0.1\",\n                    \"accessMethod\" : \"Push to FTP\",\n                    \"deviceID\" : \"wb150115159\",\n                    \"device\" : \"Sunny WebBox\",\n                    \"manufacturer\" : \"manufacturerA\",\n                    \"utilityAccounts\" : [],\n                    \"utilityProvider\" : null,\n                    \"nonProfit\" : null,\n                    \"taxID\" : null,\n                    \"street\" : null,\n                    \"state\" : null,\n                    \"postalCode\" : null,\n                    \"country\" : null,\n                    \"city\" : null,\n                    \"childTags\" : [{\n                        \"_id\" : \"543824be7174d62c1acad511\",\n                        \"tagType\" : \"Sensor\",\n                        \"name\" : \"Inverter A\",\n                        \"creatorRole\" : \"BP\",\n                        \"creator\" : \"54133e8fd361774c1696f265\",\n                        \"__v\" : 0,\n                        \"usersWithAccess\" : [{\n                            \"id\" : \"54133e8fd361774c1696f265\"\n                        }],\n                        \"appEntities\" : [],\n                        \"children\" : [{\n                            \"id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\"\n                        }],\n                        \"parents\" : [{\n                            \"id\" : \"543824bd7174d62c1acad510\",\n                            \"tagType\" : \"Scope\"\n                        }],\n                        \"formula\" : null,\n                        \"metricID\" : null,\n                        \"metricType\" : null,\n                        \"metric\" : null,\n                        \"sensorTarget\" : \"sss\",\n                        \"enphaseUserId\" : null,\n                        \"endDate\" : null,\n                        \"weatherStation\" : \"--Use NOAA--\",\n                        \"longitude\" : -36.5678,\n                        \"latitude\" : 94.1234,\n                        \"webAddress\" : null,\n                        \"interval\" : \"Daily\",\n                        \"destination\" : null,\n                        \"accessMethod\" : null,\n                        \"deviceID\" : \"WR7KU009:2002112282\",\n                        \"device\" : \"Sunny WebBox\",\n                        \"manufacturer\" : \"manufacturerA\",\n                        \"utilityAccounts\" : [],\n                        \"utilityProvider\" : null,\n                        \"nonProfit\" : null,\n                        \"taxID\" : null,\n                        \"street\" : null,\n                        \"state\" : null,\n                        \"postalCode\" : null,\n                        \"country\" : null,\n                        \"city\" : null,\n                        \"childTags\" : [{\n                            \"_id\" : \"543824be7174d62c1acad512\",\n                            \"tagType\" : \"Metric\",\n                            \"name\" : \"Watts (Power)\",\n                            \"creatorRole\" : \"BP\",\n                            \"creator\" : \"54133e8fd361774c1696f265\",\n                            \"__v\" : 0,\n                            \"usersWithAccess\" : [{\n                                \"id\" : \"54133e8fd361774c1696f265\"\n                            }],\n                            \"appEntities\" : [],\n                            \"children\" : [],\n                            \"parents\" : [{\n                                \"id\" : \"543824be7174d62c1acad511\",\n                                \"tagType\" : \"Sensor\"\n                            }],\n                            \"formula\" : null,\n                            \"metricID\" : \"Pac\",\n                            \"metricType\" : \"Datafeed\",\n                            \"metric\" : \"Standard\",\n                            \"sensorTarget\" : null,\n                            \"enphaseUserId\" : null,\n                            \"endDate\" : null,\n                            \"weatherStation\" : null,\n                            \"longitude\" : null,\n                            \"latitude\" : null,\n                            \"webAddress\" : null,\n                            \"interval\" : null,\n                            \"destination\" : null,\n                            \"accessMethod\" : null,\n                            \"deviceID\" : null,\n                            \"device\" : null,\n                            \"manufacturer\" : null,\n                            \"utilityAccounts\" : [],\n                            \"utilityProvider\" : null,\n                            \"nonProfit\" : null,\n                            \"taxID\" : null,\n                            \"street\" : null,\n                            \"state\" : null,\n                            \"postalCode\" : null,\n                            \"country\" : null,\n                            \"city\" : null\n                        }]\n                    }],\n                }],\n            }],\n            \"name\" : \"Untitled Segment\"\n        }],\n        \"compareEndDate\": \"2013-08-13T00:00:00.000Z\",\n        \"compareStartDate\": \"2013-07-09T00:00:00.000Z\",\n        \"widgets\": [{\n            \"widget\": {\n                \"_id\": \"5413692b8dee97ac707b38dc\",\n                \"type\": \"Bar\",\n                \"title\": \"Bar Sample\",\n                \"metric\": null,\n                \"creatorRole\": \"BP\",\n                \"__v\": 0,\n                \"compareMetric\": null,\n                \"greenhouseKilograms\": false,\n                \"co2Kilograms\": false,\n                \"equivType\": null,\n                \"orientation\": null,\n                \"showUpTo\": null,\n                \"imageUrl\": null,\n                \"drillDown\": null,\n                \"displayedColumns\": [],\n                \"rowsPerTable\": null,\n                \"pivotDimension\": \"hour\",\n                \"groupDimension\": \"month\",\n                \"titleShow\": true\n            }\n        }],\n        \"gDriveAssetsFolderId\": \"0BwW4a4uizniHZHVXWGhJX3lEcDA\",\n        \"collections\": [\"Yakov First Collection\"],\n        \"layout\": {\n            \"selectedStyle\": 2,\n            \"widgets\": []\n        }\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/analyze/dashboards/:dashboardId/metrics",
    "title": "Get Dashboard Metrics",
    "group": "Dashboard",
    "name": "Get_metrics_data_of_Dashboard",
    "version": "1.0.0",
    "description": "<p>Retrieves the available metrics in Dashboard</p>",
    "examples": [
      {
        "title": " dashboardId : 5461fef951d2f91500187460",
        "content": " dashboardId : 5461fef951d2f91500187460\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Metrics object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"Timeline\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Bar\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Pie\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Image\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Table\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Communication Monitoring\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Energy Consumed\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Energy Produced\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate System Information\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Weather\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Location\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         },\n         {\n             \"_id\": \"5458bbf0c0fa5a0e0045f163\",\n             \"name\": \"Target Voltage\"\n         },\n         {\n             \"_id\": \"5458bc02c0fa5a0e0045f164\",\n             \"name\": \"Direct Voltage to Ground\"\n         },\n         {\n             \"_id\": \"5458bc29c0fa5a0e0045f165\",\n             \"name\": \"Voltage\"\n         },\n         {\n             \"_id\": \"5458bc53c0fa5a0e0045f166\",\n             \"name\": \"Line Voltage L1-N\"\n         },\n         {\n             \"_id\": \"5458bc61c0fa5a0e0045f167\",\n             \"name\": \"Line Voltage L2-N\"\n         },\n         {\n             \"_id\": \"5458bc73c0fa5a0e0045f168\",\n             \"name\": \"Line Voltage L1-L2\"\n         },\n         {\n             \"_id\": \"5458bc81c0fa5a0e0045f169\",\n             \"name\": \"Temperature\"\n         },\n         {\n             \"_id\": \"5458bca4c0fa5a0e0045f16a\",\n             \"name\": \"# of Grid Connections\"\n         },\n         {\n             \"_id\": \"5458bccbc0fa5a0e0045f16b\",\n             \"name\": \"Maximum Voltage\"\n         },\n         {\n             \"_id\": \"5458bce6c0fa5a0e0045f16c\",\n             \"name\": \"Max Temperature at IGBT Module\"\n         },\n         {\n             \"_id\": \"5458bd23c0fa5a0e0045f16d\",\n             \"name\": \"Current\"\n         },\n         {\n             \"_id\": \"5458bd52c0fa5a0e0045f16f\",\n             \"name\": \"Input Terminal Voltage\"\n         },\n         {\n             \"_id\": \"5458bd5fc0fa5a0e0045f170\",\n             \"name\": \"Grid Current Phase\"\n         },\n         {\n             \"_id\": \"5458bd70c0fa5a0e0045f171\",\n             \"name\": \"Total Feed-In Time\"\n         },\n         {\n             \"_id\": \"5458bd7ac0fa5a0e0045f172\",\n             \"name\": \"Operating Time\"\n         },\n         {\n             \"_id\": \"5458bd8cc0fa5a0e0045f173\",\n             \"name\": \"Frequency\"\n         },\n         {\n             \"_id\": \"5458bdabc0fa5a0e0045f174\",\n             \"name\": \"Number of Events\"\n         },\n         {\n             \"_id\": \"5458bdb6c0fa5a0e0045f175\",\n             \"name\": \"Total Yield\"\n         },\n         {\n             \"_id\": \"5458bdc7c0fa5a0e0045f176\",\n             \"name\": \"CO2 Saved\"\n         },\n         {\n             \"_id\": \"545906ddded7ea0f0079840c\",\n             \"name\": \"Power (kW)\"\n         },\n         {\n             \"_id\": \"545906e4ded7ea0f0079840d\",\n             \"name\": \"Energy (Wh)\"\n         },\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         },\n         {\n             \"_id\": \"54877ec86b894714006169f7\",\n             \"name\": \"Relative Humidity\"\n         },\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         },\n         {\n             \"_id\": \"54a2d23ad3d5a09700834086\",\n             \"name\": \"Pressure\"\n         },\n         {\n             \"_id\": \"54a2d274779c0be200c841ed\",\n             \"name\": \"Apparent Power\"\n         }\n     ],\n     \"Boilerplate Current Power\": [\n         {\n             \"_id\": \"5458a8bc5409c90e00884ce1\",\n             \"name\": \"Power (W)\"\n         }\n     ],\n     \"Boilerplate CO2 Avoided\": [\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         }\n     ],\n     \"Equivalencies\": [\n         {\n             \"_id\": \"545906edded7ea0f0079840e\",\n             \"name\": \"Energy (kWh)\"\n         }\n     ],\n     \"Boilerplate Reimbursement\": [\n         {\n             \"_id\": \"549dbcfe2aec371500d9737e\",\n             \"name\": \"Reimbursement\"\n         }\n     ]\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/metrics"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments/:segmentId",
    "title": "Remove Single Segment",
    "group": "Dashboard",
    "name": "Remove_Segment_from_dashboard",
    "version": "0.0.1",
    "description": "<p>Remove single segment from dashboard</p>",
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5461ff1251d2f91500187462\nsegmentId : 546c9eb080f57514008590fe\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated dashboard data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments/:segmentId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments/:segmentId",
    "title": "Remove Single Segment from widget",
    "group": "Dashboard",
    "name": "Remove_Segment_from_widget",
    "version": "0.0.1",
    "description": "<p>Remove single segment from widget</p>",
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5457e1990c5a5d2700affe77\ndashboardId : 5458ae05fe540a120074c205\nsegmentId : 54ca5f234aa35750070558fd\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated widget data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n*{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"5458ae05fe540a120074c205\",\n     \"type\": \"Timeline\",\n     \"title\": \"Timeline widget 1\",\n     \"creator\": \"54135f90c6ab7c241e28095e\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 9,\n     \"segments\": [],\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"endDate\": null,\n     \"startDate\": null,\n     \"singlePointAggregation\": [\n         {\n             \"function\": \"Min\",\n             \"title\": \"Min_title\"\n         },\n         {\n             \"function\": \"Total\"\n         }\n     ],\n     \"compareAsBar\": false,\n     \"compareMetric\": null,\n     \"metric\": {\n         \"_id\": \"545906ddded7ea0f0079840c\",\n         \"tagType\": \"Metric\",\n         \"name\": \"Power (kW)\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54135f90c6ab7c241e28095e\",\n         \"__v\": 0,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54135f90c6ab7c241e28095e\"\n             }\n         ],\n         \"appEntities\": [],\n         \"children\": [],\n         \"parents\": [\n             {\n                 \"id\": \"5458b22379e7b60e00b1133a\",\n                 \"tagType\": \"Node\"\n             }\n         ],\n         \"summaryMethod\": \"Average\",\n         \"formula\": null,\n         \"metricID\": \"Pac\",\n         \"metricType\": \"Datafeed\",\n         \"metric\": \"Standard\",\n         \"rate\": null,\n         \"sensorTarget\": null,\n         \"timezone\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [],\n         \"utilityProvider\": null,\n         \"nonProfit\": null,\n         \"taxID\": null,\n         \"address\": null,\n         \"street\": null,\n         \"state\": null,\n         \"postalCode\": null,\n         \"country\": null,\n         \"city\": null\n     },\n     \"compareLabel\": null,\n     \"label\": null,\n     \"summaryMethod\": null,\n     \"showAllTime\": false,\n     \"greenhousePounds\": false,\n     \"co2Pounds\": false,\n     \"greenhouseKilograms\": false,\n     \"co2Kilograms\": false,\n     \"equivType\": null,\n     \"orientation\": null,\n     \"showUpTo\": null,\n     \"imageUrl\": null,\n     \"drillDown\": null,\n     \"displayedColumns\": [],\n     \"rowsPerTable\": null,\n     \"lastConnected\": null,\n     \"boilerplateLocation\": null,\n     \"boilerplateCommissioning\": null,\n     \"boilerplateSystemPower\": null,\n     \"boilerplateType\": null,\n     \"pivotDimension\": null,\n     \"groupDimension\": null,\n     \"collapsed\": false,\n     \"titleShow\": true\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments/:segmentId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments",
    "title": "Remove Analyze Segments",
    "group": "Dashboard",
    "name": "Remove_Segments_from_dashboard",
    "version": "1.0.0",
    "description": "<p>Remove segments from dashboard.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Array of Segment Ids</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5461fee651d2f9150018745f\nbody\n[\"5463a3c83593691900188dc2\", \"5463a3e53593691900188dc3\"]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated dashboard data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments",
    "title": "Remove Analyze Widget Segments",
    "group": "Dashboard",
    "name": "Remove_Segments_from_widget",
    "version": "1.0.0",
    "description": "<p>Remove segments from widget.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Array of Segment Ids</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5457e1990c5a5d2700affe77\nwidgetId : 5458ae05fe540a120074c205\nbody\n[\"54ca5f234aa35750070558fd\"]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated widget data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"5458ae05fe540a120074c205\",\n     \"type\": \"Timeline\",\n     \"title\": \"Timeline widget 1\",\n     \"creator\": \"54135f90c6ab7c241e28095e\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 9,\n     \"segments\": [],\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"endDate\": null,\n     \"startDate\": null,\n     \"singlePointAggregation\": [\n         {\n             \"function\": \"Min\",\n             \"title\": \"Min_title\"\n         },\n         {\n             \"function\": \"Total\"\n         }\n     ],\n     \"compareAsBar\": false,\n     \"compareMetric\": null,\n     \"metric\": {\n         \"_id\": \"545906ddded7ea0f0079840c\",\n         \"tagType\": \"Metric\",\n         \"name\": \"Power (kW)\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54135f90c6ab7c241e28095e\",\n         \"__v\": 0,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54135f90c6ab7c241e28095e\"\n             }\n         ],\n         \"appEntities\": [],\n         \"children\": [],\n         \"parents\": [\n             {\n                 \"id\": \"5458b22379e7b60e00b1133a\",\n                 \"tagType\": \"Node\"\n             }\n         ],\n         \"summaryMethod\": \"Average\",\n         \"formula\": null,\n         \"metricID\": \"Pac\",\n         \"metricType\": \"Datafeed\",\n         \"metric\": \"Standard\",\n         \"rate\": null,\n         \"sensorTarget\": null,\n         \"timezone\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [],\n         \"utilityProvider\": null,\n         \"nonProfit\": null,\n         \"taxID\": null,\n         \"address\": null,\n         \"street\": null,\n         \"state\": null,\n         \"postalCode\": null,\n         \"country\": null,\n         \"city\": null\n     },\n     \"compareLabel\": null,\n     \"label\": null,\n     \"summaryMethod\": null,\n     \"showAllTime\": false,\n     \"greenhousePounds\": false,\n     \"co2Pounds\": false,\n     \"greenhouseKilograms\": false,\n     \"co2Kilograms\": false,\n     \"equivType\": null,\n     \"orientation\": null,\n     \"showUpTo\": null,\n     \"imageUrl\": null,\n     \"drillDown\": null,\n     \"displayedColumns\": [],\n     \"rowsPerTable\": null,\n     \"lastConnected\": null,\n     \"boilerplateLocation\": null,\n     \"boilerplateCommissioning\": null,\n     \"boilerplateSystemPower\": null,\n     \"boilerplateType\": null,\n     \"pivotDimension\": null,\n     \"groupDimension\": null,\n     \"collapsed\": false,\n     \"titleShow\": true\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId",
    "title": "Update Widget",
    "group": "Dashboard",
    "name": "Update_Analyze_Widget",
    "version": "1.0.0",
    "description": "<p>Update analyze widget. API can accept only changed fields. However, widget id is required. <br/>Following fields can&#39;t be inserted: <br/>     segments <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>WidgetObject</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\n{\n    \"_id\" : \"54637911dfcbe62000a7ede0\",\n    \"title\" : \"Cars Removed1\",\n    \"endDate\": \"2014-11-02T00:00:00.000Z\",\n    \"startDate\": \"2014-11-01T00:00:00.000Z\",\n    \"groupDimension\" : \"--Custom--\",\n    \"customGroupDimension\" : {\n        \"groupBySegment\" : true,\n        \"definedGroups\" : [\n            {\n                \"segmentId\" : \"54cb1e77d52879320ab88a03\",\n                \"expandedNodes\" : [],\n                \"isExpanded\" : false,\n                \"treedata\" : [],\n                \"tagBindings\" : [\n                    {\n                        \"tagType\" : \"Node\",\n                        \"id\" : \"5458b22379e7b60e00b1133a\"\n                    }\n                ],\n                \"name\" : \"Custom Group A1\"\n            }\n        ]\n    }\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>widget object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n   \"success\": 1,\n   \"message\": {\n       \"_id\": \"54637911dfcbe62000a7ede0\",\n       \"type\": \"Equivalencies\",\n       \"title\": \"Cars Removed1\",\n       \"creator\": \"54135f90c6ab7c241e28095e\",\n       \"creatorRole\": \"BP\",\n       \"__v\": 1,\n       \"compareEndDate\": null,\n       \"compareStartDate\": null,\n       \"endDate\": \"2014-11-02T00:00:00.000Z\",\n       \"startDate\": \"2014-11-01T00:00:00.000Z\",\n       \"singlePointAggregation\": [],\n       \"compareAsBar\": false,\n       \"compareMetric\": null,\n       \"metric\": {\n           \"_id\": \"545906edded7ea0f0079840e\",\n           \"tagType\": \"Metric\",\n           \"name\": \"Energy (kWh)\",\n           \"creatorRole\": \"BP\",\n           \"creator\": \"54135f90c6ab7c241e28095e\",\n           \"__v\": 4,\n           \"usersWithAccess\": [\n               {\n                   \"id\": \"54135f90c6ab7c241e28095e\"\n               }\n           ],\n           \"appEntities\": [\n               {\n                   \"appName\": \"Dashboard\",\n                   \"id\": \"54a2bc6560f7f44000e5959d\"\n               }\n           ],\n           \"children\": [],\n           \"parents\": [\n               {\n                   \"id\": \"5458b22379e7b60e00b1133a\",\n                   \"tagType\": \"Node\"\n               }\n           ],\n           \"summaryMethod\": \"Total\",\n           \"formula\": null,\n           \"metricID\": \"Pac\",\n           \"metricType\": \"Calculated\",\n           \"metric\": \"Standard\",\n           \"rate\": null,\n           \"sensorTarget\": null,\n           \"timezone\": null,\n           \"enphaseUserId\": null,\n           \"endDate\": null,\n           \"weatherStation\": null,\n           \"longitude\": null,\n           \"latitude\": null,\n           \"webAddress\": null,\n           \"interval\": null,\n           \"destination\": null,\n           \"accessMethod\": null,\n           \"deviceID\": null,\n           \"device\": null,\n           \"manufacturer\": null,\n           \"utilityAccounts\": [],\n           \"utilityProvider\": null,\n           \"nonProfit\": null,\n           \"taxID\": null,\n           \"address\": null,\n           \"street\": null,\n           \"state\": null,\n           \"postalCode\": null,\n           \"country\": null,\n           \"city\": null\n       },\n       \"showAllTime\": false,\n       \"greenhousePounds\": false,\n       \"co2Pounds\": false,\n       \"greenhouseKilograms\": false,\n       \"co2Kilograms\": false,\n       \"equivType\": \"Cars Removed\",\n       \"orientation\": \"vertical\",\n       \"showUpTo\": null,\n       \"imageUrl\": null,\n       \"drillDown\": null,\n       \"displayedColumns\": [],\n       \"rowsPerTable\": null,\n       \"lastConnected\": null,\n       \"boilerplateLocation\": null,\n       \"boilerplateCommissioning\": null,\n       \"boilerplateSystemPower\": null,\n       \"boilerplateType\": null,\n       \"pivotDimension\": null,\n       \"groupDimension\" : \"--Custom--\",\n       \"customGroupDimension\" : {\n           \"groupBySegment\" : true,\n           \"definedGroups\" : [\n               {\n                   \"segmentId\" : \"54cb1e77d52879320ab88a03\",\n                   \"_id\" : \"54e343abfbd0138d08c87b0a\",\n                   \"expandedNodes\" : [],\n                   \"isExpanded\" : false,\n                   \"treedata\" : [],\n                   \"tagBindings\" : [\n                       {\n                           \"tagType\" : \"Node\",\n                           \"id\" : \"5458b22379e7b60e00b1133a\"\n                       }\n                   ],\n                   \"name\" : \"Custom Group A1\"\n               }\n           ]\n       },\n       \"collapsed\": false,\n       \"titleShow\": false\n   }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments",
    "title": "Update Analyze Widget Segment",
    "group": "Dashboard",
    "name": "Update_Analyze_Widget_Segment",
    "version": "1.0.0",
    "description": "<p>Edit segment data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Object data of segments. array of segments is possible</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5457e1990c5a5d2700affe77\ndashboardId : 5458ae05fe540a120074c205\nbody\n[{\n    \"name\" : \"test segment 123\",\n    \"id\": \"54ca5f234aa35750070558fd\",\n    \"tagBindings\" :[{\n        \"tagType\":\"Scope\",\n        \"id\":\"543824c07174d62c1acad525\"\n    }]\n}]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>widget data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success exmple",
          "content": "Success exmple\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"5458ae05fe540a120074c205\",\n     \"type\": \"Timeline\",\n     \"title\": \"Timeline widget 1\",\n     \"creator\": \"54135f90c6ab7c241e28095e\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 8,\n     \"segments\": [\n         {\n             \"tagBindings\": [\n                 {\n                     \"tagType\": \"Scope\",\n                     \"id\": \"543824c07174d62c1acad525\"\n                 }\n             ],\n             \"name\": \"test segment 123\",\n             \"id\": \"54ca5f234aa35750070558fd\"\n         }\n     ],\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"endDate\": null,\n     \"startDate\": null,\n     \"singlePointAggregation\": [\n         {\n             \"function\": \"Min\",\n             \"title\": \"Min_title\"\n         },\n         {\n             \"function\": \"Total\"\n         }\n     ],\n     \"compareAsBar\": false,\n     \"compareMetric\": null,\n     \"metric\": {\n         \"_id\": \"545906ddded7ea0f0079840c\",\n         \"tagType\": \"Metric\",\n         \"name\": \"Power (kW)\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54135f90c6ab7c241e28095e\",\n         \"__v\": 0,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54135f90c6ab7c241e28095e\"\n             }\n         ],\n         \"appEntities\": [],\n         \"children\": [],\n         \"parents\": [\n             {\n                 \"id\": \"5458b22379e7b60e00b1133a\",\n                 \"tagType\": \"Node\"\n             }\n         ],\n         \"summaryMethod\": \"Average\",\n         \"formula\": null,\n         \"metricID\": \"Pac\",\n         \"metricType\": \"Datafeed\",\n         \"metric\": \"Standard\",\n         \"rate\": null,\n         \"sensorTarget\": null,\n         \"timezone\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [],\n         \"utilityProvider\": null,\n         \"nonProfit\": null,\n         \"taxID\": null,\n         \"address\": null,\n         \"street\": null,\n         \"state\": null,\n         \"postalCode\": null,\n         \"country\": null,\n         \"city\": null\n     },\n     \"compareLabel\": null,\n     \"label\": null,\n     \"summaryMethod\": null,\n     \"showAllTime\": false,\n     \"greenhousePounds\": false,\n     \"co2Pounds\": false,\n     \"greenhouseKilograms\": false,\n     \"co2Kilograms\": false,\n     \"equivType\": null,\n     \"orientation\": null,\n     \"showUpTo\": null,\n     \"imageUrl\": null,\n     \"drillDown\": null,\n     \"displayedColumns\": [],\n     \"rowsPerTable\": null,\n     \"lastConnected\": null,\n     \"boilerplateLocation\": null,\n     \"boilerplateCommissioning\": null,\n     \"boilerplateSystemPower\": null,\n     \"boilerplateType\": null,\n     \"pivotDimension\": null,\n     \"groupDimension\": null,\n     \"collapsed\": false,\n     \"titleShow\": true\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/widgets/:widgetId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/analyze/dashboards/:dashboardId",
    "title": "Update Dashboard",
    "group": "Dashboard",
    "name": "Update_Dashboard",
    "version": "1.0.0",
    "description": "<p>Edit dashboard. API can accept only changed fields. However, id is mandatory. <br/>Following fields can&#39;t be updated: <br/>     segments <br/>     awsAssetsKeyPrefix <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Dashboard data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 54b4f41679fc46d01f9f50fe\nbody\n{ \n    \"title\" : \"Plant Overview Test\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Dashboard object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n     \"_id\": \"54b4f41679fc46d01f9f50fe\",\n     \"title\": \"Plant Overview Test\",\n     \"startDate\": \"2014-12-13T10:31:50.055Z\",\n     \"endDate\": \"2015-01-13T10:31:50.055Z\",\n     \"creator\": \"54621cd2349cc84500dee9ea\",\n     \"creatorRole\": \"BP\",\n     \"__v\": 1,\n     \"isViewerTime\": false,\n     \"default\": false,\n     \"segments\": [],\n     \"subDay\": null,\n     \"isPrivate\": false,\n     \"isRealTimeDateRange\": false,\n     \"compareEndDate\": null,\n     \"compareStartDate\": null,\n     \"awsAssetsKeyPrefix\": \"UnOBGdnAqhCd\",\n     \"widgets\": [],\n     \"collections\": [\n         \"my test\"\n     ],\n     \"layout\": {\n         \"selectedStyle\": 2,\n         \"widgets\": {\n             \"column0\": [],\n             \"column1\": []\n         },\n         \"includePrimary\": false\n     }\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/analyze/dashboards/:dashboardId/tags/segments",
    "title": "Update Analyze Segment",
    "group": "Dashboard",
    "name": "Update_Segment",
    "version": "1.0.0",
    "description": "<p>Edit segment data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Object data of segments. array of segments is possible</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\ndashboardId : 5461363bdfef7c4800146f4b\nbody\n[{\n        \"tagBindings\" : [ \n            {\n                \"tagType\" : \"Facility\",\n                \"id\" : \"5458afc6fe540a120074c20f\"\n            }\n        ],\n        \"name\" : \"Liberty Lofts - Solar Power Plant\",\n        \"id\" : \"54637850dfcbe62000a7eddf\"\n}]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>segment data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success exmple",
          "content": "Success exmple\n{\n    \"success\": 1,\n    \"message\": {dashboard object}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/analyze/dashboards/:dashboardId/tags/segments"
      }
    ],
    "filename": "server/bl-data-sense/routes/apis/dashboard-api-router.js"
  },
  {
    "type": "post",
    "url": "/assets/dashboard/:dashboardId",
    "title": "Upload Analyze widget Assets",
    "group": "Dashboard",
    "name": "Upload_Analyze_widget_Assets",
    "version": "1.0.0",
    "description": "<p>Upload analyze widget assets to AWS</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "field": "assetsFile",
            "optional": false,
            "description": "<p>asset data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndashboardId : 5461363bdfef7c4800146f4b\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/assets/dashboard/:dashboardId"
      }
    ],
    "filename": "server/general/routes/apis/assets-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/notifications/email/presentationlink",
    "title": "Create Presentation Link Email",
    "group": "Email",
    "name": "Create_Presentation_Link_Email",
    "version": "1.0.0",
    "description": "<p>Send presentation link email to currently logged in user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "field": "email",
            "optional": false,
            "description": "<p>Email address to send</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Email body message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Presentation Link</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n    email : emmanuel.ekochuseven@brightergy.com\n    message : This is a new presentation mail.\n    link : https://brighterlink.brightergy.com/management?id=5469c01f12db4314007626c0\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/notifications/email/presentationlink"
      }
    ],
    "filename": "server/general/routes/apis/email-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/notifications/email/newutilityprovider",
    "title": "Create Utility Provider Email",
    "group": "Email",
    "name": "Create_Utility_Provider_Email",
    "version": "1.0.0",
    "description": "<p>Send new utility provider email to currently logged in user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "text",
            "optional": false,
            "description": "<p>Email body text</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n    text : This is utility provider mail sample\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/notifications/email/newutilityprovider"
      }
    ],
    "filename": "server/general/routes/apis/email-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/notifications/email/dashboardlink",
    "title": "Send Dashboard Link Email",
    "group": "Email",
    "name": "Send_Dashboard_Link_Email",
    "version": "1.0.0",
    "description": "<p>Send dashboard link email to currently logged in user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "field": "email",
            "optional": false,
            "description": "<p>Email address to send</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Email body message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>dashboard Link</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n    email : emmanuel.ekochuseven@brightergy.com\n    message : This is a new dashboard mail.\n    link : http://localhost:3000/datasense#!/54c75bd47cd58cac01ae3264\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/notifications/email/dashboardlink"
      }
    ],
    "filename": "server/general/routes/apis/email-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/groups",
    "title": "Create Group",
    "group": "Groups",
    "name": "Create_Group",
    "version": "1.0.0",
    "description": "<p>Create new group with associated sources</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Group data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"name\": \"GroupEnergy\",\n    \"information\": \"This is description for GroupEnergy\",\n    \"creatorRole\" : \"BP\",\n    \"children\" : [ \n        {\n            \"id\" : \"54ddb1049f5501540ad9d711\",\n            \"sourceType\" : \"Group\"\n        },\n        {\n            \"id\" : \"54ddb1159f5501540ad9d712\",\n            \"sourceType\" : \"Group\"\n        }\n    ]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created Tag Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"54e300f8113759722faeecf9\",\n        \"name\" : \"GroupEnergy\",\n        \"information\" : \"This is description for GroupEnergy\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [],\n        \"children\" : [ \n            {\n                \"id\" : \"54ddb1049f5501540ad9d711\",\n                \"sourceType\" : \"Group\"\n            },\n            {\n                \"id\" : \"54ddb1159f5501540ad9d712\",\n                \"sourceType\" : \"Group\"\n            }\n        ]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/groups/:groupId",
    "title": "Delete Group",
    "group": "Groups",
    "name": "Delete_Group",
    "version": "1.0.0",
    "description": "<p>Delete group and remove itself from associated groups</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ngroupId : 54d497f46a983219102e62ce\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created Tag Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [\n        \"54d497f46a983219102e62ce\"\n    ]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups/:groupId"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/groups/:groupId",
    "title": "Edit Group",
    "group": "Groups",
    "name": "Edit_Group",
    "version": "1.0.0",
    "description": "<p>Update group with associated sources</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Group data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ngroupId : 54d497f46a983219102e62ce\nbody\n{\n    \"name\": \"GroupB\",\n    \"information\": \"This is updated description for GroupEnergy\",\n    \"creatorRole\" : \"BP\",\n    \"children\" : [ \n        {\n            \"id\" : \"54d496f26a983219102e62cd\",\n            \"sourceType\" : \"Group\"\n        }\n    ]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated Group Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"54d497f46a983219102e62ce\",\n        \"name\" : \"GroupEnergy\",\n        \"information\" : \"This is updated description for GroupEnergy\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [],\n        \"children\" : [ \n            {\n                \"id\" : \"54d496f26a983219102e62cd\",\n                \"sourceType\" : \"Group\"\n            }\n        ]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups/:groupId"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/groups/",
    "title": "Get All Groups",
    "group": "Groups",
    "name": "Get_All_Groups",
    "version": "1.0.0",
    "description": "<p>Retrieves the All Groups</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\" : \"54d497f46a983219102e62ce\",\n        \"name\" : \"GroupB\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 1,\n        \"information\":\"groupB description updated\",\n        \"usersWithAccess\" : [],\n        \"children\" : [\n        {\"id\":\"5458a8a95409c90e00884ce0\",\"sourceType\":\"Node\"},\n        {\"id\":\"5458a84f5409c90e00884cdf\",\"sourceType\":\"Scope\"},\n        {\"id\":\"5458a8bc5409c90e00884ce1\",\"sourceType\":\"Metric\"},\n        {\"id\":\"54ddb1049f5501540ad9d711\",\"sourceType\":\"Group\"},\n        {\"sourceType\":\"Group\",\"id\":\"54ddb1259f5501540ad9d713\"}],\n    },\n    {\n        \"_id\" : \"54ddb1049f5501540ad9d711\",\n        \"name\" : \"GroupA\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 1,\n        \"information\":\"groupA description updated\",\n        \"usersWithAccess\" : [],\n        \"children\" : [\n        {\"id\":\"5458a2acb0091419007e03df\",\"name\":\"Liberty Lofts\",\"sourceType\":\"Facility\"},\n        {\"id\":\"5458c7bec0fa5a0e0045f195\",\"name\":\"Number of Events\",\"sourceType\":\"Metric\"},\n        {\"id\":\"5458c56fc0fa5a0e0045f17c\",\"name\":\"Voltage\",\"sourceType\":\"Metric\"}],\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups/"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/groups/available",
    "title": "Get Available Group Sources",
    "group": "Groups",
    "name": "Get_Available_Groups_and_Sources",
    "version": "1.0.0",
    "description": "<p>Retrieves the All Groups and Tags</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\" : \"54d497f46a983219102e62ce\",\n        \"name\" : \"GroupB\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 1,\n        \"information\":\"groupB description updated\",\n        \"usersWithAccess\" : [],\n        \"children\" : [\n        {\"id\":\"5458a8a95409c90e00884ce0\",\"sourceType\":\"Node\"},\n        {\"id\":\"5458a84f5409c90e00884cdf\",\"sourceType\":\"Scope\"},\n        {\"id\":\"5458a8bc5409c90e00884ce1\",\"sourceType\":\"Metric\"},\n        {\"id\":\"54ddb1049f5501540ad9d711\",\"sourceType\":\"Group\"},\n        {\"sourceType\":\"Group\",\"id\":\"54ddb1259f5501540ad9d713\"}],\n    },\n    {\n        \"_id\" : \"543824c07174d62c1acad525\",\n        \"tagType\" : \"Scope\",\n        \"name\" : \"Enphase DataLoggerII\",\n        \"creatorRole\" : \"Admin\",\n        \"creator\" : \"54133e8fd361774c1696f265\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [{\n            \"id\" : \"54133e8fd361774c1696f265\"\n        }],\n        \"appEntities\" : [{\n            \"id\" : \"5429d13f89c1849502287d5d\",\n            \"appName\" : \"Presentation\"\n        }],\n        \"children\" : [],\n        \"parents\" : [{\n            \"id\" : \"543824bf7174d62c1acad51d\",\n            \"tagType\" : \"Facility\"\n        }],\n        \"formula\" : null,\n        \"metricID\" : null,\n        \"metricType\" : null,\n        \"metric\" : null,\n        \"sensorTarget\" : null,\n        \"enphaseUserId\" : \"4d7a59344d5445300a\",\n        \"endDate\" : null,\n        \"weatherStation\" : \"--Use NOAA--\",\n        \"longitude\" : -90.47239999999999,\n        \"latitude\" : 38.5763,\n        \"username\": \"tester\",\n        \"password\": \"123456\",\n        \"webAddress\" : null,\n        \"interval\" : \"Hourly\",\n        \"destination\" : \"Test\",\n        \"accessMethod\" : \"Push to FTP\",\n        \"deviceID\" : \"121006088373\",\n        \"device\" : \"Envoy\",\n        \"manufacturer\" : \"Enphase\",\n        \"utilityAccounts\" : [],\n        \"utilityProvider\" : null,\n        \"nonProfit\" : null,\n        \"taxID\" : null,\n        \"street\" : null,\n        \"state\" : null,\n        \"postalCode\" : null,\n        \"country\" : null,\n        \"city\" : null\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups/available"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/groups/:groupId",
    "title": "Get Group",
    "group": "Groups",
    "name": "Get_Group",
    "version": "1.0.0",
    "description": "<p>Retrieves the Group by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ngroupId : 54d497f46a983219102e62ce\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"54d497f46a983219102e62ce\",\n        \"name\" : \"GroupB\",\n        \"creatorRole\" : \"BP\",\n        \"creator\" : \"54135f90c6ab7c241e28095e\",\n        \"__v\" : 1,\n        \"information\":\"groupB description updated\",\n        \"usersWithAccess\" : [],\n        \"children\" : [\n        {\"id\":\"5458a8a95409c90e00884ce0\",\"sourceType\":\"Node\"},\n        {\"id\":\"5458a84f5409c90e00884cdf\",\"sourceType\":\"Scope\"},\n        {\"id\":\"5458a8bc5409c90e00884ce1\",\"sourceType\":\"Metric\"},\n        {\"id\":\"54ddb1049f5501540ad9d711\",\"sourceType\":\"Group\"},\n        {\"sourceType\":\"Group\",\"id\":\"54ddb1259f5501540ad9d713\"}],\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/groups/:groupId"
      }
    ],
    "filename": "server/general/routes/apis/group-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/location/address/street={addressToPars}",
    "title": "Get Live Address",
    "group": "Location",
    "name": "Get_Live_Address",
    "version": "1.0.0",
    "description": "<p>Get/Parse live address from give address.</p>",
    "examples": [
      {
        "title": " addressToPars : 1617 Main Street, 3rd Floor, Kansas City, MO 64108",
        "content": " addressToPars : 1617 Main Street, 3rd Floor, Kansas City, MO 64108\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>parsed address object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"input_index\":0,\n        \"candidate_index\":1,\n        \"delivery_line_1\":\"8925 Carroll Way Ste C\",\n        \"last_line\":\"San Diego CA 92121-2488\",\n        \"delivery_point_barcode\":\"921212488751\",\n        \"components\":{\n            \"primary_number\":\"8925\",\n            \"street_name\":\"Carroll\",\n            \"street_suffix\":\"Way\",\n            \"secondary_number\":\"C\",\n            \"secondary_designator\":\"Ste\",\n            \"city_name\":\"San Diego\",\n            \"state_abbreviation\":\"CA\",\n            \"zipcode\":\"92121\",\n            \"plus4_code\":\"2488\",\n            \"delivery_point\":\"75\",\n            \"delivery_point_check_digit\":\"1\"\n        },\n        \"metadata\":{\n            \"record_type\":\"H\",\n            \"zip_type\":\"Standard\",\n            \"county_fips\":\"06073\",\n            \"county_name\":\"San Diego\",\n            \"carrier_route\":\"C002\",\n            \"congressional_district\":\"52\",\n            \"rdi\":\"Commercial\",\n            \"elot_sequence\":\"0144\",\n            \"elot_sort\":\"A\",\n            \"latitude\":32.88584,\n            \"longitude\":-117.15948,\n            \"precision\":\"Zip9\",\n            \"time_zone\":\"Pacific\",\n            \"utc_offset\":-8,\n            \"dst\":true\n        },\n        \"analysis\":{\n            \"dpv_match_code\":\"Y\",\n            \"dpv_footnotes\":\"AABB\",\n            \"dpv_cmra\":\"N\",\n            \"dpv_vacant\":\"N\",\n            \"active\":\"Y\",\n            \"footnotes\":\"N#\"\n        }\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/location/address/street={addressToPars}"
      }
    ],
    "filename": "server/general/routes/apis/location-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/others/devices/timezones",
    "title": "Get Allowed Devices timezones",
    "group": "Others",
    "name": "Get_Allowed_devices_timezones",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of timezones</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Device Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": [\n     \"Atlantic Daylight Time\",\n     \"Atlantic Standard Time\",\n     \"Alaska Daylight Time\",\n     \"Alaska Standard Time\",\n     \"Central Daylight Time\",\n     \"Central Standard Time\",\n     \"Eastern Daylight Time\",\n     \"Eastern Standard Time\",\n     \"Eastern Greenland Summer Time\",\n     \"East Greenland Time\",\n     \"Greenwich Mean Time\",\n     \"Hawaii-Aleutian Daylight Time\",\n     \"Hawaii-Aleutian Standard Time\",\n     \"Mountain Daylight Time\",\n     \"Mountain Standard Time\",\n     \"Newfoundland Daylight Time\",\n     \"Newfoundland Standard Time\",\n     \"Pacific Daylight Time\",\n     \"Pacific Standard Time\",\n     \"Pierre & Miquelon Daylight Time\",\n     \"Pierre & Miquelon Standard Time\",\n     \"Western Greenland Summer Time\",\n     \"West Greenland Time\"\n ]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/others/devices/timezones"
      }
    ],
    "filename": "server/general/routes/apis/others-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/presentdevices/",
    "title": "Create Device",
    "group": "Present_Display",
    "name": "Create_Device",
    "version": "1.0.0",
    "description": "<p>Create new device</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Device object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"deviceName\" : \"Device3\",\n    \"connectionType\" : \"type1\",\n    \"ethernetState\" : true,\n    \"ethernetDevice\" : \"deviceC\",\n    \"ethernetIpType\" : \"ipTypeA\",\n    \"ethernetIpAddress\" : \"191.18.0.0\",\n    \"mask\" : \"mask string\",\n    \"gateway\" : \"gateWayA\",\n    \"dns1\" : \"dns1 string\",\n    \"dns2\" : \"dns2 string\",\n    \"wifiState\" : true,\n    \"wifiIpAddress\" : \"182.20.3.0\",\n    \"wifiName\" : \"wifiName\",\n    \"wifiOpenState\" : true,\n    \"enableCleanup\" : true,\n    \"timeOfExecution\" : \"time of execution\",\n    \"clearCache\" : true,\n    \"clearOfflineData\" : true,\n    \"clearSessions\" : true,\n    \"clearCookies\" : true,\n    \"clearHistory\" : true,\n    \"clearFormData\" : true,\n    \"clearPasswords\" : false,\n    \"enableScheduleBrowserRestart\" : false,\n    \"configureScheduleBrowserRestart\" : null,\n    \"showStatusOnBrowser\" : true,\n    \"timeIntervalToMonitorStatus\" : 20000,\n    \"timeIntervalToReport\" : 60000,\n    \"preventSuspension\" : false,\n    \"ftpHost\" : \"brightergy.com\",\n    \"ftpUsername\" : \"test\",\n    \"ftpPassword\" : \"test1234\",\n    \"durationToAttemptReconnection\" : 30000,\n    \"enableAutomaticUpdateNewVersion\" : true,\n    \"scheduleUpdateNewVersion\" : \"version\",\n    \"remoteUpdatePath\" : \"http://test.com\",\n    \"remoteApkPath\" : \"remote apk path\",\n    \"userEmail\" : \"dev.web@brightergy.com\",\n    \"userPassword\" : \"test1234\",\n    \"password\" : \"test1234\",\n    \"presentationId\" : \"545f2abe649db6140038fc6a\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created Device Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\":\"550bcdbf910c256e18759391\",\n        \"deviceName\" : \"Device3\",\n        \"connectionType\" : \"type1\",\n        \"ethernetState\" : true,\n        \"ethernetDevice\" : \"deviceC\",\n        \"ethernetIpType\" : \"ipTypeA\",\n        \"ethernetIpAddress\" : \"191.18.0.0\",\n        \"mask\" : \"mask string\",\n        \"gateway\" : \"gateWayA\",\n        \"dns1\" : \"dns1 string\",\n        \"dns2\" : \"dns2 string\",\n        \"wifiState\" : true,\n        \"wifiIpAddress\" : \"182.20.3.0\",\n        \"wifiName\" : \"wifiName\",\n        \"wifiOpenState\" : true,\n        \"enableCleanup\" : true,\n        \"timeOfExecution\" : \"time of execution\",\n        \"clearCache\" : true,\n        \"clearOfflineData\" : true,\n        \"clearSessions\" : true,\n        \"clearCookies\" : true,\n        \"clearHistory\" : true,\n        \"clearFormData\" : true,\n        \"clearPasswords\" : false,\n        \"enableScheduleBrowserRestart\" : false,\n        \"configureScheduleBrowserRestart\" : null,\n        \"showStatusOnBrowser\" : true,\n        \"timeIntervalToMonitorStatus\" : 20000,\n        \"timeIntervalToReport\" : 60000,\n        \"preventSuspension\" : false,\n        \"ftpHost\" : \"brightergy.com\",\n        \"ftpUsername\" : \"test\",\n        \"ftpPassword\" : \"test1234\",\n        \"durationToAttemptReconnection\" : 30000,\n        \"enableAutomaticUpdateNewVersion\" : true,\n        \"scheduleUpdateNewVersion\" : \"version\",\n        \"remoteUpdatePath\" : \"http://test.com\",\n        \"remoteApkPath\" : \"remote apk path\",\n        \"userEmail\" : \"dev.web@brightergy.com\",\n        \"userPassword\" : \"test1234\",\n        \"password\" : \"test1234\",\n        \"presentationId\" : \"545f2abe649db6140038fc6a\"\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/presentdevices/"
      }
    ],
    "filename": "server/general/routes/apis/present-device-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/presentdevices/logs",
    "title": "Get Present device logs",
    "group": "Present_Display",
    "name": "Get_present_device_logs",
    "version": "1.0.0",
    "description": "<p>Retrieves the All logs of present device</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\":\"54d49a63b806256d1059cc29\",\n        \"timestamp\":\"Mon Dec 01 2014 02:00:00 GMT+0200\",\n        \"__v\":0,\n        \"version\":\"v1\",\n        \"totalUpTime\":60000,\n        \"wsTrigger\":25,\n        \"memUsage\":2048,\n        \"wifiStatus\":\"wifi status\",\n        \"ethernatStatus\":\"ethernet status\",\n        \"count\":12\n    },{\t\n        \"_id\":\"54d49a63b806256d1059dc29\",\n        \"timestamp\":\"Thu Jan 01 2015 02:00:00 GMT+0200\",\n        \"__v\":0,\n        \"version\":\"v2\",\n        \"totalUpTime\":120000,\n        \"wsTrigger\":2500,\n        \"memUsage\":4096,\n        \"wifiStatus\":\"disabled\",\n        \"ethernatStatus\":\"enabled\",\n        \"count\":533\n\t}]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/presentdevices/logs"
      }
    ],
    "filename": "server/general/routes/apis/present-device-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/presentdevices/:deviceId",
    "title": "Update Device configuration",
    "group": "Present_Display",
    "name": "Update_Device",
    "version": "1.0.0",
    "description": "<p>Update device configuration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Device object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ndeviceId: 5421ab10885c2846dcce983e\nbody\n{\n    \"_id\" : \"5421ab10885c2846dcce983e\",\n    \"deviceName\" : \"Device3 updated\",\n    \"connectionType\" : \"type1\",\n    \"ethernetState\" : true,\n    \"ethernetDevice\" : \"deviceC\",\n    \"ethernetIpType\" : \"ipTypeA\",\n    \"ethernetIpAddress\" : \"191.18.0.0\",\n    \"mask\" : \"mask string\",\n    \"gateway\" : \"gateWayA\",\n    \"dns1\" : \"dns1 string\",\n    \"dns2\" : \"dns2 string\",\n    \"wifiState\" : true,\n    \"wifiIpAddress\" : \"182.20.3.0\",\n    \"wifiName\" : \"wifiName\",\n    \"wifiOpenState\" : true,\n    \"enableCleanup\" : true,\n    \"timeOfExecution\" : \"time of execution\",\n    \"clearCache\" : true,\n    \"clearOfflineData\" : true,\n    \"clearSessions\" : true,\n    \"clearCookies\" : true,\n    \"clearHistory\" : true,\n    \"clearFormData\" : true,\n    \"clearPasswords\" : false,\n    \"enableScheduleBrowserRestart\" : false,\n    \"configureScheduleBrowserRestart\" : null,\n    \"showStatusOnBrowser\" : true,\n    \"timeIntervalToMonitorStatus\" : 20000,\n    \"timeIntervalToReport\" : 60000,\n    \"preventSuspension\" : false,\n    \"ftpHost\" : \"brightergy.com\",\n    \"ftpUsername\" : \"test\",\n    \"ftpPassword\" : \"test1234\",\n    \"durationToAttemptReconnection\" : 30000,\n    \"enableAutomaticUpdateNewVersion\" : true,\n    \"scheduleUpdateNewVersion\" : \"version\",\n    \"remoteUpdatePath\" : \"http://test.com\",\n    \"remoteApkPath\" : \"remote apk path\",\n    \"userEmail\" : \"dev.web@brightergy.com\",\n    \"userPassword\" : \"test1234\",\n    \"password\" : \"test1234\",\n    \"presentationId\" : \"545f2abe649db6140038fc6a\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Update Device Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\":\"550bcdbf910c256e18759391\",\n        \"deviceName\" : \"Device3\",\n        \"connectionType\" : \"type1\",\n        \"ethernetState\" : true,\n        \"ethernetDevice\" : \"deviceC\",\n        \"ethernetIpType\" : \"ipTypeA\",\n        \"ethernetIpAddress\" : \"191.18.0.0\",\n        \"mask\" : \"mask string\",\n        \"gateway\" : \"gateWayA\",\n        \"dns1\" : \"dns1 string\",\n        \"dns2\" : \"dns2 string\",\n        \"wifiState\" : true,\n        \"wifiIpAddress\" : \"182.20.3.0\",\n        \"wifiName\" : \"wifiName\",\n        \"wifiOpenState\" : true,\n        \"enableCleanup\" : true,\n        \"timeOfExecution\" : \"time of execution\",\n        \"clearCache\" : true,\n        \"clearOfflineData\" : true,\n        \"clearSessions\" : true,\n        \"clearCookies\" : true,\n        \"clearHistory\" : true,\n        \"clearFormData\" : true,\n        \"clearPasswords\" : false,\n        \"enableScheduleBrowserRestart\" : false,\n        \"configureScheduleBrowserRestart\" : null,\n        \"showStatusOnBrowser\" : true,\n        \"timeIntervalToMonitorStatus\" : 20000,\n        \"timeIntervalToReport\" : 60000,\n        \"preventSuspension\" : false,\n        \"ftpHost\" : \"brightergy.com\",\n        \"ftpUsername\" : \"test\",\n        \"ftpPassword\" : \"test1234\",\n        \"durationToAttemptReconnection\" : 30000,\n        \"enableAutomaticUpdateNewVersion\" : true,\n        \"scheduleUpdateNewVersion\" : \"version\",\n        \"remoteUpdatePath\" : \"http://test.com\",\n        \"remoteApkPath\" : \"remote apk path\",\n        \"userEmail\" : \"dev.web@brightergy.com\",\n        \"userPassword\" : \"test1234\",\n        \"password\" : \"test1234\",\n        \"presentationId\" : \"545f2abe649db6140038fc6a\"\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/presentdevices/:deviceId"
      }
    ],
    "filename": "server/general/routes/apis/present-device-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/present/presentations/:presentationId/tags",
    "title": "Add Presentation TagBinding",
    "group": "Presentation",
    "name": "Add_TagBinding",
    "version": "1.0.0",
    "description": "<p>Add tagbinding to presentation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "tagBinding",
            "optional": false,
            "description": "<p>tagBind data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId : 545e61f0649db6140038fc61\n\"tagBinding\" :\n{\n    \"id\" : \"543824bf7174d62c1acad51b\",\n    \"tagType\" : \"DataLogger\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated presentation object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"\",\n        \"tagBindings\":[{\n            \"id\" : \"543824bd7174d62c1acad510\",\n            \"tagType\" : \"DataLogger\"\n        },\n        {\n            \"id\" : \"543824be7174d62c1acad517\",\n            \"tagType\" : \"DataLogger\"\n        }],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/tags"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/present/presentations/clone/:presentationId",
    "title": "Clone Presentation",
    "group": "Presentation",
    "name": "Clone_Presentation",
    "version": "1.0.0",
    "description": "<p>Clone presentation and retrieves the Id of new presentation.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId : 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>presentation id of newly created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n       \"success\": 1,\n       \"message\": \"5429d13f89c1849502287d5d\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/clone/:presentationId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/present/presentations",
    "title": "Create Presentation",
    "group": "Presentation",
    "name": "Create_Presentation",
    "version": "1.0.0",
    "description": "<p>Create/Retrieves the new presentation. Create new presentation                with default presentation values. However, Name and TemplateId should be specified.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of presentation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "templateId",
            "optional": false,
            "description": "<p>Template Id of presentation(this can be null). Not used for now</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nname : Test Present\ntemplateId : not used for now\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created presentation Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"\",\n        \"tagBindings\":[],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/present/presentations/widgets",
    "title": "Create Widget",
    "group": "Presentation",
    "name": "Create_Presentation_Widget",
    "version": "1.0.0",
    "description": "<p>Create presentation widget</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>data of widget</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"__v\" : 0,\n    \"availableWidgetId\" : \"54515da56109431200c5c1bc\",\n    \"presentation\" : {\n        \"_id\" : \"546b7ecb80f57514008590e1\",\n        \"__v\" : 0,\n        \"name\" : \"TEST\",\n        \"creatorRole\" : \"BP\",\n        \"parameters\" : {\n            \"endDate\" : null,\n            \"startDate\" : \"2014-11-17T22:00:00.000Z\",\n            \"normal2Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : null\n            },\n            \"normal1Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : null\n            },\n            \"subHeaderFont\" : {\n                \"visible\" : true,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : 0.9,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"f9d8ca\"\n            },\n            \"headerFont\" : {\n                \"visible\" : true,\n                \"label\" : \"Header\",\n                \"content\" : null,\n                \"size\" : 4,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"seventhColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"sixthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"fifthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"fourthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"tertiaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"secondaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : null\n            },\n            \"primaryColor\" : {\n                \"label\" : \"Title Background Color\",\n                \"isVisible\" : true,\n                \"color\" : null\n            },\n            \"backgroundColor\" : \"f2672a\"\n        },\n        \"tagBindings\" : [],\n        \"description\" : null,\n        \"creator\" : \"5458ee0341dbce5800f248c9\",\n        \"creatorName\" : \"Dev Webapp\",\n        \"reimbursementRate\" : null,\n        \"isTemplate\" : false,\n        \"IsNewPresentation\" : false,\n        \"titleView\" : false,\n        \"lastUpdatedView\" : false,\n        \"generatingSinceView\" : false,\n        \"systemSizeView\" : false,\n        \"systemSize\" : null,\n        \"webBox\" : null,\n        \"createdDate\" : \"2014-11-17T22:04:05.000Z\",\n        \"Longitude\" : null,\n        \"Logo\" : null,\n        \"Latitude\" : null,\n        \"awsAssetsKeyPrefix\" : \"aPDwMlyxH\"\n    },\n    \"parameters\" : {\n        \"widgetGraphCombineInverters\" : true,\n        \"widgetEnergyCombineInverters\" : true,\n        \"widgetEnergyInverter\" : null,\n        \"widgetEnergyEndDate\" : null,\n        \"widgetEnergyStartDate\" : null,\n        \"widgetEnergyDateRange\" : \"Month\",\n        \"widgetEnergyOrientation\" : \"Horizontal\",\n        \"widgetEnergyType\" : \"Cars Removed\",\n        \"widgetEnergyGreenhouseKilograms\" : false,\n        \"widgetEnergyCO2Kilograms\" : false,\n        \"widgetWeatherType\" : \"Minimal\",\n        \"widgetTextareaContent\" : null,\n        \"widgetURL\" : null,\n        \"widgetTotalEGinGasSaved\" : null,\n        \"widgetTotalEGinFewerVehicles\" : null,\n        \"widgetTotalEGin60WattBulbs\" : null,\n        \"widgetTotalCO2OffsetinTrees\" : null,\n        \"widgetSolarGenerationCombineInverters\" : true,\n        \"widgetSolarGenerationInverter\" : null,\n        \"widgetSolarGenerationOrientation\" : \"Vertical\",\n        \"widgetSolarGenerationEndDate\" : null,\n        \"widgetSolarGenerationStartDate\" : null,\n        \"widgetSolarGenerationDateRange\" : \"All\",\n        \"widgetSolarGenerationReimbursement\" : false,\n        \"widgetSolarGenerationCurrent\" : false,\n        \"widgetSolarGenerationkWh\" : true,\n        \"widgetIFrameUrl\" : null,\n        \"widgetHowDoesSolarWorkOverallDuration\" : 15,\n        \"widgetHowDoesSolarWorkStepTwoText\" : \"DC electricity from the solar panels travels to the\n            inverter where it is converted to AC electricity.\",\n        \"widgetHowDoesSolarWorkStepTwoDuration\" : 3,\n        \"widgetHowDoesSolarWorkStepThreeText\" : \"From the inverter, AC electricity passes to the\n            electric service panel (breaker box) and routed to power your school.\",\n        \"widgetHowDoesSolarWorkStepThreeDuration\" : 3,\n        \"widgetHowDoesSolarWorkStepOneText\" : \"Solar panels absorb sunlight and convert it to DC electricity.\",\n        \"widgetHowDoesSolarWorkStepOneDuration\" : 3,\n        \"widgetHowDoesSolarWorkStepFourText\" : \"When your solar system generates more power than your school\n            is consuming, excess electricity is routed to the power grid.\n            This earns credits on the school's bill (called net-metering).\",\n        \"widgetHowDoesSolarWorkStepFourDuration\" : 3,\n        \"widgetGraphMaxPowerChartType\" : \"false\",\n        \"widgetGraphMaxPower\" : true,\n        \"wIdgetGraphTemperatureChartType\" : \"bar\",\n        \"widgetGraphTemperature\" : false,\n        \"widgetGraphWeather\" : false,\n        \"widgetGraphBlockLabel\" : \"Charting Colors\",\n        \"widgetGraphInverter\" : null,\n        \"widgetGraphIrradianceChartType\" : \"bar\",\n        \"widgetGraphIrradiance\" : false,\n        \"widgetGraphHumidityChartType\" : \"bar\",\n        \"widgetGraphHumidity\" : false,\n        \"widgetGraphEndDate\" : null,\n        \"widgetGraphStartDate\" : null,\n        \"widgetGraphInterval\" : \"Daily\",\n        \"widgetGraphGenerationChartType\" : \"bar\",\n        \"widgetGraphGeneration\" : true,\n        \"widgetGraphDateRange\" : \"All\",\n        \"widgetGraphCurrentPowerChartType\" : \"bar\",\n        \"widgetGraphCurrentPower\" : false,\n        \"widgetBorderColor\" : \"28b1b4\",\n        \"widgetRandomColor\" : \"9bd3d0\",\n        \"duration\" : 20,\n        \"resizedOnTimeline\" : false,\n        \"endDate\" : \"2014-11-10T07:00:20.000Z\",\n        \"startDate\" : \"0:0\",\n        \"minimumCols\" : 2,\n        \"minimumRows\" : 2,\n        \"previousTimelineRowPosition\" : -1,\n        \"timelineRowPosition\" : 0,\n        \"rowPosition\" : 0,\n        \"rowCount\" : 7,\n        \"colPosition\" : 0,\n        \"colCount\" : 9,\n        \"transitionOut\" : null,\n        \"transitionIn\" : null,\n        \"backgroundImageVisible\" : true,\n        \"backgroundColorVisible\" : true,\n        \"backgroundImageLabel\" : \"Background Image\",\n        \"backgroundColorLabel\" : \"Body Background Color\",\n        \"backgroundImage\" : null,\n        \"backgroundColor\" : \"ffffff\",\n        \"normal2Font\" : {\n            \"visible\" : true,\n            \"label\" : \"Labels\",\n            \"content\" : null,\n            \"size\" : 1,\n            \"name\" : \"BentonSans, sans-serif\",\n            \"color\" : \"4d759e\"\n        },\n        \"normal1Font\" : {\n            \"visible\" : false,\n            \"label\" : null,\n            \"content\" : null,\n            \"size\" : null,\n            \"name\" : \"BentonSans, sans-serif\",\n            \"color\" : \"ffffff\"\n        },\n        \"subHeaderFont\" : {\n            \"visible\" : false,\n            \"label\" : null,\n            \"content\" : null,\n            \"size\" : null,\n            \"name\" : \"BentonSans, sans-serif\",\n            \"color\" : \"ffffff\"\n        },\n        \"headerFont\" : {\n            \"visible\" : true,\n            \"label\" : \"Title\",\n            \"content\" : null,\n            \"size\" : 1.5,\n            \"name\" : \"BentonSans, sans-serif\",\n            \"color\" : \"ffffff\"\n        },\n        \"seventhColor\" : {\n            \"label\" : \"Weather Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"18f20c\"\n        },\n        \"sixthColor\" : {\n            \"label\" : \"Max Power Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"d9e803\"\n        },\n        \"fifthColor\" : {\n            \"label\" : \"Current Power Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"0d4b75\"\n        },\n        \"fourthColor\" : {\n            \"label\" : \"Humidity Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"bf1fbf\"\n        },\n        \"tertiaryColor\" : {\n            \"label\" : \"Temperature Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"0d233a\"\n        },\n        \"secondaryColor\" : {\n            \"label\" : \"Generation Graph\",\n            \"isVisible\" : true,\n            \"color\" : \"5163ad\"\n        },\n        \"primaryColor\" : {\n            \"label\" : \"Title Background Color\",\n            \"isVisible\" : true,\n            \"color\" : \"98a3d0\"\n        }\n    },\n    \"icon\" : \"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HaVRnYThybVhmdWc\",\n    \"name\" : \"Graph\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated Presentation Widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/widgets"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/present/presentations/:presentationId",
    "title": "Delete Presentation",
    "group": "Presentation",
    "name": "Delete_Presentation",
    "version": "1.0.0",
    "description": "<p>Delete presention by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId : 546c887180f57514008590fc\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/present/presentations/widgets/:widgetId",
    "title": "Delete Widget",
    "group": "Presentation",
    "name": "Delete_Presentation_Widget",
    "version": "1.0.0",
    "description": "<p>Remove the presentation widget by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 546129bb6d303d4200a168e0\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/widgets/:widgetId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/present/presentations/:presentationId",
    "title": "Edit Presentation",
    "group": "Presentation",
    "name": "Edit_Presentation",
    "version": "1.0.0",
    "description": "<p>Edit presentation data with given new data. API can accepts only changed fields. however,                id and creatorRole is mandatory.<br/>Following fields can&#39;t be updated: <br/>     tagBindings <br/>     awsAssetsKeyPrefix <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>presentation data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n        \"_id\":\"545e61f0649db6140038fc61\",\n        \"creatorRole\" : \"BP\",\n        \"name\":\"Liberty Lofts Goes Solar updated\",\n        \"description\":null,\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n         \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsKeyPrefix\":\"aPDwMlyxH\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated presentation data object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations",
    "title": "Get All Presentations",
    "group": "Presentation",
    "name": "Get_All_Presentations",
    "version": "1.0.0",
    "description": "<p>Retreives the all presentations of currently logged in user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>presentation objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHdGtrd3dqMU5xaVU\",\n        \"tagBindings\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        }],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/widgets/available",
    "title": "Get Available Widgets",
    "group": "Presentation",
    "name": "Get_Available_Presentation_Widgets",
    "version": "1.0.0",
    "description": "<p>Retrieves the all available presentation widgets</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Widget Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"542ad52dd3a162b52c05f970\",\n        \"presentation\" : {\n            _id: \"5413af68b1c838ea73500109\",\n            creatorRole: \"BP\",\n            name: \"Barretts Elementary Goes Solar\",\n            __v: 9,\n            gDriveAssetsFolderId: \"0BwW4a4uizniHdGtrd3dqMU5xaVU\",\n            tagBindings: [{\n                tagType: \"Facility\",\n                id: \"543824bd7174d62c1acad50f\"\n            }],\n            parameters: {\n                endDate: null,\n                startDate: \"2014-09-12T21:00:00.000Z\",\n                normal2Font: {\n                    visible: false,\n                    label: null,\n                    content: null,\n                    size: null,\n                    name: \"BentonSans, sans-serif\",\n                    color: null\n                },\n                normal1Font: {\n                    visible: false,\n                    label: null,\n                    content: null,\n                    size: null,\n                    name: \"BentonSans, sans-serif\",\n                    color: null\n                },\n                subHeaderFont: {\n                    visible: true,\n                    label: null,\n                    content: null,\n                    size: 0.9,\n                    name: \"BentonSans, sans-serif\",\n                    color: \"f9d8ca\"\n                },\n                headerFont: {\n                    visible: true,\n                    label: \"Header\",\n                    content: null,\n                    size: 4,\n                    name: \"BentonSans, sans-serif\",\n                    color: \"ffffff\"\n                },\n                seventhColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                sixthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                fifthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                fourthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                tertiaryColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                secondaryColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                primaryColor: {\n                    label: \"Title Background Color\",\n                    isVisible: true,\n                    color: null\n                },\n                backgroundColor: \"f2672a\"\n            },\n            children: [ ],\n            parents: [ ],\n            description: null,\n            creator: \"54135f90c6ab7c241e28095e\",\n            creatorName: \"Daniel Keith\",\n            reimbursementRate: 0.08,\n            isTemplate: true,\n            IsNewPresentation: false,\n            titleView: true,\n            lastUpdatedView: true,\n            generatingSinceView: true,\n            systemSizeView: true,\n            systemSize: 25.2,\n            webBox: \"wb150115159\",\n            createdDate: \"2014-09-12T21:04:11.000Z\",\n            Longitude: -90.4724,\n            Logo: null,\n            Latitude: 38.5763,\n            awsAssetsFolderName: null\n        },\n        \"availableWidgetId\" : \"542449b67ced133822b9b0c2\",\n        \"parameters\" : {\n            \"widgetGraphCombineInverters\" : true,\n            \"widgetEnergyCombineInverters\" : true,\n            \"widgetEnergyInverter\" : null,\n            \"widgetEnergyEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetEnergyStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetEnergyDateRange\" : \"Month\",\n            \"widgetEnergyOrientation\" : \"Horizontal\",\n            \"widgetEnergyType\" : \"Cars Removed\",\n            \"widgetEnergyGreenhouseKilograms\" : false,\n            \"widgetEnergyCO2Kilograms\" : false,\n            \"widgetWeatherType\" : \"Minimal\",\n            \"widgetTextareaContent\" : null,\n            \"widgetURL\" : \"http://brightergy.com/cms/wp-content/uploads/2014/09/JohnFKennedy_BV_1.jpg\",\n            \"widgetTotalEGinGasSaved\" : null,\n            \"widgetTotalEGinFewerVehicles\" : null,\n            \"widgetTotalEGin60WattBulbs\" : null,\n            \"widgetTotalCO2OffsetinTrees\" : null,\n            \"widgetSolarGenerationCombineInverters\" : true,\n            \"widgetSolarGenerationInverter\" : null,\n            \"widgetSolarGenerationOrientation\" : \"Vertical\",\n            \"widgetSolarGenerationEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetSolarGenerationStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetSolarGenerationDateRange\" : \"All\",\n            \"widgetSolarGenerationReimbursement\" : false,\n            \"widgetSolarGenerationCurrent\" : false,\n            \"widgetSolarGenerationkWh\" : true,\n            \"widgetIFrameUrl\" : null,\n            \"widgetHowDoesSolarWorkOverallDuration\" : 15,\n            \"widgetHowDoesSolarWorkStepTwoText\" : \"DC electricity from the solar panels travels to the\n                inverter where it is converted to AC electricity.\",\n            \"widgetHowDoesSolarWorkStepTwoDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepThreeText\" : \"From the inverter, AC electricity passes to\n                the electric service panel (breaker box) and routed to power your school.\",\n            \"widgetHowDoesSolarWorkStepThreeDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepOneText\" : \"Solar panels absorb sunlight and convert it to DC electricity.\",\n            \"widgetHowDoesSolarWorkStepOneDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepFourText\" : \"When your solar system generates more power\n                than your school is consuming, excess electricity is routed to the power grid.\n                This earns credits on the school's bill (called net-metering).\",\n            \"widgetHowDoesSolarWorkStepFourDuration\" : 3,\n            \"widgetGraphMaxPowerChartType\" : \"false\",\n            \"widgetGraphMaxPower\" : false,\n            \"wIdgetGraphTemperatureChartType\" : \"bar\",\n            \"widgetGraphTemperature\" : false,\n            \"widgetGraphWeather\" : false,\n            \"widgetGraphBlockLabel\" : null,\n            \"widgetGraphInverter\" : null,\n            \"widgetGraphIrradianceChartType\" : \"bar\",\n            \"widgetGraphIrradiance\" : false,\n            \"widgetGraphHumidityChartType\" : \"bar\",\n            \"widgetGraphHumidity\" : false,\n            \"widgetGraphEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetGraphStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetGraphInterval\" : \"Daily\",\n            \"widgetGraphGenerationChartType\" : \"bar\",\n            \"widgetGraphGeneration\" : true,\n            \"widgetGraphDateRange\" : \"Month\",\n            \"widgetGraphCurrentPowerChartType\" : \"bar\",\n            \"widgetGraphCurrentPower\" : false,\n            \"widgetBorderColor\" : \"28b1b4\",\n            \"widgetRandomColor\" : \"9bd3d0\",\n            \"duration\" : 10,\n            \"resizedOnTimeline\" : false,\n            \"endDate\" : \"2014-09-22T15:01:05.000Z\",\n            \"startDate\" : \"0:55\",\n            \"minimumCols\" : null,\n            \"minimumRows\" : null,\n            \"previousTimelineRowPosition\" : -1,\n            \"timelineRowPosition\" : 0,\n            \"rowPosition\" : 0,\n            \"rowCount\" : 7,\n            \"colPosition\" : 0,\n            \"colCount\" : 16,\n            \"transitionOut\" : null,\n            \"transitionIn\" : null,\n            \"backgroundImageVisible\" : false,\n            \"backgroundColorVisible\" : false,\n            \"backgroundImageLabel\" : null,\n            \"backgroundColorLabel\" : null,\n            \"backgroundImage\" : \"\",\n            \"backgroundColor\" : \"FFFFFF\",\n            \"normal2Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"normal1Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"subHeaderFont\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"headerFont\" : {\n                \"visible\" : true,\n                \"label\" : \"Title\",\n                \"content\" : null,\n                \"size\" : 1.5,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"seventhColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"sixthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"fifthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"fourthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"tertiaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"secondaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"eb617b\"\n            },\n            \"primaryColor\" : {\n                \"label\" : \"Title Background Color\",\n                \"isVisible\" : false,\n                \"color\" : \"fbb3bf\"\n            }\n        },\n        \"icon\" : \"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HM0tmb3RDQ2hBYTA\",\n        \"name\" : \"Image\",\n        \"__v\" : 0\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/widgets/available"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/editors",
    "title": "Get Pesentation Editors",
    "group": "Presentation",
    "name": "Get_Pesentation_Editors",
    "version": "1.0.0",
    "description": "<p>Retrieves the users who can edit presentation</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user data objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/editors"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/timeline",
    "title": "Get Pesentation Timeline",
    "group": "Presentation",
    "name": "Get_Pesentation_Timeline",
    "version": "1.0.0",
    "description": "<p>Retrieves the timeline data of presentation.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>timeline data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"timeline\":{\n            \"headline\":\"Barretts Elementary Goes Solar\",\n            \"text\":\"Barretts Elementary Goes Solar\",\n            \"type\":\"default\",\n            \"startDate\":\"2014,9,12,21,0,0\",\n            \"date\":[{\n                \"startDate\":\"2014,9,12,22,0,0\",\n                \"endDate\":\"2014,9,12,22,0,10\",\n                \"widgetId\":\"5415c0fdb1c838ea73500120\",\n                \"availableWidgetId\":\"541357ee01d4609c1ff24bb5\",\n                \"headline\":\"Energy Equivalencies\",\n                \"icon\":\"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HWWFYNklUVXU4UFk\",\n                \"rowPosition\":1,\n                \"colPosition\":6,\n                \"backgroundColor\":\"dee9a5\",\n                \"timelineRowPosition\":2,\n                \"previousTimelineRowPosition\":-1,\n                \"resizedOnTimeline\":false\n            },{\n                \"startDate\":\"2014,9,12,22,0,0\",\n                \"endDate\":\"2014,9,12,22,0,10\",\n                \"widgetId\":\"541759a6a90e8de146a10bfd\",\n                \"availableWidgetId\":\"541357ee01d4609c1ff24bb8\",\n                \"headline\":\"Image\",\n                \"icon\":\"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HM0tmb3RDQ2hBYTA\",\n                \"rowPosition\":3,\n                \"colPosition\":10,\n                \"backgroundColor\":\"fbb3bf\",\n                \"timelineRowPosition\":1,\n                \"previousTimelineRowPosition\":-1,\n                \"resizedOnTimeline\":false\n            }]\n        }\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/timeline"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId",
    "title": "Get Presentation",
    "group": "Presentation",
    "name": "Get_Presentation",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation data by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId : 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Presentation data object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHdGtrd3dqMU5xaVU\",\n        \"tagBindings\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        }],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/energydata",
    "title": "Get Presentation Energy Data",
    "group": "Presentation",
    "name": "Get_Presentation_Energy_Data",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation energy data by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Presentation energy data object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n     }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/energydata"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/widgets/energyequivalencies/:widgetId",
    "title": "             Get Energy Equivalencies Widget",
    "group": "Presentation",
    "name": "Get_Presentation_Energy_Equivalencies_Widget",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation energy equivalencies widget by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 546b7fbe80f57514008590e8\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Energy equivalencies widget object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"homeElectricityUse\":0,\n        \"gallonsOfGasoline\":0,\n        \"passengerVehiclesPerYear\":0,\n        \"barrelsOfOilConsumed\":0,\n        \"tankerTrucksFilledWithGasoline\":0,\n        \"homeEnergyUse\":0,\n        \"numberOfTreeSeedlingsGrownFor10Years\":0,\n        \"acresOfUSForestsStoringCarbonForOneYear\":0,\n        \"acresOfUSForestPreservedFromConversionToCropland\":0,\n        \"propaneCylindersUsedForHomeBarbecues\":0,\n        \"railcarsOfCoalburned\":0,\n        \"tonsOfWasteRecycledInsteadOfLandfilled\":0,\n        \"coalFiredPowerPlantEmissionsForOneYear\":0,\n        \"greenhouseEmissionsInKilograms\":0,\n        \"co2AvoidedInKilograms\":0\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/widgets/energyequivalencies/:widgetId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/widgets/graph/:widgetId",
    "title": "Get Graph Widget",
    "group": "Presentation",
    "name": "Get_Presentation_Graph_Widget",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation graph widget by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 546128a66d303d4200a168d9\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Widget Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"yAxis\":[{\n            \"index\":0,\n            \"opposite\":false,\n            \"title\":{\n                \"text\":\"Generation\",\n                \"style\":{\n                    \"fontSize\":\"14px\"\n                }\n            }\n        },{\n            \"index\":1,\n            \"opposite\":true,\n            \"title\":{\n                \"text\":\"Max Power\",\n                \"style\":{\n                    \"fontSize\":\"14px\"\n                }\n            }\n        }],\n        \"xAxis\":{\n            \"type\":\"datetime\",\n            \"dateTimeLabelFormats\":{\n                \"year\":\"%Y\",\n                \"week\":\"%Y<br/>%m-%d\",\n                \"second\":\"%Y-%m-%d<br/>%H:%M:%S\",\n                \"month\":\"%Y-%m\",\n                \"minute\":\"%Y-%m-%d<br/>%H:%M\",\n                \"hour\":\"%Y-%m-%d<br/>%H:%M\",\n                \"day\":\"%Y<br/>%m-%d\"\n            }\n        },\n        \"tooltip\":{\n            \"useHTML\":true,\n            \"shared\":true,\n            \"pointFormat\":\"<p style=\\\"text-align:center\\\"><span style=\\\"color:{series.color}\\\">\n                {series.name}</span>: <b>{point.y:.2f}</b></p>\",\n            \"headerFormat\":\"{point.key}<br/>\"\n        },\n        \"title\":{\n            \"text\":null\n        },\n        \"series\":[{\n            \"type\":\"column\",\n            \"yAxis\":0,\n            \"name\":\"Generation\",\n            \"data\":[]\n        },{\n            \"type\":\"spline\",\n            \"yAxis\":1,\n            \"name\":\"Max Power\",\n            \"data\":[]\n        }],\n        \"plotOptions\":{\n            \"spline\":{\n                \"marker\":{\n                    \"radius\":4,\n                    \"lineWidth\":1,\n                    \"lineColor\":\"#666666\"\n                }\n            },\n            \"series\":{\n                \"turboThreshold\":40000\n            }\n        },\n        \"legend\":{\n            \"enabled\":false\n        },\n        \"exporting\":{\n            \"enabled\":false\n        },\n        \"credits\":{\n            \"enabled\":false\n        }\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/widgets/graph/:widgetId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/widgets/solargeneration/:widgetId",
    "title": "Get Solar Widget",
    "group": "Presentation",
    "name": "Get_Presentation_Solar_Widget",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation solar widget data by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nwidgetId : 546c18d580f57514008590f7\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Solar Widget object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"kWhGenerated\":0,\n        \"currentGeneration\":0,\n        \"reimbursement\":0,\n        \"startDate\":null,\n        \"endDate\":null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/widgets/solargeneration/:widgetId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/templates",
    "title": "Get Presentation Templates",
    "group": "Presentation",
    "name": "Get_Presentation_Tempaltes",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation Templates. These are the presentaions which the is_template field is true.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>presentation template objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"0BwW4a4uizniHdGtrd3dqMU5xaVU\",\n        \"tagBindings\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        }],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/templates"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/widgets/weatherdata",
    "title": "Get Weather Widget data",
    "group": "Presentation",
    "name": "Get_Presentation_Weather_Widget_data",
    "version": "1.0.0",
    "description": "<p>Retrieves the presentation weather widget by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nobjectId : 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n     }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/widgets/weatherdata"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/:presentationId/widgets",
    "title": "Get Widgets",
    "group": "Presentation",
    "name": "Get_Presentation_Widgets",
    "version": "1.0.0",
    "description": "<p>Retrieves the widgets data of presentation</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\npresentationId : 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Widget Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\" : \"542ad52dd3a162b52c05f970\",\n        \"presentation\" : {\n            _id: \"5413af68b1c838ea73500109\",\n            creatorRole: \"BP\",\n            name: \"Barretts Elementary Goes Solar\",\n            __v: 9,\n            gDriveAssetsFolderId: \"0BwW4a4uizniHdGtrd3dqMU5xaVU\",\n            tagBindings: [{\n                tagType: \"Facility\",\n                id: \"543824bd7174d62c1acad50f\"\n            }],\n            parameters: {\n                endDate: null,\n                startDate: \"2014-09-12T21:00:00.000Z\",\n                normal2Font: {\n                    visible: false,\n                    label: null,\n                    content: null,\n                    size: null,\n                    name: \"BentonSans, sans-serif\",\n                    color: null\n                },\n                normal1Font: {\n                    visible: false,\n                    label: null,\n                    content: null,\n                    size: null,\n                    name: \"BentonSans, sans-serif\",\n                    color: null\n                },\n                subHeaderFont: {\n                    visible: true,\n                    label: null,\n                    content: null,\n                    size: 0.9,\n                    name: \"BentonSans, sans-serif\",\n                    color: \"f9d8ca\"\n                },\n                headerFont: {\n                    visible: true,\n                    label: \"Header\",\n                    content: null,\n                    size: 4,\n                    name: \"BentonSans, sans-serif\",\n                    color: \"ffffff\"\n                },\n                seventhColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                sixthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                fifthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                fourthColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                tertiaryColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                secondaryColor: {\n                    label: null,\n                    isVisible: false,\n                    color: null\n                },\n                primaryColor: {\n                    label: \"Title Background Color\",\n                    isVisible: true,\n                    color: null\n                },\n                backgroundColor: \"f2672a\"\n            },\n            children: [ ],\n            parents: [ ],\n            description: null,\n            creator: \"54135f90c6ab7c241e28095e\",\n            creatorName: \"Daniel Keith\",\n            reimbursementRate: 0.08,\n            isTemplate: true,\n            IsNewPresentation: false,\n            titleView: true,\n            lastUpdatedView: true,\n            generatingSinceView: true,\n            systemSizeView: true,\n            systemSize: 25.2,\n            webBox: \"wb150115159\",\n            createdDate: \"2014-09-12T21:04:11.000Z\",\n            Longitude: -90.4724,\n            Logo: null,\n            Latitude: 38.5763,\n            awsAssetsFolderName: null\n        },\n        \"availableWidgetId\" : \"542449b67ced133822b9b0c2\",\n        \"parameters\" : {\n            \"widgetGraphCombineInverters\" : true,\n            \"widgetEnergyCombineInverters\" : true,\n            \"widgetEnergyInverter\" : null,\n            \"widgetEnergyEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetEnergyStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetEnergyDateRange\" : \"Month\",\n            \"widgetEnergyOrientation\" : \"Horizontal\",\n            \"widgetEnergyType\" : \"Cars Removed\",\n            \"widgetEnergyGreenhouseKilograms\" : false,\n            \"widgetEnergyCO2Kilograms\" : false,\n            \"widgetWeatherType\" : \"Minimal\",\n            \"widgetTextareaContent\" : null,\n            \"widgetURL\" : \"http://brightergy.com/cms/wp-content/uploads/2014/09/JohnFKennedy_BV_1.jpg\",\n            \"widgetTotalEGinGasSaved\" : null,\n            \"widgetTotalEGinFewerVehicles\" : null,\n            \"widgetTotalEGin60WattBulbs\" : null,\n            \"widgetTotalCO2OffsetinTrees\" : null,\n            \"widgetSolarGenerationCombineInverters\" : true,\n            \"widgetSolarGenerationInverter\" : null,\n            \"widgetSolarGenerationOrientation\" : \"Vertical\",\n            \"widgetSolarGenerationEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetSolarGenerationStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetSolarGenerationDateRange\" : \"All\",\n            \"widgetSolarGenerationReimbursement\" : false,\n            \"widgetSolarGenerationCurrent\" : false,\n            \"widgetSolarGenerationkWh\" : true,\n            \"widgetIFrameUrl\" : null,\n            \"widgetHowDoesSolarWorkOverallDuration\" : 15,\n            \"widgetHowDoesSolarWorkStepTwoText\" : \"DC electricity from the solar panels travels to\n                the inverter where it is converted to AC electricity.\",\n            \"widgetHowDoesSolarWorkStepTwoDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepThreeText\" : \"From the inverter, AC electricity passes to\n                the electric service panel (breaker box) and routed to power your school.\",\n            \"widgetHowDoesSolarWorkStepThreeDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepOneText\" : \"Solar panels absorb sunlight and convert it to DC electricity.\",\n            \"widgetHowDoesSolarWorkStepOneDuration\" : 3,\n            \"widgetHowDoesSolarWorkStepFourText\" : \"When your solar system generates more power than your school\n                is consuming, excess electricity is routed to the power grid.\n                This earns credits on the school's bill (called net-metering).\",\n            \"widgetHowDoesSolarWorkStepFourDuration\" : 3,\n            \"widgetGraphMaxPowerChartType\" : \"false\",\n            \"widgetGraphMaxPower\" : false,\n            \"wIdgetGraphTemperatureChartType\" : \"bar\",\n            \"widgetGraphTemperature\" : false,\n            \"widgetGraphWeather\" : false,\n            \"widgetGraphBlockLabel\" : null,\n            \"widgetGraphInverter\" : null,\n            \"widgetGraphIrradianceChartType\" : \"bar\",\n            \"widgetGraphIrradiance\" : false,\n            \"widgetGraphHumidityChartType\" : \"bar\",\n            \"widgetGraphHumidity\" : false,\n            \"widgetGraphEndDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetGraphStartDate\" : \"2014-09-30T11:07:00.000Z\",\n            \"widgetGraphInterval\" : \"Daily\",\n            \"widgetGraphGenerationChartType\" : \"bar\",\n            \"widgetGraphGeneration\" : true,\n            \"widgetGraphDateRange\" : \"Month\",\n            \"widgetGraphCurrentPowerChartType\" : \"bar\",\n            \"widgetGraphCurrentPower\" : false,\n            \"widgetBorderColor\" : \"28b1b4\",\n            \"widgetRandomColor\" : \"9bd3d0\",\n            \"duration\" : 10,\n            \"resizedOnTimeline\" : false,\n            \"endDate\" : \"2014-09-22T15:01:05.000Z\",\n            \"startDate\" : \"0:55\",\n            \"minimumCols\" : null,\n            \"minimumRows\" : null,\n            \"previousTimelineRowPosition\" : -1,\n            \"timelineRowPosition\" : 0,\n            \"rowPosition\" : 0,\n            \"rowCount\" : 7,\n            \"colPosition\" : 0,\n            \"colCount\" : 16,\n            \"transitionOut\" : null,\n            \"transitionIn\" : null,\n            \"backgroundImageVisible\" : false,\n            \"backgroundColorVisible\" : false,\n            \"backgroundImageLabel\" : null,\n            \"backgroundColorLabel\" : null,\n            \"backgroundImage\" : \"\",\n            \"backgroundColor\" : \"FFFFFF\",\n            \"normal2Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"normal1Font\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"subHeaderFont\" : {\n                \"visible\" : false,\n                \"label\" : null,\n                \"content\" : null,\n                \"size\" : null,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"headerFont\" : {\n                \"visible\" : true,\n                \"label\" : \"Title\",\n                \"content\" : null,\n                \"size\" : 1.5,\n                \"name\" : \"BentonSans, sans-serif\",\n                \"color\" : \"ffffff\"\n            },\n            \"seventhColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"sixthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"fifthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"fourthColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"tertiaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"ffffff\"\n            },\n            \"secondaryColor\" : {\n                \"label\" : null,\n                \"isVisible\" : false,\n                \"color\" : \"eb617b\"\n            },\n            \"primaryColor\" : {\n                \"label\" : \"Title Background Color\",\n                \"isVisible\" : false,\n                \"color\" : \"fbb3bf\"\n            }\n        },\n        \"icon\" : \"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HM0tmb3RDQ2hBYTA\",\n        \"name\" : \"Image\",\n        \"__v\" : 0\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/:presentationId/widgets"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/present/presentations/last",
    "title": "Get Last Updated Presentation Id",
    "group": "Presentation",
    "name": "Last_Updated_Presentation_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the last updated presentation Id.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>presentation Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":\"5422debd68f461c84a8eb76f\"\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/last"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/present/presentation/:presentationId/tags/:tagId",
    "title": "Remove Presentation Tagbinding",
    "group": "Presentation",
    "name": "Remove_Tagbinding",
    "version": "1.0.0",
    "description": "<p>Remove tagbinding from presentation and retrieves the updated presentation data.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458afc6fe540a120074c20f\npresentationId : 545e61f0649db6140038fc61\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated presentation object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\":\"5413af68b1c838ea73500109\",\n        \"creatorRole\":\"BP\",\n        \"name\":\"Barretts Elementary Goes Solar\",\n        \"__v\":9,\n        \"gDriveAssetsFolderId\":\"\",\n        \"tagBindings\":[{\n            \"id\" : \"543824bd7174d62c1acad510\",\n            \"tagType\" : \"DataLogger\"\n        }],\n        \"parameters\":{\n            \"endDate\":null,\n            \"startDate\":\"2014-09-12T21:00:00.000Z\",\n            \"normal2Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"normal1Font\":{\n                \"visible\":false,\n                \"label\":null,\n                \"content\":null,\n                \"size\":null,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":null\n            },\n            \"subHeaderFont\":{\n                \"visible\":true,\n                \"label\":null,\n                \"content\":null,\n                \"size\":0.9,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"f9d8ca\"\n            },\n            \"headerFont\":{\n                \"visible\":true,\n                \"label\":\"Header\",\n                \"content\":null,\n                \"size\":4,\n                \"name\":\"BentonSans, sans-serif\",\n                \"color\":\"ffffff\"\n            },\n            \"seventhColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"sixthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fifthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"fourthColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"tertiaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"secondaryColor\":{\n                \"label\":null,\n                \"isVisible\":false,\n                \"color\":null\n            },\n            \"primaryColor\":{\n                \"label\":\"Title Background Color\",\n                \"isVisible\":true,\n                \"color\":null\n            },\n            \"backgroundColor\":\"f2672a\"\n        },\n        \"children\":[],\n        \"parents\":[],\n        \"description\":null,\n        \"creator\":\"54135f90c6ab7c241e28095e\",\n        \"creatorName\":\"Daniel Keith\",\n        \"reimbursementRate\":0.08,\n        \"isTemplate\":true,\n        \"IsNewPresentation\":false,\n        \"titleView\":true,\n        \"lastUpdatedView\":true,\n        \"generatingSinceView\":true,\n        \"systemSizeView\":true,\n        \"systemSize\":25.2,\n        \"webBox\":\"wb150115159\",\n        \"createdDate\":\"2014-09-12T21:04:11.000Z\",\n        \"Longitude\":-90.4724,\n        \"Logo\":null,\n        \"Latitude\":38.5763,\n        \"awsAssetsFolderName\":null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentation/:presentationId/tags/:tagId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/present/presentations/widgets/:widgetId",
    "title": "Update Widget",
    "group": "Presentation",
    "name": "Update_Presentation_Widget",
    "version": "1.0.0",
    "description": "<p>Edit presentation widget. API can accept only changed fields. However id is mandatory.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>data of widget</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"_id\" : \"546edf7353dcae50064f838c\",\n    \"icon\" : \"https://docs.google.com/a/brightergy.com/uc?id=0B3-lYVkYUF8HaVRnYThybVhmdWc\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated Presentation Widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/present/presentations/widgets/:widgetId"
      }
    ],
    "filename": "server/bl-brighter-view/routes/apis/presentation-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/salesforce/projects",
    "title": "Get All SalesForce Projects",
    "group": "Salesforce",
    "name": "Get_All_SalesForce_Projects",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of salesforce projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>SalesForce Project Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"projectId\":\"a06C000000lXJ9jIAG\",\n        \"name\":\"WestCountyEMSandFireProtectionDistrict-Manchester-STL\",\n        \"friendlyName\":null\n    },\n    {\n        \"projectId\":\"a06C000000lXJ9oIAG\",\n        \"name\":\"WestCountyEMSandFireProtectionDistrict-Clayton-STL\",\n        \"friendlyName\":null\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/salesforce/projects"
      }
    ],
    "filename": "server/general/routes/apis/salesforce-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/salesforce/accounts/:findNameMask",
    "title": "Get SFDC Accounts",
    "group": "Salesforce",
    "name": "Get_SFDC_Accounts",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of salesforce account</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Account Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"webSite\":null,\n        \"tickerSymbol\":null,\n        \"shippingStreet\":null,\n        \"shippingState\":null,\n        \"shippingPostalCode\":null,\n        \"shippingCountry\":null,\n        \"shippingCity\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001e000000NXto1AAD\",\n        \"email\":null,\n        \"dunsNumber\":null,\n        \"contacts\":[],\n        \"companyName\":\"Political Contacts\",\n        \"billingStreet\":null,\n        \"billingState\":null,\n        \"billingPostalCode\":null,\n        \"billingCountry\":null,\n        \"billingCity\":null,\n        \"accountType\":\"Political\",\n        \"accountId\":\"001e000000NXto1AAD\"\n    },{\n        \"webSite\":null,\n        \"tickerSymbol\":null,\n        \"shippingStreet\":null,\n        \"shippingState\":null,\n        \"shippingPostalCode\":null,\n        \"shippingCountry\":null,\n        \"shippingCity\":null,\n        \"sfdcAccountURL\":\"https://cs15.salesforce.com/001e000000PNy6JAAT\",\n        \"email\":\"berckyt@gmail.com\",\n        \"dunsNumber\":null,\n        \"contacts\":[],\n        \"companyName\":\"Ilya Shekhurin Test1\",\n        \"billingStreet\":null,\n        \"billingState\":null,\n        \"billingPostalCode\":null,\n        \"billingCountry\":null,\n        \"billingCity\":null,\n        \"accountType\":null,\n        \"accountId\":\"001e000000PNy6JAAT\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/salesforce/accounts/:findNameMask"
      }
    ],
    "filename": "server/general/routes/apis/salesforce-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/salesforce/utilityproviders/:findNameMask",
    "title": "Get Utility Providers",
    "group": "Salesforce",
    "name": "Get_Utility_Providers",
    "version": "1.0.0",
    "description": "<p>Retrieves the list of utility providers</p>",
    "examples": [
      {
        "title": " findNameMask : MO - Mansfield Municipal Utilities",
        "content": " findNameMask : MO - Mansfield Municipal Utilities\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Utility Provider Objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"name\":\"MO - M and A Electric Power Cooperative\",\n        \"score\":6\n    },{\n        \"name\":\"MO - Independence Power and Light\",\n        \"score\":1\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/salesforce/utilityproviders/:findNameMask"
      }
    ],
    "filename": "server/general/routes/apis/salesforce-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/sociallogin/accounts/:userId",
    "title": "get User social accounts",
    "group": "Social_login",
    "name": "Get_user_linked_social_accounts",
    "version": "1.0.0",
    "description": "<p>Perfom mobile social login</p>",
    "examples": [
      {
        "title": " userId : 54621cd2349cc84500dee9ea",
        "content": " userId : 54621cd2349cc84500dee9ea\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user object with api token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": [\n     {\n         \"provider\": \"google\",\n         \"displayName\": \"Ilya Shekhurin\",\n         \"profileUrl\": \"https://plus.google.com/110973111369916090366\"\n     },\n     {\n         \"provider\": \"github\",\n         \"displayName\": \"Ilya Shekhurin\",\n         \"profileUrl\": \"https://github.com/Brightergy-IlyaShekhurin\"\n     }\n ]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/sociallogin/accounts/:userId"
      }
    ],
    "filename": "server/general/routes/apis/social-login-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/sociallogin/mobile",
    "title": "Perform mobile social login",
    "group": "Social_login",
    "name": "Perfom_mobile_social_login",
    "version": "1.0.0",
    "description": "<p>Perfom mobile social login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request:",
        "content": "Example request:\nbody\n{\n    \"connection_token\": \"b3ec9ea3-eb43-4dd0-9730-dca1648ebcdb\",\n    \"nonce\": \"6ba7b810-9dad-11d1-80b4-00c04fd430c8\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user object with api token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\": 1,\n \"message\": {\n \"user\": {\n     \"_id\": \"54621cd2349cc84500dee9ea\",\n         \"firstName\": \"Ilya\",\n         \"lastName\": \"Shekhurin\",\n         \"email\": \"ilya.shekhurin@brightergy.com\",\n         \"emailUser\": \"ilya.shekhurin\",\n         \"emailDomain\": \"brightergy.com\",\n         \"accounts\": [\n         \"546b32f580f57514008590cf\"\n     ],\n         \"accessibleTags\": [],\n         \"profilePictureUrl\": \"/assets/img/icon_SF_large.png\",\n         \"sfdcContactId\": null,\n         \"defaultApp\": null,\n         \"apps\": [],\n         \"previousEditedDashboardId\": \"5461363bdfef7c4800146f4b\",\n         \"lastEditedDashboardId\": \"54943e3669df363300bc331e\",\n         \"previousEditedPresentation\": \"549194c200e34b15006f2db2\",\n         \"lastEditedPresentation\": \"545e61f0649db6140038fc61\",\n         \"role\": \"BP\",\n         \"enphaseUserId\": \"4d6a49784e7a67790a\",\n         \"socialToken\": \"a0c53f1a-0486-4f58-9c9e-271a8c24d0c7\",\n         \"phone\": null,\n         \"middleName\": \"\",\n         \"__v\": 107,\n         \"collections\": [],\n         \"name\": \"Ilya Shekhurin\",\n         \"sfdcContactURL\": null,\n         \"id\": \"54621cd2349cc84500dee9ea\"\n },\n \"token\": \"9e9e8510-b1ea-11e4-a6da-0d1b734836b9\"\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/sociallogin/mobile"
      }
    ],
    "filename": "server/general/routes/apis/social-login-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/sociallogin",
    "title": "Perform web social login",
    "group": "Social_login",
    "name": "Perfom_web_social_login",
    "version": "1.0.0",
    "description": "<p>Perfom web social login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "redirect",
            "optional": false,
            "description": "<p>user to app</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/sociallogin"
      }
    ],
    "filename": "server/general/routes/apis/social-login-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/tags/rules",
    "title": "Create Tag Rule",
    "group": "Tag_Rules",
    "name": "Create_Tag_Rule",
    "version": "1.0.0",
    "description": "<p>Create tag rule</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>New tag rule data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"_id\" : \"546d92ee8afb973408dc30cd\",\n    \"tagType\" : \"MetricTest\",\n    \"creatorRole\" : \"BP\",\n    \"creator\" : \"5416f4647fd9bfec17c6253d\",\n    \"allowedParentTagTypes\" : [ \n        \"Sensor\"\n    ],\n    \"allowedChildrenTagTypes\" : [],\n    \"__v\" : 0\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created Tag rule object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\":\"5446a9cc327d8a881f891a8b\",\n        \"tagType\":\"Metric\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"Sensor\"],\n        \"allowedChildrenTagTypes\":[],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/rules"
      }
    ],
    "filename": "server/general/routes/apis/tag-rule-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/tags/rules/:ruleId",
    "title": "Delete Tag Rule",
    "group": "Tag_Rules",
    "name": "Delete_Tag_Rule",
    "version": "1.0.0",
    "description": "<p>Remove tag rule object by Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nruleId : 546d92ee8afb973408dc30cd\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/rules/:ruleId"
      }
    ],
    "filename": "server/general/routes/apis/tag-rule-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/tags/rules/:ruleId",
    "title": "Edit Tag Rule",
    "group": "Tag_Rules",
    "name": "Edit_Tag_Rule",
    "version": "1.0.0",
    "description": "<p>Edit tag rule by Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>tag rule data with new data.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nruleId : 546d92ee8afb973408dc30cd\nbody\n{\n    \"_id\" : \"546d92ee8afb973408dc30cd\",\n    \"tagType\" : \"MetricTest\",\n    \"creatorRole\" : \"BP\",\n    \"creator\" : \"5416f4647fd9bfec17c6253d\",\n    \"allowedParentTagTypes\" : [ \n        \"Sensor\"\n    ],\n    \"allowedChildrenTagTypes\" : [],\n    \"__v\" : 0\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated Tag rule object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\":\"5446a9cc327d8a881f891a8b\",\n        \"tagType\":\"Metric\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"Sensor\"],\n        \"allowedChildrenTagTypes\":[],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/rules/:ruleId"
      }
    ],
    "filename": "server/general/routes/apis/tag-rule-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/tags/rules",
    "title": "Get Tag Rules",
    "group": "Tag_Rules",
    "name": "Get_Tag_Rules",
    "version": "1.0.0",
    "description": "<p>Retrieves the tag rules list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Tag rule objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"5446a9cc327d8a881f891a88\",\n        \"tagType\":\"Facility\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"None\"],\n        \"allowedChildrenTagTypes\":[\"DataLogger\"],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    },{\n        \"_id\":\"5446a9cc327d8a881f891a89\",\n        \"tagType\":\"DataLogger\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"Facility\"],\n        \"allowedChildrenTagTypes\":[\"Sensor\"],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    },{\n        \"_id\":\"5446a9cc327d8a881f891a8a\",\n        \"tagType\":\"Sensor\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"DataLogger\"],\n        \"allowedChildrenTagTypes\":[\"Metric\"],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    },{\n        \"_id\":\"5446a9cc327d8a881f891a8b\",\n        \"tagType\":\"Metric\",\n        \"creatorRole\":\"BP\",\n        \"creator\":\"54133e8fd361774c1696f265\",\n        \"allowedParentTagTypes\":[\"Sensor\"],\n        \"allowedChildrenTagTypes\":[],\n        \"__v\":0,\n        \"restrictedTags\":[],\n        \"isChildrenRule\":true\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/rules"
      }
    ],
    "filename": "server/general/routes/apis/tag-rule-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/tags/:tagId/deletable",
    "title": "Check tag deletable",
    "group": "Tags",
    "name": "Check_tag_deletable",
    "version": "1.0.0",
    "description": "<p>Check if the tag is deletable</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458a8a95409c90e00884ce0\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"543824bd7174d62c1acad50f\":{\n            \"isDeletable\":false\n        }\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/:tagId/deletable"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/tags",
    "title": "Create Tag",
    "group": "Tags",
    "name": "Create_Tag",
    "version": "1.0.0",
    "description": "<p>Create new tag and add it to user accessibleTags field <br/>Following fields can&#39;t be updated: <br/>     usersWithAccess <br/>     appEntities <br/>     creator <br/>     creatorRole <br/>     tagType <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Tag data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nbody\n{\n    \"tagType\" : \"Facility\",\n    \"name\" : \"Liberty Lofts\",\n    \"creatorRole\" : \"BP\",\n    \"creator\" : \"54135f90c6ab7c241e28095e\",\n    \"__v\" : 0,\n    \"usersWithAccess\" : [ \n        {\n            \"id\" : \"54135f90c6ab7c241e28095e\"\n        }, \n        {\n            \"id\" : \"5429d0ba89c1849502287d5c\"\n        }\n    ],\n    \"appEntities\" : [],\n    \"children\" : [ \n        {\n            \"id\" : \"5458a84f5409c90e00884cdf\",\n            \"tagType\" : \"Scope\"\n        }\n    ],\n    \"parents\" : [],\n    \"formula\" : null,\n    \"metricID\" : null,\n    \"metricType\" : null,\n    \"metric\" : null,\n    \"sensorTarget\" : null,\n    \"enphaseUserId\" : null,\n    \"endDate\" : null,\n    \"weatherStation\" : null,\n    \"longitude\" : null,\n    \"latitude\" : null,\n    \"username\": \"tester\",\n    \"password\": \"123456\",\n    \"webAddress\" : null,\n    \"interval\" : null,\n    \"destination\" : null,\n    \"accessMethod\" : null,\n    \"deviceID\" : null,\n    \"device\" : null,\n    \"manufacturer\" : null,\n    \"utilityAccounts\" : [],\n    \"utilityProvider\" : \"\",\n    \"nonProfit\" : null,\n    \"taxID\" : null,\n    \"street\" : \"\",\n    \"state\" : \"\",\n    \"postalCode\" : \"\",\n    \"country\" : \"\",\n    \"city\" : \"\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created Tag Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": [{\n        \"_id\" : \"543824c07174d62c1acad525\",\n        \"tagType\" : \"Scope\",\n        \"name\" : \"Enphase DataLoggerII\",\n        \"creatorRole\" : \"Admin\",\n        \"creator\" : \"54133e8fd361774c1696f265\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [{\n            \"id\" : \"54133e8fd361774c1696f265\"\n        }],\n        \"appEntities\" : [{\n            \"id\" : \"5429d13f89c1849502287d5d\",\n            \"appName\" : \"Presentation\"\n        }],\n        \"children\" : [],\n        \"parents\" : [{\n            \"id\" : \"543824bf7174d62c1acad51d\",\n            \"tagType\" : \"Facility\"\n        }],\n        \"formula\" : null,\n        \"metricID\" : null,\n        \"metricType\" : null,\n        \"metric\" : null,\n        \"sensorTarget\" : null,\n        \"enphaseUserId\" : \"4d7a59344d5445300a\",\n        \"endDate\" : null,\n        \"weatherStation\" : \"--Use NOAA--\",\n        \"longitude\" : -90.47239999999999,\n        \"latitude\" : 38.5763,\n        \"username\": \"tester\",\n        \"password\": \"123456\",\n        \"webAddress\" : null,\n        \"interval\" : \"Hourly\",\n        \"destination\" : \"Test\",\n        \"accessMethod\" : \"Push to FTP\",\n        \"deviceID\" : \"121006088373\",\n        \"device\" : \"Envoy\",\n        \"manufacturer\" : \"Enphase\",\n        \"utilityAccounts\" : [],\n        \"utilityProvider\" : null,\n        \"nonProfit\" : null,\n        \"taxID\" : null,\n        \"street\" : null,\n        \"state\" : null,\n        \"postalCode\" : null,\n        \"country\" : null,\n        \"city\" : null\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/tags/:tagId",
    "title": "Delete Tag with children",
    "group": "Tags",
    "name": "Delete_Tag",
    "version": "1.0.0",
    "description": "<p>Delete tag by Id with children</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458af3ffe540a120074c20a\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/:tagId"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/tags/:tagId",
    "title": "Edit Tag",
    "group": "Tags",
    "name": "Edit_Tag",
    "version": "1.0.0",
    "description": "<p>Edit tag data <br/>Following fields can&#39;t be updated: <br/>     usersWithAccess <br/>     appEntities <br/>     creator <br/>     creatorRole <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "body",
            "optional": false,
            "description": "<p>Tag data object. API can accepts only changed fields. However, id is mandatory</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458a2acb0091419007e03df\nbody\n{\n    \"_id\" : \"5458a2acb0091419007e03df\",\n    \"tagType\" : \"Facility\",\n    \"name\" : \"Liberty Lofts test\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {    \n        \"_id\" : \"543824c07174d62c1acad525\",\n        \"tagType\" : \"Scope\",\n        \"name\" : \"Enphase DataLoggerII\",\n        \"creatorRole\" : \"Admin\",\n        \"creator\" : \"54133e8fd361774c1696f265\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [{\n            \"id\" : \"54133e8fd361774c1696f265\"\n        }],\n        \"appEntities\" : [{\n            \"id\" : \"5429d13f89c1849502287d5d\",\n            \"appName\" : \"Presentation\"\n        }],\n        \"children\" : [],\n        \"parents\" : [{\n            \"id\" : \"543824bf7174d62c1acad51d\",\n            \"tagType\" : \"Facility\"\n        }],\n        \"formula\" : null,\n        \"metricID\" : null,\n        \"metricType\" : null,\n        \"metric\" : null,\n        \"sensorTarget\" : null,\n        \"enphaseUserId\" : \"4d7a59344d5445300a\",\n        \"endDate\" : null,\n        \"weatherStation\" : \"--Use NOAA--\",\n        \"longitude\" : -90.47239999999999,\n        \"latitude\" : 38.5763,\n        \"username\": \"tester\",\n        \"password\": \"123456\",\n        \"webAddress\" : null,\n        \"interval\" : \"Hourly\",\n        \"destination\" : \"Test\",\n        \"accessMethod\" : \"Push to FTP\",\n        \"deviceID\" : \"121006088373\",\n        \"device\" : \"Envoy\",\n        \"manufacturer\" : \"Enphase\",\n        \"utilityAccounts\" : [],\n        \"utilityProvider\" : null,\n        \"nonProfit\" : null,\n        \"taxID\" : null,\n        \"street\" : null,\n        \"state\" : null,\n        \"postalCode\" : null,\n        \"country\" : null,\n        \"city\" : null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/:tagId"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "get",
    "url": "/tags/source/users/:tagId",
    "title": "Get Accessible Users for Tag",
    "group": "Tags",
    "name": "Get_Accessible_Users_for_Tag",
    "version": "1.0.0",
    "description": "<p>Returns accessible Users Array for Tag</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Users Array</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/tags/source/users/:tagId"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/tags/:tagId",
    "title": "Get Tag by Id",
    "group": "Tags",
    "name": "Get_Tag_by_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the tag data by Tag Id</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458a2acb0091419007e03df\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"543824c07174d62c1acad525\",\n        \"tagType\" : \"Scope\",\n        \"name\" : \"Enphase DataLoggerII\",\n        \"creatorRole\" : \"Admin\",\n        \"creator\" : \"54133e8fd361774c1696f265\",\n        \"__v\" : 0,\n        \"usersWithAccess\" : [{\n            \"id\" : \"54133e8fd361774c1696f265\"\n        }],\n        \"appEntities\" : [{\n            \"id\" : \"5429d13f89c1849502287d5d\",\n            \"appName\" : \"Presentation\"\n        }],\n        \"children\" : [],\n        \"parents\" : [{\n            \"id\" : \"543824bf7174d62c1acad51d\",\n            \"tagType\" : \"Facility\"\n        }],\n        \"formula\" : null,\n        \"metricID\" : null,\n        \"metricType\" : null,\n        \"metric\" : null,\n        \"sensorTarget\" : null,\n        \"enphaseUserId\" : \"4d7a59344d5445300a\",\n        \"endDate\" : null,\n        \"weatherStation\" : \"--Use NOAA--\",\n        \"longitude\" : -90.47239999999999,\n        \"latitude\" : 38.5763,\n        \"username\": \"tester\",\n        \"password\": \"123456\",\n        \"webAddress\" : null,\n        \"interval\" : \"Hourly\",\n        \"destination\" : \"Test\",\n        \"accessMethod\" : \"Push to FTP\",\n        \"deviceID\" : \"121006088373\",\n        \"device\" : \"Envoy\",\n        \"manufacturer\" : \"Enphase\",\n        \"utilityAccounts\" : [],\n        \"utilityProvider\" : null,\n        \"nonProfit\" : null,\n        \"taxID\" : null,\n        \"street\" : null,\n        \"state\" : null,\n        \"postalCode\" : null,\n        \"country\" : null,\n        \"city\" : null\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/:tagId"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/tags/data/:metricId",
    "title": "Save Tag Data",
    "group": "Tags",
    "name": "Save_Tag_Data",
    "version": "1.0.0",
    "description": "<p>Save Metric data into tempoiqDB</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nmetricId : 5461194d7c895516004561ad\nbody\n{\n    \"sourceData\": [\n        {Metric: \"W\", DateTime: \"2010-01-02 06:00:00\", MetricValue: \"11000\"},\n        {Metric: \"W\", DateTime: \"2010-01-04 06:00:00\", MetricValue: \"200.15\"}\n    ]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n \"success\":1,\n \"message\":{\n     \"dataPoints\":{\n         \"egauge8795:Solar Inverter Aplus\":{\n             \"W\":[\n                 {\"t\":\"2010-01-02T04:00:00.000Z\",\"v\":\"11000.1\"},\n                 {\"t\":\"2010-01-04T04:00:00.000Z\",\"v\":\"11000.2\"}\n             ]\n         }\n     },\n     \"result\":{}\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/tags/data/:metricId"
      }
    ],
    "filename": "server/general/routes/apis/tag-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/users/:userId/tags",
    "title": "Update User Accessible Tags",
    "group": "Tags",
    "name": "Update_User_Tags",
    "version": "1.0.0",
    "description": "<p>Add/Update accessible tags to user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "accessibleTags",
            "optional": false,
            "description": "<p>tagBind data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\naccessibleTags\n[{\n    \"id\" : \"5463d8f82fae661700f2896d\",\n    \"tagType\" : \"Facility\"\n}]\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated user object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\" : ObjectId(\"54135ec74f09ccc06d5be3d6\"),\n        \"firstName\" : \"Adam\",\n        \"lastName\" : \"Admin\",\n        \"email\" : \"adam@brightergy.com\",\n        \"emailUser\" : \"adam\",\n        \"emailDomain\" : \"brightergy.com\",\n        \"accounts\" : [ \n            ObjectId(\"54135e074f09ccc06d5be3d2\")\n        ],\n        \"profilePictureUrl\" : null,\n        \"sfdcContactId\" : \"003C000001lrjGy\",\n        \"defaultApp\" : \"DataSense\",\n        \"apps\" : [ \n            \"BrighterView\"\n        ],\n        \"previousPasswords\" : [],\n        \"previousEditedPresentation\" : null,\n        \"lastEditedPresentation\" : null,\n        \"role\" : \"Admin\",\n        \"enphaseUserId\" : null,\n        \"socialToken\" : null,\n        \"password\" : null,\n        \"phone\" : \"1-816-866-0555\",\n        \"middleName\" : \"\",\n        \"__v\" : 18,\n        \"accessibleTags\" : [\n            {\n                \"id\" : ObjectId(\"542f76af2946473bc194b64e\"),\n                \"tagType\" : \"Facility\"\n            },\n            {\n                \"id\" : ObjectId(\"542f76b32946473bc194b65c\"),\n                \"tagType\" : \"Facility\"\n            },\n            {\n                \"id\" : ObjectId(\"543824bf7174d62c1acad51b\"),\n                \"tagType\" : \"DataLogger\"\n            }\n        ]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId/tags"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/users/:userId/tags",
    "title": "Add User Accessible Tag",
    "group": "User",
    "name": "Add_Accessible_Tag",
    "version": "1.0.0",
    "description": "<p>Add accessible tag to user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "accessibleTag",
            "optional": false,
            "description": "<p>Accessible tag data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nuserId : 5416f4647fd9bfec17c6253d\naccessibleTag\n{\n    \"id\" : \"543824bf7174d62c1acad51b\",\n    \"tagType\" : \"DataLogger\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated user data object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\":{\n        \"_id\" : \"54135ec74f09ccc06d5be3d6\",\n        \"firstName\" : \"Adam\",\n        \"lastName\" : \"Admin\",\n        \"email\" : \"adam@brightergy.com\",\n        \"emailUser\" : \"adam\",\n        \"emailDomain\" : \"brightergy.com\",\n        \"accounts\" : [\"54135e074f09ccc06d5be3d2\"],\n        \"profilePictureUrl\" : null,\n        \"sfdcContactId\" : \"003L000000OUS4VIAX\",\n        \"defaultApp\" : \"DataSense\",\n        \"apps\" : [\"BrighterView\"],\n        \"previousPasswords\" : [],\n        \"previousEditedPresentation\" : null,\n        \"lastEditedPresentation\" : null,\n        \"role\" : \"Admin\",\n        \"enphaseUserId\" : null,\n        \"socialToken\" : null,\n        \"password\" : null,\n        \"phone\" : \"1-816-866-0555\",\n        \"middleName\" : \"\",\n        \"__v\" : 17,\n        \"accessibleTags\" : [{\n            \"id\" : \"543824bd7174d62c1acad50f\",\n            \"tagType\" : \"Facility\"\n        },\n        {\n            \"id\" : \"543824bf7174d62c1acad51d\",\n            \"tagType\" : \"Facility\"\n        }]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId/tags"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/users/password/:email",
    "title": "Change Password",
    "group": "User",
    "name": "Change_Password",
    "version": "1.0.0",
    "description": "<p>Check if user is exist and send reset password link to that email</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nemmanuel.ekochu@brightergy.com\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/password/:email"
      }
    ],
    "filename": "server/general/routes/apis/password-api-router.js"
  },
  {
    "type": "post",
    "url": "/userapi/connectbptosfdc/:userId",
    "title": "Connect BP user to SFDC User",
    "group": "User",
    "name": "Connect_BP_user_to_SFDC_User",
    "version": "0.0.1",
    "description": "<p>Connect BP user to SFDC User with the same email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "BP",
            "optional": false,
            "description": "<p>user Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Edited user data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/userapi/connectbptosfdc/:userId"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/users",
    "title": "Create User",
    "group": "User",
    "name": "Create_User",
    "version": "1.0.0",
    "description": "<p>Create new user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>user data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sfdcAccountId",
            "optional": false,
            "description": "<p>salesforce account Id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nsfdcAccountId : 001C0000013iMilIAE\nuser\n{\n    \"firstName\" : \"user\",\n    \"lastName\" : \"test\",\n    \"email\" : \"testuser@brightergy.com\",\n    \"emailUser\" : \"testuser\",\n    \"emailDomain\" : \"brightergy.com\",\n    \"password\" : \"Brightergy1\",\n    \"role\" : \"Admin\",\n    \"accounts\" : [\"54135e074f09ccc06d5be3d2\"],\n    \"profilePictureUrl\" : \"https://docs.google.com/a/brightergy.com/uc?id=0BwW4a4uizniHTUJscjVTUTJhMEE\",\n    \"accessibleTags\" : [\n        {\n            \"tagType\" : \"Facility\",\n            \"id\" : \"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\" : \"Facility\",\n            \"id\" : \"543824bf7174d62c1acad51d\"\n        }\n    ]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Created user data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/users/:deleteUserId",
    "title": "Delete User",
    "group": "User",
    "name": "Delete_User",
    "version": "1.0.0",
    "description": "<p>Delete user by user Id.</p>",
    "examples": [
      {
        "title": "    deleteUserId : 5416f3fae40151081cefb60e",
        "content": "    deleteUserId : 5416f3fae40151081cefb60e\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Success code</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:deleteUserId"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users/accounts?searchKey=:searchKey&limit=:limit",
    "title": "Get All Account For User",
    "group": "User",
    "name": "Get_All_Account_For_User",
    "version": "1.0.0",
    "description": "<p>Retrieves all accounts of currently logged in user.  when searchKey is all_data, it retrieves the all accounts.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Account objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/accounts?searchKey=:searchKey&limit=:limit"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users/admin",
    "title": "Get All Admins",
    "group": "User",
    "name": "Get_All_Admins",
    "version": "1.0.0",
    "description": "<p>Retrieves the all admin users.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>admin objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/admin"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users/applications",
    "title": "Get App configuration",
    "group": "User",
    "name": "Get_App_configuration",
    "version": "1.0.0",
    "description": "<p>Retrieves the App configuration values.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>App configuration values in sever/config/config.json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n       \"success\":1,\n       \"message\":{\n           \"BrighterSavings\":\"/brightersavings\",\n           \"BrighterView\":\"/management\",\n           \"Verified Savings\":\"/verifiedsavings\",\n           \"Load Response\":\"/loadresponse\",\n           \"DataSense\":\"/datasense\",\n           \"Utility Manager\":\"/utilitymanager\",\n           \"Programs & Projects\":\"/programsandprojects\",\n           \"ENERGY STAR Portfolio Manager\":\"/energystar\"\n       }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/applications"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users/:userId",
    "title": "Get User By Id",
    "group": "User",
    "name": "Get_User_By_Id",
    "version": "1.0.0",
    "description": "<p>Retrieves the user data by userId</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nuserId : 5416f4647fd9bfec17c6253d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user data object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":{\n        \"_id\":\"54133e8fd361774c1696f265\",\n        \"firstName\":\"test\",\n        \"lastName\":\"testov\",\n        \"email\":\"test@example.com\",\n        \"emailUser\":\"test\",\n        \"emailDomain\":\"example.com\",\n        \"__v\":1,\n        \"accessibleTags\":[],\n        \"accounts\":[],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":\"/components/company-panel/assets/img/mm-picture.png\",\n        \"sfdcContactId\":null,\n        \"defaultApp\":null,\n        \"apps\":[],\n        \"previousEditedDashboardId\":\"54244c408352a9701b73297d\",\n        \"lastEditedDashboardId\":\"54244c408352a9701b73297d\",\n        \"previousEditedPresentation\":\"5413af68b1c838ea73500109\",\n        \"lastEditedPresentation\":\"5422debd68f461c84a8eb76f\",\n        \"role\":\"BP\",\n        \"enphaseUserId\":\"4d7a59344d446b790a\",\n        \"socialToken\":null,\n        \"phone\":null,\n        \"middleName\":\"\",\n        \"name\":\"test testov\",\n        \"sfdcContactURL\":null,\n        \"id\":\"54133e8fd361774c1696f265\"\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users/:userId/tags",
    "title": "Get User Accessible Tags",
    "group": "User",
    "name": "Get_User_Tags",
    "version": "1.0.0",
    "description": "<p>Get tags list of user</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nuserId : 5416f4647fd9bfec17c6253d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Tags list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\":[{\n          \"_id\": \"543824bf7174d62c1acad51d\",\n          \"tagType\": \"Facility\",\n          \"name\": \"Northlands Limited\",\n          \"creatorRole\": \"BP\",\n          \"creator\": \"54133e8fd361774c1696f265\",\n          \"__v\": 0,\n          \"usersWithAccess\": [\n              {\n                  \"id\": \"54133e8fd361774c1696f265\"\n              }\n         ],\n         \"appEntities\": [\n             {\n                 \"id\": \"54244c408352a9701b73297d\",\n                 \"appName\": \"Dashboard\"\n             }\n         ],\n         \"children\": [\n             {\n                 \"id\": \"543824bf7174d62c1acad51e\",\n                 \"tagType\": \"DataLogger\"\n             }\n         ],\n         \"parents\": [],\n         \"formula\": null,\n         \"metricID\": null,\n         \"metricType\": null,\n         \"metric\": null,\n         \"sensorTarget\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [\n             \"852\"\n         ],\n         \"utilityProvider\": \"Fuel-Powered Energy Production\",\n         \"nonProfit\": true,\n         \"taxID\": \"7451\",\n         \"street\": \"\",\n         \"state\": \"\",\n         \"postalCode\": \"\",\n         \"country\": \"\",\n         \"city\": \"\",\n          \"childTags\": [\n              {\n                  \"_id\": \"543824c07174d62c1acad525\",\n                  \"tagType\": \"DataLogger\",\n                  \"name\": \"Enphase DataLoggerII\",\n                  \"creatorRole\": \"Admin\",\n                  \"creator\": \"54133e8fd361774c1696f265\",\n                  \"__v\": 0,\n                  \"usersWithAccess\": [\n                      {\n                          \"id\": \"54133e8fd361774c1696f265\"\n                      }\n                  ],\n                  \"appEntities\": [\n                      {\n                          \"id\": \"5429d13f89c1849502287d5d\",\n                          \"appName\": \"Presentation\"\n                      }\n                  ],\n                  \"children\": [],\n                  \"parents\": [\n                      {\n                          \"id\": \"543824bf7174d62c1acad51d\",\n                          \"tagType\": \"Facility\"\n                      }\n                  ],\n                  \"formula\": null,\n                  \"metricID\": null,\n                  \"metricType\": null,\n                  \"metric\": null,\n                  \"sensorTarget\": null,\n                  \"enphaseUserId\": \"4d7a59344d5445300a\",\n                  \"endDate\": null,\n                  \"weatherStation\": \"--Use NOAA--\",\n                  \"longitude\": -90.4724,\n                  \"latitude\": 38.5763,\n                 \"webAddress\": null,\n                  \"interval\": \"Hourly\",\n                  \"destination\": \"Test\",\n                  \"accessMethod\": \"Push to FTP\",\n                  \"deviceID\": \"121006088373\",\n                  \"device\": \"Envoy\",\n                  \"manufacturer\": \"Enphase\",\n                  \"utilityAccounts\": [],\n                  \"utilityProvider\": null,\n                  \"nonProfit\": null,\n                  \"taxID\": null,\n                  \"street\": null,\n                  \"state\": null,\n                  \"postalCode\": null,\n                  \"country\": null,\n                  \"city\": null,\n                  \"childTags\": []\n              }\n         ]\n     },\n     {\n         \"_id\": \"543824bd7174d62c1acad50f\",\n         \"tagType\": \"Facility\",\n         \"name\": \"Barretts Elementary\",\n         \"creatorRole\": \"BP\",\n         \"creator\": \"54133e8fd361774c1696f265\",\n         \"__v\": 0,\n         \"usersWithAccess\": [\n             {\n                 \"id\": \"54133e8fd361774c1696f265\"\n             },\n             {\n                 \"id\": \"54135ec74f09ccc06d5be3d6\"\n             },\n             {\n                 \"id\": \"5429d0ba89c1849502287d5c\"\n             }\n         ],\n         \"appEntities\": [\n             {\n                 \"id\": \"5413af68b1c838ea73500109\",\n                 \"appName\": \"Presentation\"\n             },\n             {\n                 \"id\": \"54135ec74f09ccc06d5be3d6\",\n                 \"appName\": \"User\"\n             },\n             {\n                 \"id\": \"541ae4c3a90e8de146a10c05\",\n                 \"appName\": \"Presentation\"\n             },\n             {\n                 \"id\": \"5422debd68f461c84a8eb76f\",\n                 \"appName\": \"Presentation\"\n             },\n             {\n                 \"id\": \"541d389740b3129866c5dbec\",\n                 \"appName\": \"Dashboard\"\n             },\n             {\n                 \"id\": \"54244c408352a9701b73297d\",\n                 \"appName\": \"Dashboard\"\n             },\n             {\n                 \"id\": \"5413a795b1c838ea735000ff\",\n                 \"appName\": \"Dashboard\"\n             },\n             {\n                 \"id\": \"541c7ec3a90e8de146a10c14\",\n                 \"appName\": \"Dashboard\"\n             }\n         ],\n         \"children\": [\n             {\n                 \"id\": \"543824bd7174d62c1acad510\",\n                 \"tagType\": \"DataLogger\"\n             },\n             {\n                 \"id\": \"543824be7174d62c1acad517\",\n                 \"tagType\": \"DataLogger\"\n             },\n             {\n                 \"id\": \"543824bf7174d62c1acad51b\",\n                 \"tagType\": \"DataLogger\"\n             }\n         ],\n         \"parents\": [],\n         \"formula\": null,\n         \"metricID\": null,\n         \"metricType\": null,\n         \"metric\": null,\n         \"sensorTarget\": null,\n         \"enphaseUserId\": null,\n         \"endDate\": null,\n         \"weatherStation\": null,\n         \"longitude\": null,\n         \"latitude\": null,\n         \"webAddress\": null,\n         \"interval\": null,\n         \"destination\": null,\n         \"accessMethod\": null,\n         \"deviceID\": null,\n         \"device\": null,\n         \"manufacturer\": null,\n         \"utilityAccounts\": [\n             \"6655\"\n         ],\n         \"utilityProvider\": \"Ameren\",\n         \"nonProfit\": true,\n         \"taxID\": \"78\",\n         \"street\": \"\",\n         \"state\": \"\",\n         \"postalCode\": \"\",\n         \"country\": \"\",\n         \"city\": \"\",\n         \"childTags\": [\n             {\n                 \"_id\": \"543824bf7174d62c1acad51b\",\n                 \"tagType\": \"DataLogger\",\n                 \"name\": \"Enphase DataLoggerII\",\n                 \"creatorRole\": \"Admin\",\n                 \"creator\": \"54133e8fd361774c1696f265\",\n                 \"__v\": 0,\n                 \"usersWithAccess\": [\n                     {\n                         \"id\": \"54133e8fd361774c1696f265\"\n                     }\n                 ],\n                 \"appEntities\": [\n                     {\n                         \"id\": \"5413612ad37f4ab56f1fb175\",\n                         \"appName\": \"Dashboard\"\n                     }\n                 ],\n                 \"children\": [],\n                 \"parents\": [\n                     {\n                         \"id\": \"543824bd7174d62c1acad50f\",\n                         \"tagType\": \"Facility\"\n                     }\n                 ],\n                 \"formula\": null,\n                 \"metricID\": null,\n                 \"metricType\": null,\n                 \"metric\": null,\n                 \"sensorTarget\": null,\n                 \"enphaseUserId\": \"4d7a59344d5445300a\",\n                 \"endDate\": null,\n                 \"weatherStation\": \"--Use NOAA--\",\n                 \"longitude\": -90.4724,\n                 \"latitude\": 38.5763,\n                 \"username\": \"tester\",\n                 \"password\": \"123456\",\n                 \"webAddress\": null,\n                 \"interval\": \"Hourly\",\n                 \"destination\": \"Test\",\n                 \"accessMethod\": \"Push to FTP\",\n                 \"deviceID\": \"121006088373\",\n                 \"device\": \"Envoy\",\n                 \"manufacturer\": \"Enphase\",\n                 \"utilityAccounts\": [],\n                 \"utilityProvider\": null,\n                 \"nonProfit\": null,\n                 \"taxID\": null,\n                 \"street\": null,\n                 \"state\": null,\n                 \"postalCode\": null,\n                 \"country\": null,\n                 \"city\": null,\n                 \"childTags\": []\n             }\n         ]\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId/tags"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "delete",
    "url": "/v1/users/:userId/tags/:tagId",
    "title": "Remove User Accessible Tag",
    "group": "User",
    "name": "Remove_Accessible_Tag",
    "version": "1.0.0",
    "description": "<p>Remove accessible tag from user data.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\ntagId : 5458af3ffe540a120074c20a\nuserId : 5416f4647fd9bfec17c6253d\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated user data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\":{\n        \"_id\" : \"54135ec74f09ccc06d5be3d6\",\n        \"firstName\" : \"Adam\",\n        \"lastName\" : \"Admin\",\n        \"email\" : \"adam@brightergy.com\",\n        \"emailUser\" : \"adam\",\n        \"emailDomain\" : \"brightergy.com\",\n        \"accounts\" : [\"54135e074f09ccc06d5be3d2\"],\n        \"profilePictureUrl\" : null,\n        \"sfdcContactId\" : \"003L000000OUS4VIAX\",\n        \"defaultApp\" : \"DataSense\",\n        \"apps\" : [\"BrighterView\"],\n        \"previousPasswords\" : [],\n        \"previousEditedPresentation\" : null,\n        \"lastEditedPresentation\" : null,\n        \"role\" : \"Admin\",\n        \"enphaseUserId\" : null,\n        \"socialToken\" : null,\n        \"password\" : null,\n        \"phone\" : \"1-816-866-0555\",\n        \"middleName\" : \"\",\n        \"__v\" : 17,\n        \"accessibleTags\" : [{\n            \"id\" : \"543824bd7174d62c1acad50f\",\n            \"tagType\" : \"Facility\"\n        }]\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId/tags/:tagId"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "get",
    "url": "/v1/users?searchKey=:searchKey&limit=:limit",
    "title": "Search Users",
    "group": "User",
    "name": "Search_Users",
    "version": "1.0.0",
    "description": "<p>Retrieves the users that have the searchKey in Name.</p>",
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nsearchKey : Emmanuel\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>user objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users?searchKey=:searchKey&limit=:limit"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/users/password/",
    "title": "Set Password",
    "group": "User",
    "name": "Set_Password",
    "version": "1.0.0",
    "description": "<p>Check user with given token and set new password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>current user token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>loginUrl</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/password/"
      }
    ],
    "filename": "server/general/routes/apis/password-api-router.js"
  },
  {
    "type": "put",
    "url": "/v1/users/:userId",
    "title": "Update User",
    "group": "User",
    "name": "Update_User",
    "version": "1.0.0",
    "description": "<p>Edit user informations and retrieves the updated one. API can accepts the only changed fields. However id is mandatory. <br/>Following fields can&#39;t be updated: <br/>     role <br/>     password <br/>     socialToken <br/>     enphaseUserId <br/>     tokens <br/>     sfdcContactId <br/>     profilePictureUrl <br/>     accessibleTags <br/></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "user",
            "optional": false,
            "description": "<p>user data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request",
        "content": "Example request\nuserId : 5416f4647fd9bfec17c6253d\nuser\n{\n    \"_id\" : \"5416f4647fd9bfec17c6253d\",\n    \"firstName\" : \"Emmanuel\",\n    \"lastName\" : \"Ekochu\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>Updated user data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\":1,\n    \"message\":[{\n        \"_id\":\"54135ec74f09ccc06d5be3d6\",\n        \"firstName\":\"Adam\",\n        \"lastName\":\"Admin\",\n        \"email\":\"adam@brightergy.com\",\n        \"emailUser\":\"adam\",\n        \"emailDomain\":\"brightergy.com\",\n        \"__v\":17,\n        \"accessibleTags\":[{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bd7174d62c1acad50f\"\n        },{\n            \"tagType\":\"Facility\",\n            \"id\":\"543824bf7174d62c1acad51d\"\n        }],\n        \"accounts\":[\"54135e074f09ccc06d5be3d2\"],\n        \"children\":[],\n        \"parents\":[],\n        \"profilePictureUrl\":null,\n        \"sfdcContactId\":\"003L000000OUS4VIAX\",\n        \"defaultApp\":\"DataSense\",\n        \"apps\":[\"BrighterView\"],\n        \"previousEditedDashboardId\":null,\n        \"lastEditedDashboardId\":null,\n        \"previousEditedPresentation\":null,\n        \"lastEditedPresentation\":null,\n        \"role\":\"Admin\",\n        \"enphaseUserId\":null,\n        \"socialToken\":null,\n        \"phone\":\"1-816-866-0555\",\n        \"middleName\":\"\",\n        \"name\":\"Adam Admin\",\n        \"sfdcContactURL\":\"https://cs15.salesforce.com/003L000000OUS4VIAX\",\n        \"id\":\"54135ec74f09ccc06d5be3d6\"\n    }]\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:userId"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  },
  {
    "type": "post",
    "url": "/v1/users/assets/userprofile",
    "title": "Upload User Picture",
    "group": "User",
    "name": "Upload_User_Picture",
    "version": "1.0.0",
    "description": "<p>Upload user profile picture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "field": "assetsFile",
            "optional": false,
            "description": "<p>user profile picture data, null if picture is cropped binary data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hasCropped",
            "optional": false,
            "description": "<p>&quot;true&quot; if picture is cropped binary data, or null</p>"
          },
          {
            "group": "Parameter",
            "type": "Binary",
            "field": "imageBinary",
            "optional": false,
            "description": "<p>set if picture is cropped binary data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success",
            "optional": false,
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "field": "message",
            "optional": false,
            "description": "<p>updated user data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "Success example\n{\n    \"success\": 1,\n    \"message\": {\n        \"_id\" : \"54133e8fd361774c1696f265\",\n        \"firstName\" : \"test\",\n        \"lastName\" : \"testov\",\n        \"email\" : \"test@example.com\",\n        \"emailUser\" : \"test\",\n        \"emailDomain\" : \"example.com\",\n        \"accounts\" : [],\n        \"profilePictureUrl\" : \"/components/company-panel/assets/img/mm-picture.png\",\n        \"sfdcContactId\" : null,\n        \"defaultApp\" : null,\n        \"apps\" : [],\n        \"previousPasswords\" : [ \n            \"$2a$10$WnFyOP/QAvsS3hvIoWOOmue5MYbUpwd0ScE5X.RmVGLzao7tdrnsS\"\n        ],\n        \"previousEditedPresentation\" : \"5413af68b1c838ea73500109\",\n        \"lastEditedPresentation\" : \"5422debd68f461c84a8eb76f\",\n        \"role\" : \"BP\",\n        \"enphaseUserId\" : \"4d7a59344d446b790a\",\n        \"socialToken\" : null,\n        \"password\" : \"$2a$10$WnFyOP/QAvsS3hvIoWOOmue5MYbUpwd0ScE5X.RmVGLzao7tdrnsS\",\n        \"phone\" : null,\n        \"middleName\" : \"\",\n        \"__v\" : 1,\n        \"accessibleTags\" : [],\n        \"lastEditedDashboardId\" : \"54244c408352a9701b73297d\",\n        \"previousEditedDashboardId\" : \"54244c408352a9701b73297d\"\n    }\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "success",
            "optional": false,
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "field": "message",
            "optional": false,
            "description": "<p>Error code</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/assets/userprofile"
      }
    ],
    "filename": "server/general/routes/apis/user-api-router.js"
  }
] });