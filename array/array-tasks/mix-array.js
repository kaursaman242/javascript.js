// Create an array mix = ["car", 34, false, [10, 20, [30, 40]]]


// Access 40 and multiply it by 2.


// Replace it inside the array (so the final nested array contains 80 instead of 40).
const mix = ["car", 34, false, [10, 20, [30, 40]]];
mix.forEach((item) => {
  if (Array.isArray(item)) {
    item.forEach((subItem) => {
        if (Array.isArray(subItem)) {
            subItem.forEach((innermostItem, innermostIndex, innermostArr) => {
                if (innermostItem === 40) {
                    innermostArr[innermostIndex] = innermostItem * 2;
                }
            })
        }
    })
    }
});
console.log(mix);

// const value = mix[3][2][1];
// const newValue = value * 2;
// mix[3][2][1] = newValue;
// console.log(mix);
