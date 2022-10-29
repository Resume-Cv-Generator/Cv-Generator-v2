function finishedCV() {

    const inputElements = document.querySelectorAll("form  .inputElements")
    data_ids = []
    a = []

    for (var i = 0; i < inputElements.length; i++) {
        data_ids[i] = (inputElements[i].Id)
        a[i] = inputElements[i].value
    }

    const outputElements2 = document.getElementsByClassName("foutput2");
    f = []
    g = []

    for (var j = 0; j < data_ids.length; j++) {
        if (a.length > 0){

            g = outputElements2[j]
            f = document.createTextNode(a[j]);
            g.insertBefore(f, g.children[j]);

            const data = ['linkedn', 'whatsapp', 'git'];

            lgit = document.getElementsByClassName("lgit2");
            lgit[0].setAttribute('href', git.value);   
           
            console.log('git', git.value)
            console.log('git2', lgit.value)
            console.log('git3', lgit[0].value)

            llinkedn = document.getElementsByClassName("llinkedn2");
            llinkedn[0].setAttribute('href', linkedn.value)

            lwhats = document.getElementsByClassName("lwhats2")
            var whats="https://web.whatsapp.com/send?phone=" + whatsapp.value // pattern +xx xx xxxxx xxxx
            lwhats[0].setAttribute('href', whats);


            }
        }
    }



  function test(){
    const x = document.querySelectorAll('form .inputElements')
    const btn = document.querySelectorAll('button')
       
        x[0].value = 'Don Corleoni'
        btn[5].click()
        x[1].value = 'https://www.google.com'
        x[2].value = '55 99999 9999'
        x[3].value = 'test@mail.com'
        x[4].value = 'https://www.google.com'
        btn[5].click()
        x[5].value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt i'
        btn[5].click()
        x[6].value = 'Lorem ipsum'
        x[7].value = 'Lorem ipsum'
        x[8].value = '2022-11'
        x[9].value = '2022-11'
        x[10].value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q'
        btn[5].click()
        x[11].value = 'Lorem ipsum'
        x[12].value = 'Lorem ipsum'
        btn[5].click()
        x[13].value = 'Lorem ipsum'
        x[14].value = 'Lorem ipsum'
        x[15].value = '2022-11'
        x[16].value = '2022-11'
        x[17].value = 'Lorem ipsum'
        btn[6].click()
        // btn[9].click()

}    