const trigger = document.querySelectorAll('nav li');
       trigger.forEach((menu) => menu.addEventListener('click',toggle));

       function toggle(){
        trigger.forEach((item) => item != this ? item.classList.remove('active') :null);
        if (this.classList != 'active') {
            this.classList.toggle('active')
        }
    }