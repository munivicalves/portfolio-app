import { API_URL } from "../config/api";

export function projectImageSrc(image) {
  if (!image) return "";
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith("/uploads/")) return `${API_URL}${image}`;
  return `${process.env.PUBLIC_URL}/assets/images/${image.replace(/^\/?(assets\/)?(images\/)?/, "")}`;
}
