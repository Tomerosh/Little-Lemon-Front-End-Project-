import { useReducer } from "react";
import BookingForm from "./BookingForm";
import fetchAPI from 

export default function BookingPage() {
    
    function updateTimes(state) {
        return state
    }
    function initializeTimes (date) {
        fetchData(date)
        .then(respones => {
            updateTimes(123)
        })
        let times = [];
        for (let i=17; i<23; i++)  {
            for (let j=0; j<6; j+=3)  {
            //times.push(i.toString() + ':00')
            times.push(`${i}:${j}0`)
            }
        }
        return times

    }
    async function fetchData() {
    fetchAPI (123)
    }
    const availableTimes = useReducer(updateTimes, initializeTimes)
    return <>
    <BookingForm availableTimes={availableTimes}/>
    </>
}