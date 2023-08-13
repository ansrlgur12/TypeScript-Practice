// 타입 지정
let fruit :string = 'apple';
let animals :string[] = ['dog', 'cat', 'bird'];
let sports :{name : string}[] = [{name : 'soccer'}, {name : 'baseball'}];

let 이름 :string | number = 'Moon'

// 변수로 타입 지정
type myType = string | number;
let a :myType = 123;

// 함수 파라미터에 타입 지정
function func(x: number){
    return x * 2
}

func(123);

// array에 쓸 수 있는 tuple 타입
type BackNumber = [number, string];

let player:BackNumber = [7, 'son'];