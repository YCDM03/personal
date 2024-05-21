class FixedArray {
  #maxLength;
  #arrayLength;
  #array;

  // 필요한변수 추가 가능

  // #arrayLength와 #array를 알맞게 초기화
  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
  // #array초기화 시 각요소의 값은 undefined
  constructor(maxLength) {
    this.#arrayLength = 0;
    this.#maxLength = maxLength;
    this.#array = [];
    for (let i = 0; i < maxLength; i++) {
      this.#array[i] = undefined;
    }
  }

  //////////////////////////////
  //////      LEVEL 1      /////
  //////////////////////////////
  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
  push(element) {
    if (this.#maxLength > this.#arrayLength) {
      this.#array[this.#arrayLength] = element;
      this.#arrayLength += 1;
    }
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    if (this.#arrayLength > 0) {
      const pop = this.#array[this.#arrayLength - 1];
      this.#array[this.#arrayLength - 1] = undefined;
      this.#arrayLength -= 1;
      return pop;
    }
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#arrayLength;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let str = "";
    for (let i = 0; i < this.#arrayLength; i++) {
      i === 0 ? (str += `${this.#array[i]}`) : (str += `,${this.#array[i]}`);
    }
    return `[${str}]`;
  }
}
