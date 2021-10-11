function location(setState) {
  if (!navigator.geolocation) {
    return null;
  }
  const success = (pos) => {
    const crd = pos.coords;
    setState([crd.latitude, crd.longitude]);
    return;
  };
  const error = (err) => {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  return new Promise((resolve) => {
    resolve(navigator.geolocation.getCurrentPosition(success, error));
  });
}

export default location;
