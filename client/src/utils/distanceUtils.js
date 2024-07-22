export function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;

  const R = 6371e3;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export function findNearbyMatches(comparedArts, pendingArt, radius = 80) {
  return comparedArts.filter((art) => {
    const distance = haversineDistance(
      art.latitude,
      art.longitude,
      pendingArt.latitude,
      pendingArt.longitude
    );
    return (
      art.id !== pendingArt.id &&
      distance <= radius &&
      art.status === "accepted"
    );
  });
}
