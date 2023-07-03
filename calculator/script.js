window.addEventListener('load', () => {

    let calculator = {
        title: 'Обычный',
        magazine: [],
        memory: [],
        keyBoard: 'simple',
        command: []
    }

    let wrapper = document.getElementById('wrapper')
    wrapper.style.display = 'grid'
    wrapper.style.gridTemplateColumns = '2fr 1fr'

    let title = document.getElementById('navigator_type_mod')
    title.innerHTML = calculator.title

    let navigation = document.getElementsByClassName('navigation')
    let barMenu = document.getElementById('bar_menu_up')
    barMenu.addEventListener('click', (e) => {
        for (let i = 0; i < navigation.length; i += 1) {
            navigation.item(i).classList.toggle("active");
        }
    })
    console.log(navigation)

    let number1 = document.getElementById('number_1')
    let number2 = document.getElementById('number_2')
    let number3 = document.getElementById('number_3')
    let number4 = document.getElementById('number_4')
    let number5 = document.getElementById('number_5')
    let number6 = document.getElementById('number_6')
    let number7 = document.getElementById('number_7')
    let number8 = document.getElementById('number_8')
    let number9 = document.getElementById('number_9')
    let number0 = document.getElementById('number_0')

    let task = document.getElementById('task')
    let number = document.getElementById('number')

    let verTask = ''
    let verNumb = '0'
    let firstNum = false

    task.innerHTML = verTask
    number.innerHTML = verNumb

    function updateNum() {
        number.innerHTML = verNumb
    }
    function updateTask() {
        task.innerHTML = verTask
    }

    number1.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '1'
        updateNum()
    })
    number2.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '2'
        updateNum()

    })
    number3.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '3'
        updateNum()

    })
    number4.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '4'
        updateNum()

    })
    number5.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '5'
        updateNum()

    })
    number6.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '6'
        updateNum()

    })
    number7.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '7'
        updateNum()

    })
    number8.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '8'
        updateNum()

    })
    number9.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '9'
        updateNum()

    })
    number0.addEventListener('click', () => {
        // if(firstNum === false){
        //     firstNum = true
        //     verNumb = ''
        // }
        if (verNumb !== '0') {
            verNumb += '0'
            updateNum()
        }

    })
    let dot = document.getElementById('dot')
    dot.addEventListener('click', () => {
        if (firstNum === false) {
            firstNum = true
            verNumb = ''
        }
        verNumb += '.'
        updateNum()
    })

    let CE = document.getElementById('clear_num_or_all')
    CE.addEventListener('click', () => {
        verNumb = 0
        updateNum()
        console.log(verNumb)
        firstNum = false
    })
    let C = document.getElementById('clear_all')
    C.addEventListener('click', () => {
        verNumb = '0'
        verTask = ''
        console.log(verNumb)
        updateNum()
        updateTask()
        firstNum = false
    })

    let delite = document.getElementById('delite_last')
    delite.addEventListener('click', () => {
        if (verNumb !== '0') {
            firstNum = false
            verNumb = '' + verNumb.slice(0, -1)
        }
        if (verNumb === '') {
            firstNum = false
            verNumb = '0'
        }
        if (verNumb === '0') {
            firstNum = false
            verTask = '' + verTask.slice(0, -1)
            updateTask()
            console.log(verTask)
        }
        updateNum()
    })

    let devide = document.getElementById('operation_devide')
    let minus = document.getElementById('operation_minus')
    let plus = document.getElementById('operation_plus')
    let multi = document.getElementById('operation_multi')

    let operation = ''

    devide.addEventListener('click', () => {
        if (verNumb != '') {
            if (verTask === '') {
                operation = '/'
                verTask = verNumb + '/'
                updateNum()
            } else if (verTask != '') {
                verTask = eval(verTask + verNumb) + '/'
            }
            updateTask()
            firstNum = false
        }
    })
    minus.addEventListener('click', () => {
        if (verNumb != '') {
            if (verTask === '') {
                operation = '-'
                verTask = verNumb + '-'
                updateNum()
            } else if (verTask != '') {
                verTask = eval(verTask + verNumb) + '-'
            }
            updateTask()
            firstNum = false
        }
    })
    plus.addEventListener('click', () => {
        if (verNumb != '') {
            if (verTask === '') {
                operation = 'P'
                verTask = verNumb + '+'
                updateNum()
            } else if (verTask != '') {
                verTask = eval(verTask + verNumb) + '+'
            }
            updateTask()
            firstNum = false
        }
    })
    multi.addEventListener('click', () => {
        if (verNumb != '') {
            if (verTask === '') {
                operation = '*'
                verTask = verNumb + '*'
                updateNum()
            } else if (verTask != '') {
                verTask = eval(verTask + verNumb) + '*'
            }
            updateTask()
            firstNum = false
        }

    })

    let magazineBtn = document.getElementById('magazine')
    let memoryBtn = document.getElementById('memory')

    let store = document.getElementById('store')

    function updateMagazine() {
        store.innerHTML = ''
        for (let i = 0; i < calculator.magazine.length; i++) {
            store.innerHTML += `<p>${calculator.magazine[i]}</p>`
        }
    }
    function updateMemory() {
        store.innerHTML = ''
        for (let i = 0; i < calculator.memory.length; i++) {
            store.innerHTML += `<p>${calculator.memory[i]}</p>`
        }
    }

    magazineBtn.addEventListener('click', () => {
        magazineBtn.classList.toggle('active')
        memoryBtn.classList.value = ''

        updateMagazine()
    })
    memoryBtn.addEventListener('click', () => {
        memoryBtn.classList.toggle('active')
        magazineBtn.classList.value = ''

        updateMemory()
    })

    let equl = document.getElementById('operation_equal')
    equl.addEventListener('click', () => {
        verTask = verTask.slice(0, -1) + operation + verNumb
        verNumb = eval(verTask)
        updateNum()
        updateTask()

        console.log(verTask)
        console.log(verNumb)

        calculator.magazine.push(verTask + '=' + eval(verNumb))
        updateMagazine()
        updateNum()
        console.log(calculator.magazine)
        verTask = verNumb + operation
        updateTask()
    })

    let MC = document.getElementById('MC')
    let MR = document.getElementById('MR')
    let Mp = document.getElementById('Mp')
    let Mm = document.getElementById('Mm')
    let MS = document.getElementById('MS')

    MC.addEventListener('click' , ()=>{
        calculator.memory = []
        updateMemory()
    })
    MR.addEventListener('click' , ()=>{
        if(calculator.memory.length != 0){
            verNumb = calculator.memory[calculator.memory.length - 1]
            updateNum()
        }
    })
    Mp.addEventListener('click' , ()=>{
        if(calculator.memory.length !== 0){
            calculator.memory.push(verNumb*1 + calculator.memory[calculator.memory.length -1 ])
        }else{
            calculator.memory.push(verNumb*1)
            console.log(verNumb)
        }
        console.log(calculator)
        updateMemory()
    })
    Mm.addEventListener('click' , ()=>{
        if(calculator.memory.length !== 0){
            calculator.memory.push(-verNumb + calculator.memory[calculator.memory.length -1 ])
        }else{
            calculator.memory.push(-verNumb)
        }
        console.log(calculator)
        updateMemory()
    })
    MS.addEventListener('click' , ()=>{
        calculator.memory.push(verNumb)
        console.log(calculator.memory)
        updateMemory()
    })

});