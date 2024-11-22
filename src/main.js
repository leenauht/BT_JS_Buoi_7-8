/**
 * Cho người dùng nhập vào các số nguyên và lưu trữ trong mảng và xuất ra mảng đó
 * - Đầu vào: mảng arr = []
 * - Xử lý: - dom lấy giá trị nhập vào n
 *          - if (n === "") true => alert("Không được để trống ô input!")
 *          - if (Number.isInteger(n * 1))
 *              true => arr.push(n * 1) => xuất ra màn hình mảng arr
 *          - false => alert("Số bạn nhập không phải là số nguyên!")
 *
 * - Đầu ra: Xuất ra màn hình mảng arr
 */
let arr = [];

function addNumber() {
  const n = document.getElementById("inputInteger").value;
  if (n === "") {
    alert("Không được để trống ô input!");
  } else if (Number.isInteger(n * 1)) {
    arr.push(n * 1);
    document.getElementById("txtArray").innerHTML = arr.join(" ; ");
  } else {
    alert("Số bạn nhập không phải là số nguyên!");
  }
}

/**
 * Tổng các số dương trong mảng
 *
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let sum = 0;
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + if (arr[i] > 0) => true
 *            => sum += arr[i]
 *
 * - Đầu ra: Xuất ra màn hình sum
 */
function positiveSum() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("txtSum").innerHTML = sum;
}

/**
 * Đếm có bao nhiêu số dương trong mảng
 *
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let count = 0
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + if (arr[i] > 0) => true
 *          => count++
 *
 * - Đầu ra: Xuất ra màn hình count
 */

function countPositiveNumbers() {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("txtCount").innerHTML = count;
}

/**m số nhỏ nhất trong mảng
 * Tì
 *
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let min = arr[0]
 *        + duyệt mảng arr: for (let i = 1; i < arr.length; i++)
 *        + if (arr[i] < min) => true
 *           => min = arr[i]
 *
 * - Đầu ra: Xuất ra màn hình số nhỏ nhất min
 */

function minimumNumber() {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById("txtMinNumber").innerHTML = min;
}

/**
 * Tìm số dương nhỏ nhất trong mảng
 *
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let arrPosivite = []
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + if (arr[i] > 0) => true
 *          => arrPosivite.push(arr[i])
 *        + let min = arrPosivite[0]
 *        + duyệt mảng arrPosivite: for (let i = 0; i < arrPosivite.length; i++)
 *        + if (arrPosivite[i] < min) => true
 *          => min = arrPosivite[i]
 *
 * - Đầu ra: Xuất ra màn hình min
 */

function smallestPosiviteNumber() {
  // let arrPosivite = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     arrPosivite.push(arr[i]);
  //   }
  // }
  // if (arrPosivite.length === 0) {
  //   return (document.getElementById("txtMinPosivite").innerHTML = "Null");
  // }
  // let min = arrPosivite[0];
  // for (let i = 1; i < arrPosivite.length; i++) {
  //   if (arrPosivite[i] < min) {
  //     min = arrPosivite[i];
  //   }
  // }

  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  const min = smallest === Infinity ? "Null" : smallest;

  document.getElementById("txtMinPosivite").innerHTML = min;
}

/**
 * Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let arrEvenNumber = []
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + if (arr[i] % 2 === 0) => true
 *          => arrEvenNumber.push(arr[i])
 *        + if (arrEvenNumber.length === 0) => true
 *          => xuất ra màn hình giá trị là -1
 *          false => xuất ra màn hình giá trị cuối cùng của mảng arrEvenNumber = arrEvenNumber[arrEvenNumber.length - 1]
 *
 * Đầu ra: Xuất ra màn hình kết quả
 */

function lastEvenNumber() {
  let arrEvenNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrEvenNumber.push(arr[i]);
    }
  }
  if (arrEvenNumber.length === 0) {
    document.getElementById("txtLastEven").innerHTML = -1;
    return;
  }
  document.getElementById("txtLastEven").innerHTML = `${
    arrEvenNumber[arrEvenNumber.length - 1]
  }`;
}

/**
 * Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 * - Đầu vào:
 *        + Mảng arr
 *        + Vị trí thứ nhất index_1
 *        + Vị trí thứ hai index_2
 * - Xử lý:
 *        + if (index_1 < 0 || index_1 > arr.length - 1 || index_2 < 0 || index_2 > arr.length - 1)
 *          true => Xuất ra màn hình thông báo không có vị trí bạn nhập trong mảng
 *          false => - const temp = arr[index_1]
 *                   - arr[index_1] = arr[index_2]
 *                   - arr[index_2] = temp
 *        + duyệt mảng arr đã đổi vị trí: for (let i = 0; i < arr.length; i++)
 *
 * - Đầu ra: Xuất ra màn hình mảng arr mới đã thay đổi vị trí
 */

