import { Banner } from "@/types";
import { ucWords } from "./str_functions";

interface KeyedObject {
  [key: string]: any;
}

export function objectToArrayOfObjects(obj: KeyedObject): Array<KeyedObject> {
  const keyValueArray: Array<KeyedObject> = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const keyValueObject: KeyedObject = {};
      keyValueObject[key] = obj[key];
      keyValueArray.push(keyValueObject);
    }
  }

  return keyValueArray;
}

/**
 * Get category from products
 */

export function extraProductCategories(products: { category: string }[]) {
  let uniqueCategory = Array.from(new Set(products.map((p) => p.category)));
  return uniqueCategory.map((category) => {
    let option = {
      label: "",
      value: "",
    };
    return {
      ...option,
      label: ucWords(category),
      value: category,
    };
  });
}

// HTTPSFUNCTIONS

export function getSearchParams(url: string, field = "vendor") {
  let paramsObject: { string: any } | {} = {};
  let params = new URL(url).searchParams;
  field.split(",").forEach((f) => {
    paramsObject = { ...paramsObject, [f]: params.get(f) || "" };
  });

  return Object.values(paramsObject).length > 1
    ? paramsObject
    : params.get(field) || "";
}

// Phone  Validator
export function isValidPhoneNumber(phoneNumber: string): boolean {
  const trimmedPhoneNumber = phoneNumber.trim();
  const kenyanPhoneRegex = /^(\+2547\d{8}|2547\d{8}|07\d{8})$/;
  return kenyanPhoneRegex.test(trimmedPhoneNumber);
}

export function mergeBanners(defBanners: Banner[], fetchedBanners: Banner[]) {
  // Determine how many banners are missing
  const missingBannersCount = Math.max(0, 3 - fetchedBanners.length);

  // Get the missing banners from defBanners
  const missingBanners = defBanners.slice(0, missingBannersCount);

  // Merge fetchedBanners with missingBanners
  const [b1, b2, b3] = [...fetchedBanners, ...missingBanners];

  return [b1, b2, b3];
}
