export function capitalizeFirstChar(str: string) {
  if (!str) return str; // Return if the string is empty or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
}
