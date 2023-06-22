# 자료형

1. 불린 boolean

   1. 비교 연산자 </br>
      | 연산자 | 설명 |
      | :---: | :---: |
      | === | 양쪽이 같다 |
      | !== | 양쪽이 다르다 |
      | > | 왼쪽이 더 크다 |
      | < | 오른쪽이 더 크다 |
      | >= | 왼쪽이 더 크거나 같다 |
      | <= | 오른쪽이 더 크거나 같다 |

      > === 연산자와 !== 연산자는 값과 자료형이 같은지를 비교한다. </br>
      > == 연산자와 != 연산자는 값이 같은지를 비교한다. </br>
      > 단, 자바스크립트에서의 ==, != 연산자는 어떻게 해서라도 값을 같게 만들고 비교하기 때문에 일반적인 생각과 다른 결과를 낸다.

   1. 부정 연산자 </br>

      - 논리 부정 연산자 </br>
        ! 기호를 이용하여 참을 거짓으로, 거짓을 참으로 바꿀 수 있음
      - 논리합/논리곱 연산자 </br>
        | 연산자 | 설명 |
        | :--: | :--: |
        | && | 논리곱 연산자 |
        | \|\| | 논리합 연산자 |

        && 연산자는 양쪽 변의 값이 모두 true일 때 true 출력 </br>
        || 연산자는 양쪽 변의 값 중 하나만 true여도 true 출력

   1. null 병합 연산자 </br>
      값이 확정된 변수(null이나 undefined가 아닌 변수)를 찾을 때 사용 </br>
      물음표를 두번 써서 표시(??)

      ```
      let varA = 10;
      let varB = 20;
      let varC;

      console.log(varA ?? varB);
      console.log(varC ?? varB);

      > 10  // 둘 다 값이 확정되었기 때문에 왼쪽 값을 반환
      > 20  // varC는 undefined를 갖기 때문에 확정된 값인 varB를 반환
      ```

1. 자료형 검사 </br>
   자료형을 확인할 때는 typeof 연산자 사용
   ```
   typeof(자료)
   ```
