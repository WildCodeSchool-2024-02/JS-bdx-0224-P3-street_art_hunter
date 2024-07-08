import { jwtDecode } from "jwt-decode";

export default function decodeTokenAndExtractRole(token) {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return {
      id: decoded.sub,
      role: decoded.role,
    };
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}
