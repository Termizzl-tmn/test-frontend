import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม"
];

export const dateThaiMMMMForm = (date: Date) => {
  if (!date || date === null) {
    return null;
  }

  const newDate = new Date(date);
  const year = newDate.getFullYear() + 543;
  let mm = newDate.getMonth(); // month is zero-based
  let dd = newDate.getDate();
  let day = String(dd)

  if (dd < 10) day = "0" + dd;

  return `${day} ${months[mm]} ${year}`
};

export const dateThaiMMMMFormWithOutDate = (date: Date) => {
  if (!date || date === null) {
    return null;
  }

  const newDate = new Date(date);
  const year = newDate.getFullYear() + 543;
  let mm = newDate.getMonth(); // month is zero-based
  let dd = newDate.getDate();
  let day = String(dd)

  if (dd < 10) day = "0" + dd;

  return `${months[mm]} ${year}`
};