function swapPositions() {
  const index_1 = document.getElementById("num_1").value * 1;
  const index_2 = document.getElementById("num_2").value * 1;

  if (
    index_1 < 0 ||
    index_1 > arr.length - 1 ||
    index_2 < 0 ||
    index_2 > arr.length - 1
  ) {
    alert("Không có vị trí bạn nhập trong mảng!");
    return;
  }

  const temp = arr[index_1];
  arr[index_1] = arr[index_2];
  arr[index_2] = temp;

  document.getElementById("txtChange").innerHTML = arr.join(" ; ");
}

/**
 * Sắp xếp mảng theo thứ tự tăng dần
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + duyệt mảng arr: for (let i = 0; i < arr.lenght - 1; i++)
 *        + duyệt mảng arr lồng trong vòng lặp for bên trên
 *          for (let j = i + 1; j < arr.length; j++)
 *            if (arr[i] > arr[j])
 *              true => - const temp = arr[i]
 *                      - arr[i] = arr[j]
 *                      - arr[j] = temp
 *
 * - Đầu ra: Xuất ra màn hình mảng có giá trị tăng dần
 */

function sortInAscendingOrder() {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  document.getElementById("txtIncrease").innerHTML = arr.join(" ; ");
}

/**
 * Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + Hàm kiểm tra số nguyên tố isPrime(num)
 *          - if(num <= 1) true => return false
 *          - duyệt qua vòng lặp for (let i = 2; i <= Math.sqrt(num); i++)
 *            * if (num % i === 0) true => return false
 *            false => return true
 *
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + let firstPrime = isPrime(arr[i])
 *        + if (firstPrime) true => Xuất ra nó là số nguyên tố và dùng lệnh break để dừng vòng lặp
 *                          false => Xuất ra màn hình giá trị -1
 *
 * - Đầu ra: Xuất ra màn hình kết quả
 */

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeNumber() {
  for (let i = 0; i < arr.length; i++) {
    let firstPrime = isPrime(arr[i]);
    if (firstPrime) {
      document.getElementById("pTxt").innerHTML = "Số nguyên tố đầu tiên:";
      document.getElementById("txtPrime").innerHTML = arr[i];
      break;
    } else {
      document.getElementById("pTxt").innerHTML = "Không có số nguyên tố nào:";
      document.getElementById("txtPrime").innerHTML = -1;
    }
  }
}

/**
 * Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 * - Đầu vào: Mảng arrFloat
 * - Xử lý:
 *        + dom lấy giá trị nhập vào n
 *        + arrFloat.push(n*1)
 *
 *        + let count = 0
 *        + duyệt mảng arrFloat: for (let i = 0; i < arrFloat.length; i++)
 *        + if (Number.isInteger(arrFloat[i]))
 *            true => count++
 *
 * - Đầu ra: Xuất ra màn hình số lượng sô nguyên là count
 */

let arrFloat = [];
function getFloat() {
  const n = document.getElementById("inputFloat").value;
  if (n === "") {
    alert("Không được để trống ô input!");
  } else {
    arrFloat.push(n * 1);
    document.getElementById("txtArrayFloat").innerHTML = arrFloat.join(" ; ");
  }
}

function countInteger() {
  let count = 0;
  for (let i = 0; i < arrFloat.length; i++) {
    if (Number.isInteger(arrFloat[i])) {
      count++;
    }
  }
  document.getElementById("txtInteger").innerHTML = count;
}

/**
 * So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
 * - Đầu vào: Mảng arr
 * - Xử lý:
 *        + let positiveNum = 0
 *        + let negativeNum = 0
 *        + duyệt mảng arr: for (let i = 0; i < arr.length; i++)
 *        + if (arr[i] > 0) true => positiveNum++
 *          else if (arr[i] < 0) true => negativeNum++
 *        + let result = ""
 *        + if (positiveNum > negativeNum) true => result = "số dương > số âm"
 *        + else if (positiveNum < negativeNum) true => result = "số dương < số âm"
 *            false => result = "số dương = số âm"
 *
 * - Đầu ra: Xuất ra màn hình kết quả so sánh
 */

function compareNumber() {
  let positiveNum = 0;
  let negativeNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNum++;
    } else if (arr[i] < 0) {
      negativeNum++;
    }
  }
  let result =
    positiveNum > negativeNum
      ? "Số dương > Số âm"
      : positiveNum < negativeNum
      ? "Số dương < Số âm"
      : "Số dương = Số âm";

  document.getElementById("txtCompare").innerHTML = result;
}
