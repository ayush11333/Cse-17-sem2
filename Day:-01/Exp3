const myPromise = new Promise((resolve, reject) => {
    let age = 20;
    if (age > 18) {
        resolve("Eligible for vote.")
    } else {
        reject("Not eligible for vote.")
    }
})
const checkVoteEligibility = async() => {
    const response = await myPromise;
    console.log(response);
}
checkVoteEligibility();
// myPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error.message));
