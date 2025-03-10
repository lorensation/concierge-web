import { setCookie, getCookie, deleteCookie } from "cookies-next"

export const COOKIE_CONSENT = "cookie-consent"
export const ANALYTICS_COOKIE = "analytics-enabled"
export const MARKETING_COOKIE = "marketing-enabled"

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export function setConsentCookie(value) {
  setCookie(COOKIE_CONSENT, value, { maxAge: COOKIE_MAX_AGE })
}

export function getConsentCookie() {
  return getCookie(COOKIE_CONSENT)
}

export function setAnalyticsCookie(value) {
  setCookie(ANALYTICS_COOKIE, value, { maxAge: COOKIE_MAX_AGE })
}

export function getAnalyticsCookie() {
  return getCookie(ANALYTICS_COOKIE)
}

export function setMarketingCookie(value) {
  setCookie(MARKETING_COOKIE, value, { maxAge: COOKIE_MAX_AGE })
}

export function getMarketingCookie() {
  return getCookie(MARKETING_COOKIE)
}

export function deleteAllCookies() {
  deleteCookie(COOKIE_CONSENT)
  deleteCookie(ANALYTICS_COOKIE)
  deleteCookie(MARKETING_COOKIE)
}

export function isCookieConsentGiven() {
  return getConsentCookie() === "true"
}

export function areAnalyticsCookiesAccepted() {
  return isCookieConsentGiven() && getAnalyticsCookie() === "true"
}

export function areMarketingCookiesAccepted() {
  return isCookieConsentGiven() && getMarketingCookie() === "true"
}


