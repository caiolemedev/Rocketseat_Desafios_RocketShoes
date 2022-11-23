var nav = document.getElementById('navigation')

function openMenu() {
  document.body.classList.add('expandedMenu')
  nav.classList.add('expandedMenu')
}

function closeMenu() {
  document.body.classList.remove('expandedMenu')
  nav.classList.remove('expandedMenu')
}
