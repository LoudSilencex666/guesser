export function pixelCutter(arr, amount, position) {

    console.log(arr, amount, position, arr[position])
    for(let i = 0; i < amount; i++) {
        arr[position + i].active = false;
    }
    

}