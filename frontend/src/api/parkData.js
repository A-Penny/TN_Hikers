export const getParkData = async () => {
    const response = await fetch(`https://services5.arcgis.com/bPacKTm9cauMXVfn/arcgis/rest/services/TN_State_Parks_Points/FeatureServer/0/query?where=1%3D1&outFields=PARK_NAME,TSP_UID,AM_FIRST_NAME,AM_LAST_NAME,AM_TITLE,AM_PHONE,PM_FIRST_NAME,PM_LAST_NAME,PM_TITLE,PM_PHONE&outSR=4326&f=json`);
    const parks = await response.json();
  
    return parks;
  };