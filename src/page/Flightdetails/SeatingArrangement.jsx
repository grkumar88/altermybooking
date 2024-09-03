import React, { useState } from 'react';
import seatImage from '../../assets/images/seat.png';
import FareDetails from './FareDetails';
import { useDispatch } from 'react-redux';
import { setSeat } from '@/redux/flightSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SeatingArrangement = ({ data }) => {
  const dispatch = useDispatch();

  const seating_arrangement = {
    "Inbound": [
        {
          "NDCBA_OfferID": "SO-92b43419-99df-494f-a7ea-c67bd7012613",
          "NDCBA_ResponseID": "tx-09-02-1-cb961c1b-6def-42bc-bd57-33383080bdfc",
          "FlightSegment": {
            "AirSegmentKey": "BA0944",
            "Departure": {
              "AirportCode": "LHR",
              "AirportName": "London Heathrow Airport",
              "DepartureDate": "0001-01-01T00:00:00",
              "DepartureTime": "0001-01-01T00:00:00"
            },
            "Arrival": {
              "AirportCode": "DUS",
              "AirportName": "Düsseldorf Airport",
              "DepartureDate": "0001-01-01T00:00:00",
              "DepartureTime": "0001-01-01T00:00:00"
            },
            "MarketingCarrier": {
              "AirlineID": "BA",
              "AirlineName": "British Airways",
              "FlightNumber": "0944"
            },
            "Equipment": {
              "AircraftCode": "319",
              "AircraftName": "Airbus A319"
            },
            "FlightDetail": {
              "FlightTime": "02:25:00"
            }
          },
          "SeatHolders": [
            {
              "PassengerID": "T2",
              "PTC": "ADT",
              "NameTitle": "MR",
              "GivenName": "FNTESTA",
              "SurName": "LNTESTA",
              "Gender": "Male",
              "Birthdate": "1991-06-29T00:00:00"
            }
          ],
          "SeatRows": {
            "DeckPlacement": "Main",
            "Rows": [
              {
                "First": [
                  {
                    "RowNumber": "1",
                    "WingPosition": false,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "1",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "1",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                              "Code": "A",
                              "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "C",
                        "Availability": "F",
                        "SeatCode": "1",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "1",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                              "Code": "W",
                              "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      }
                    ]
                  },
                  {
                      "RowNumber": "2",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "2",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "2",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                                "Code": "A",
                                "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "2",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "2",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                                "Code": "W",
                                "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  }
                ]
              },
              {
                "Business": [
                  {
                    "RowNumber": "1",
                    "WingPosition": false,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "6",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "6",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                              "Code": "A",
                              "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "6",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "6",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "F",
                        "Availability": "F",
                        "SeatCode": "6",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "J",
                        "Availability": "F",
                        "SeatCode": "2",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "K",
                        "Availability": "F",
                        "SeatCode": "2",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      }
                    ]
                  },    
                  {
                      "RowNumber": "2",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                                "Code": "A",
                                "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "7",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },    
                  {
                    "RowNumber": "3",
                    "WingPosition": true,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "J",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "K",
                        "Availability": "F",
                        "SeatCode": "10",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      }
                    ]
                  },
                  {
                      "RowNumber": "4",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "11",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "5",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "12",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "6",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "13",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  }
                ]
              },
              {
                "Premium_Economy": [
                  {
                    "RowNumber": "1",
                    "WingPosition": true,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "F",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "16",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      },
                      {
                        "Column": "K",
                        "Availability": "F",
                        "SeatCode": "16",
                        "SeatPrice": {
                          "TotalAmount": 17,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          },
                          {
                            "Code": "I",
                            "Description": "Seat suitable for adult with an infant"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                      }
                    ]
                  },
                  {
                      "RowNumber": "2",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "17",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "3",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "18",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "4",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "19",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "5",
                      "WingPosition": true,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "20",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  },
                  {
                      "RowNumber": "6",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "21",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "21",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "21",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "21",
                          "SeatPrice": {
                            "TotalAmount": 17,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "I",
                              "Description": "Seat suitable for adult with an infant"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-4"
                        }
                      ]
                  }
                ]
              },
              {
                "Economy": [
                  {
                    "RowNumber": "1",
                    "WingPosition": false,
                    "ExitRowPosition": true,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "30",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "E",
                            "Description": "Exit row seat"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "30",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "E",
                            "Description": "Exit row seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "C",
                        "Availability": "F",
                        "SeatCode": "30",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          },
                          {
                            "Code": "E",
                            "Description": "Exit row seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "30",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "E",
                            "Description": "Exit row seat"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "30",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "E",
                            "Description": "Exit row seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "30",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "E",
                              "Description": "Exit row seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "30",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            },
                            {
                              "Code": "E",
                              "Description": "Exit row seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "30",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "E",
                              "Description": "Exit row seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "30",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            },
                            {
                              "Code": "E",
                              "Description": "Exit row seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      }
                    ]
                  },
                  {
                      "RowNumber": "2",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "31",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "3",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "32",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "4",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "33",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "5",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "34",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "6",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "35",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "7",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                          {
                              "Column": "A",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "B",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "C",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "D",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "E",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "F",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "H",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "J",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "K",
                              "Availability": "F",
                              "SeatCode": "36",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          }
                      ]
                  },
                  {
                      "RowNumber": "8",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "37",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                      "RowNumber": "9",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                          {
                              "Column": "A",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "B",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "C",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "D",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "E",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "F",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "H",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "J",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "K",
                              "Availability": "F",
                              "SeatCode": "38",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          }
                      ]
                  },
                  {
                    "RowNumber": "10",
                    "WingPosition": false,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "C",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "F",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "H",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "J",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "K",
                        "Availability": "F",
                        "SeatCode": "39",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      }
                    ]
                  },
                  {
                      "RowNumber": "11",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                          {
                              "Column": "A",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "B",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "C",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "D",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "E",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "F",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "H",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "J",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "K",
                              "Availability": "F",
                              "SeatCode": "40",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "W",
                                      "Description": "Window seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          }
                      ]
                  },
                  {
                      "RowNumber": "12",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "A",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "B",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "C",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "LS",
                              "Description": "Left side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "H",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "J",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "K",
                          "Availability": "F",
                          "SeatCode": "41",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "RS",
                              "Description": "Right side of aircraft"
                            },
                            {
                              "Code": "W",
                              "Description": "Window seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  },
                  {
                    "RowNumber": "13",
                    "WingPosition": false,
                    "ExitRowPosition": false,
                    "Seats": [
                      {
                        "Column": "A",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "B",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "C",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "LS",
                            "Description": "Left side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "D",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "E",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "F",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "H",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "A",
                            "Description": "Aisle seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "J",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "MID",
                            "Description": "Middle Seat"
                          },
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      },
                      {
                        "Column": "K",
                        "Availability": "F",
                        "SeatCode": "42",
                        "SeatPrice": {
                          "TotalAmount": 25,
                          "CurrencyCode": "GBP",
                          "OldAmount": 0,
                          "NewAmount": 0,
                          "PenaltyAmount": 0,
                          "BaseAmount": 0,
                          "TaxAmount": 0
                        },
                        "SeatCharacteristics": [
                          {
                            "Code": "RS",
                            "Description": "Right side of aircraft"
                          },
                          {
                            "Code": "W",
                            "Description": "Window seat"
                          }
                        ],
                        "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                      }
                    ]
                  },
                  {
                      "RowNumber": "14",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                          {
                              "Column": "B",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "C",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "LS",
                                      "Description": "Left side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "D",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "E",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "F",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "H",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  },
                                  {
                                      "Code": "A",
                                      "Description": "Aisle seat"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          },
                          {
                              "Column": "J",
                              "Availability": "F",
                              "SeatCode": "43",
                              "SeatPrice": {
                                  "TotalAmount": 25,
                                  "CurrencyCode": "GBP",
                                  "OldAmount": 0,
                                  "NewAmount": 0,
                                  "PenaltyAmount": 0,
                                  "BaseAmount": 0,
                                  "TaxAmount": 0
                              },
                              "SeatCharacteristics": [
                                  {
                                      "Code": "MID",
                                      "Description": "Middle Seat"
                                  },
                                  {
                                      "Code": "RS",
                                      "Description": "Right side of aircraft"
                                  }
                              ],
                              "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                          }
                      ]
                  },
                  {
                      "RowNumber": "15",
                      "WingPosition": false,
                      "ExitRowPosition": false,
                      "Seats": [
                        {
                          "Column": "D",
                          "Availability": "F",
                          "SeatCode": "44",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "E",
                          "Availability": "F",
                          "SeatCode": "44",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        },
                        {
                          "Column": "F",
                          "Availability": "F",
                          "SeatCode": "44",
                          "SeatPrice": {
                            "TotalAmount": 25,
                            "CurrencyCode": "GBP",
                            "OldAmount": 0,
                            "NewAmount": 0,
                            "PenaltyAmount": 0,
                            "BaseAmount": 0,
                            "TaxAmount": 0
                          },
                          "SeatCharacteristics": [
                            {
                              "Code": "MID",
                              "Description": "Middle Seat"
                            },
                            {
                              "Code": "A",
                              "Description": "Aisle seat"
                            }
                          ],
                          "NDCBA_OfferItemRef": "SO-92b43419-99df-494f-a7ea-c67bd7012613-OI-1"
                        }
                      ]
                  }
                ]
              }
            ],
            "Columns": [
              {
                "Position": "W",
                "Code": "A"
              },
              {
                "Code": "B"
              },
              {
                "Position": "A",
                "Code": "C"
              },
              {
                "Position": "A",
                "Code": "D"
              },
              {
                "Code": "E"
              },
              {
                "Position": "W",
                "Code": "F"
              }
            ],
            "GeneralSeatDetail": {
              "SeatCharacteristics": [
                "Left side of aircraft",
                "Window seat",
                "Seat suitable for adult with an infant",
                "Middle Seat",
                "Aisle seat",
                "Right side of aircraft",
                "Exit row seat"
              ],
              "MinimalSeatPrice": 8
            }
          }
        }
      ]// Add your seating arrangement data here
  };

  const [inbond, setInbond] = useState({
    // Initialize with your inbound data
  });

  const [selectRow, setSelectRow] = useState(seating_arrangement.Inbound?.[0]?.SeatRows?.Rows || []);

