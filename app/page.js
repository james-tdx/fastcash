import { Box, Button, CircularProgress,  } from "@mui/material";
import { IoLocationSharp } from "react-icons/io5";
import { LiaSearchLocationSolid } from "react-icons/lia";

export default function Homepage () {
  return (
    <main>welcome to my Homepage
      <IoLocationSharp className="text-6xl text-blue-500" />
      <LiaSearchLocationSolid className="text-7xl text-red-500" />
      <Button variant="contained">Click me</Button>

      
      
      
    </main>
  )
}