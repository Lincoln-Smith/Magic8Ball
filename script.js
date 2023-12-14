function shakeMagic8Ball() {

const question = prompt ('Ask the Magic 8-Ball a question!')

if (question === null){
    document.getElementById('response-text').innerText = 'why must you torment me like this?'
    document.getElementById('response-text').classList = 'text-danger'
    document.getElementById('response-image').src = '#imgs/sinner'
}

if (!question.trim()){
alert('please i beg')
return
}

}