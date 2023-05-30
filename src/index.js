const menubar = document.querySelector(".fa-bars");
const menuList = document.querySelector(".fa-xmark");
const navbar = document.querySelector("#navList");
menubar.addEventListener('click',slideDown);
menuList.addEventListener('click',closeMenu)

function slideDown(){
  navbar.classList.add('block','absolute','top-[60px]','right-[60px]','w-[150px]');
  navbar.classList.remove("hidden");
  menubar.classList.add('hidden', 'transition-[0.5s]')
  menuList.classList.remove('hidden','transition-[0.5s]')
  console.log("click")
}
function closeMenu(){
  navbar.classList.add('hidden')
  navbar.classList.remove('block')
  menubar.classList.remove('hidden')
  menuList.classList.add('hidden','transition-[0.5s]')

}

// function slideDown(){
//   console.log("testing...")
// }