function phoneNumber(str) {
    let regexp=/^([0-9]{2})+(-0)+([1-9]{9})$/;
    return regexp.test(str);

}
console.log(phoneNumber("84-1978489648"));