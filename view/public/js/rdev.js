function minimise() {
    var target = this.event.currentTarget
    var orders = target.parentNode
    orders.classList.remove('h-full')
    orders.classList.add('h-10')
}

function maximise() {
    var target = this.event.currentTarget
    var orders = target.parentNode
    orders.classList.remove('h-10')
    orders.classList.add('h-full')
}

function closeit() {
    var target = this.event.currentTarget
    var orders = target.parentNode
    orders.classList.remove('scale-100')
    orders.classList.add('scale-0')
    setTimeout(hidden,400)
    function hidden() {
        orders.classList.add('hidden')
    }
}

// Sidebar

function Collapsed() {
    var SideBar = document.getElementById('mobile-menu')
    if (SideBar.classList.contains('lg:w-80')) {
        SideBar.classList.remove('lg:w-80')
        SideBar.classList.add('lg:w-11')
    } else {
        SideBar.classList.remove('lg:w-11')
        SideBar.classList.add('lg:w-80')
    }
    if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixedsidebar.html' || window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
        if (SideBar.classList.contains('md:w-60')) {
            SideBar.classList.remove('md:w-60')
            SideBar.classList.add('md:w-11')
        } else {
            SideBar.classList.remove('md:w-11')
            SideBar.classList.add('md:w-60')
        }
    } else {
        if (SideBar.classList.contains('md:w-80')) {
            SideBar.classList.remove('md:w-80')
            SideBar.classList.add('md:w-11')
        } else {
            SideBar.classList.remove('md:w-11')
            SideBar.classList.add('md:w-80')
        }
    }
    if (SideBar.classList.contains('w-0')) {
        SideBar.classList.remove('w-0')
        SideBar.classList.add('w-60')
    } else {
        SideBar.classList.remove('w-60')
        SideBar.classList.add('w-0')
    }

    if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixedsidebar.html' || window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
        var bodycontent = document.getElementById('bodycontent')
        var footer = document.getElementById('footer')
        if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
            var navbar = document.getElementById('navbar')
        }
        if (bodycontent.classList.contains('lg:ml-80')) {
            console.log('hilang')
            bodycontent.classList.remove('lg:ml-80')
            bodycontent.classList.add('lg:ml-11')
            footer.classList.remove('lg:ml-80')
            footer.classList.add('lg:ml-11')
            if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
                navbar.classList.remove('lg:mr-80')
                navbar.classList.add('lg:mr-11')
            }

        } else {
            console.log('tampil')
            bodycontent.classList.remove('lg:ml-11')
            bodycontent.classList.add('lg:ml-80')
            footer.classList.remove('lg:ml-11')
            footer.classList.add('lg:ml-80')
            if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
                navbar.classList.remove('lg:mr-11')
                navbar.classList.add('lg:mr-80')
            }
        }
        if (bodycontent.classList.contains('md:ml-11')) {
            bodycontent.classList.remove('md:ml-11')
            bodycontent.classList.add('md:ml-60')
            footer.classList.remove('md:ml-11')
            footer.classList.add('md:ml-60')
            if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
                navbar.classList.remove('md:mr-11')
                navbar.classList.add('md:mr-60')
            }
        } else {
            bodycontent.classList.remove('md:ml-60')
            bodycontent.classList.add('md:ml-11')
            footer.classList.remove('md:ml-60')
            footer.classList.add('md:ml-11')
            if (window.location.href == 'file:///D:/Projek%20Ricko/GIT%20Repo/companyprofile_2_html/view/fixednavsidebar.html') {
                navbar.classList.remove('md:mr-60')
                navbar.classList.add('md:mr-11')
            }
        }

    }
}

function CloseBar() {
    var SideBar = document.getElementById('mobile-menu')
    SideBar.classList.remove('w-60')
    SideBar.classList.add('w-0')
}

// Sidebar

//Sidebar Dropdown

function DropDown() {
    var target = this.event.currentTarget
    var orders = target.parentNode
    if (target.classList.contains('bg-gray-200')) {
        target.classList.remove('bg-gray-200')
    } else {
        target.classList.add('bg-gray-200')
    }
    if (target.children[2].getElementsByTagName('i')[0].classList.contains('rotate-90')) {
        target.children[2].getElementsByTagName('i')[0].classList.remove('rotate-90')
    } else {
        target.children[2].getElementsByTagName('i')[0].classList.add('rotate-90')
    }
    if (orders.children[1].classList.contains('hidden')) {
        orders.children[1].classList.remove('hidden')
    } else {
        orders.children[1].classList.add('hidden')
    }
}

function DropDownItem() {
    var target = this.event.currentTarget.children[0]
    if(target.classList.contains('bg-gray-800')) {
        target.classList.remove('bg-gray-800')
    } else {
        target.classList.add('bg-gray-800')
    }
}

function modals_rd() {
    var modal = document.getElementById('modals_rd')
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden')
    } else {
        modal.classList.add('hidden')
    }
}

function alerts_rd() {
    var alert = document.getElementById('alerts_rd')
    alert.insertAdjacentHTML( 'beforeend', '<div onclick="action_alerts()" class="w-auto md:w-96 my-2 py-2 px-3 text-left text-green-900 bg-green-200 mx-auto border-l-8 border-green-500 cursor-pointer transform transition duration-300">\n' +
        '                      <h1 class="text-sm lg:text-base">Update Success</h1>\n' +
        '                      <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien enim, molestie sit amet odio eget.</p>\n' +
        '                    </div>');
}

function action_alerts() {
    var target = this.event.currentTarget;
    target.classList.add('opacity-0');
    target.classList.add('translate-x-28');
    setTimeout(remove,700)
    function remove() {
        target.remove();
    }
}

function tab_button() {
    var target = this.event.currentTarget
    var data = target.dataset.target
    var content = target.parentNode.parentNode.children[1]

    for(var i = 0; i < target.parentNode.children.length; i++)
    {
        target.parentNode.children[i].classList.remove('bg-blue-500');
        target.parentNode.children[i].classList.remove('text-white');
        target.parentNode.children[i].classList.add('bg-blue-200');
    }

    target.classList.add('bg-blue-500')
    target.classList.add('text-white')

    for(var i = 0; i < content.children.length; i++)
    {
        content.children[i].classList.add('hidden');
    }
    if (content.getElementsByClassName(data)[0].classList.contains('hidden')) {
        content.getElementsByClassName(data)[0].classList.remove('hidden')
    }
}

function action_btn() {
    var target = this.event.currentTarget
    var bar = target.children[1]
    var action_button = document.getElementsByClassName('action_btn')
    console.log(action_button.length)
    for(var i = 0; i < action_button.length; i++)
    {
        action_button[i].classList.add('hidden');
    }
    if (bar.classList.contains('hidden')) {
        bar.classList.remove('hidden')
    } else {
        bar.classList.add('hidden')
    }
}

function menuNotification() {
    
}