const anim_text_element = document.querySelector('.anim_text');

let anim_frames = get_typing_frames('KermitPurple');

function get_typing_frames(string){
    let list = [];
    for(let i = string.length; i >= 0; i--){
        list.unshift(string.slice(0, i) + '_');
    }
    return list;
}

function anim_text(){
    if(typeof this.counter === 'undefined')
        this.counter = 0;
    else
        this.counter += 1;
    anim_text_element.innerHTML = anim_frames[this.counter];
    if(this.counter < anim_frames.length - 1)
        setTimeout(anim_text, 150);
    else
        delete this.counter;
}
anim_text();