// const ttt = selectRow.map((item, ind)=>{
//   const seatDetails =  Object.entries(item).map(([key, subject], i) => {
//     if(key == 'First'){
//       return subject[i].Seats.map((it, inn)=>{
//         return{
//           seat_number: '1' + it.Column,
//            type: 'window',
//            side: 'left',
//            occupied: it.Availability == 'T' ? true : false,
//            basicfare: it.SeatPrice.BaseAmount,
//            tax: it.SeatPrice.TaxAmount,
//            seatfare: it.SeatPrice.TotalAmount,
//          }
//       })
//     } return [];
// });

// return seatDetails.length > 0 ? { [ind + 1]: seatDetails } : null;
// });

// const finalOutput = Object.assign({}, ...ttt);

// console.log(finalOutput)



const ttt = selectRow.map((item, ind) => {
  const seatDetails = Object.entries(item).flatMap(([key, subject], i) => {
    if (key === 'First') {
      return subject[i].Seats.map((it, i) =>({
        seat_number: '1' + it.Column,
        type: 'window',
        side: i % 2 === 0 ? 'left' : 'right',
        occupied: it.Availability === 'T' ? true : false,
        basicfare: it.SeatPrice.BaseAmount,
        tax: it.SeatPrice.TaxAmount,
        seatfare: it.SeatPrice.TotalAmount,
      }));
    }
    if (key === 'Business') {
      return subject[i].Seats.map((it, i) => ({
        seat_number: '2' + it.Column,
        type: 'window',
        side: i % 2 === 0 ? 'left' : 'right',
        occupied: it.Availability === 'T' ? true : false,
        basicfare: it.SeatPrice.BaseAmount,
        tax: it.SeatPrice.TaxAmount,
        seatfare: it.SeatPrice.TotalAmount,
      }));
    }
    if (key === 'Premium_Economy') {
      return subject[i].Seats.map((it, i) => ({
        seat_number: '3' + it.Column,
        type: 'window',
        side: i % 2 === 0 ? 'left' : 'right',
        occupied: it.Availability === 'T' ? true : false,
        basicfare: it.SeatPrice.BaseAmount,
        tax: it.SeatPrice.TaxAmount,
        seatfare: it.SeatPrice.TotalAmount,
      }));
    }
    if (key === 'Economy') {
      return subject[i].Seats.map((it, i) => ({
        seat_number: '4' + it.Column,
        type: 'window',
        side: i % 2 === 0 ? 'left' : 'right',
        occupied: it.Availability === 'T' ? true : false,
        basicfare: it.SeatPrice.BaseAmount,
        tax: it.SeatPrice.TaxAmount,
        seatfare: it.SeatPrice.TotalAmount,
      }));
    }
    return []; // Return an empty array if the key is not 'First'
  });

  // Only return the object if seatDetails is not empty
  return seatDetails.length > 0 ? { [ind + 1]: seatDetails } : null;
}); // Remove any null values from the array

