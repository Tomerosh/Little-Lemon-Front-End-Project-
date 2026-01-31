//import foodImg from "../assets/images/food-tray.jpg"
import { Routes, Route, Link } from "react-router";
import Homepage from "./HomePage"
import BookingPage from "./BookingPage"

export default function Main() {
    return <main>
      <Routes >
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<BookingPage/>}></Route>
        <Route path="/menu" element={<BookingPage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/order" element={<BookingPage/>}></Route>
        <Route path="/login" element={<BookingPage/>}></Route>
      </Routes>
    </main>
}