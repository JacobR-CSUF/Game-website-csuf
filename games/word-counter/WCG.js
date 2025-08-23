function countWords() {
  let sentence = document.getElementById("sentence").value;

  // split on whitespace, remove empty entries
  let words = sentence.trim().split(/\s+/);

  // handle empty input
  let count = sentence.trim() === "" ? 0 : words.length;

  document.getElementById("result").textContent =
    "Your sentence has " + count + " word" + (count !== 1 ? "s" : "") + ".";
}