// Combine all the resulting objects into one
const finalOutput = Object.assign({}, ...ttt);




const [activeSeat, setActiveSeat] = useState(null);

  const handleFareSelect = (seat) => {
    setActiveSeat(seat.seat_number === activeSeat ? null : seat.seat_number);
    dispatch(setSeat({ seat }));
  };

  // const handleSelectseat = () => {
  //   dispatch(setSeat({seatnumber: }))
  // };

  return (
    <>
      <div className="flex flex-col gap-y-2 ">
        {Object.keys(finalOutput).map((row) => (
          <div key={row} className="flex space-x-7 w-2/3 ">
            {['left', 'center', 'right'].map((side) => (
              <div key={side} className=" flex space-x-2 ">
                {finalOutput[Number(row)]
                  .filter((seat) => seat.side === side)
                  .map((seat) => (
                    <TooltipProvider key={seat.seat_number} delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            // className={`seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded ${
                            //   seat.occupied ? 'bg-gray-300' : ''
                            // }`}
                            // onClick={() => dispatch(setSeat({ seat }))}
                            onClick={() => handleFareSelect(seat)}
                            type="button"
                            key={seat.seat_number}
                            className={` w-10 h-10 seatmap-seat border-b-8 border border-blue-300 text-blue-300 font-bold  rounded ${
                              seat.occupied
                                ? 'border-b-8 border border-gray-300 text-gray-400'
                                : activeSeat === seat.seat_number
                                ? 'bg-blue-300 text-white'
                                : 'hover:bg-blue-300 hover:text-white'
                            }`}
                            style={{
                              backgroundImage: seat.occupied
                                ? `url(${seatImage})`
                                : 'none',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            disabled={seat.occupied}
                          >
                            {seat.seat_number}
                          </button>
                        </TooltipTrigger>

                        {seat.occupied ? (
                          <TooltipContent>
                            <p className="bg-cyan-500 text-white p-3">
                              Sorry, this seat is taken
                            </p>
                          </TooltipContent>
                        ) : (
                          <TooltipContent>
                            <p className="bg-cyan-500 text-white p-3">
                              Seat Number {seat.seat_number}
                            </p>
                            <p className="bg-cyan-500 text-white p-3">
                              Price: £ {seat.seatfare}
                            </p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                {/* </div>*/}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-1/3">
        {activeSeat && (
          <FareDetails
            classname={
              'absolute bg-white right-100 top-10 ml-40  inline-block p-4 border rounded w-60'
            }
          />
        )}
      </div>
    </>
  );
};

export default SeatingArrangement;
