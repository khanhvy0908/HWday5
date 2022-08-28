localStorage.clear();
const user1 = { 
    name: 'Nam',
}
localStorage.setItem('user1', JSON.stringify(user1));
const user2 = { 
    name: 'Phước',
}
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user2', 'Hà')
localStorage.removeItem('user2')
localStorage.clear();

// .........bài 2.........
// .......................
// .......................
const lyric = [1, 2, 3]
let line = 0;

setInterval(function(){
    console.log(lyric[line]);
    ++line;
}, 1000)