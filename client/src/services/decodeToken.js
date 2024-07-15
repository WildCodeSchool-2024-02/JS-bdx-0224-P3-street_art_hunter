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
    return null;
  }
}
