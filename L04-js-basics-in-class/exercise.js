console.log("JS connected ✅");


/*Exercise 9 — Grade*/
const scoreInput = document.getElementById("scoreInput");
const btnGrade = document.getElementById("btnGrade");
const gradeOut = document.getElementById("gradeOut");

btnGrade.onclick = function () {
  const score = Number(scoreInput.value);

  if (Number.isNaN(score)) {
    gradeOut.innerText = "Grade: Please enter a numeric score.";
    return;
  }

  if (score < 0 || score > 100) {
    gradeOut.innerText = "Grade: Score must be between 0 and 100.";
    return;
  }

  let grade;
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";

  gradeOut.innerText = `Grade: ${grade}`;
};

/* Exercise 10 — Even / Odd*/
const numEvenOdd = document.getElementById("numEvenOdd");
const btnEvenOdd = document.getElementById("btnEvenOdd");
const evenOddOut = document.getElementById("evenOddOut");

function isEven(n) {
  // handles integers and floats (float % 2 works, but we treat non-integers as "not whole" and still evaluate parity on the numeric result)
  if (Number.isNaN(n)) return null;
  return n % 2 === 0;
}

btnEvenOdd.onclick = function () {
  const n = Number(numEvenOdd.value);

  if (Number.isNaN(n)) {
    evenOddOut.innerText = "Result: Please enter a number.";
    return;
  }

  const even = isEven(n);
  if (even === null) {
    evenOddOut.innerText = "Result: Invalid input.";
  } else {
    evenOddOut.innerText = `Result: ${even ? "EVEN" : "ODD"}`;
  }
};

/*Exercise 11 — Countdown*/
const countdownInput = document.getElementById("countdownInput");
const btnCountdown = document.getElementById("btnCountdown");
const countdownOut = document.getElementById("countdownOut");

btnCountdown.onclick = function () {
  const start = Number(countdownInput.value);

  if (Number.isNaN(start) || !Number.isFinite(start)) {
    countdownOut.innerText = "Please enter a valid start number.";
    return;
  }

  // Use integer part if user enters float
  let s = Math.floor(start);

  if (s < 0) {
    countdownOut.innerText = "Start should be 0 or a positive integer.";
    return;
  }

  const parts = [];
  for (let i = s; i >= 0; i--) {
    parts.push(i.toString());
  }

  countdownOut.innerText = parts.join(" → ");
};

/*Exercise 12 — Sum 1..N */
const nSumInput = document.getElementById("nSumInput");
const btnSumN = document.getElementById("btnSumN");
const sumNOut = document.getElementById("sumNOut");

function sumToN(n) {
  if (Number.isNaN(n) || !Number.isFinite(n)) return null;
  const m = Math.floor(n);
  if (m < 1) return 0;

  let sum = 0;
  for (let i = 1; i <= m; i++) {
    sum += i;
  }
  return sum;
}

btnSumN.onclick = function () {
  const n = Number(nSumInput.value);
  const result = sumToN(n);

  if (result === null) {
    sumNOut.innerText = "Sum: Please enter a valid number.";
  } else {
    sumNOut.innerText = `Sum: ${result}`;
  }
};

/* Exercise 13 — Repeat Text N Times */
const repeatText = document.getElementById("repeatText");
const repeatCount = document.getElementById("repeatCount");
const btnRepeat = document.getElementById("btnRepeat");
const repeatOut = document.getElementById("repeatOut");

btnRepeat.onclick = function () {
  const text = repeatText.value;
  const times = Number(repeatCount.value);

  if (text === "") {
    repeatOut.innerText = "Please enter text to repeat.";
    return;
  }
  if (Number.isNaN(times) || !Number.isFinite(times) || times <= 0) {
    repeatOut.innerText = "Please enter a positive number of times.";
    return;
  }

  const t = Math.floor(times);
  let result = "";
  for (let i = 1; i <= t; i++) {
    result += text;
    if (i < t) result += " "; // separator between repeats
  }

  repeatOut.innerText = result;
};

/*Exercise 14 — Simple Login*/
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const btnLogin = document.getElementById("btnLogin");
const loginOut = document.getElementById("loginOut");

// Students can change these:
const correctUser = "student";
const correctPass = "1234";

btnLogin.onclick = function () {
  const u = loginUser.value.trim();
  const p = loginPass.value.trim();

  if (u === "" || p === "") {
    loginOut.innerText = "Status: Please enter username and password.";
    loginOut.style.color = "crimson";
    return;
  }

  if (u === correctUser && p === correctPass) {
    loginOut.innerText = `Status: Welcome ${u} ✅`;
    loginOut.style.color = "green";
  } else {
    loginOut.innerText = "Status: Wrong username or password ❌";
    loginOut.style.color = "crimson";
  }
};

/* Exercise 15 — Min / Max of 3*/
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const zInput = document.getElementById("z");
const btnMinMax = document.getElementById("btnMinMax");
const minMaxOut = document.getElementById("minMaxOut");

function min3(a, b, c) {
  let m = a;
  if (b < m) m = b;
  if (c < m) m = c;
  return m;
}

function max3(a, b, c) {
  let m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  return m;
}

btnMinMax.onclick = function () {
  const a = Number(xInput.value);
  const b = Number(yInput.value);
  const c = Number(zInput.value);

  if ([a, b, c].some(v => Number.isNaN(v))) {
    minMaxOut.innerText = "Please enter three numbers.";
    return;
  }

  const mn = min3(a, b, c);
  const mx = max3(a, b, c);

  minMaxOut.innerText = `Min: ${mn} | Max: ${mx}`;
};

/*Exercise 16 — Multiplication Table */
const tableN = document.getElementById("tableN");
const btnTable = document.getElementById("btnTable");
const tableOut = document.getElementById("tableOut");

function makeTable(n) {
  if (Number.isNaN(n) || !Number.isFinite(n)) return "Invalid number.";
  const m = Math.floor(n);
  const parts = [];
  for (let i = 1; i <= 10; i++) {
    parts.push(`${m} × ${i} = ${m * i}`);
  }
  return parts.join(" | ");
}

btnTable.onclick = function () {
  const n = Number(tableN.value);
  tableOut.innerText = makeTable(n);
};
