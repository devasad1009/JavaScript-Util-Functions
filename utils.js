export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// compare coordinates to check they are equal or not
export const compareCoordinates = (coord1, coord2, tolerance = 1e-6) => {
  const deltaX = Math.abs(coord1.x - coord2.x);
  const deltaY = Math.abs(coord1.y - coord2.y);
  return deltaX <= tolerance && deltaY <= tolerance;
};

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Format Date to YYYY-MM-DD
export const formatDate = (date) => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

// Remove duplication from array of strings
export const arrayUnique = (arr) => {
  return [...new Set(arr)];
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const parseJSONSafely = (jsonString, defaultValue = {}) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return defaultValue;
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

export const getCurrentDateTime = () => {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
};

export const range = (start, end, step = 1) => {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

// Example usage of range
console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const snakeToCamel = (snakeStr) => {
  return snakeStr.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
};

// Example usage:
console.log(snakeToCamel("hello_world")); // "helloWorld"

export const camelToSnake = (camelStr) => {
  return camelStr.replace(/([A-Z])/g, "_$1").toLowerCase();
};

// Example usage:
console.log(camelToSnake("helloWorld")); // "hello_world"

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Example usage:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

/**
 * Utility function to check if a password contains at least one uppercase letter and one special character
 * @param {string} password - The password to be validated
 * @returns {boolean} - Returns true if the password contains at least one uppercase letter and one special character, otherwise false
 */
export const isValidPassword = (password) => {
  const uppercasePattern = /[A-Z]/;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  const hasUppercase = uppercasePattern.test(password);
  const hasSpecialChar = specialCharPattern.test(password);

  return hasUppercase && hasSpecialChar;
};

// Example usage
const password = "Example@123";

if (isValidPassword(password)) {
  console.log("Password is valid.");
} else {
  console.log(
    "Password must contain at least one uppercase letter and one special character."
  );
}

/**
 * Utility function to generate a random password
 * @param {number} length - The desired length of the generated password
 * @returns {string} - Returns the generated password
 */
export const generateRandomPassword = (length) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

/**
 * Utility function to trim whitespace from a string
 * @param {string} str - The string to be trimmed
 * @returns {string} - Returns the trimmed string
 */
export const trimWhitespace = (str) => {
  return str.trim();
};

 /**
     * Utility function to find the maximum value in an array
     * @param {Array<number>} array - The array of numbers
     * @returns {number} - Returns the maximum value in the array
     */
 export const findMax = (array) => {
  return Math.max(...array);
}
