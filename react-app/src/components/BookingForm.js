import { useState } from "react";

export default function BookingForm({availble}) {
   const dat = new Date().toLocaleDateString().split('/');
   const day = dat[1].length == 1? 0 + dat[1]: dat[1]
   const month = dat[0].length == 1? 0 + dat[0]: dat[0]
   const year = dat[2]
   const today = year + "-" + month + "-" + day
   const [ date, setDate ] = useState(today)
   const [ time, setTime ] = useState("")
   const [ guests, setGuests ] = useState(2)
   const [ occasion, setOccasion ] = useState("")


   function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target[0].value)
   }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input value={date} onChange={e => setDate(e.target.value)} type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select value={time} onChange={e => setTime(e.target.value)} id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
