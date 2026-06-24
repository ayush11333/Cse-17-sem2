function calculateSum() {
    let N = parseInt(document.getElementById("num").value);

    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    document.getElementById("result").innerHTML =
        "Sum of numbers from 1 to " + N + " = " + sum;
}
