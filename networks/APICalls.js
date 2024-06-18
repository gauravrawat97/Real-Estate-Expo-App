export const unlockHouse = (houseId) => {
  return new Promise(function (resolve, reject) {
    if (houseId != 1) {
      setTimeout(() => resolve("House Unlocked successfully"), 5000);
    } else setTimeout(() => reject("Unable to unlock house"), 5000);
  });
};
