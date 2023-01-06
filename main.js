let imya = prompt('Введите свое имя')
let birth = +prompt('Введите свой год рождения')
let year = +prompt('Введите нынешний год')

console.log(imya + ', Ваш возраст ' + (year - birth));








function rand(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let kol = +prompt('Введите количество примеров');

 for(let i = 1;i <= kol;i++) {
    let one = rand(50,100)
    let two = rand(10,40)
    let simv = rand(1,5)
    
        if(simv === 1) {
            let primer = +prompt(one + ' + ' + two + ' =')
            let answer = (one + two) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ не верный - ' + primer + ". Правильный ответ - " + one + two + '!';
            console.log(answer);
        }else if(simv === 2) {
            let primer = +prompt(one + ' - ' + two + ' =')
            let answer = (one - two) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ не верный - ' + primer + ". Правильный ответ - " + one - two + '!';
            console.log(answer);
        }else if(simv === 3) {
            let primer = +prompt(one + ' * ' + two + ' =')
            let answer = (one * two) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ не верный - ' + primer + ". Правильный ответ - " + one * two + '!';
            console.log(answer);
        }else {
            let primer = +prompt(one + ' / ' + two + ' =')
            let answer = (one / two) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ не верный - ' + primer + ". Правильный ответ - " + one / two + '!';
            console.log(answer);
            
        }
    
}