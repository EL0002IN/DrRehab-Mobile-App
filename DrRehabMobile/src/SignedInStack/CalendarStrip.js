import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from 'react-native';
import moment from 'moment';

export function Calendar() {
    const schedule = [
        {
            date: '17-05-2020',
            dots: [
                {
                    key: 'exericse',
                    color: 'red',
                    selectedDotColor: 'blue'
                }
            ],
        },
    ]

    let customDatesStyles = [];
    let startDate = moment();
    for (let i = 0; i < 6; i++) {
        customDatesStyles.push({
            startDate: startDate.clone().add(2, 'days'), // Single date since no endDate provided
            dateNameStyle: { color: 'white' },
            dateNumberStyle: { color: 'white' },
            // Random color...
            dateContainerStyle: { backgroundColor: `#FF6B86` },
        });
    }

    return (
        <CalendarStrip
            style={{ height: 60 }}
            calendarHeaderStyle='none'
            calendarHeaderPosition='none'
            highlightDateNumberStyle={{ color: '#1B3254' }}
            highlightDateNameStyle={{ color: '#1B3254' }}
            markedDate={schedule}
            dateNumberStyle={{ color: 'grey', fontFamily: 'Montserrat-Regular' }}
            startingDate={moment()}
            customDatesStyles={customDatesStyles}
        />
    )
}