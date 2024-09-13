import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Meals from './Meals';
import Baggage from './Baggage';
import { selectedtab, setSelectedTab } from '@/redux/flightSlice';
import { useDispatch, useSelector } from 'react-redux';
import FlightSeat from './FlightSeat';
function FlightTabs({flightRowsData}) {
    const dispatch = useDispatch();
    const selectedTab = useSelector(selectedtab);
    console.log('selectedTab == > ', selectedTab);

  return (
    <div className="p-6 bg-white rounded-xl m-5">
        <Tabs value={selectedTab} defaultValue={selectedTab} className="w-full">
            <TabsList>
            <TabsTrigger value="seat" onClick={() => dispatch(setSelectedTab("seat"))}>Seat</TabsTrigger>
            <TabsTrigger value="meal" onClick={() => dispatch(setSelectedTab("meal"))}>Meal</TabsTrigger>
            <TabsTrigger value="bag" onClick={() => dispatch(setSelectedTab("bag"))}>Baggage</TabsTrigger>
            </TabsList>
            <TabsContent value="seat"  className="w-full" >
            <FlightSeat seatData={flightRowsData} />
            </TabsContent>
            <TabsContent value="meal">
            <Meals />
            </TabsContent>
            <TabsContent value="bag">
            <Baggage />
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default FlightTabs