import axios from "axios";

export const api = axios.create({
  baseURL: "https://olinda.bcb.gov.br"
})

const today = new Date()

export const date = {
  day: today.getDate().toString().padStart(2, "0"),
  month: (today.getMonth() + 1).toString().padStart(2, "0"),
  year: today.getFullYear().toString() 
}
  