1. 템플릿 문자열 </br>
   백틱(\`) 기호로 감싸 만듦 </br>
   문자열 내부에 \`${...}` 기호를 사용하여 표현식을 넣으면 문자열 안에서 계산됨

   ```
   console.log(`표현식 273 + 52의 값은 ${273 + 52}입니다`)
   > 표현식 273 + 52의 값은 325입니다
   ```

1. 객체와 참조 </br>
   원시 자료형은 하나의 값을 저장하지만 함수와 배열 같은 객체 자료형은 여러 개의 값을 저장함 </br>
   객체 자료형은 값의 크기가 유동적으로 변하기 때문에 값을 저장한 곳으이 주소만 저장하는 참조 방식을 사용

   1. 참조에 의한 비교 </br>

      - 원시 자료형으로 저장한 변수 비교

        ```JavaScript
        let numA = 1;
        let numB = 1;

        console.log(numA == numB);

        >> true
        ```

        원시 자료형은 값을 변수에 저장할 때 값 그대로 저장

      - 객체 자료형

        ```JavaScript
        let person = {
           name: 'jjPark'
        };

        let man = {
           name: 'jjPark'
        };

        console.log(person === man);

        >> false
        ```

        객체 자료형을 비교할 때는 값이 아닌 참좃값을 비교함 (참조에 의한 비교)

## 자료형 변환

1. 불 자료형으로 변환하기 </br>
   자료 앞에 논리 부정 연산자(!)를 2번 사용하여 불 자료형으로 변환할 수 있음

# 배열 Array

1. 배열 속성과 메소드
   | 속성 | 기능 |
   |:----:| ----- |
   | length | 객체의 개수를 수치로 나타냄 |
   | constructor | 객체의 생성자를 참조 |
   | prototype | 속성과 메소드를 추가하여 배열 선언을 확장 |

   |  메소드   | 기능                                                           |
   | :-------: | -------------------------------------------------------------- |
   | concat()  | 하나의 배열에 다른 배열 요소를 결합                            |
   |  join()   | 문자열로 배열의 요소를 분리하여 1개의 데이터로 결합            |
   |   pop()   | 배열의 마지막 요소 삭제                                        |
   |  push()   | 마지막 인덱스에 다른 요소 추가                                 |
   |  shift()  | 배열의 첫 요소 제거                                            |
   | unshift() | 배열의 처음에 요소 추가                                        |
   | splice()  | 이전 배열 요소를 삭제하고 새로운 내용물 추가, 삭제된 요소 반환 |
   |  slice()  | 배열의 일부분을 선택하여 새로운 배열 생성                      |
   |  sort()   | 숫자 또는 문자열을 순서대로 정렬                               |
   | reverse() | 배열의 요소를 역순으로 나타냄                                  |

1. 배열 요소 제거 </br>

   1. 인덱스로 요소 제거 </br>
      ```
      배열.splice(인덱스, 제거할 요소의 개수)
      ```
   1. 값으로 요소 제거 </br>
      배열 내부에서 특정 값의 위치를 찾는 indexOf() 메소드를 이용하여 인덱스 추출 후 splice() 메소드 사용
      ```
      const index = 배열.indexOf(요소)
      배열.splice(index, 제거할 요소의 개수)
      ```
      > 배열 내에서 특정 값을 가진 요소를 모두 제거할 때는 filter() 메소드를 사용해야 함

1. 배열의 특정 위치에 요소 추가 </br>
   splice() 메소드의 2번째 매개변수에 0을 입력하면 배열 내 요소를 제거하지 않음

   ```
   배열.splice(인덱스, 0, 요소)
   ```

1. 자료의 비파괴와 파괴

   - 비파괴적 처리 : 처리 후에 원본 내용이 변경되지 않음
   - 파괴적 처리 : 처리 후에 원본 내용이 변경됨 </br>

   파괴적 처리는 메로리를 절약할 수 있지만, 원본이 사라지기 때문에 위험할 수 있음 (메모리가 부족했던 과거에 많이 사용) </br>
   현대에는 자료보호를 위해 대부분 비파괴적 처리를 함

# 반복문

1. for in 반복문 </br>
   for in 반복문의 반복변수에는 요소의 인덱스가 들어오며, 이를 활용하여 배열 요소에 접근

   ```
   for (const 반복변수 in 배열|객체) {
      문장
   }
   ```

1. for of 반복문 </br>
   for in 반복문과는 달리 for of 반복문의 반복변수에는 요소에 값이 들어옴 -> 요소의 값을 반복할 때 안정적으로 사용 가능

   ```
   for (const 반복변수 of 배열|객체) {
      문장
   }
   ```

1. for 반복문 </br>
   다른 반복문과 달리 let 키워드를 이용해 반복변수 선언

   ```
   for (let i = 0; i < 반복횟수; i++) {

   }
   ```

1. while 반복문 </br>
   불 표현식이 true면 계속해서 문장 실행 </br>
   자바스크립트는 무한 반복을 사용하면 페이지 전체가 먹통이 되기 때문에 break 구문 등을 활용해서 반드시 무한 반복을 벗어나도록 구현해야 함
   ```
   while (불 표현식) {
      문장
   }
   ```
   > - 횟수를 기준으로 반복 시 -> for 반복문 사용 </br>
   > - '특정 시간동안 어떤 데이터를 받을 때까지', '배열에서 어떠한 요소가 완전히 제거될 때까지' 등 조건을 기반으로 반복문 사용 시 -> while 반복문 사용

# 구조 분해 할당 Destructuring Assignment

배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담을 때 사용 <br>

1. 배열의 구조분해 할당

   ```JavaScript
   let arr = [1, 2, 3]

   let one = arr[0]
   let two = arr[1]
   let three = arr[2]

   console.log(one, two, three)

   // 더 간결한 코드
   let arr = [1, 2, 3]
   let [one, two, three] = arr

   console.log(one, two, three)

   >> 1 2 3
   ```

   배열의 길이와 할당할 변수의 개수가 일치하지 않아도 오류가 발생하지 않음 <br>

   - 배열의 길이 > 할당할 변수의 개수<br>
     변수의 개수만큼만 순서대로 할당 <br>

   - 배열의 길이 < 할당할 변수의 개수 <br>
     배열의 길이를 넘는 변수에 undefined 할당

1. 객체의 구조 분해 할당

   ```JavaScript
   let person = {
      name: 'jjPark',
      age: 25,
      location: '제주도'
   }

   let { name, age, locaton } = person

   console.log(name, age, location)
   ```

   객체를 구조 분해 할당 시에는 데이터 저장 순서가 아니라 key를 기준으로 value를 할당함

1. 함수의 매개변수가 객체일 때 구조 분해 할당

   ```JavaScript
   function func({ name: n, age: a, location: l }) {
      console.log(n, a, l)
   }

   let person = {
      name: 'jjPark',
      age: 25,
      location: '제주도'
   }

   func(person)

   >> jjPark 25 제주도
   ```

   객체의 구조 분해 할당 과정에서 매개변수의 이름을 바꿀 수 있음

# 함수 Function

1. 나머지 매개변수

   - 가변 매개변수 함수 : 호출할 때 매개변수의 개수가 고정적이지 않은 함수 </br>

   가변 매개변수를 구현할 때는 나머지 매개변수 문법을 사용 </br>
   함수의 매개변수 앞에 마침표 3개(...)를 입력하면 매개변수들이 배열로 들어옴

   ```
   function 함수이름(...매개변수) {}
   ```

1. 나머지 매개변수와 일반 매개변수 조합 </br>

   ```
   function 함수이름(매개변수, 매개변수, ...나머지 매개변수) {}
   ```

   일반 매개변수의 개수만큼 매개변수로 들어가고 나머지는 배열 형태로 들어감 </br>
   [매개변수의 자료형에 따라 다르게 작동하는 min() 함수](./ex1/parameter.html)

1. 전개 연산자 </br>
   배열을 전개하여 함수의 매개변수로 전달해주는 연산자 </br>
   배열 앞에 마침표 3개(...)를 붙이는 형태로 사용 </br>
   [전개 연산자의 활용](./ex1/spread.html)

1. 콜백 함수 </br>
   매개변수로 전달되는 함수 </br>

   - 콜백 함수를 활용하는 함수 </br>
     forEach() : 배열 내부의 요소를 사용해서 콜백 함수 호출 </br>
     map() : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만듦 </br>
     filter() : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만듦

1. 화살표 함수 </br>
   단순한 형태의 콜백 함수를 쉽게 입력하는 방법 </br>
   function 키워드 대신 화살표(=>)를 사용 </br>

   ```
   (매개변수) => {

   }

   <!-- 간단한 사용방법 -->
   (매개변수) => 리턴값
   ```

   ```
   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   array.map((value) => value * value)
   > (10) [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
   ```

   [화살표 함수 메소드 체이닝](./ex1/arrow.html)

# 단락 평가

논리 연산에서 첫번째 피연산자의 값만으로 해당 식의 결과가 확실할 때, 두번째 값은 평가하지 않는 것

1. AND 단락 평가 </br>
   && 연산자는 피연산자의 값이 하나라도 거짓이면 거짓을 반환하기 때문에 첫번째 피연산자 값이 false면 두번째 피연산자는 계산하지 않음 </br>

   ```
   function calcA() {
      console.log('a');
      return false;
   }

   function calcB() {
      console.log('b');
      return true;
   }

   console.log(calcA() && calcB());

   > a
   > false
   // 첫번째 피연산자 함수의 값이 거짓이므로 calcB()는 호출되지 않음
   ```

   1. AND 단락 평가를 이용한 오류 방지 </br>
      단락 평가는 불리언이 아닌 truthy & falsy한 값을 사용할 때도 적용할 수 있음

      ```
      function getName(person) {
         return person && person.name;
         // person의 값이 falsy할 경우 person을 그대로 출력하기 때문에 오류 발생 X
      }

      let person = {name : "Park JJ"};
      let name1 = getName(undefined);
      let name2 = getName(null);
      let name3 = getName(person);

      console.log(name1);
      console.log(name2);
      console.log(name3);

      > undefined
      > null
      > Park JJ
      ```

1. OR 단락 평가 </br>
   || 연산자는 피연산자의 값이 하나라도 참이면 참을 반환하기 때문에 첫번째 피연산자의 값이 true면 두번째 피연산자 값은 계산하지 않음 </br>

   1. OR 단락 평가와 null 병합 연산자 </br>
      || 연산자는 truthy와 falsy로 동작 </br>
      ?? 연산자는 null이나 undefined가 아닌 확정된 피연산자를 찾음

      ```
      const varA = 0;
      const varB = "Park JJ" ;

      const resultA = varA || varB;
      const resultB = varA ?? varB;

      console.log(resultA);
      console.log(resultB);

      > Park JJ
      // falsy || truthy 이기 때문에 varB 반환
      > 0
      // 첫번째로 확정된 값이 varA이기 때문에 varA 반환
      ```

# 스프레드 연산자와 rest 매개변수

1. 스프레드 연산자 (전개 연산자)
   배열, 문자열, 객체 등과 같이 반복 가능한 객체의 값을 개별 요소로 분리할 수 있음

   ```JavaScript
   let arrA = [1, 2, 3]
   let arrB = [...arrA, 4, 5, 6]

   console.log(arrB)

   >> [1, 2, 3, 4, 5, 6]

   let objA = {
      a: 1,
      b: 2
   }

   let objB = {
      ...objA,
      c: 3,
      d: 4
   }

   console.log(objB)

   >> {a: 1, b: 2, c: 3, d: 4}
   ```

   1. 스프레드 연산자와 함수 <br>

      ```JavaScript
      function func(a, b, c) {
         console.log(a, b, c)
      }

      let arr = [1, 2, 3]
      func(...arr)

      >> 1, 2, 3
      ```

1. rest 매개변수 (나머지 매개변수) <br>
   스프레드 연산자처럼 기호 '...'으로 표기 <br>
   개별 요소를 배열로 묶음 <br>
   rest 매개변수와 다른 매개변수를 함께 사용하는 경우, rest 매개변수를 마지막으로 작성해야 함 <br>
   먼저 선언한 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장

   ```JavaScript
   function func(param, ...rest) {
      console.log(param)
      console.log(rest)
   }

   func(1, 2, 3, 4)

   >> 1
   >> [2, 3, 4]
   ```

# 비동기 처리

- 동기 Syncronous <br>
  순차적으로 코드를 실행하는 것
- 비동기 Asyncronous <br>
  특정 작업을 다른 작업과 관계 없이 독립적으로 동작하게 만드는 것

  ```JavaScript
  setTimeout(() => {
     console.log('1번!')
  }, 3000)

  console.log('2번!')

  >> 2번!
  >> 1번!
  ```

  함수 setTimeout은 두 번째 인수로 전달된 시간(밀리초)만큼 기다린 다음, 첫 번째 인수로 전달된 콜백 함수를 실행

  ```JavaScript
  function orderCoffee(coffee, time) {
     setTimeout(() => {
        console.log(`${coffee} is ready`)
     }, time)
  }

  orderCoffee('hot coffee', 4000)
  orderCoffee('tea', 2000)
  orderCoffee('ice coffee', 3000)

  >> tea is ready
  >> ice coffee is ready
  >> hot coffee is ready
  ```
