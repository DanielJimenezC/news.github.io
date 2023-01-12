document.addEventListener("DOMContentLoaded", function() {
  main()
});

const navButton = document.getElementById('navButton'),
      navMenu = document.getElementById('navMenu'),
      navClose = document.getElementById('navClose'),
      navBackground = document.getElementById('navBackground'),
      navMenuLink = document.querySelectorAll('.nav-menu-link')

function main() {
  if (navButton) {
    navButton.addEventListener('click', () => {
      navBackground.classList.toggle('nav-container-background-active')
      navMenu.classList.toggle('nav-menu-active')
    })
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navBackground.classList.toggle('nav-container-background-active')
      navMenu.classList.toggle('nav-menu-active')
    })
  }

  navMenuLink.forEach(link => link.addEventListener('click', sidebarLinkAction))
}

function sidebarLinkAction() {
  if (navMenu.classList.contains('nav-menu-active')) {
    navBackground.classList.toggle('nav-container-background-active')
    navMenu.classList.toggle('nav-menu-active')
  }
}
