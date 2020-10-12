start.onclick= e => {
    picture.hidden = 0;
    start.hidden = 1;
    result.textContent = '';

    setTimeout(() => {
        var res = Math.random();
        result.textContent = res >.5 ? 'Орёл' : 'Решка';
        picture.hidden = 1;
        start.hidden = 0;
    }, 2000);
}