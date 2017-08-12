- first time download:
`npm i`

- to run
`npm start`

# Notes:
Just run it in another separate terminal window than client.

# What is is:

This is a simple express server that hosts a api endpoint to test async
prerendering on the client app.

# How it works:

This package has a `cors` activated so that the front end has an open localhost
api.  that will be the response to the frontend.

┌────────────────────────────────────────────────────────────────────────────────────┐
│Step 1:                                                                             │
│                                                                                    │
│                                                                                    │
│ ┌────────────────┐             ┌────────────────┐            ┌──────────────────┐  │
│ │                │             │                │            │                  │  │
│ │ 3rd party api  │◀─Req────────│  Backend API   │◀─Req───────│      Client      │  │
│ │                │             │                │            │                  │  │
│ └────────────────┘             └────────────────┘            └──────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────┘



┌────────────────────────────────────────────────────────────────────────────────────┐
│Step 2:                                                                             │
│                                                                                    │
│ ┌────────────────┐              ┌────────────────┐            ┌──────────────────┐ │
│ │                │              │                │            │                  │ │
│ │ 3rd party api  │─Res─────────▶│  Backend API   │─Res───────▶│      Client      │ │
│ │                │              │                │            │                  │ │
│ └────────────────┘              └────────────────┘            └──────────────────┘ │
│                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────┘
