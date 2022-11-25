var nav = document.getElementById('navigation')
var ul = document.getElementById('list')
var li2 = document.getElementById('li2')
var li3 = document.getElementById('li3')
var li4 = document.getElementById('li4')
var li5 = document.getElementById('li5')
var expandMenu = document.getElementById('expandMenu')
var buttoncloseMenu = document.getElementById('closeMenu')

function openMenu() {
  document.body.classList.add('expandedMenu')
  nav.classList.add('expandedMenu')
  ul.classList.add('expandedMenu')
  li2.classList.add('expandedMenu')
  li3.classList.add('expandedMenu')
  li4.classList.add('expandedMenu')
  li5.classList.add('expandedMenu')
  expandMenu.classList.add('expandedMenu')
  buttoncloseMenu.classList.add('expandedMenu')
}

function closeMenu() {
  document.body.classList.remove('expandedMenu')
  nav.classList.remove('expandedMenu')
  ul.classList.remove('expandedMenu')
  li2.classList.remove('expandedMenu')
  li3.classList.remove('expandedMenu')
  li4.classList.remove('expandedMenu')
  li5.classList.remove('expandedMenu')
  expandMenu.classList.remove('expandedMenu')
  buttoncloseMenu.classList.remove('expandedMenu')
}
